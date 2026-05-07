'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import type { ProjectEntry } from '@/config/project-database';

interface FeaturedProjectsProps {
  projects?: ProjectEntry[];
}

const SHOWCASE_CONFIG = [
  { 
    slug: 'obsidian-erp-v3.0',
    title: 'Obsidian ERP',
    img: '/Obsidian ERP/Mockups/New folder/obsidian-erp-2 (2).png',
    invert: false,
    type: 'saas' as const,
    description: 'Run your entire business from one dashboard. Obsidian connects sales, customers, inventory, manufacturing, and accounting — so nothing falls through the cracks.',
    capabilities: ['Sales & Customer Management', 'Inventory Tracking', 'Manufacturing Control', 'Financial Reports'],
  },
  { 
    slug: 'threatmatrix-ai',
    title: 'ThreatMatrix AI',
    img: '/ThreatMatrix AI/Mockups/threatmatrix-ai-1.png',
    invert: true,
    type: 'saas' as const,
    description: 'A security platform that watches your network 24/7. It detects threats in real time, alerts your team, and provides AI-powered analysis — before damage is done.',
    capabilities: ['Live Threat Detection', 'AI-Powered Analysis', 'Real-Time Alerts', 'Interactive Command Center']
  },
  { 
    slug: 'auroqueue',
    title: 'AuroQueue',
    img: '/AuroQueue/Mockups/628shots_so.png', 
    invert: false,
    type: 'saas' as const,
    description: 'No more long lines. AuroQueue manages walk-in queues for hospitals, banks, and offices — with self-service kiosks, live dashboards, and performance analytics.',
    capabilities: ['Self-Service Kiosks', 'Live Queue Dashboards', 'Performance Analytics', 'Multi-Location Support']
  },
  { 
    slug: 'pana-sport',
    title: 'Pana Sports',
    img: '/Pana Sport/Mockups/562shots_so.png', 
    invert: true,
    type: 'client-project' as const,
    description: 'The go-to platform for Ethiopian football. Live scores, league tables, team profiles, and news — all in English and Amharic, serving fans across the country.',
    capabilities: ['Live Score Updates', 'League Standings', 'Bilingual Content', 'Match Control Panel']
  },
  { 
    slug: 'oskaz-ecommerce',
    title: 'OSKAZ E-Commerce',
    img: '/Oskaz Import/Mockups/937shots_so.png', 
    invert: false,
    type: 'client-project' as const,
    description: 'A powerful online store that lets businesses sell products with secure payments, live inventory tracking, and a smooth checkout experience.',
    capabilities: ['Secure Authentication', 'Live Inventory Sync', 'Multi-Language Support', 'Mobile-Optimized']
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
              Platforms we&apos;ve built and shipped — deployed, live, and powering real businesses every day.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {SHOWCASE_CONFIG.map((project) => {
            const isTextRight = !project.invert;

            return (
              <motion.div 
                key={project.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className={`flex flex-col gap-10 md:gap-16 ${isTextRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
              >
                  
                  {/* Cinematic Massive Image Pane (65% Width) */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, x: isTextRight ? -60 : 60, scale: 0.95 },
                      visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20, duration: 1.2 } }
                    }}
                    className="w-full lg:w-[65%] relative group"
                  >
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
                  </motion.div>

                  {/* Context Pane (35% Width) */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, x: isTextRight ? 60 : -60, filter: 'blur(8px)' },
                      visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 100, damping: 20, duration: 1.2, delay: 0.2 } }
                    }}
                    className="w-full lg:w-[35%] flex flex-col justify-center"
                  >
                    {/* Product Type Badge */}
                    <div className="mb-4">
                      <span className={`text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full ${
                        project.type === 'saas' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
                      }`}>
                        {project.type === 'saas' ? 'Available Now' : 'Custom Built'}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-[42px] font-semibold tracking-tighter text-white mb-6">
                      {project.title}
                    </h3>
                    
                    <p className="text-[16px] leading-[1.7] text-zinc-400 mb-8 max-w-xl">
                      {project.description}
                    </p>

                    <div className="flex flex-col gap-3 mb-12">
                      {project.capabilities.map((cap, capIdx) => (
                         <motion.div 
                           key={cap} 
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.5 + capIdx * 0.1, duration: 0.5 }}
                           className="flex items-center gap-3 text-[13px] text-zinc-300 font-medium"
                         >
                           <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                           {cap}
                         </motion.div>
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
                  </motion.div>

              </motion.div>
            );
          })}
        </div>

        <div className="mt-40 text-center pt-16 border-t border-white/[0.04]">
          <Link href="/studio" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
            View All Products
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
