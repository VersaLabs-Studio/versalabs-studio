'use client';

import Link from 'next/link';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import { getFeaturedProjects } from '@/config/projects';
import { StaggerContainer, StaggerItem } from '@/components/ui/motion';

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-muted-foreground">Production-grade systems built with DDD, schema-first, and rapid prototyping.</p>
        </div>

        <StaggerContainer>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
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

                  <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-md bg-background px-2 py-1 text-xs text-muted-foreground border border-border">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="rounded-md bg-background px-2 py-1 text-xs text-muted-foreground border border-border">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            View all projects
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
