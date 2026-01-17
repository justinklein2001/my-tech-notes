import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import * as lancedb from "@lancedb/lancedb";
import { glob } from "glob";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

// --- CONFIG ---
const REGION = "us-east-1";
const DB_OUTPUT_DIR = "lancedb";

// PATHS
const CONTENT_DIR = "src/content"; 
const LEETCODE_FILE = "raw/private/leetcode.json";
const RESUME_FILE = "raw/private/resume.txt";

const bedrock = new BedrockRuntimeClient({ region: REGION });

async function getEmbedding(text) {
  const safeText = text ? text.slice(0, 30000) : "";
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
  console.log("🚀 Starting Vectorization (Text Mode)...");

  if (fs.existsSync(DB_OUTPUT_DIR)) fs.rmSync(DB_OUTPUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(DB_OUTPUT_DIR);
  
  const db = await lancedb.connect(DB_OUTPUT_DIR);
  const rows = [];

  // A. MARKDOWN NOTES
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

  // B. LEETCODE
  if (fs.existsSync(LEETCODE_FILE)) {
    console.log("🧩 Processing LeetCode JSON...");
    const problems = JSON.parse(fs.readFileSync(LEETCODE_FILE, "utf-8"));
    for (const p of problems) {
      const vector = await getEmbedding(`LeetCode Problem: ${p.title}`);
      rows.push({
        id: `leetcode-${p.title.replace(/\s+/g, '-').toLowerCase()}`,
        vector,
        text: JSON.stringify(p), 
        category: "leetcode",
        metadata: JSON.stringify({ title: p.title })
      });
    }
  }

  // C. RESUME (Simple Text Read)
  if (fs.existsSync(RESUME_FILE)) {
    console.log("📄 Reading Resume...");
    
    // NATIVE NODE READ - No libraries, no errors
    const resumeText = fs.readFileSync(RESUME_FILE, "utf-8").trim();

    if (resumeText) {
      const vector = await getEmbedding(resumeText);
      rows.push({
        id: "resume-full",
        vector,
        text: resumeText,
        category: "resume",
        metadata: JSON.stringify({ type: "txt", source: "Local" })
      });
      console.log("✅ Resume vectorized.");
    }
  } else {
    console.warn(`⚠️ File not found: ${RESUME_FILE}`);
  }

  // D. SAVE
  if (rows.length > 0) {
    console.log(`💾 Saving ${rows.length} vectors to LanceDB...`);
    await db.createTable("knowledge_base", rows);
    console.log("✅ Done.");
  } else {
    console.log("⚠️ No data to save.");
  }
}

main();