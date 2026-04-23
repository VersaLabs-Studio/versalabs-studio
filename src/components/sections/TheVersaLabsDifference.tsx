'use client';

import { FadeIn, StaggerContainer, StaggerItem, GlassCard } from '@/components/ui/motion';

export default function TheVersaLabsDifference() {
  return (
    <section className="px-6 py-32 bg-[#0A0A0C]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <FadeIn>
            <h2 className="text-[40px] md:text-[56px] leading-[1.05] font-semibold tracking-tighter text-white mb-6">
              The operational edge.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[17px] text-zinc-500">
              Why visionaries partner with VersaLabs over legacy agency models. 
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Box 1: The Agile Engine (Large) */}
            <StaggerItem className="md:col-span-2 lg:col-span-2">
              <GlassCard className="h-full flex flex-col md:flex-row overflow-hidden group border border-white/[0.04]">
                <div className="p-10 flex-1 flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-600 mb-6 font-medium">01. Delivery Model</span>
                  <h3 className="text-2xl font-semibold text-white mb-4">The Agile Engine</h3>
                  <p className="text-[14px] leading-relaxed text-zinc-500">
                    We abandon rigid waterfall planning in favor of rigorous iterative prototyping and continuous deployment. We build and test against real user telemetry instantly, preventing misaligned launches and ensuring you release exactly what your market demands.
                  </p>
                </div>
                {/* SVG Visual */}
                <div className="w-full md:w-[40%] bg-white/[0.02] flex items-center justify-center p-8 relative overflow-hidden border-t md:border-t-0 md:border-l border-white/[0.04]">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 group-hover:scale-[1.05] group-hover:opacity-100 transition-all duration-700 ease-out">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      {/* Infinite Loop / Agile Cycle */}
                      <path d="M50 100 A 40 40 0 1 1 90 140 A 40 40 0 0 0 150 100 A 40 40 0 1 1 110 60 A 40 40 0 0 0 50 100" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                      <circle cx="50" cy="100" r="4" fill="white" />
                      <circle cx="150" cy="100" r="4" fill="currentColor" />
                      <path d="M85 135 L95 140 L90 148" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M115 65 L105 60 L110 52" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </GlassCard>
            </StaggerItem>

            {/* Box 2: Zero Corporate Bloat */}
            <StaggerItem>
              <GlassCard className="h-full flex flex-col overflow-hidden group border border-white/[0.04]">
                <div className="flex-1 p-8 h-48 flex items-center justify-center bg-white/[0.02] relative">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 group-hover:scale-[1.05] group-hover:opacity-100 transition-all duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      {/* Clean Slash / Slice indicating cutting red tape */}
                      <circle cx="100" cy="100" r="60" strokeDasharray="3 6" opacity="0.4" />
                      <path d="M60 140 L140 60" stroke="white" strokeWidth="2" />
                      <path d="M40 100 L160 100" opacity="0.3" />
                      <path d="M100 40 L100 160" opacity="0.3" />
                      <circle cx="140" cy="60" r="3" fill="white" />
                      <circle cx="60" cy="140" r="3" fill="currentColor" />
                    </g>
                  </svg>
                </div>
                <div className="p-8 bg-[#101012] border-t border-white/[0.04]">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 mb-3 block font-medium">02. Mindset</span>
                  <h3 className="text-[17px] font-semibold text-white mb-2">Zero Corporate Bloat</h3>
                  <p className="text-[13px] leading-relaxed text-zinc-500">
                    Avoiding legacy IT drag and red-tape. We operate purely as an execution-focused tactical strike team.
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>

            {/* Box 3: AI-First Workflows */}
            <StaggerItem>
              <GlassCard className="h-full flex flex-col overflow-hidden group border border-white/[0.04]">
                <div className="flex-1 p-8 h-48 flex items-center justify-center bg-white/[0.02] relative">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 group-hover:scale-[1.05] group-hover:opacity-100 transition-all duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      {/* Neural Node */}
                      <circle cx="100" cy="100" r="30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                      <path d="M100 70 L90 40 M100 130 L110 160 M70 100 L40 110 M130 100 L160 90" strokeDasharray="2 4" />
                      <circle cx="90" cy="40" r="4" fill="currentColor" />
                      <circle cx="110" cy="160" r="4" fill="currentColor" />
                      <circle cx="40" cy="110" r="4" fill="currentColor" />
                      <circle cx="160" cy="90" r="4" fill="white" />
                      <circle cx="100" cy="100" r="10" fill="rgba(255,255,255,0.05)" />
                    </g>
                  </svg>
                </div>
                <div className="p-8 bg-[#101012] border-t border-white/[0.04]">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 mb-3 block font-medium">03. Technology</span>
                  <h3 className="text-[17px] font-semibold text-white mb-2">AI-First Tooling</h3>
                  <p className="text-[13px] leading-relaxed text-zinc-500">
                    Native AI models integrated directly into our SWE lifecycle ensures drastically faster, bug-free production deployments.
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>

            {/* Box 4: Rapid MVP */}
            <StaggerItem>
              <GlassCard className="h-full flex flex-col overflow-hidden group border border-white/[0.04]">
                <div className="flex-1 p-8 h-48 flex items-center justify-center bg-white/[0.02] relative">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 group-hover:scale-[1.05] group-hover:opacity-100 transition-all duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      {/* Ascending Timeline Vector */}
                      <path d="M40 160 L80 120 L120 130 L160 60" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                      <path d="M40 160 L80 120 L120 130 L160 60" stroke="white" strokeWidth="3" opacity="0" className="group-hover:opacity-10 transition-opacity duration-700" />
                      <circle cx="40" cy="160" r="3" fill="currentColor" />
                      <circle cx="80" cy="120" r="3" fill="currentColor" />
                      <circle cx="120" cy="130" r="3" fill="currentColor" />
                      <circle cx="160" cy="60" r="4" fill="white" />
                      {/* Grid */}
                      <path d="M40 40 L40 160 M80 40 L80 160 M120 40 L120 160 M160 40 L160 160" strokeDasharray="1 5" opacity="0.3" />
                    </g>
                  </svg>
                </div>
                <div className="p-8 bg-[#101012] border-t border-white/[0.04]">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 mb-3 block font-medium">04. Timeline</span>
                  <h3 className="text-[17px] font-semibold text-white mb-2">Rapid Market Entry</h3>
                  <p className="text-[13px] leading-relaxed text-zinc-500">
                    Condensing years of bloated corporate timelines into intense, successful weeks. We go from idea to scale instantly.
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>

            {/* Box 5: Stack-Agnostic Mastery */}
            <StaggerItem>
              <GlassCard className="h-full flex flex-col overflow-hidden group border border-white/[0.04]">
                <div className="flex-1 p-8 h-48 flex items-center justify-center bg-white/[0.02] relative">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 group-hover:scale-[1.05] group-hover:opacity-100 transition-all duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      {/* Interlocking Puzzle / Abstract Architecture */}
                      <rect x="50" y="50" width="40" height="40" rx="2" fill="rgba(255,255,255,0.05)" stroke="currentColor" />
                      <rect x="110" y="50" width="40" height="40" rx="2" fill="rgba(255,255,255,0.05)" stroke="currentColor" />
                      <rect x="50" y="110" width="100" height="40" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                      {/* Connection brackets */}
                      <path d="M70 90 L70 110 M130 90 L130 110" strokeDasharray="2 2" />
                    </g>
                  </svg>
                </div>
                <div className="p-8 bg-[#101012] border-t border-white/[0.04]">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 mb-3 block font-medium">05. Freedom</span>
                  <h3 className="text-[17px] font-semibold text-white mb-2">Stack-Agnostic Mastery</h3>
                  <p className="text-[13px] leading-relaxed text-zinc-500">
                    Our value is rooted deeply in operational design constraints like Domain-Driven Architecture, not forced framework lock-in.
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>

          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
