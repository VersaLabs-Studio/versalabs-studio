'use client';

import Link from 'next/link';
import { ArrowUpRight, Activity } from 'lucide-react';
import { StaggerContainer, StaggerItem, GlassCard } from '@/components/ui/motion';
import type { ProjectData } from '@/lib/catalog-parser';

interface FeaturedProjectsProps {
  projects: ProjectData[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  // Show first 4 most prominent projects for home page
  const displayProjects = projects.slice(0, 4);

  return (
    <section className="px-6 py-32 bg-[#0A0A0C]">
      <div className="mx-auto max-w-6xl">
        <StaggerContainer className="mb-16">
          <StaggerItem>
            <h2 className="text-3xl font-bold tracking-tight text-white">Featured Architectures</h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-3 text-[15px] text-zinc-500 max-w-2xl">
              Production-grade systems built for enterprise-scale operations. Hover to inspect internal flows and technology clusters.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid gap-6 md:grid-cols-2">
            {displayProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent p-[1px] transition-colors duration-500 hover:from-white/[0.08]">
                    <div className="relative h-full flex flex-col rounded-[15px] bg-[#101012] p-8 overflow-hidden">
                      {/* Background Ambient Glow on Hover */}
                      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-white/[0.02] blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                      
                      {/* Top bar: Tags / Link */}
                      <div className="flex items-start justify-between relative z-10 mb-8">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-1 text-[11px] font-medium tracking-wider uppercase text-zinc-400 bg-white/[0.03] border border-white/[0.05] rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.05] text-zinc-500 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex-grow">
                        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                        <p className="text-[14px] leading-relaxed text-zinc-500 line-clamp-3 mb-8">
                          {project.description}
                        </p>
                      </div>

                      {/* System Flow Footer */}
                      <div className="relative z-10 mt-auto pt-6 border-t border-white/[0.04] flex items-center gap-3">
                        <Activity className="h-4 w-4 text-zinc-600" />
                        <span className="text-[12px] font-medium text-zinc-400 truncate">
                          {project.systemFlow}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-16 text-center">
          <Link href="/projects" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-300 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white hover:text-black">
            View Project Catalog
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
