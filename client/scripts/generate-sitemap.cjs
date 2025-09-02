// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const hostname = 'https://moinsheikh.vercel.app'; 

const pages = [
  '/',

  // add more pages as you create them
];

const urls = pages.map(p => {
  const loc = p === '/' ? `${hostname}/` : `${hostname}${p}`;
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');

fs.writeFileSync(outPath, xml, 'utf8');
console.log('✅ sitemap.xml generated at public/sitemap.xml');
