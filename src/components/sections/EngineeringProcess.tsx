'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';

export default function EngineeringProcess() {
  return (
    <section className="px-6 py-32 bg-[#0A0A0C]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-[40px] md:text-[56px] leading-[1.05] font-semibold tracking-tighter text-white mb-6">
              Engineering execution.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[17px] text-zinc-500">
              From domain schema to enterprise scale in weeks, not years.
            </p>
          </FadeIn>
        </div>

        {/* 2x2 Grid of SVG Modals */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] border border-white/[0.04] rounded-[24px] overflow-hidden">
          
          {/* PHASE 01 */}
          <StaggerItem>
            <div className="flex flex-col h-full bg-[#0A0A0C] group relative z-0 hover:z-10 transition-all">
              <div className="p-10 pb-0">
                <div className="flex items-center gap-4 mb-10">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold text-white">
                    1
                  </span>
                  <span className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
                    System Discovery
                  </span>
                </div>
                
                {/* Visual: Radar/Expanding Schema Nodes */}
                <div className="h-56 w-full flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      <circle cx="100" cy="100" r="80" strokeDasharray="4 8" opacity="0.4" />
                      <circle cx="100" cy="100" r="50" strokeDasharray="4 4" opacity="0.6" />
                      <circle cx="100" cy="100" r="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                      
                      <path d="M100 20 L100 80 M100 120 L100 180 M20 100 L80 100 M120 100 L180 100" />
                      
                      <circle cx="100" cy="20" r="3" fill="currentColor" />
                      <circle cx="100" cy="180" r="3" fill="currentColor" />
                      <circle cx="20" cy="100" r="3" fill="currentColor" />
                      <circle cx="180" cy="100" r="3" fill="currentColor" />
                      
                      {/* Active sector highlight */}
                      <path d="M100 100 L150 50 A 70 70 0 0 1 170 100 Z" fill="rgba(255,255,255,0.03)" stroke="none" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mt-auto p-10 pt-8 bg-gradient-to-t from-[#101012] to-transparent">
                <h3 className="text-[17px] font-semibold text-white mb-3">Extensive Planning & Discovery</h3>
                <p className="text-[14px] leading-relaxed text-zinc-500">
                  We dive deep into your operational boundaries establishing agile communication channels. We outline strict Schema-First architectures tailored specifically for your enterprise. No generic blueprints.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* PHASE 02 */}
          <StaggerItem>
            <div className="flex flex-col h-full bg-[#0A0A0C] group relative z-0 hover:z-10 transition-all">
              <div className="p-10 pb-0">
                <div className="flex items-center gap-4 mb-10">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold text-white">
                    2
                  </span>
                  <span className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
                    Domain Prototyping
                  </span>
                </div>
                
                {/* Visual: Wireframe grid slices */}
                <div className="h-56 w-full flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      {/* Base Pane */}
                      <rect x="40" y="80" width="120" height="80" rx="4" fill="rgba(255,255,255,0.02)" />
                      {/* Hovering Pane */}
                      <rect x="55" y="60" width="90" height="60" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                      {/* Top Pane */}
                      <rect x="70" y="40" width="60" height="40" rx="4" fill="rgba(255,255,255,0.06)" />
                      
                      {/* Interface Lines */}
                      <line x1="60" y1="70" x2="100" y2="70" stroke="rgba(255,255,255,0.5)" />
                      <line x1="60" y1="80" x2="130" y2="80" opacity="0.5" />
                      <line x1="60" y1="90" x2="110" y2="90" opacity="0.5" />

                      {/* Connection struts */}
                      <line x1="70" y1="80" x2="70" y2="100" strokeDasharray="2 2" />
                      <line x1="130" y1="80" x2="130" y2="100" strokeDasharray="2 2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mt-auto p-10 pt-8 bg-gradient-to-t from-[#101012] to-transparent">
                <h3 className="text-[17px] font-semibold text-white mb-3">Rapid Domain Prototyping</h3>
                <p className="text-[14px] leading-relaxed text-zinc-500">
                  High-fidelity designs and rigid bounded contexts outlined in days. Agile iterations allow you to test and validate exact domain models before heavy backend logic is initialized.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* PHASE 03 */}
          <StaggerItem>
            <div className="flex flex-col h-full bg-[#0A0A0C] group relative z-0 hover:z-10 transition-all">
              <div className="p-10 pb-0">
                <div className="flex items-center gap-4 mb-10">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold text-white">
                    3
                  </span>
                  <span className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
                    Build & Deploy
                  </span>
                </div>
                
                {/* Visual: Vertical deployment stacks */}
                <div className="h-56 w-full flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      <rect x="40" y="140" width="20" height="20" rx="2" />
                      <rect x="70" y="100" width="20" height="60" rx="2" />
                      <rect x="100" y="60" width="20" height="100" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                      <rect x="130" y="120" width="20" height="40" rx="2" />
                      
                      {/* Floating Data Packets */}
                      <circle cx="110" cy="40" r="2" fill="white" />
                      <line x1="110" y1="45" x2="110" y2="55" stroke="rgba(255,255,255,0.5)" strokeDasharray="1 2" />
                      
                      <circle cx="80" cy="80" r="2" fill="currentColor" />
                      <line x1="80" y1="85" x2="80" y2="95" strokeDasharray="1 2" />
                      
                      {/* Baseline */}
                      <line x1="20" y1="170" x2="180" y2="170" stroke="rgba(255,255,255,0.2)" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mt-auto p-10 pt-8 bg-gradient-to-t from-[#101012] to-transparent">
                <h3 className="text-[17px] font-semibold text-white mb-3">Agile Engineering</h3>
                <p className="text-[14px] leading-relaxed text-zinc-500">
                  Production-ready endpoints deploying robust, stack-agnostic infrastructure. We ship mission-critical environments instantly, ensuring tight feedback loops and rapid delivery.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* PHASE 04 */}
          <StaggerItem>
            <div className="flex flex-col h-full bg-[#0A0A0C] group relative z-0 hover:z-10 transition-all">
              <div className="p-10 pb-0">
                <div className="flex items-center gap-4 mb-10">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold text-white">
                    4
                  </span>
                  <span className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
                    Autonomous Scale
                  </span>
                </div>
                
                {/* Visual: Orbiting Telemetry Rings */}
                <div className="h-56 w-full flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      <ellipse cx="100" cy="100" rx="70" ry="25" transform="rotate(30 100 100)" />
                      <ellipse cx="100" cy="100" rx="70" ry="25" transform="rotate(-30 100 100)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                      
                      <circle cx="100" cy="100" r="12" fill="rgba(255,255,255,0.05)" />
                      <circle cx="100" cy="100" r="4" fill="white" />
                      
                      {/* Orbiting Satellites */}
                      <circle cx="160" cy="65" r="3" fill="currentColor" />
                      <circle cx="40" cy="135" r="3" fill="currentColor" />
                      <circle cx="160" cy="135" r="4" fill="rgba(255,255,255,0.8)" />
                      
                      {/* Telemetry Pulses */}
                      <path d="M164 135 L175 135 M160 131 L160 120" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mt-auto p-10 pt-8 bg-gradient-to-t from-[#101012] to-transparent">
                <h3 className="text-[17px] font-semibold text-white mb-3">Iterative Scale & Evolution</h3>
                <p className="text-[14px] leading-relaxed text-zinc-500">
                  Monitor telemetry, gather continuous user feedback, and aggressively iterate. Continuous agile delivery ensures your operational infrastructure becomes faster and more resilient.
                </p>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
}
