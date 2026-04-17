'use client';

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';

export default function CoreCapabilities() {
  return (
    <section className="px-6 py-32 border-t border-white/[0.04] bg-[#0A0A0C]">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-[32px] md:text-[40px] leading-[1.1] font-semibold tracking-tighter text-white max-w-4xl">
            A new paradigm of enterprise architecture.{' '}
            <span className="text-zinc-500">
              Purpose-built for operational leaders with AI agentic workflows at its core, VersaLabs sets a new standard for engineering digital infrastructure.
            </span>
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/[0.04]">
          {/* Box 1: DDD */}
          <StaggerItem>
            <div className="flex flex-col h-full border-r border-b border-white/[0.04] overflow-hidden group">
              <div className="p-8 pb-0">
                <span className="text-[10px] font-medium tracking-widest text-zinc-600 uppercase mb-8 block">
                  FIG 0.1
                </span>
                
                {/* Visual Placeholder: Stacked Planes for DDD */}
                <div className="h-48 w-full flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      {/* Top Plane - Highlighted */}
                      <path d="M100 40 L160 70 L100 100 L40 70 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                      <circle cx="100" cy="70" r="16" stroke="rgba(255,255,255,0.4)" strokeDasharray="2 2" />
                      {/* Sub Planes */}
                      <path d="M100 60 L160 90 L100 120 L40 90 Z" />
                      <path d="M100 80 L160 110 L100 140 L40 110 Z" />
                      <path d="M100 100 L160 130 L100 160 L40 130 Z" />
                      {/* Connections */}
                      <path d="M40 70 L40 130" />
                      <path d="M160 70 L160 130" />
                      <path d="M100 100 L100 160" />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="mt-auto p-8 pt-6 bg-gradient-to-t from-[#101012] to-transparent border-t border-white/[0.02]">
                <h3 className="text-sm font-semibold text-white mb-2">Domain-Driven Design</h3>
                <p className="text-[13px] leading-relaxed text-zinc-500">
                  Every application is strictly modeled into autonomous bounded contexts.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Box 2: AI Agents */}
          <StaggerItem>
            <div className="flex flex-col h-full border-r border-b border-white/[0.04] overflow-hidden group">
              <div className="p-8 pb-0">
                <span className="text-[10px] font-medium tracking-widest text-zinc-600 uppercase mb-8 block">
                  FIG 0.2
                </span>
                
                {/* Visual Placeholder: Isometric Nodes for AI */}
                <div className="h-48 w-full flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      {/* Base Nodes */}
                      {/* Left Node */}
                      <path d="M60 100 L90 115 L90 145 L60 130 Z" />
                      <path d="M60 100 L60 130 L30 115 L30 85 Z" />
                      <path d="M60 100 L90 115 L60 130 L30 115 Z" fill="rgba(255,255,255,0.02)" />
                      
                      {/* Right Node */}
                      <path d="M140 110 L170 125 L170 155 L140 140 Z" />
                      <path d="M140 110 L140 140 L110 125 L110 95 Z" />
                      <path d="M140 110 L170 125 L140 140 L110 125 Z" fill="rgba(255,255,255,0.02)" />

                      {/* Top Master Node - Highlighted */}
                      <path d="M100 50 L130 65 L130 95 L100 80 Z" stroke="rgba(255,255,255,0.4)" />
                      <path d="M100 50 L100 80 L70 65 L70 35 Z" stroke="rgba(255,255,255,0.4)" />
                      <path d="M100 50 L130 65 L100 80 L70 65 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                      <circle cx="100" cy="65" r="3" fill="white" />
                      <circle cx="60" cy="115" r="2" fill="currentColor" />
                      <circle cx="140" cy="125" r="2" fill="currentColor" />
                      
                      {/* Connection Lines */}
                      <path d="M100 80 L60 100" strokeDasharray="3 3" />
                      <path d="M100 80 L140 110" strokeDasharray="3 3" />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="mt-auto p-8 pt-6 bg-gradient-to-t from-[#101012] to-transparent border-t border-white/[0.02]">
                <h3 className="text-sm font-semibold text-white mb-2">Powered by AI agents</h3>
                <p className="text-[13px] leading-relaxed text-zinc-500">
                  Native Model Context Protocol (MCP) and multi-model inference chains.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Box 3: Zero-Bloat */}
          <StaggerItem>
            <div className="flex flex-col h-full border-r border-b border-white/[0.04] overflow-hidden group">
              <div className="p-8 pb-0">
                <span className="text-[10px] font-medium tracking-widest text-zinc-600 uppercase mb-8 block">
                  FIG 0.3
                </span>
                
                {/* Visual Placeholder: Speed / Velocity Lines */}
                <div className="h-48 w-full flex items-center justify-center relative transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                    <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-600">
                      {/* Series of ascending blocks representing speed/schema logic */}
                      <path d="M50 140 L60 135 L60 145 L50 150 Z" />
                      <path d="M65 132 L75 127 L75 142 L65 147 Z" />
                      <path d="M80 124 L90 119 L90 139 L80 144 Z" />
                      <path d="M95 116 L105 111 L105 136 L95 141 Z" />
                      <path d="M110 108 L120 103 L120 133 L110 138 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" />
                      {/* Main highlighted block */}
                      <path d="M125 90 L135 85 L135 130 L125 135 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                      <path d="M140 102 L150 97 L150 127 L140 132 Z" />
                      
                      {/* Grid Floor */}
                      <path d="M30 160 L100 125 L170 160 M50 160 L100 135 L150 160 M70 160 L100 145 L130 160" strokeDasharray="1 3" opacity="0.3" />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="mt-auto p-8 pt-6 bg-gradient-to-t from-[#101012] to-transparent border-t border-white/[0.02]">
                <h3 className="text-sm font-semibold text-white mb-2">Zero-bloat infrastructure</h3>
                <p className="text-[13px] leading-relaxed text-zinc-500">
                  Strict Schema-first architectures powered by Next.js and Frappe ERP backends.
                </p>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
}
