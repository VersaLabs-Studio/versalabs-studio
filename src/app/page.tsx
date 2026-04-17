import Hero from '@/components/sections/Hero';
import CoreCapabilities from '@/components/sections/CoreCapabilities';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import EngineeringProcess from '@/components/sections/EngineeringProcess';
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
      <FeaturedProjects projects={projects} />
      <EngineeringProcess />

      <section id="architecture" className="px-6 py-32 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-white">Architecture Philosophy</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-[15px] text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              Every system we build follows Schema-First Design and Domain-Driven Architecture.
              From Frappe-backed ERP systems to autonomous AI orchestrators, our architectures
              are zero-bloat, infinitely scalable, and production-hardened.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12 flex justify-center gap-8 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
                Schema-First Design
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
                Domain-Driven Architecture
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
                Zero-Bloat Infrastructure
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-white hover:text-zinc-300 transition-colors"
              >
                View Production Architectures
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
