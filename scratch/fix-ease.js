const fs = require('fs');
const files = [
  'src/components/sections/GeometricDivider.tsx',
  'src/app/about/page.tsx',
  'src/components/services/ServicesClient.tsx',
  'src/components/sections/Hero.tsx',
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let c = fs.readFileSync(f, 'utf8');
  let count = 0;

  // Fix all ease: [x, y, z, w] patterns that aren't already cast
  c = c.replace(/ease: \[([0-9., ]+)\](?! as)/g, (match, nums) => {
    count++;
    return `ease: [${nums}] as [number, number, number, number]`;
  });

  fs.writeFileSync(f, c, 'utf8');
  console.log(f + ': ' + count + ' fixes');
});
