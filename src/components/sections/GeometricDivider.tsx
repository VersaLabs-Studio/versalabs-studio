'use client';

import { motion } from 'framer-motion';

const floatVariants = {
  initial: { y: 0 },
  animate: (i: number) => ({
    y: [0, -6, 0],
    transition: { duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' as const, delay: i * 0.3 },
  }),
};

const drawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const fadeSlideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

interface GeometricDividerProps {
  variant?: 'a' | 'b';
}

export default function GeometricDivider({ variant = 'a' }: GeometricDividerProps) {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden border-t border-white/[0.04] bg-[#0A0A0C]">
      {/* Ambient glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[140px] rounded-full pointer-events-none ${
        variant === 'a'
          ? 'bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5'
          : 'bg-gradient-to-br from-violet-500/5 via-transparent to-rose-500/5'
      }`} />

      <div className="mx-auto max-w-[1400px] relative z-10">
        {variant === 'a' ? <ContentVariantA /> : <ContentVariantB />}
      </div>
    </section>
  );
}

/* =========================================================================== */
/* VARIANT A — "Why Businesses Choose Us" — below CoreCapabilities           */
/* =========================================================================== */
function ContentVariantA() {
  const stats = [
    { value: '3x', label: 'Faster Than Agencies', desc: 'AI-augmented development means your platform ships in weeks, not months.' },
    { value: '0', label: 'Templates Used', desc: 'Every system is custom-built from scratch. No generic themes, no shortcuts.' },
    { value: '24h', label: 'Response Time', desc: 'Questions answered, bugs fixed, and features scoped — within a single business day.' },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="grid lg:grid-cols-2 gap-16 items-center"
    >
      {/* LEFT: Text Content */}
      <div>
        <motion.span custom={0} variants={fadeSlideUp} className="text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald-400/70 mb-6 block">
          Why Businesses Choose Us
        </motion.span>
        <motion.h2 custom={1} variants={fadeSlideUp} className="text-[36px] md:text-[44px] leading-[1.1] font-bold tracking-tighter text-white mb-6">
          Your idea deserves more than a template.
        </motion.h2>
        <motion.p custom={2} variants={fadeSlideUp} className="text-[16px] text-zinc-400 leading-relaxed mb-10 max-w-lg">
          Most agencies hand you a WordPress theme and call it a day. We architect real systems — platforms that handle your data, automate your workflows, and grow with your business. That&apos;s the VersaLabs difference.
        </motion.p>

        {/* Stats Row */}
        <div className="flex flex-col gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={3 + i}
              variants={fadeSlideIn}
              className="flex items-start gap-5 group"
            >
              <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] shadow-[0_0_15px_rgba(255,255,255,0.02)] group-hover:bg-white/[0.08] group-hover:border-white/[0.15] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300">
                <span className="text-xl font-bold text-white tracking-tighter">{stat.value}</span>
              </div>
              <div>
                <h4 className="text-white font-semibold text-[15px] mb-1">{stat.label}</h4>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT: Geometric SVG Composition */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8">
          {/* Isometric Cube */}
          <motion.div custom={0} variants={floatVariants} initial="initial" animate="animate" className="w-36 h-36 md:w-44 md:h-44">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path custom={0} variants={drawVariants} d="M50 15 L85 35 L85 65 L50 85 L15 65 L15 35 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <motion.path custom={1} variants={drawVariants} d="M50 15 L50 85 M15 35 L85 35 M15 65 L85 65" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="2 4" />
              <motion.circle custom={2} variants={drawVariants} cx="50" cy="50" r="12" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <motion.circle custom={3} variants={drawVariants} cx="50" cy="50" r="3" fill="rgba(255,255,255,0.15)" stroke="none" />
            </svg>
          </motion.div>

          {/* Nested Triangles */}
          <motion.div custom={1} variants={floatVariants} initial="initial" animate="animate" className="w-36 h-36 md:w-44 md:h-44">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path custom={0} variants={drawVariants} d="M50 15 L85 80 L15 80 Z" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <motion.path custom={1} variants={drawVariants} d="M50 30 L72 70 L28 70 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <motion.path custom={2} variants={drawVariants} d="M50 42 L62 62 L38 62 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            </svg>
          </motion.div>

          {/* Radial Lines */}
          <motion.div custom={2} variants={floatVariants} initial="initial" animate="animate" className="w-36 h-36 md:w-44 md:h-44">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                <motion.line key={angle} custom={i} variants={drawVariants}
                  x1="50" y1="50"
                  x2={50 + 35 * Math.cos((angle * Math.PI) / 180)}
                  y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
                  stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              ))}
              <motion.circle custom={6} variants={drawVariants} cx="50" cy="50" r="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
              <motion.circle custom={7} variants={drawVariants} cx="50" cy="50" r="2" fill="rgba(255,255,255,0.2)" stroke="none" />
            </svg>
          </motion.div>

          {/* DNA Helix */}
          <motion.div custom={3} variants={floatVariants} initial="initial" animate="animate" className="w-36 h-36 md:w-44 md:h-44">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path custom={0} variants={drawVariants} d="M30 15 Q70 30, 30 50 Q70 70, 30 85" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <motion.path custom={1} variants={drawVariants} d="M70 15 Q30 30, 70 50 Q30 70, 70 85" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              {[28, 40, 55, 68].map((y, i) => (
                <motion.line key={y} custom={i + 2} variants={drawVariants}
                  x1="38" y1={y} x2="62" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================================== */
/* VARIANT B — "From Addis to the World" — below FeaturedProjects           */
/* =========================================================================== */
function ContentVariantB() {
  const pillars = [
    { icon: '◆', title: 'Enterprise Grade', text: 'Built for businesses that need reliability. Our platforms handle thousands of users and never cut corners on security.' },
    { icon: '◎', title: 'Locally Rooted', text: 'We understand the Ethiopian market — Telebirr integrations, Amharic support, and design that resonates locally.' },
    { icon: '▲', title: 'Globally Ready', text: 'Stripe payments, multi-currency support, and infrastructure that serves users from Addis Ababa to New York.' },
    { icon: '⬡', title: 'AI-First Approach', text: 'Every product we build leverages artificial intelligence — from automated workflows to smart analytics and predictions.' },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {/* Top: Headline + SVGs */}
      <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
        {/* Left SVGs */}
        <div className="lg:col-span-2 flex items-center justify-center gap-6">
          <motion.div custom={0} variants={floatVariants} initial="initial" animate="animate" className="w-32 h-32 md:w-40 md:h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.ellipse custom={0} variants={drawVariants} cx="50" cy="50" rx="35" ry="15" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" transform="rotate(-30 50 50)" />
              <motion.ellipse custom={1} variants={drawVariants} cx="50" cy="50" rx="35" ry="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" transform="rotate(30 50 50)" />
              <motion.ellipse custom={2} variants={drawVariants} cx="50" cy="50" rx="35" ry="15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" transform="rotate(90 50 50)" />
              <motion.circle custom={3} variants={drawVariants} cx="50" cy="50" r="4" fill="rgba(255,255,255,0.15)" stroke="none" />
            </svg>
          </motion.div>
          <motion.div custom={1} variants={floatVariants} initial="initial" animate="animate" className="w-32 h-32 md:w-40 md:h-40 hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path custom={0} variants={drawVariants} d="M50 18 L80 33 L80 67 L50 82 L20 67 L20 33 Z" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <motion.path custom={1} variants={drawVariants} d="M50 30 L68 40 L68 60 L50 70 L32 60 L32 40 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <motion.line custom={2} variants={drawVariants} x1="50" y1="18" x2="50" y2="82" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            </svg>
          </motion.div>
        </div>

        {/* Right: Text */}
        <div className="lg:col-span-3">
          <motion.span custom={0} variants={fadeSlideUp} className="text-[11px] uppercase tracking-[0.2em] font-semibold text-violet-400/70 mb-6 block">
            From Addis Ababa to the World
          </motion.span>
          <motion.h2 custom={1} variants={fadeSlideUp} className="text-[36px] md:text-[44px] leading-[1.1] font-bold tracking-tighter text-white mb-6">
            Software that speaks your language —{' '}
            <span className="text-zinc-500">literally.</span>
          </motion.h2>
          <motion.p custom={2} variants={fadeSlideUp} className="text-[16px] text-zinc-400 leading-relaxed max-w-2xl">
            We build platforms that work for businesses here in Ethiopia and around the world. Whether you need Amharic content management, Telebirr payment integration, or a multi-currency system for global customers — we&apos;ve done it. Every product in our portfolio started with a real business problem and ended with a deployed, working solution.
          </motion.p>
        </div>
      </div>

      {/* Bottom: 4-Pillar Bento Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.04] rounded-2xl overflow-hidden">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            custom={3 + i}
            variants={fadeSlideUp}
            className={`p-8 flex flex-col group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.03] hover:z-10 ${
              i < 3 ? 'border-b sm:border-b-0 sm:border-r border-white/[0.04]' : ''
            } ${i < 2 ? 'sm:border-b lg:border-b-0' : ''}`}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-3xl mb-5 text-white/40 group-hover:text-white transition-colors duration-500">{pillar.icon}</span>
            <h3 className="relative text-[16px] font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
            <p className="relative text-[14px] text-zinc-400 leading-relaxed">{pillar.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
