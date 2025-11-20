// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Full-Stack Knowledge Base',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/justinklein2001/my-tech-notes' }],
			sidebar: [
				{
					label: 'AWS Certified Solutions Architect - Associate',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '1. Cloud Computing Overview', slug: 'aws/cloudcomputing' },
						{ label: '2. AWS Cloud Services', slug: 'aws/cloudservices' },
						{ label: '3. Amazon S3', slug: 'aws/amazons3' },
						{ label: '4. Additional Storage Services', slug: 'aws/additionalstorageservices' },
						{ label: '5. Amazon VPC Applications', slug: 'aws/vpcapplications' },
						{ label: '6. Amazon VPC Peering', slug: 'aws/vpcpeering' },
						{ label: '7. Amazon VPC Security', slug: 'aws/vpcsecurity' },
						{ label: '8. Compute Services Design', slug: 'aws/computeservicesdesign' },
						{ label: '9. Compute Services Implementation', slug: 'aws/computeservicesimplementation' },
						{ label: '10. Compute Services Management', slug: 'aws/computeservicesmanagement' },
						// { label: '11. Identity and Access Management (IAM)', slug: 'aws/cloudcomputing' },
						// { label: '12. Identity and Access Management (IAM) Best Practices', slug: 'aws/cloudcomputing' },
						// { label: '13. Auto Scaling Solutions', slug: 'aws/cloudcomputing' },
						// { label: '14. Virtual Network Services', slug: 'aws/cloudcomputing' },
						// { label: '15. Designing Cost-Optimized Compute', slug: 'aws/cloudcomputing' },
						// { label: '16. Designing for Operational Excellence', slug: 'aws/cloudcomputing' },
						// { label: '17. Designing for Elasticity and Scalability', slug: 'aws/cloudcomputing' },
						// { label: '18. AWS Database Design', slug: 'aws/cloudcomputing' },
						// { label: '19. AWS Database Deployment', slug: 'aws/cloudcomputing' },
						// { label: '20. Amazon Services', slug: 'aws/cloudcomputing' },
						// { label: '21. Operational Excellence with AWS', slug: 'aws/cloudcomputing' },
						
					],
				},
				{
					label: 'Spring',
					items: [
						{ label: '1. React.js', slug: 'aws/cloudcomputing' },
						{ label: '2. Node.js', slug: 'aws/cloudcomputing' },
						{ label: '3. Spring', slug: 'aws/cloudcomputing' },
					],
				},
				{
					label: 'Node.js',
					items: [
						{ label: '1. JavaScript', slug: 'aws/cloudcomputing' },
						{ label: '2. TypeScript', slug: 'aws/cloudcomputing' },
						{ label: '3. Python', slug: 'aws/cloudcomputing' },
						{ label: '4. Java', slug: 'aws/cloudcomputing' },
						{ label: '5. SQL', slug: 'aws/cloudcomputing' },
					],
				},
				{
					label: 'React.js',
					items: [
						{ label: '1. Terraform', slug: 'aws/cloudcomputing' },
						{ label: '2. Docker', slug: 'aws/cloudcomputing' },
					],
				},
				{
					label: 'Artificial Intelligence / Machine Learning',
					items: [
						{ label: '1. Retrieval Augmented Generation (RAG)', slug: 'aws/cloudcomputing' },
						{ label: '2. Model Context Protocol (MCP)', slug: 'aws/cloudcomputing' },
					],
				},
				{
					label: 'DevOps Tools',
					items: [
						{ label: '1. GitHub Actions', slug: 'aws/cloudcomputing' },
						{ label: '2. Jenkins', slug: 'aws/cloudcomputing' },
						{ label: '3. Azure DevOps', slug: 'aws/cloudcomputing' },
					],
				},
				{
					label: 'Methodologies',
					items: [
						{ label: '1. Agile', slug: 'aws/cloudcomputing' },
						{ label: '2. Clean Code', slug: 'aws/cloudcomputing' },
						{ label: '3. Clean Architecture', slug: 'aws/cloudcomputing' },
					],
				},
			],
		}),
	],
});
