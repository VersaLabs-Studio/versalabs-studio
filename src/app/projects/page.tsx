import { getAllProjects } from '@/lib/catalog-parser';
import ProjectsClient from '@/components/projects/ProjectsClient';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return <ProjectsClient projects={projects} />;
}