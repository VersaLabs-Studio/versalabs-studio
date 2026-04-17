'use client';

import { Search, Activity, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { StaggerContainer, StaggerItem } from '@/components/ui/motion';
import type { ProjectData } from '@/lib/catalog-parser';

interface ProjectsClientProps {
  projects: ProjectData[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  // Extract unique tags for the filter bar
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add('All');
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, [projects]);

  const filtered = projects.filter((p) => {
    const matchesFilter = filter === 'All' || p.tags.includes(filter);
    const matchesSearch = !search || (
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.stack.some(tech => tech.toLowerCase().includes(search.toLowerCase())) ||
      p.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen px-6 py-32 bg-[#0A0A0C]">
      <div className="mx-auto max-w-7xl">
        <StaggerContainer className="mb-16">
          <StaggerItem>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Project Architecture Catalog</h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-[16px] text-zinc-500 max-w-2xl leading-relaxed">
              An index of all proprietary systems, autonomous tools, and zero-bloat platforms deployed for enterprise scale operations.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-y border-white/[0.04] py-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-medium tracking-widest uppercase text-zinc-600 mr-2">Filter by Domain</span>
            {allTags.slice(0, 8).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-300 ${
                  filter === f 
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.05] hover:bg-white/[0.08]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search architecture, stack..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-72 rounded-full border border-white/[0.08] bg-[#101012] pl-11 pr-4 py-2.5 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/[0.2] transition-colors"
            />
          </div>
        </div>

        <StaggerContainer staggerDelay={0.05}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
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
                        <p className="text-[14px] leading-relaxed text-zinc-500 line-clamp-3 mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Pre-Footer */}
                      <div className="relative z-10 mb-6 flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span key={tech} className="rounded-md bg-transparent px-0 py-0 text-[12px] font-medium text-white/50">
                            {tech}
                            <span className="mx-2 text-zinc-700 last:hidden">•</span>
                          </span>
                        ))}
                      </div>

                      {/* System Flow Footer */}
                      <div className="relative z-10 mt-auto pt-6 border-t border-white/[0.04] flex items-center gap-3">
                        <Activity className="h-4 w-4 text-zinc-600 flex-shrink-0" />
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

        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <div className="h-16 w-16 mx-auto rounded-full border border-white/[0.04] bg-[#101012] flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-zinc-700" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No architectures found</h3>
            <p className="text-zinc-500 text-[15px]">Adjust your search query or domain filter to locate specific architectures.</p>
          </div>
        )}
      </div>
    </div>
  );
}
