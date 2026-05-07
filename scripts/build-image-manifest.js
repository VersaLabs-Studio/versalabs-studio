/**
 * Build script: generates a static image manifest JSON file.
 * Run before `next build` to pre-compute all project image paths.
 * This eliminates runtime fs.readdirSync which caused Vercel to bundle
 * the entire 450MB public/ directory into the serverless function.
 */
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const outputPath = path.join(__dirname, '..', 'src', 'config', 'image-manifest.json');

function collectRecursive(dirPath, urlPrefix) {
  const images = [];
  if (!fs.existsSync(dirPath)) return images;
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      images.push(...collectRecursive(
        path.join(dirPath, entry.name),
        `${urlPrefix}/${entry.name}`
      ));
    } else if (/\.(png|jpg|jpeg|webp)$/i.test(entry.name)) {
      images.push(`${urlPrefix}/${entry.name}`);
    }
  }
  return images;
}

function buildManifest() {
  const manifest = {};
  
  const dirs = fs.readdirSync(publicDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const dir of dirs) {
    const dirPath = path.join(publicDir, dir);
    const mockups = collectRecursive(path.join(dirPath, 'Mockups'), `/${dir}/Mockups`);
    const screenshots = collectRecursive(path.join(dirPath, 'Screenshots'), `/${dir}/Screenshots`);
    
    if (mockups.length > 0 || screenshots.length > 0) {
      manifest[dir] = { mockups, screenshots };
    }
  }
  
  return manifest;
}

const manifest = buildManifest();
fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2), 'utf-8');

const totalImages = Object.values(manifest).reduce((sum, p) => sum + p.mockups.length + p.screenshots.length, 0);
console.log(`✅ Image manifest generated: ${Object.keys(manifest).length} projects, ${totalImages} images`);
console.log(`   Written to: ${outputPath}`);
