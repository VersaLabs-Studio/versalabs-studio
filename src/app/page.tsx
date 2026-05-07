import Hero from '@/components/sections/Hero';
import ObsidianShowcase from '@/components/sections/ObsidianShowcase';
import CoreCapabilities from '@/components/sections/CoreCapabilities';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import GlobalReach from '@/components/sections/GlobalReach';
import CallToAction from '@/components/sections/CallToAction';
import { getAllProjects } from '@/config/project-database';

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <Hero />
      <ObsidianShowcase />
      <CoreCapabilities />
      <WhyChooseUs />
      <FeaturedProjects projects={projects} />
      <GlobalReach />
      <CallToAction />
    </>
  );
}
