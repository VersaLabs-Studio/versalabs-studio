'use client';

import { useState } from 'react';
import { Code2, Search } from 'lucide-react';
import { StaggerContainer, StaggerItem, GlassCard } from '@/components/ui/motion';
import ArchitectureSpecsModal from '@/components/studio/ArchitectureSpecsModal';
import type { ProjectData } from '@/config/types';

interface StudioClientProps {
  projects: ProjectData[];
}

export default function StudioClient({ projects }: StudioClientProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string>('all');

  const allTags = ['all', ...Array.from(new Set(projects.flatMap((p: ProjectData) => p.tags)))];

  const filtered = projects.filter((p) => {
    const matchesSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.stack.some((t: string) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesTag = activeTag === 'all' || p.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <div className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <StaggerContainer className="mb-12">
            <StaggerItem>
              <h1 className="text-4xl font-bold tracking-tight text-white">Production Architectures.</h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-2 text-lg text-zinc-500">
                A selection of our enterprise-grade deployments, from autonomous SWE orchestrators to high-traffic national hubs.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {allTags.map((tag: string) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    activeTag === tag
                      ? 'bg-white text-black'
                      : 'bg-[#1C1C1F] text-zinc-400 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  {tag === 'all' ? 'All' : tag}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64 rounded-lg border border-white/[0.08] bg-[#1C1C1F] pl-10 pr-4 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/[0.15]"
              />
            </div>
          </div>

          <StaggerContainer staggerDelay={0.05}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project: ProjectData) => (
                <StaggerItem key={project.slug}>
                  <GlassCard className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <span>VersaLabs</span>
                      </div>
                      <div className="flex gap-1">
                        {project.tags.slice(0, 2).map((tag: string) => (
                          <span key={tag} className="rounded-full bg-[#1C1C1F] px-2 py-0.5 text-xs text-zinc-400 border border-white/[0.06]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-zinc-500 line-clamp-2">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech: string) => (
                        <span key={tech} className="rounded-md bg-[#1C1C1F] px-2 py-1 text-xs text-zinc-500 border border-white/[0.06]">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="rounded-md bg-[#1C1C1F] px-2 py-1 text-xs text-zinc-500 border border-white/[0.06]">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="mt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#1C1C1F] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#27272A]"
                      >
                        Architecture Specs
                        <Code2 className="h-3 w-3" />
                      </button>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="py-24 text-center text-zinc-600">
              <p className="text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <ArchitectureSpecsModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
