'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Monitor, ShoppingCart, Brain, Smartphone, Globe, Users } from 'lucide-react';
import { FadeIn, SlideIn, ScaleIn, StaggerContainer, StaggerItem, GlassCard } from '@/components/ui/motion';
import type { ProjectEntry } from '@/config/project-database';

const SPRING = { stiffness: 300, damping: 30 };

interface ServicesClientProps {
  projects: ProjectEntry[];
}

const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1, opacity: 1,
    transition: { duration: 1.5, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const services = [
  {
    title: 'Custom Business Platforms',
    description: 'ERPs, CRMs, and operational dashboards built from scratch — designed around the way your business actually works.',
    icon: Monitor,
    capabilities: ['Sales & customer management', 'Inventory and warehouse tracking', 'Financial reporting & invoicing', 'Multi-branch support'],
    exampleSlugs: ['obsidian-erp-v3.0'],
  },
  {
    title: 'Online Stores',
    description: 'Beautiful, fast e-commerce platforms with secure payments, real-time inventory, and a checkout experience that converts.',
    icon: ShoppingCart,
    capabilities: ['Secure payment processing', 'Real-time stock sync', 'Mobile-optimized design', 'Multi-language support'],
    exampleSlugs: ['oskaz-ecommerce', 'minab-clothing', 'tibeb'],
  },
  {
    title: 'AI & Intelligent Systems',
    description: 'From network security to smart automation — we build AI-powered tools that watch, learn, and act on your behalf.',
    icon: Brain,
    capabilities: ['Real-time threat detection', 'AI-powered analysis & alerts', 'Automated workflows', 'Custom ML models'],
    exampleSlugs: ['threatmatrix-ai', 'jarvis'],
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps for payments, services, and on-the-go business management — smooth, fast, and reliable.',
    icon: Smartphone,
    capabilities: ['iOS & Android support', 'Offline-capable design', 'Push notifications', 'Biometric authentication'],
    exampleSlugs: ['fastpay'],
  },
  {
    title: 'Corporate Websites',
    description: 'Professional, polished websites that represent your brand. SEO-optimized, mobile-friendly, and built to impress.',
    icon: Globe,
    capabilities: ['Responsive design', 'Search engine optimization', 'Content management', 'Analytics integration'],
    exampleSlugs: ['pana-web', 'live-addis', 'unlock-ethiopia-potential'],
  },
  {
    title: 'Queue & Operations Systems',
    description: 'Manage walk-in customers, appointments, and multi-location operations with real-time dashboards and self-service kiosks.',
    icon: Users,
    capabilities: ['Self-service kiosks', 'Live queue dashboards', 'Multi-department routing', 'Performance analytics'],
    exampleSlugs: ['auroqueue'],
  },
];

const processSteps = [
  { step: '01', title: 'Discover', description: 'We learn about your business, your users, and what success looks like for you.' },
  { step: '02', title: 'Design', description: 'We create wireframes and visual mockups so you can see exactly what you\'re getting before we write any code.' },
  { step: '03', title: 'Build', description: 'Our team builds your platform using modern technology with weekly progress updates and demo sessions.' },
  { step: '04', title: 'Launch', description: 'We deploy your platform, train your team, and provide ongoing support to make sure everything runs smoothly.' },
];

const trustSignals = [
  { value: '15+', label: 'Products Shipped', desc: 'Real platforms in production serving real users every day.' },
  { value: '4-8wk', label: 'Average Timeline', desc: 'Most MVPs are live and serving customers in under two months.' },
  { value: '100%', label: 'Custom Built', desc: 'Zero templates. Every line of code is written for your business.' },
  { value: '24/7', label: 'Production Support', desc: 'We don\'t disappear after launch. Your platform is monitored and maintained.' },
];

export default function ServicesClient({ projects }: ServicesClientProps) {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [activeTrustIdx, setActiveTrustIdx] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  return (
    <div className="min-h-screen">

      {/* =================================================================== */}
      {/* HERO                                                              */}
      {/* =================================================================== */}
      <section ref={heroRef} className="relative px-6 pt-40 pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-br from-violet-500/8 via-white/[0.02] to-indigo-500/8 blur-[140px] rounded-full pointer-events-none" />

        {/* Floating geometric accents */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }} className="absolute inset-0 pointer-events-none">
          <motion.div animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' as const }}
            className="absolute top-[25%] right-[8%] w-20 h-20 border border-white/[0.04] rounded-xl rotate-12" />
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: 1 }}
            className="absolute bottom-[20%] left-[10%] w-14 h-14 border border-white/[0.03] rounded-full" />
        </motion.div>
        
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="mx-auto max-w-[1400px] relative z-10">
          <div className="max-w-3xl">
            <SlideIn direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-8">
                <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">What We Do</span>
              </div>
            </SlideIn>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                Enterprise Software,{' '}
                <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                  Delivered.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                From a single idea to a fully operational business platform. We design, build, and deploy the software that powers your organization — no shortcuts, no templates, no excuses.
              </p>
            </FadeIn>
          </div>
        </motion.div>
      </section>

      {/* =================================================================== */}
      {/* TRUST SIGNALS — Interactive Showcase                              */}
      {/* =================================================================== */}
      <section className="px-6 py-24 border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-[1400px] relative z-10">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald-400/70 mb-6 block">Why VersaLabs</span>
            <h2 className="text-[32px] md:text-[40px] leading-[1.1] font-bold tracking-tighter text-white mb-16">
              Numbers that matter.
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 relative">
            {/* Left: Navigation Menu */}
            <div className="lg:col-span-5 flex flex-col gap-0 border-l border-white/[0.04]">
              {trustSignals.map((signal, idx) => (
                <div 
                  key={signal.label}
                  onMouseEnter={() => setActiveTrustIdx(idx)}
                  className={`cursor-pointer px-6 md:px-10 py-8 border-b border-white/[0.04] transition-all duration-500 relative group overflow-hidden ${
                    activeTrustIdx === idx ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-500 ${
                    activeTrustIdx === idx ? 'bg-emerald-500' : 'bg-transparent'
                  }`} />
                  
                  <div className="flex justify-between items-center relative z-10">
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                      activeTrustIdx === idx ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}>
                      {signal.label}
                    </h3>
                    <div className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${
                      activeTrustIdx === idx ? 'text-emerald-400' : 'text-zinc-800 group-hover:text-zinc-700'
                    }`}>
                      {signal.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: The Stage */}
            <div className="lg:col-span-7 relative h-[500px] lg:h-[600px] lg:sticky lg:top-32">
              <div className="absolute inset-0 rounded-2xl border border-white/[0.04] bg-[#0E0E10] overflow-hidden flex flex-col">
                {/* SVG Visual Stage */}
                <div className="relative h-3/5 w-full bg-[#08080A] flex items-center justify-center overflow-hidden border-b border-white/[0.04]">
                  {/* Glowing background behind SVG */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                  
                  {trustSignals.map((signal, idx) => (
                    <motion.div
                      key={`trust-svg-${idx}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: activeTrustIdx === idx ? 1 : 0,
                        scale: activeTrustIdx === idx ? 1 : 0.95,
                        zIndex: activeTrustIdx === idx ? 10 : 0
                      }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <svg viewBox="0 0 400 400" className="w-[80%] max-w-[400px] opacity-80">
                        <g fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-500">
                          {idx === 0 && (
                            <>
                              <path d="M140 160 L200 120 L260 160 L260 240 L200 280 L140 240 Z" stroke="rgba(255,255,255,0.2)" />
                              <path d="M120 150 L180 110 L240 150 L240 230 L180 270 L120 230 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.4)" />
                              <circle cx="200" cy="200" r="10" stroke="rgba(255,255,255,0.5)" />
                            </>
                          )}
                          {idx === 1 && (
                            <>
                              <circle cx="200" cy="200" r="80" stroke="rgba(255,255,255,0.1)" strokeDasharray="6 6" />
                              <circle cx="200" cy="200" r="60" stroke="rgba(255,255,255,0.2)" />
                              <path d="M200 200 L200 150 M200 200 L235 235" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                              <circle cx="200" cy="200" r="6" fill="white" />
                            </>
                          )}
                          {idx === 2 && (
                            <>
                              <path d="M120 200 C 120 140, 160 120, 200 120 C 240 120, 280 140, 280 200 C 280 260, 240 280, 200 280 C 160 280, 120 260, 120 200" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" />
                              <path d="M160 200 L240 200 M200 160 L200 240" stroke="rgba(255,255,255,0.1)" />
                              <circle cx="200" cy="200" r="40" stroke="rgba(255,255,255,0.2)" />
                            </>
                          )}
                          {idx === 3 && (
                            <>
                              <path d="M140 220 L260 220 L200 120 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.4)" />
                              <path d="M120 240 L280 240 L200 100 Z" stroke="rgba(255,255,255,0.1)" />
                              <circle cx="200" cy="180" r="16" stroke="rgba(255,255,255,0.3)" />
                            </>
                          )}
                        </g>
                      </svg>
                    </motion.div>
                  ))}
                </div>

                {/* Content Details Stage */}
                <div className="relative h-2/5 p-6 lg:p-12 overflow-hidden bg-[#0E0E10]">
                  {trustSignals.map((signal, idx) => (
                    <motion.div
                      key={`trust-content-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: activeTrustIdx === idx ? 1 : 0,
                        y: activeTrustIdx === idx ? 0 : 20,
                        zIndex: activeTrustIdx === idx ? 10 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 p-6 lg:p-12 pointer-events-none flex flex-col justify-center"
                    >
                      <div className={activeTrustIdx === idx ? 'pointer-events-auto' : ''}>
                        <div className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                          {signal.value}
                        </div>
                        <h4 className="text-xl font-semibold text-emerald-400 mb-4">{signal.label}</h4>
                        <p className="text-[15px] md:text-[16px] text-zinc-400 leading-relaxed max-w-xl">
                          {signal.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SERVICE OFFERINGS — Interactive Showcase                            */}
      {/* =================================================================== */}
      <section className="px-6 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">What We Build</h2>
            <p className="text-[16px] text-zinc-500 mb-16 max-w-xl">
              Six core areas of expertise — each backed by real projects we&apos;ve shipped and deployed.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 relative">
            {/* Left: Navigation Menu */}
            <div className="lg:col-span-5 flex flex-col gap-0 border-l border-white/[0.04]">
              {services.map((service, idx) => (
                <div 
                  key={service.title}
                  onMouseEnter={() => setActiveServiceIdx(idx)}
                  className={`cursor-pointer px-6 md:px-10 py-8 border-b border-white/[0.04] transition-all duration-500 relative group overflow-hidden ${
                    activeServiceIdx === idx ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-500 ${
                    activeServiceIdx === idx ? 'bg-violet-500' : 'bg-transparent'
                  }`} />
                  
                  <div className="flex justify-between items-center relative z-10">
                    <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${
                      activeServiceIdx === idx ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}>
                      {service.title}
                    </h3>
                    <service.icon className={`h-6 w-6 transition-colors duration-500 ${
                      activeServiceIdx === idx ? 'text-violet-400' : 'text-zinc-700'
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Right: The Stage */}
            <div className="lg:col-span-7 relative h-[600px] lg:h-[700px] lg:sticky lg:top-32">
              <div className="absolute inset-0 rounded-2xl border border-white/[0.04] bg-[#0E0E10] overflow-hidden flex flex-col">
                {/* SVG Visual Stage */}
                <div className="relative h-3/5 w-full bg-[#08080A] flex items-center justify-center overflow-hidden border-b border-white/[0.04]">
                  {/* Glowing background behind SVG */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/10 blur-[80px] rounded-full pointer-events-none" />
                  
                  {services.map((service, idx) => (
                    <motion.div
                      key={`svg-${idx}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: activeServiceIdx === idx ? 1 : 0,
                        scale: activeServiceIdx === idx ? 1 : 0.95,
                        zIndex: activeServiceIdx === idx ? 10 : 0
                      }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <svg viewBox="0 0 400 400" className="w-[80%] max-w-[400px] opacity-80">
                        <g fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-500">
                          {idx === 0 && (
                            <>
                              <path d="M200 100 L320 160 L200 220 L80 160 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                              <circle cx="200" cy="160" r="30" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
                              <path d="M200 140 L320 200 L200 260 L80 200 Z" stroke="rgba(255,255,255,0.1)" />
                              <path d="M200 180 L320 240 L200 300 L80 240 Z" stroke="rgba(255,255,255,0.1)" />
                            </>
                          )}
                          {idx === 1 && (
                            <>
                              <circle cx="200" cy="200" r="80" stroke="rgba(255,255,255,0.1)" />
                              <ellipse cx="200" cy="200" rx="120" ry="40" stroke="rgba(255,255,255,0.3)" transform="rotate(-30 200 200)" />
                              <ellipse cx="200" cy="200" rx="120" ry="40" stroke="rgba(255,255,255,0.3)" transform="rotate(30 200 200)" />
                              <circle cx="200" cy="200" r="8" fill="white" />
                            </>
                          )}
                          {idx === 2 && (
                            <>
                              <path d="M100 280 L120 270 L120 290 L100 300 Z" stroke="rgba(255,255,255,0.2)" />
                              <path d="M160 250 L180 240 L180 280 L160 290 Z" stroke="rgba(255,255,255,0.2)" />
                              <path d="M220 220 L240 210 L240 270 L220 280 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                              <path d="M280 200 L300 190 L300 260 L280 270 Z" stroke="rgba(255,255,255,0.2)" />
                            </>
                          )}
                          {idx === 3 && (
                            <>
                              <path d="M120 120 L280 120 L280 280 L120 280 Z" strokeDasharray="8 8" stroke="rgba(255,255,255,0.1)" />
                              <path d="M140 140 L260 140 L260 260 L140 260 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                              <circle cx="200" cy="200" r="12" fill="white" />
                            </>
                          )}
                          {idx === 4 && (
                            <>
                              <circle cx="120" cy="200" r="30" stroke="rgba(255,255,255,0.3)" />
                              <circle cx="280" cy="200" r="30" stroke="rgba(255,255,255,0.3)" />
                              <circle cx="200" cy="120" r="30" stroke="rgba(255,255,255,0.3)" />
                              <circle cx="200" cy="280" r="30" stroke="rgba(255,255,255,0.3)" />
                              <path d="M141 179 L179 141 M259 179 L221 141 M141 221 L179 259 M259 221 L221 259" stroke="rgba(255,255,255,0.1)" />
                              <circle cx="200" cy="200" r="10" fill="white" />
                            </>
                          )}
                          {idx === 5 && (
                            <>
                              <path d="M200 80 L300 140 L300 260 L200 320 L100 260 L100 140 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                              <path d="M200 80 L200 200 L300 260 M200 200 L100 260 M100 140 L300 140" stroke="rgba(255,255,255,0.1)" />
                              <circle cx="200" cy="200" r="16" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                            </>
                          )}
                        </g>
                      </svg>
                    </motion.div>
                  ))}
                </div>

                {/* Content Details Stage */}
                <div className="relative h-2/5 p-6 lg:p-12 overflow-hidden bg-[#0E0E10]">
                  {services.map((service, idx) => {
                    const exampleProjects = service.exampleSlugs
                      .map(slug => projects.find(p => p.slug === slug))
                      .filter(Boolean) as ProjectEntry[];

                    return (
                      <motion.div
                        key={`content-${idx}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: activeServiceIdx === idx ? 1 : 0,
                          y: activeServiceIdx === idx ? 0 : 20,
                          zIndex: activeServiceIdx === idx ? 10 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 p-6 lg:p-12 pointer-events-none flex flex-col"
                      >
                        <div className={activeServiceIdx === idx ? 'pointer-events-auto h-full flex flex-col' : 'h-full flex flex-col'}>
                          <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                          <p className="text-[14px] md:text-[15px] text-zinc-400 mb-6 leading-relaxed max-w-xl">
                            {service.description}
                          </p>

                          <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            {service.capabilities.map((cap) => (
                              <div key={cap} className="flex items-center gap-3 text-[12px] md:text-[13px] text-zinc-300">
                                <div className="h-1.5 w-1.5 rounded-full bg-violet-500/60 shrink-0" />
                                {cap}
                              </div>
                            ))}
                          </div>

                          {exampleProjects.length > 0 && (
                            <div className="pt-4 md:pt-6 border-t border-white/[0.04] mt-auto">
                              <div className="flex flex-wrap gap-4 items-center">
                                <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-600">See in action:</span>
                                {exampleProjects.slice(0, 2).map((proj) => (
                                  <Link key={proj.slug} href={`/projects/${proj.slug}`}
                                    className="text-xs text-violet-400 hover:text-violet-300 hover:underline transition-colors flex items-center gap-1">
                                    {proj.title} <ArrowRight className="h-3 w-3" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* THE PROCESS                                                       */}
      {/* =================================================================== */}
      <section className="px-6 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">How We Work</h2>
            <p className="text-[16px] text-zinc-500 mb-16 max-w-xl">
              A proven, transparent process from first conversation to production launch.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <StaggerItem key={step.step} className="h-full">
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)', scale: 1.02, y: -4 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 20 }}
                  className={`p-8 h-full flex flex-col relative overflow-hidden group border border-white/[0.04] bg-[#161618] rounded-xl`}
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="text-[48px] font-bold text-white/[0.05] mb-4 group-hover:text-white/[0.12] transition-colors duration-500"
                  >
                    {step.step}
                  </motion.span>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[13px] text-zinc-400 leading-relaxed">{step.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* =================================================================== */}
      {/* PROOF — Project Thumbnails                                       */}
      {/* =================================================================== */}
      <section className="px-6 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">Proven Results</h2>
            <p className="text-[16px] text-zinc-500 mb-16 max-w-xl">
              Real platforms, deployed and serving real users. Every one built by our team.
            </p>
          </FadeIn>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 8).map((proj, idx) => (
              <motion.div
                key={proj.slug}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <Link href={`/projects/${proj.slug}`} className="block group">
                  <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={SPRING}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.04] bg-[#0E0E10]">
                    {proj.thumbnail && (
                      <Image src={proj.thumbnail} alt={proj.title} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <span className="text-white text-sm font-semibold block">{proj.title}</span>
                        <span className="text-zinc-400 text-[11px]">{proj.category}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* CTA                                                               */}
      {/* =================================================================== */}
      <section className="px-6 py-32 border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-br from-violet-500/8 via-white/[0.03] to-indigo-500/8 blur-[120px] rounded-full pointer-events-none animate-glow-pulse" />
        
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <ScaleIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Let&apos;s Build Your Platform
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you need a custom ERP, an online store, or a security dashboard — we&apos;re ready to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={SPRING}
                  className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-black text-[15px] font-semibold transition-colors hover:bg-zinc-200">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
              <Link href="/studio">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={SPRING}
                  className="flex items-center justify-center h-12 px-8 rounded-full border border-white/[0.1] bg-white/[0.03] text-white text-[15px] font-medium transition-colors hover:bg-white/[0.08]">
                  See Our Work
                </motion.div>
              </Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
