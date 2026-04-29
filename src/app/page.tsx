import { FadeIn, GlassButton, GlassCard, StaggerContainer, StaggerItem, ScaleIn } from '@/components/ui/motion';
import { ArrowRight, Hexagon, Terminal, Blocks } from 'lucide-react';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0D0D0F] text-foreground p-6">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <StaggerContainer className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <StaggerItem>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-zinc-400 tracking-wider uppercase mb-8 backdrop-blur-md">
            <Hexagon className="w-3.5 h-3.5 text-white" />
            <span>VersaLabs Studio V2</span>
          </div>
        </StaggerItem>

        {/* Hero Headline */}
        <StaggerItem>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
            Engineering The Next <br />
            <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              Enterprise Paradigm.
            </span>
          </h1>
        </StaggerItem>

        <StaggerItem>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            We are currently building our new digital experience. VersaLabs is an elite product studio specializing in LLM orchestration, Schema-First design, and Next.js infrastructure.
          </p>
        </StaggerItem>

        {/* Interactive GlassCard / CTA */}
        <StaggerItem className="w-full">
          <ScaleIn delay={0.2}>
            <GlassCard className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl bg-[#161618]/80">
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold tracking-wide text-white uppercase">Systems Operational</span>
                </div>
                <p className="text-zinc-500 text-sm">
                  Accepting enterprise inquiries while we deploy V2.
                </p>
              </div>
              
              <div className="flex w-full md:w-auto flex-col sm:flex-row gap-4">
                <Link href="mailto:hello@versalabs.com" className="w-full sm:w-auto">
                  <GlassButton variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold tracking-wide h-full">
                    <span>Contact Studio</span>
                    <ArrowRight className="w-4 h-4" />
                  </GlassButton>
                </Link>
                <Link href="https://github.com/versalabs" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <GlassButton className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold tracking-wide h-full">
                    <Terminal className="w-4 h-4" />
                    <span>View GitHub</span>
                  </GlassButton>
                </Link>
              </div>
            </GlassCard>
          </ScaleIn>
        </StaggerItem>

        {/* Bottom Featurettes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full opacity-60">
          <StaggerItem>
            <div className="flex flex-col items-center text-center">
              <Blocks className="w-5 h-5 text-zinc-500 mb-3" />
              <h3 className="text-white text-sm font-medium mb-1">Architecture</h3>
              <p className="text-zinc-500 text-xs">Domain-Driven Design applied to modern web systems.</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-center text-center">
              <Hexagon className="w-5 h-5 text-zinc-500 mb-3" />
              <h3 className="text-white text-sm font-medium mb-1">Intelligence</h3>
              <p className="text-zinc-500 text-xs">Deep integrations of localized and cloud AI models.</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-center text-center">
              <Terminal className="w-5 h-5 text-zinc-500 mb-3" />
              <h3 className="text-white text-sm font-medium mb-1">Infrastructure</h3>
              <p className="text-zinc-500 text-xs">Scalable, zero-downtime automated deployment pipelines.</p>
            </div>
          </StaggerItem>
        </div>

      </StaggerContainer>
    </div>
  );
}
