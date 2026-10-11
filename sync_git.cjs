const { execSync } = require('child_process');
const git = 'C:\\Users\\janu\\AppData\\Local\\GitHubDesktop\\app-3.6.7\\resources\\app\\git\\cmd\\git.exe';
const gh = 'C:\\Users\\janu\\Downloads\\bin\\gh.exe';
const token = execSync(`"${gh}" auth token`, { encoding: 'utf8' }).trim();

// 1. Commit and push nala-ai-frontend
execSync(`"${git}" add .`, { cwd: 'C:\\Users\\janu\\Downloads\\nala-ai-frontend' });
execSync(`"${git}" commit -m "Add Vercel serverless API and resilient client API handler"`, { cwd: 'C:\\Users\\janu\\Downloads\\nala-ai-frontend' });
execSync(`"${git}" push https://x-access-token:${token}@github.com/Josh-0905/nala-ai-frontend.git main`, { cwd: 'C:\\Users\\janu\\Downloads\\nala-ai-frontend', stdio: 'inherit' });

// 2. Commit and push nala-ai-complete
execSync(`"${git}" add .`, { cwd: 'C:\\Users\\janu\\Downloads\\NALA-AI-Complete' });
execSync(`"${git}" commit -m "Add Vercel serverless API and resilient client API handler"`, { cwd: 'C:\\Users\\janu\\Downloads\\NALA-AI-Complete' });
execSync(`"${git}" push https://x-access-token:${token}@github.com/Josh-0905/nala-ai-complete.git main`, { cwd: 'C:\\Users\\janu\\Downloads\\NALA-AI-Complete', stdio: 'inherit' });

console.log('✓ Both repositories updated and pushed to GitHub!');
