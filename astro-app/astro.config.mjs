// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Get Smart!',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/justinklein2001/my-tech-notes' }],
			sidebar: [
				{
					label: 'AWS Certified Solutions Architect - Associate',
					items: [
						{ label: 'Overview', slug: 'aws/overview' },
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
						{ label: '11. Identity and Access Management (IAM)', slug: 'aws/iam' },
						{ label: '12. Identity and Access Management (IAM) Best Practices', slug: 'aws/iambestpractices' },
						{ label: '13. Security Services', slug: 'aws/securityservices' },
						{ label: '14. Auto Scaling Solutions', slug: 'aws/autoscalingsolutions' },
						{ label: '15. Virtual Network Services', slug: 'aws/virtualnetworkservices' },
						{ label: '16. Designing Cost-Optimized Compute', slug: 'aws/designingcostoptimizedcompute' },
						{ label: '17. Designing for Operational Excellence', slug: 'aws/designingoperationalexcellence' },
						{ label: '18. Designing for Elasticity and Scalability', slug: 'aws/designingscalability' },
						{ label: '19. AWS Database Design', slug: 'aws/databasedesign' },
						{ label: '20. AWS Database Deployment', slug: 'aws/databasedeployment' },
						{ label: '21. Amazon Services', slug: 'aws/services' },
						{ label: '22. Operational Excellence with AWS', slug: 'aws/operationalexcellence' },						
					],
				},
				{
					label: 'Terraform',
					items: [
						{ label: 'Overview', slug: 'terraform/overview' },
						{ label: '1. Infrastructure as Code', slug: 'terraform/infrastructureascode' },
						{ label: '2. Overview & Setup', slug: 'terraform/overviewsetup' },
						{ label: '3. Basic Terraform Usage', slug: 'terraform/basicusage' },
						{ label: '4. Variables and Outputs', slug: 'terraform/variablesoutputs' },
						{ label: '5. Language Features', slug: 'terraform/languagefeatures' },
						{ label: '6. Project Organization & Modules', slug: 'terraform/organizationmodules' },
						{ label: '7. Managing Multiple Environments', slug: 'terraform/multipleenvironments' },
						{ label: '8. Testing Terraform Code', slug: 'terraform/testing' },
						{ label: '9. Developer Workflows', slug: 'terraform/workflows' },
					],
				}
			],
		}),
	],
});
