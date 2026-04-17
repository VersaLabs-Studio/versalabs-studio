'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] flex-col items-center justify-center px-6 pt-24 text-center overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="relative z-10 flex flex-col items-center w-full max-w-5xl"
      >
        {/* Announcer Badge */}
        <motion.div variants={fadeUpVariants} className="mb-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-[#ffffff05] backdrop-blur-md px-4 py-1.5 text-[13px] font-medium text-zinc-300 shadow-2xl transition-colors hover:bg-[#ffffff08]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span>AI-Driven Digital Infrastructure & Enterprise Systems</span>
          </div>
        </motion.div>

        {/* Huge Heading */}
        <motion.h1 
          variants={fadeUpVariants} 
          className="text-[42px] leading-[1.05] font-semibold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Engineering Autonomous
          <br />
          <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Enterprise Systems
          </span>
          <br />
          & Digital Architecture
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={fadeUpVariants} 
          className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-zinc-400"
        >
          VersaLabs is an elite product studio specializing in AI-first architecture, agentic workflows, and Domain-Driven Design. We engineer mission-critical autonomous platforms for visionaries and global operational leaders.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={fadeUpVariants} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/studio">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.9)" }}
              whileTap={{ scale: 0.98 }}
              className="flex h-11 items-center gap-2 rounded-full bg-white px-6 text-[14px] font-semibold text-black transition-colors"
            >
              Explore The Studio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-11 items-center rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-md px-6 text-[14px] font-medium text-white transition-colors hover:bg-white/[0.08]"
            >
              Initialize B2B Contract
            </motion.button>
          </Link>
        </motion.div>

        {/* Glassmorphic Stats Grid */}
        <motion.div 
          variants={fadeUpVariants} 
          className="mt-24 grid w-full max-w-4xl grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0C]/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)]"
        >
          {[
            { val: "12+", label: "Enterprise Architectures" },
            { val: "100%", label: "Schema-First & DDD Focus" },
            { val: "Native", label: "AI & MCP Integrations" },
          ].map((stat, i) => (
            <div key={i} className="group flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white/[0.04] to-transparent hover:from-white/[0.06] transition-all duration-500">
              <div className="text-[40px] font-semibold tracking-tighter text-white drop-shadow-md mb-2 group-hover:scale-105 transition-transform duration-500">
                {stat.val}
              </div>
              <div className="text-[12px] font-medium text-zinc-400 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Down Arrow / Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-500 backdrop-blur-md transition-colors hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
