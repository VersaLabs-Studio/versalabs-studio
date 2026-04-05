'use client';

import Link from 'next/link';
import { ArrowUpRight, Code2, Search } from 'lucide-react';
import { useState } from 'react';
import { projects } from '@/config/projects';
import { StaggerContainer, StaggerItem } from '@/components/ui/motion';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = projects.filter((p) => {
    const matchesFilter = filter === 'all' || p.org.toLowerCase() === filter.toLowerCase();
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">All Projects</h1>
          <p className="mt-2 text-muted-foreground">Production systems built at VersaLabs and beyond.</p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            {['all', 'VersaLabs', 'Personal'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  filter === f ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-64 rounded-lg border border-border bg-muted pl-10 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <StaggerContainer>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <StaggerItem key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block rounded-xl border border-border bg-muted/50 p-6 transition-all hover:border-primary/50 hover:bg-muted"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Code2 className="h-3.5 w-3.5" />
                      <span>{project.org}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="rounded-md bg-background px-2 py-0.5 text-xs text-muted-foreground border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {filtered.length === 0 && (
          <div className="py-24 text-center text-muted-foreground">
            <p className="text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
