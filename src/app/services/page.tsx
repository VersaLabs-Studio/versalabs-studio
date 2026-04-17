import { getAllProjects } from '@/lib/catalog-parser';
import ServicesClient from '@/components/services/ServicesClient';

export default function ServicesPage() {
  const projects = getAllProjects();

  return <ServicesClient projects={projects} />;
}