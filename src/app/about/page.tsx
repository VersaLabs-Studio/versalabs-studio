'use client';

import { FadeIn, GlassCard, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { Brain, Code2, Cpu, User } from 'lucide-react';

const team = [
  {
    name: 'Kidus Abdula',
    role: 'Founder & Lead AI Systems Architect',
    icon: User,
  },
  {
    name: 'Systems Engineer',
    role: 'Full-Stack Development',
    icon: Code2,
    placeholder: true,
  },
  {
    name: 'ML Engineer',
    role: 'Machine Learning & AI',
    icon: Cpu,
    placeholder: true,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <StaggerContainer className="mb-12">
          <StaggerItem>
            <h1 className="text-4xl font-bold tracking-tight text-white">The Mind Behind the Machine.</h1>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.1}>
          <GlassCard className="p-6 mb-12">
            <p className="text-zinc-500 leading-relaxed">
              We operate at the absolute cutting edge of software engineering, rejecting bloated corporate legacy code in favor of rapid, lean, and infinitely scalable architectures. Utilizing 1-week Agile sprints and MoSCoW prioritization, we accelerate production without compromising on strict Domain-Driven Design.
            </p>
          </GlassCard>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Team</h2>
            <StaggerContainer className="grid gap-6 sm:grid-cols-3">
              {team.map((member) => {
                const Icon = member.icon;
                return (
                  <StaggerItem key={member.name}>
                    <GlassCard className="p-6 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1C1C1F] border border-white/[0.06]">
                        {member.placeholder ? (
                          <Icon className="h-6 w-6 text-zinc-500" />
                        ) : (
                          <span className="text-xl font-bold text-white">KA</span>
                        )}
                      </div>
                      <h3 className="font-semibold text-white">{member.name}</h3>
                      <p className="mt-1 text-xs text-zinc-500">{member.role}</p>
                    </GlassCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Core Principles</h2>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Schema-First Design', desc: 'Every system starts with a rigorous data schema. Types drive implementation, not the other way around.' },
                { title: 'Domain-Driven Architecture', desc: 'Bounded contexts and ubiquitous language ensure business logic integrity at any scale.' },
                { title: 'Zero-Bloat Philosophy', desc: 'Every line of code earns its place. No unused dependencies, no over-engineered abstractions.' },
                { title: '1-Week Sprint Cycles', desc: 'Rapid iteration with MoSCoW prioritization. Ship fast, validate faster.' },
              ].map((principle) => (
                <StaggerItem key={principle.title}>
                  <GlassCard className="p-5">
                    <h3 className="font-medium text-white">{principle.title}</h3>
                    <p className="mt-2 text-sm text-zinc-500">{principle.desc}</p>
                  </GlassCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Core Stack</h2>
            <StaggerContainer className="grid gap-6 sm:grid-cols-2">
              <StaggerItem>
                <GlassCard className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="h-4 w-4 text-white" />
                    <h3 className="font-medium text-white">Languages & Frameworks</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'Python', 'Next.js 16', 'Frappe', 'React', 'FastAPI'].map((t) => (
                      <span key={t} className="rounded-md bg-[#1C1C1F] px-2.5 py-1 text-xs text-zinc-500 border border-white/[0.06]">{t}</span>
                    ))}
                  </div>
                </GlassCard>
              </StaggerItem>
              <StaggerItem>
                <GlassCard className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="h-4 w-4 text-white" />
                    <h3 className="font-medium text-white">Infrastructure & AI</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'Redis', 'Docker', 'OpenRouter', 'MCP', 'Supabase'].map((t) => (
                      <span key={t} className="rounded-md bg-[#1C1C1F] px-2.5 py-1 text-xs text-zinc-500 border border-white/[0.06]">{t}</span>
                    ))}
                  </div>
                </GlassCard>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
