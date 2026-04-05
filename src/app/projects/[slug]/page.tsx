'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Code2, Calendar, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/config/projects';
import { FadeIn } from '@/components/ui/motion';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-2 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Code2 className="h-3.5 w-3.5" />
            {project.org}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm transition-colors hover:bg-muted/80"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 rounded-xl border border-border bg-muted/50 p-6">
            <h2 className="text-lg font-semibold mb-4">Key Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-lg bg-muted border border-border px-3 py-1.5 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Architecture Decisions</h2>
            <div className="space-y-6">
              {project.architecture.decisions.map((decision, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-muted/30 p-6"
                >
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    Decision {i + 1}
                  </div>
                  <h3 className="font-medium mb-2">{decision.context}</h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Decision: </span>
                    {decision.decision}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="text-success font-medium">Result: </span>
                    {decision.consequence}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-12 rounded-xl border border-border bg-muted/50 p-6">
            <h2 className="text-lg font-semibold mb-4">System Architecture</h2>
            <pre className="overflow-x-auto text-xs text-muted-foreground font-mono bg-background rounded-lg p-4">
              {project.architecture.diagram}
            </pre>
            <p className="mt-3 text-xs text-muted-foreground">
              Graph representation of the system architecture. Each node represents a service or component, edges represent data flow.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Deep Dive</h2>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
