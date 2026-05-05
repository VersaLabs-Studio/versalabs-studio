import { getAllProjects, type ProjectEntry } from '@/config/project-database';
import { getMockupImages, getScreenshotImages } from '@/lib/image-discovery';
import StudioClient from '@/components/studio/StudioClient';

export interface StudioProjectData extends ProjectEntry {
  mockupImages: string[];
  screenshotImages: string[];
}

export default function StudioPage() {
  const baseProjects = getAllProjects();
  
  const projectsWithImages: StudioProjectData[] = baseProjects.map(p => ({
    ...p,
    mockupImages: getMockupImages(p.title, p.slug, p.imageDir),
    screenshotImages: getScreenshotImages(p.title, p.slug, p.imageDir),
  }));

  return <StudioClient projects={projectsWithImages} />;
}
