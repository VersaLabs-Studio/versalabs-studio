import fs from 'fs';
import path from 'path';

/**
 * Discovers mockup images for a given project.
 * Used for: hero images, detail page headers, gallery primary images.
 */
export function getMockupImages(title: string, slug: string, imageDir?: string): string[] {
  return discoverImages(imageDir || title, slug, 'Mockups');
}

/**
 * Discovers screenshot images for a given project.
 * Used for: technical deep-dives, footer galleries, extended detail sections.
 */
export function getScreenshotImages(title: string, slug: string, imageDir?: string): string[] {
  return discoverImages(imageDir || title, slug, 'Screenshots');
}

/**
 * Returns ALL images (mockups + screenshots combined).
 */
export function getAllProjectImages(title: string, slug: string, imageDir?: string): string[] {
  return [...getMockupImages(title, slug, imageDir), ...getScreenshotImages(title, slug, imageDir)];
}

function discoverImages(title: string, slug: string, subDir: string): string[] {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) return [];

  const publicDirs = fs.readdirSync(publicDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Fuzzy match directory name against title or slug
  const targetDir = publicDirs.find(dir => {
    const normDir = dir.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normDir.includes(normSlug) || normSlug.includes(normDir) || normTitle.includes(normDir) || normDir.includes(normTitle);
  });

  if (!targetDir) return [];

  const images: string[] = [];
  const searchPath = path.join(publicDir, targetDir, subDir);

  if (fs.existsSync(searchPath)) {
    collectImagesRecursive(searchPath, `/${targetDir}/${subDir}`, images);
  }

  return images;
}

function collectImagesRecursive(dirPath: string, urlPrefix: string, images: string[]): void {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      collectImagesRecursive(
        path.join(dirPath, entry.name),
        `${urlPrefix}/${entry.name}`,
        images
      );
    } else if (/\.(png|jpg|jpeg|webp)$/i.test(entry.name)) {
      images.push(`${urlPrefix}/${entry.name}`);
    }
  }
}
