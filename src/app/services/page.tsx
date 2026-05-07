import { getAllProjects } from '@/config/project-database';
import ServicesClient from '@/components/services/ServicesClient';

export default function ServicesPage() {
  const projects = getAllProjects();

  return <ServicesClient projects={projects} />;
}