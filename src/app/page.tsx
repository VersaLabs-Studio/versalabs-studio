import Hero from '@/components/sections/Hero';
import CoreCapabilities from '@/components/sections/CoreCapabilities';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import EngineeringProcess from '@/components/sections/EngineeringProcess';
import TheVersaLabsDifference from '@/components/sections/TheVersaLabsDifference';
import ArchitecturePhilosophy from '@/components/sections/ArchitecturePhilosophy';
import CallToAction from '@/components/sections/CallToAction';
import { FadeIn } from '@/components/ui/motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getAllProjects } from '@/lib/catalog-parser';

export default function Home() {
  // Fetch dynamic projects from project-catalog markdown files
  const projects = getAllProjects();

  return (
    <>
      <Hero />
      <CoreCapabilities />
      <EngineeringProcess />
      <TheVersaLabsDifference />
      <FeaturedProjects projects={projects} />
      <ArchitecturePhilosophy />
      <CallToAction />
    </>
  );
}
