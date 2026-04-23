'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, GlassCard } from '@/components/ui/motion';
import type { ProjectData } from '@/lib/catalog-parser';

interface FeaturedProjectsProps {
  // Keeping interface intact to prevent bleeding prop errors in page.tsx
  projects?: ProjectData[];
}

const SHOWCASE_CONFIG = [
  { 
    slug: 'obsidian-erp-v3.0',
    title: 'Obsidian ERP',
    img: '/obsidian-erp-2 (2).png', 
    invert: false,
    description: 'An enterprise-grade, global market ERP architected for limitless scale. Transforms lead-to-cash pipelines, real-time manufacturing execution, and double-entry financial control into a unified digital workflow.',
    capabilities: ['Lead-to-Cash Automation', 'Manufacturing Execution', 'Double-Entry Bookkeeping', 'Multi-Tenant Architecture'],
  },
  { 
    slug: 'threatmatrix-ai',
    title: 'ThreatMatrix AI',
    img: '/threatmatrix-ai-1.png', 
    invert: true,
    description: 'Enterprise-grade anomaly detection and cyber threat intelligence platform. Purpose-built for national-scale security operations with real-time packet capture, automated intelligence enrichment, and conversational AI analysts.',
    capabilities: ['Live Network Sniffing', 'Isolation Forest ML Detection', 'OpenRouter LLM Intelligence', 'Real-time WebSocket Command Center']
  },
  { 
    slug: 'auroqueue',
    title: 'AuroQueue QMS',
    img: '/auroqueue-1.png', 
    invert: false,
    description: 'Enterprise Queue Management System designed for hospital networks and global banks. Delivers live queue orchestration across multi-tenant self-service kiosks paired with advanced performance analytics.',
    capabilities: ['Real-time Orchestration', 'Multi-Department Dashboards', 'Hardware Self-Service Kiosks', 'High-Availability Scaling']
  }
];

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="px-6 py-32 bg-[#0A0A0C] border-t border-white/[0.04]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24 md:text-center max-w-3xl md:mx-auto">
          <FadeIn>
            <h2 className="text-[40px] md:text-[56px] leading-[1.05] font-semibold tracking-tighter text-white mb-6">
              Featured Products.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[17px] text-zinc-500">
              Proprietary SaaS platforms deployed worldwide functioning as resilient, limitless digital infrastructure.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.15} className="flex flex-col gap-24 md:gap-40">
          {SHOWCASE_CONFIG.map((project) => {
            const isTextRight = !project.invert;

            return (
              <StaggerItem key={project.slug}>
                <div className={`flex flex-col gap-10 md:gap-16 ${isTextRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                  
                  {/* Cinematic Massive Image Pane (65% Width) */}
                  <div className="w-full lg:w-[65%] relative group">
                    <Link href={`/projects/${project.slug}`} className="block relative">
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.03)]"
                      >
                        <Image 
                          src={project.img} 
                          alt={project.title}
                          width={1400}
                          height={900}
                          className="w-full h-auto rounded-xl border border-white/[0.04]"
                          sizes="(max-width: 1024px) 100vw, 65vw"
                          priority
                        />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Dense Context Pane (35% Width) */}
                  <div className="w-full lg:w-[35%] flex flex-col justify-center">
                    
                    <h3 className="text-3xl md:text-[42px] font-semibold tracking-tighter text-white mb-6">
                      {project.title}
                    </h3>
                    
                    <p className="text-[16px] leading-[1.7] text-zinc-400 mb-8 max-w-xl">
                      {project.description}
                    </p>

                    <div className="flex flex-col gap-3 mb-12">
                      {project.capabilities.map((cap) => (
                         <div key={cap} className="flex items-center gap-3 text-[13px] text-zinc-300 font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                           {cap}
                         </div>
                      ))}
                    </div>

                    <div>
                      <Link href={`/projects/${project.slug}`}>
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center justify-center px-6 py-3.5 text-[13px] font-semibold tracking-wide text-black bg-white rounded-full transition-colors hover:bg-zinc-200 group"
                        >
                          Explore Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-40 text-center pt-16 border-t border-white/[0.04]">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
            View the Full Enterprise Catalog
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
