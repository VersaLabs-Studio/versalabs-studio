'use client';

import { FadeIn } from '@/components/ui/motion';
import { Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase, Code2, Terminal } from 'lucide-react';
import Link from 'next/link';

const skills = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML/CSS'],
  Frameworks: ['Next.js 16', 'React', 'Frappe', 'Expo', 'FastAPI'],
  Architecture: ['DDD', 'Factory Patterns', 'Schema-First', 'REST API', 'Multi-Tenant'],
  Tools: ['PostgreSQL', 'Tailwind v4', 'Zod', 'TanStack Query', 'Shadcn/UI', 'Docker'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight">About</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Lead Systems Architect & Founder of VersaLabs. Building production-grade systems
            from Addis Ababa for the global market.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Addis Ababa, Ethiopia (GMT+3)
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              BSc Computer Science (Expected Sept)
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Open to Remote Roles
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Positioning</h2>
            <div className="rounded-xl border border-border bg-muted/50 p-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a senior engineer who built a live-market lab (VersaLabs) to validate DDD,
                schema-first, and Frappe/Next.js architectures in production. My work spans
                enterprise ERP systems, real-time sports platforms, e-commerce solutions, and
                autonomous AI workflow systems.
              </p>
              <p>
                I&apos;m transitioning from local freelancing to global remote SWE/DevOps roles
                ($2k-$4k/mo or $10-$15/hr) while maintaining VersaLabs as a B2B contract vehicle.
                My approach is portfolio-first: every claim is backed by shipped code.
              </p>
              <p>
                I don&apos;t do LeetCode. I do rapid prototyping, system design justification,
                and behavioral excellence. My technical screens are won through architecture
                monologues and boilerplate speed-runs.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Core Stack</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="rounded-xl border border-border bg-muted/50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="h-4 w-4 text-primary" />
                    <h3 className="font-medium">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="rounded-md bg-background px-2.5 py-1 text-xs border border-border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Connect</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://github.com/kidusabdula"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-5 py-2.5 text-sm transition-colors hover:bg-muted/80"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/kidusabdula"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-5 py-2.5 text-sm transition-colors hover:bg-muted/80"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <a
                href="mailto:kidus@example.com"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-5 py-2.5 text-sm transition-colors hover:bg-muted/80"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
