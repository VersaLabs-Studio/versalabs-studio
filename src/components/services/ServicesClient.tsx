'use client';

import { FadeIn, GlassCard, GlassButton } from '@/components/ui/motion';
import { Zap, Database, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/config/types';

interface ServicesClientProps {
  projects: Project[];
}

const services = [
  {
    title: 'Autonomous SWE & AI Orchestration',
    description: 'Custom LLM routing chains, Agentic Workflows, and MCP integrations for intelligent software development automation.',
    icon: Zap,
    features: [
      'OpenRouter fallback chains for reliable AI access',
      'Modular MCP integrations (GitHub, Vercel, Notion, Gmail)',
      'Self-hosted orchestration gateways',
      'Multi-agent coherence systems',
    ],
    exampleProjects: ['jarvis'],
  },
  {
    title: 'Enterprise ERP & Systems Architecture',
    description: 'Schema-first Next.js frontends with DDD-backed Frappe backends for scalable enterprise applications.',
    icon: Database,
    features: [
      'Domain-Driven Design (DDD) implementation',
      'Factory patterns for extensible module architecture',
      'PostgreSQL schema enforcement',
      'Multi-tenant data isolation',
    ],
    exampleProjects: ['obsidian-erp-v3.0', 'oskaz-erp'],
  },
  {
    title: 'Rapid MVP Sprints',
    description: '1-week blitz cycles delivering production-ready MVPs with schema-driven forms and integrated payment flows.',
    icon: Rocket,
    features: [
      '2-day MVP delivery capability',
      'Schema-driven dynamic UI generation',
      'Integrated payment gateways',
      'Production deployment ready',
    ],
    exampleProjects: ['printonline-et', 'oskaz-ecommerce'],
  },
];

export default function ServicesClient({ projects }: ServicesClientProps) {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white">Services</h1>
            <p className="mt-4 text-lg text-zinc-500 max-w-2xl mx-auto">
              Premium product studio specializing in autonomous AI workflows, enterprise systems, and rapid MVP development.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <GlassCard className="p-8 h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1C1C1F] border border-white/[0.06]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-zinc-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                   <ul className="space-y-2 mb-6">
                     {service.features.map((feature) => (
                       <li key={feature} className="flex items-center gap-2 text-sm text-zinc-500">
                         <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
                         {feature}
                       </li>
                     ))}
                   </ul>

                   {service.exampleProjects && service.exampleProjects.length > 0 && (
                     <div className="mb-6">
                       <h4 className="text-sm font-medium mb-3 flex items-center gap-2 text-white">
                         Example Implementations
                       </h4>
                       <div className="space-y-2">
                         {service.exampleProjects.map((slug) => {
                           const project = projects.find(p => p.slug === slug);
                           return project ? (
                             <Link
                               key={slug}
                               href={`/projects/${slug}#architecture`}
                               className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors group"
                             >
                               <span>{project.title}</span>
                               <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                             </Link>
                           ) : null;
                         })}
                       </div>
                     </div>
                   )}

                   <Link
                     href="/contact"
                     className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors"
                   >
                     Get Started
                     <ArrowRight className="h-4 w-4" />
                   </Link>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4}>
          <GlassCard className="p-8 text-center mt-20">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Build?</h2>
            <p className="text-zinc-500 mb-6 max-w-2xl mx-auto">
              Whether you need an autonomous AI system, enterprise ERP, or rapid MVP development,
              VersaLabs delivers production-grade solutions with zero technical bloat.
            </p>
            <GlassButton variant="primary">
              <Link href="/contact" className="flex items-center gap-2">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassButton>
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  );
}
