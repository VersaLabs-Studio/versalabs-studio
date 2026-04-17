'use client';

import { Code2 } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, GlassCard } from '@/components/ui/motion';
import type { ProjectData } from '@/lib/catalog-parser';

interface ProjectPageClientProps {
  project: ProjectData;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-2 inline-flex items-center gap-2 text-xs text-zinc-400">
            <Code2 className="h-3.5 w-3.5" />
            {project.title}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">{project.title}</h1>
          <p className="mt-4 text-lg text-zinc-400">{project.description}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10">
                Source Code
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/15">
                Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4 text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t: string) => (
                <span key={t} className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-zinc-400">{t}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4 text-white">System Flow</h2>
            <GlassCard className="p-6">
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.systemFlow}
              </p>
            </GlassCard>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4 text-white">Project Tags</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span key={tag} className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-white border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
