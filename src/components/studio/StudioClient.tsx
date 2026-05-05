'use client';

import { useState } from 'react';
import { Search, ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, GlassCard } from '@/components/ui/motion';
import type { StudioProjectData } from '@/app/studio/page';

interface StudioClientProps {
  projects: StudioProjectData[];
}

const FEATURED_SLUGS = ['threatmatrix-ai', 'obsidian-erp-v3.0'];
const FEATURED_HERO_IMAGES: Record<string, string> = {
  'threatmatrix-ai': '/ThreatMatrix AI/Mockups/threatmatrix-ai-1.png',
  'obsidian-erp-v3.0': '/Obsidian ERP/Mockups/New folder/obsidian-erp-2 (2).png',
};

export default function StudioClient({ projects }: StudioClientProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const allCategories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];
  const featuredProjects = projects.filter(p => FEATURED_SLUGS.includes(p.slug));

  const filtered = projects.filter((p) => {
    const matchesSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.summary.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION — Featured Products (Apple-style full-width rows)    */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 pt-32 pb-24 bg-[#0A0A0C]">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
              VersaLabs Studio.
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mb-20">
              Enterprise software, built to last. Explore the platforms powering businesses across security, commerce, finance, and operations.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-16">
            {featuredProjects.map((project, idx) => (
              <FadeIn key={project.slug} delay={idx * 0.15}>
                <Link href={`/projects/${project.slug}`} className="block group">
                  <div className="relative overflow-hidden rounded-2xl bg-[#111113] border border-white/[0.06]">
                    {/* Large Hero Image */}
                    <div className="relative w-full aspect-[21/9] overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200, damping: 30 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={FEATURED_HERO_IMAGES[project.slug] || project.thumbnail || ''}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1280px) 100vw, 1280px"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent" />
                      </motion.div>
                    </div>

                    {/* Product Info Bar */}
                    <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-sm bg-gradient-to-r ${project.heroGradient} border border-white/[0.06] text-white`}>
                            {project.category}
                          </span>
                          <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-sm">
                            {project.status}
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-3">
                          {project.title}
                        </h2>
                        <p className="text-[17px] text-zinc-400 max-w-2xl leading-relaxed">
                          {project.summary}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                          Explore
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FULL CATALOG — 2-Column Grid with Large Thumbnails               */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 bg-[#0A0A0C] border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
              Full Product Catalog
            </h2>
            <p className="text-[16px] text-zinc-500 mb-12 max-w-xl">
              Every platform we have shipped — from enterprise SaaS to mobile fintech. Filter by domain to find what matters to your business.
            </p>
          </FadeIn>

          {/* Filters */}
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex flex-wrap items-center gap-2">
              {allCategories.map((cat: string) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-white text-black'
                      : 'bg-[#1C1C1F] text-zinc-400 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  {cat === 'all' ? 'All Domains' : cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-white/[0.08] bg-[#141417] pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/[0.15] transition-colors"
              />
            </div>
          </div>

          {/* 2-Column Product Grid */}
          <StaggerContainer staggerDelay={0.08}>
            <div className="grid gap-8 md:grid-cols-2">
              {filtered.map((project: StudioProjectData) => (
                <StaggerItem key={project.slug}>
                  <Link href={`/projects/${project.slug}`} className="block h-full group">
                    <GlassCard className="h-full flex flex-col overflow-hidden transition-colors hover:border-white/[0.12]">
                      
                      {/* Thumbnail Image — Large 3:2 Display */}
                      {project.thumbnail && (
                        <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#0E0E10]">
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            className="relative w-full h-full"
                          >
                            <Image
                              src={project.thumbnail}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </motion.div>
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm bg-gradient-to-r ${project.heroGradient} border border-white/[0.06] text-white/90`}>
                            {project.category}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-medium text-zinc-500 border border-white/[0.06] px-2 py-0.5 rounded-sm">
                              {project.year}
                            </span>
                            <span className="text-[11px] font-medium text-emerald-500/80 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-sm">
                              {project.status}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between group-hover:text-zinc-300 transition-colors">
                          {project.title}
                          <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-zinc-400" />
                        </h3>

                        <p className="text-[13px] font-medium text-zinc-400 mb-3 line-clamp-1">
                          {project.subtitle}
                        </p>

                        <p className="text-sm text-zinc-500 leading-relaxed mb-6 line-clamp-3 flex-1">
                          {project.summary}
                        </p>

                        <div className="mt-auto pt-5 border-t border-white/[0.04] flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag: string) => (
                              <span key={tag} className="text-xs text-zinc-500">#{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-zinc-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CTA SECTION                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-32 bg-[#0A0A0C] border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Ready to build something extraordinary?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
              Whether you need a custom platform built from scratch or want to deploy one of our existing products, we are ready to deliver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center h-12 px-8 rounded-full bg-white text-black text-[15px] font-semibold tracking-wide transition-colors hover:bg-zinc-200">
                  Start a Project
                </motion.div>
              </Link>
              <Link href="/services">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center h-12 px-8 rounded-full bg-[#1A1A1A] border border-white/[0.08] text-white text-[15px] font-semibold tracking-wide transition-colors hover:bg-[#222222]">
                  View Services
                </motion.div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
