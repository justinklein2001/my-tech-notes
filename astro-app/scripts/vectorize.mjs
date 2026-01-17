import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import * as lancedb from "@lancedb/lancedb";
import { glob } from "glob";
import fs from "fs";
import matter from "gray-matter";
import pdf from "pdf-parse";
import path from "path";

// --- CONFIG ---
const REGION = "us-east-1";
const DB_OUTPUT_DIR = "lancedb";

// INPUT FILES (Relative to astro-app root)
const CONTENT_DIR = "src/content"; 
const LEETCODE_FILE = "raw/private/leetcode.json";
const RESUME_FILE = "raw/private/resume.pdf";

const bedrock = new BedrockRuntimeClient({ region: REGION });

// Helper: Get Embeddings (Titan v2)
async function getEmbedding(text) {
  const safeText = text ? text.slice(0, 30000) : ""; // Titan limit
  if (!safeText) return Array(1024).fill(0);

  const response = await bedrock.send(new InvokeModelCommand({
    modelId: "amazon.titan-embed-text-v2:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({ inputText: safeText, dimensions: 1024, normalize: true })
  }));

  const result = JSON.parse(new TextDecoder().decode(response.body));
  return result.embedding;
}

async function main() {
  console.log("🚀 Starting Local Vectorization...");

  // 1. Reset Database
  if (fs.existsSync(DB_OUTPUT_DIR)) fs.rmSync(DB_OUTPUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(DB_OUTPUT_DIR);
  
  const db = await lancedb.connect(DB_OUTPUT_DIR);
  const rows = [];

  // ---------------------------------------------------------
  // A. PROCESS MARKDOWN NOTES
  // ---------------------------------------------------------
  const files = await glob(`${CONTENT_DIR}/**/*.{md,mdx}`);
  console.log(`📂 Found ${files.length} notes.`);

  for (const file of files) {
    const raw = fs.readFileSync(file, "utf-8");
    const { content, data } = matter(raw);
    if (!content.trim()) continue;

    const vector = await getEmbedding(content);
    rows.push({
      id: file,
      vector,
      text: content,
      category: "note",
      metadata: JSON.stringify({ title: data.title || path.basename(file) })
    });
  }

  // ---------------------------------------------------------
  // B. PROCESS LEETCODE JSON
  // ---------------------------------------------------------
  if (fs.existsSync(LEETCODE_FILE)) {
    console.log("🧩 Processing LeetCode JSON...");
    const problems = JSON.parse(fs.readFileSync(LEETCODE_FILE, "utf-8"));
    
    for (const p of problems) {
      // Embed Title so you can search "Two Sum" or "Arrays"
      const vector = await getEmbedding(`LeetCode Problem: ${p.title}`);
      
      rows.push({
        id: `leetcode-${p.title.replace(/\s+/g, '-').toLowerCase()}`,
        vector,
        text: JSON.stringify(p), 
        category: "leetcode",
        metadata: JSON.stringify({ title: p.title })
      });
    }
  } else {
    console.warn(`⚠️ File not found: ${LEETCODE_FILE} (Skipping)`);
  }

  // ---------------------------------------------------------
  // C. PROCESS RESUME (Local PDF)
  // ---------------------------------------------------------
  if (fs.existsSync(RESUME_FILE)) {
    console.log("📄 Parsing Resume...");
    const buffer = fs.readFileSync(RESUME_FILE);
    const pdfData = await pdf(buffer);
    const resumeText = pdfData.text;

    const vector = await getEmbedding(resumeText);
    rows.push({
      id: "resume-full",
      vector,
      text: resumeText,
      category: "resume",
      metadata: JSON.stringify({ type: "pdf", source: "Local" })
    });
  } else {
    console.warn(`⚠️ File not found: ${RESUME_FILE} (Skipping)`);
  }

  // ---------------------------------------------------------
  // D. SAVE DB
  // ---------------------------------------------------------
  if (rows.length > 0) {
    console.log(`💾 Saving ${rows.length} vectors to LanceDB...`);
    await db.createTable("knowledge_base", rows);
    console.log("✅ Done.");
  } else {
    console.log("⚠️ No data to save.");
  }
}

main();