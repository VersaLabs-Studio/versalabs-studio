'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const FEATURES = [
  { label: 'CRM & Sales', delay: 0 },
  { label: 'Manufacturing', delay: 0.1 },
  { label: 'Inventory', delay: 0.2 },
  { label: 'Accounting', delay: 0.3 },
  { label: 'AI-Powered', delay: 0.4 },
];

export default function ObsidianShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0.8, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0A0A0C] py-12 md:py-20"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-br from-violet-500/10 via-indigo-500/8 to-purple-600/5 blur-[140px] rounded-full pointer-events-none animate-glow-pulse" />

      <div className="mx-auto max-w-[1400px] px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-violet-400/80 mb-4">
            <span className="w-8 h-[1px] bg-violet-400/40" />
            Flagship Product
            <span className="w-8 h-[1px] bg-violet-400/40" />
          </span>
        </motion.div>

        {/* IMAX Container */}
        <Link href="/projects/obsidian-erp-v3.0" className="block group">
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-violet-500/5"
          >
            {/* Parallax Image */}
            <motion.div
              style={{ scale: imageScale, y: imageY }}
              className="absolute inset-0"
            >
              <Image
                src="/Obsidian ERP/Mockups/New folder/obsidian-erp-2 (2).png"
                alt="Obsidian ERP v3.0 — All-in-One Business Platform"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Gradient Overlay */}
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 z-10">
              {/* Floating Feature Pills */}
              <div className="hidden md:flex flex-wrap gap-2 mb-8">
                {FEATURES.map((feat) => (
                  <motion.span
                    key={feat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + feat.delay, duration: 0.5 }}
                    className="px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] text-[12px] font-medium text-white/80"
                  >
                    {feat.label}
                  </motion.span>
                ))}
              </div>

              {/* Title & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-3">
                  Obsidian ERP
                </h2>
                <p className="text-[15px] md:text-lg text-zinc-300 max-w-xl mb-6 leading-relaxed">
                  Run your entire business from one place. Sales, inventory, manufacturing, 
                  and accounting — connected in a single platform.
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold text-[15px] group-hover:gap-3 transition-all">
                  Explore Platform
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.div>
            </div>

            {/* Corner Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-violet-500/10 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
