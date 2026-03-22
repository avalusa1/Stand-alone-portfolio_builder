import { readFileSync } from 'fs';

const config = JSON.parse(readFileSync('./portfolio.config.json', 'utf-8'));
const [owner, repo] = (config.deployment?.repository || '/').split('/');
const baseUrl = `https://${owner}.github.io/${repo}/`;

// Check what's being served from GitHub Pages
fetch(baseUrl)
  .then(r => r.text())
  .then(html => {
    console.log('Checking:', baseUrl);
    console.log('HTML Length:', html.length);
    console.log('First 500 chars:');
    console.log(html.substring(0, 500));
    
    // Check for React root element
    if (html.includes('<div id="root"></div>')) {
      console.log('✅ React root element found');
    } else {
      console.log('❌ React root element NOT found');
    }
    
    // Check for JavaScript assets
    const jsMatches = html.match(/src="[^"]*\.js"/g) || [];
    console.log(`Found ${jsMatches.length} JS files`);
    jsMatches.forEach(m => console.log('  ' + m));
  })
  .catch(e => console.error('ERROR:', e));
