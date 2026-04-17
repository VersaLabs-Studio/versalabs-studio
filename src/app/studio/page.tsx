import { getAllProjects } from '@/lib/catalog-parser';
import StudioClient from '@/components/studio/StudioClient';

export default function StudioPage() {
  const projects = getAllProjects();

  return <StudioClient projects={projects} />;
}
