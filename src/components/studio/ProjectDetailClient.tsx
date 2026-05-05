'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, ArrowRight, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, GlassCard, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import ProjectSlideshow from '@/components/ui/ProjectSlideshow';
import type { DetailProjectData } from '@/app/projects/[slug]/page';
import type { SimilarProject } from '@/app/projects/[slug]/page';
import type { TechLayer, BoundedContext, SchemaTable, Feature, ADRRecord } from '@/config/project-database';

interface Props {
  project: DetailProjectData;
  similarProjects: SimilarProject[];
}

export default function ProjectDetailClient({ project, similarProjects }: Props) {
  const [showTechnical, setShowTechnical] = useState(false);

  const allGalleryImages = [...project.mockupImages, ...project.screenshotImages];

  return (
    <div className="min-h-screen bg-[#0A0A0C] pb-32">

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO HEADER                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="w-full pt-32 pb-24 border-b border-white/[0.04] relative overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b ${project.heroGradient} blur-[120px] rounded-full pointer-events-none opacity-40`} />

        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <FadeIn>
            <Link href="/studio" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-12">
              <ArrowLeft className="h-4 w-4" />
              Back to Studio
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-sm bg-gradient-to-r ${project.heroGradient} border border-white/[0.06] text-white`}>
                {project.category}
              </span>
              <span className="text-xs font-medium text-zinc-400 border border-white/[0.06] px-3 py-1.5 rounded-sm bg-[#141417]">
                {project.year}
              </span>
              <span className="text-xs font-medium text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-sm bg-emerald-500/10">
                {project.status}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mb-4">
              {project.subtitle}
            </p>
            <p className="text-[17px] text-zinc-500 leading-relaxed max-w-3xl mb-10">
              {project.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold transition-all hover:bg-zinc-200 hover:scale-[1.02]">
                  View Live Platform
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1C1C1F] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#27272A] hover:scale-[1.02]">
                  View on GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-medium text-zinc-400 transition-all hover:text-white hover:border-white/20">
                Get This Platform
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-16">

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SLIDESHOW — Mockup Images                                     */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {project.mockupImages.length > 0 && (
          <FadeIn delay={0.4}>
            <div className="mb-24 rounded-2xl overflow-hidden shadow-2xl border border-white/[0.04]">
              <ProjectSlideshow
                images={project.mockupImages}
                title={project.title}
                intervalMs={4500}
                hoverOnly={false}
              />
            </div>
          </FadeIn>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* THE PROBLEM & SOLUTION — Business Narrative                   */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <StaggerContainer className="grid md:grid-cols-2 gap-12 mb-24">
          <StaggerItem>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-500">The Challenge</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Why This Exists</h2>
            <p className="text-[16px] leading-[1.9] text-zinc-400">
              {project.businessProblem}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-500">The Solution</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">How We Solved It</h2>
            <p className="text-[16px] leading-[1.9] text-zinc-400">
              {project.architecturalSolution}
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* KEY FEATURES — Non-Technical Showcase                         */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <FadeIn>
          <div className="mb-24">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-500 block mb-4">Capabilities</span>
            <h2 className="text-3xl font-bold text-white mb-12">What You Get</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature: Feature, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-white/[0.06] bg-[#141417] hover:border-white/[0.12] transition-colors"
                >
                  <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-zinc-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* INLINE CTA — Engagement Block                                 */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <FadeIn>
          <div className="mb-24 p-10 md:p-14 rounded-2xl bg-gradient-to-br from-[#141417] to-[#111113] border border-white/[0.06] relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-[300px] h-[200px] bg-gradient-to-bl ${project.heroGradient} blur-[80px] opacity-30 pointer-events-none`} />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Interested in {project.title}?
              </h3>
              <p className="text-[16px] text-zinc-400 mb-8 max-w-lg">
                Whether you want to deploy this platform for your organization, customize it for your industry, or build something entirely new — we are ready to talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center h-12 px-8 rounded-full bg-white text-black text-[15px] font-semibold transition-colors hover:bg-zinc-200">
                    Schedule a Demo
                  </motion.div>
                </Link>
                <Link href="/studio">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center h-12 px-8 rounded-full bg-[#1A1A1A] border border-white/[0.08] text-white text-[15px] font-semibold transition-colors hover:bg-[#222222]">
                    Explore More Products
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* FULL GALLERY — Mockups + Screenshots                          */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {allGalleryImages.length > 0 && (
          <FadeIn>
            <div className="mb-24">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-500 block mb-4">Visual Gallery</span>
              <h2 className="text-3xl font-bold text-white mb-12">See It in Action</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {allGalleryImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-xl border border-white/[0.04] bg-[#0E0E10] ${
                      idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[3/2]'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} — View ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-[1.02] transition-transform duration-700"
                      sizes={idx === 0 ? '100vw' : '50vw'}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SIMILAR PROJECTS                                              */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {similarProjects.length > 0 && (
          <FadeIn>
            <div className="mb-24">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-500 block mb-4">Related Products</span>
              <h2 className="text-3xl font-bold text-white mb-12">You May Also Like</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {similarProjects.map((sp: SimilarProject) => (
                  <Link key={sp.slug} href={`/projects/${sp.slug}`} className="block group">
                    <div className="rounded-xl border border-white/[0.06] bg-[#141417] overflow-hidden hover:border-white/[0.12] transition-colors">
                      {sp.thumbnail && (
                        <div className="relative aspect-[3/2] overflow-hidden">
                          <Image
                            src={sp.thumbnail}
                            alt={sp.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="33vw"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-sm bg-gradient-to-r ${sp.heroGradient} border border-white/[0.06] text-white/80 inline-block mb-3`}>
                          {sp.category}
                        </span>
                        <h3 className="text-white font-semibold mb-1 group-hover:text-zinc-300 transition-colors">{sp.title}</h3>
                        <p className="text-[13px] text-zinc-500 line-clamp-2">{sp.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* BOTTOM CTA                                                    */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <FadeIn>
          <div className="mb-24 text-center py-20 border-t border-b border-white/[0.04]">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
              Let&apos;s build your next platform.
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg mx-auto">
              Every product in our studio started as a conversation. Tell us what you need, and we will show you what is possible.
            </p>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 h-12 px-10 rounded-full bg-white text-black text-[15px] font-semibold transition-colors hover:bg-zinc-200">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Link>
          </div>
        </FadeIn>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* TOGGLEABLE TECHNICAL SECTION — Footer                         */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="mb-16">
          <button
            onClick={() => setShowTechnical(!showTechnical)}
            className="w-full flex items-center justify-between p-6 rounded-xl border border-white/[0.06] bg-[#141417] hover:bg-[#1A1A1C] transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-white font-semibold">Technical Architecture & Engineering Details</span>
              <span className="text-[11px] text-zinc-500 bg-white/[0.04] px-2 py-0.5 rounded">For Engineers</span>
            </div>
            {showTechnical ? <ChevronUp className="h-5 w-5 text-zinc-400" /> : <ChevronDown className="h-5 w-5 text-zinc-400" />}
          </button>

          <AnimatePresence>
            {showTechnical && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-8 flex flex-col gap-12">

                  {/* System Architecture */}
                  <GlassCard className="p-8">
                    <h3 className="text-lg font-semibold text-white mb-6">System Architecture</h3>
                    <div className="mb-6">
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">Pattern</span>
                      <div className="text-[15px] text-white font-medium">{project.architecture.pattern}</div>
                    </div>
                    <div className="mb-6">
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 block">Data Flow</span>
                      <div className="p-4 rounded-lg bg-[#141417] border border-white/[0.04] font-mono text-[13px] text-emerald-400 leading-relaxed overflow-x-auto">
                        {project.systemFlow}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 block">Design Patterns</span>
                      <div className="flex flex-wrap gap-2">
                        {project.architecture.designPatterns.map(pattern => (
                          <span key={pattern} className="px-3 py-1.5 rounded-md bg-[#1C1C1F] border border-white/[0.06] text-[12px] text-zinc-300">
                            {pattern}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>

                  {/* Bounded Contexts & Schema */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-6">Bounded Contexts (DDD)</h3>
                      <div className="flex flex-col gap-4">
                        {project.boundedContexts.map((ctx: BoundedContext) => (
                          <div key={ctx.name} className="p-5 rounded-xl border border-white/[0.06] bg-[#141417]">
                            <h4 className="text-white font-semibold mb-2">{ctx.name}</h4>
                            <p className="text-[12px] text-zinc-400 mb-3">{ctx.responsibility}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {ctx.entities.map(entity => (
                                <span key={entity} className="px-2 py-1 bg-white/[0.03] border border-white/[0.04] rounded text-[10px] font-mono text-zinc-400">
                                  {entity}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-6">Core Schema</h3>
                      <div className="flex flex-col gap-4">
                        {project.schema.map((table: SchemaTable) => (
                          <div key={table.name} className="p-5 rounded-xl border border-white/[0.06] bg-[#141417]">
                            <h4 className="text-white font-semibold font-mono text-sm mb-2">{table.name}</h4>
                            <p className="text-[12px] text-zinc-400 mb-3">{table.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {table.keyFields.map(field => (
                                <span key={field} className="px-2 py-1 bg-white/[0.03] border border-white/[0.04] rounded text-[10px] font-mono text-emerald-400/80">
                                  {field}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Technology Stack</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {project.techStack.map((layer: TechLayer) => (
                        <GlassCard key={layer.label} className="p-6">
                          <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-5">{layer.label}</h4>
                          <div className="flex flex-col gap-3">
                            {layer.items.map(item => (
                              <div key={item.name} className="flex flex-col gap-0.5">
                                <div className="flex items-center gap-2">
                                  <span className="text-white text-[14px]">{item.name}</span>
                                  {item.version && <span className="text-[10px] font-mono text-zinc-500 bg-white/[0.04] px-1.5 py-0.5 rounded">{item.version}</span>}
                                </div>
                                <span className="text-[12px] text-zinc-400">{item.purpose}</span>
                              </div>
                            ))}
                          </div>
                        </GlassCard>
                      ))}
                    </div>
                  </div>

                  {/* ADRs */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Architecture Decision Records</h3>
                    <div className="flex flex-col gap-3">
                      {project.adrs.map((adr: ADRRecord) => (
                        <div key={adr.id} className="p-4 rounded-xl border border-white/[0.06] bg-[#141417] flex flex-col md:flex-row md:items-center gap-3">
                          <div className="md:w-28 shrink-0">
                            <span className="text-[10px] font-mono text-zinc-500 block mb-1">{adr.id}</span>
                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-sm inline-block ${
                              adr.status === 'Accepted' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                              adr.status === 'Deprecated' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                              'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            }`}>
                              {adr.status}
                            </span>
                          </div>
                          <div className="flex-1 md:border-l md:border-white/[0.04] md:pl-4">
                            <h4 className="text-white text-sm font-medium mb-1">{adr.title}</h4>
                            <p className="text-[12px] text-zinc-400">{adr.rationale}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
