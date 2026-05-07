'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO                                                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* TRUST SIGNALS — Geometric Bento with Stats                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-[1400px] relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left: SVG Composition */}
            <div className="flex items-center justify-center gap-8">
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' as const }} className="w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.path custom={0} variants={drawLine} d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <motion.path custom={1} variants={drawLine} d="M50 25 L75 38 L75 62 L50 75 L25 62 L25 38 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <motion.circle custom={2} variants={drawLine} cx="50" cy="50" r="10" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
              </motion.div>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: 1 }} className="w-40 h-40 hidden md:block">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.path custom={0} variants={drawLine} d="M50 15 L85 80 L15 80 Z" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <motion.path custom={1} variants={drawLine} d="M50 32 L70 68 L30 68 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <motion.path custom={2} variants={drawLine} d="M50 45 L58 58 L42 58 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                </svg>
              </motion.div>
            </div>

            {/* Right: Stats Grid */}
            <div>
              <FadeIn>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald-400/70 mb-6 block">Why VersaLabs</span>
                <h2 className="text-[32px] md:text-[40px] leading-[1.1] font-bold tracking-tighter text-white mb-10">
                  Numbers that matter.
                </h2>
              </FadeIn>
              <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4">
                {trustSignals.map((signal) => (
                  <StaggerItem key={signal.label}>
                    <motion.div whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.1)' }} transition={SPRING}
                      className="p-6 rounded-xl bg-[#161618] border border-white/[0.06]">
                      <div className="text-2xl font-bold text-white mb-1">{signal.value}</div>
                      <div className="text-[12px] font-semibold text-zinc-300 mb-2">{signal.label}</div>
                      <p className="text-[11px] text-zinc-500 leading-relaxed">{signal.desc}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SERVICE OFFERINGS — Bento Grid                                    */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">What We Build</h2>
            <p className="text-[16px] text-zinc-500 mb-16 max-w-xl">
              Six core areas of expertise — each backed by real projects we&apos;ve shipped and deployed.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              const exampleProjects = service.exampleSlugs
                .map(slug => projects.find(p => p.slug === slug))
                .filter(Boolean) as ProjectEntry[];

              return (
                <StaggerItem key={service.title}>
                  <motion.div whileHover={{ y: -4 }} transition={SPRING}>
                    <GlassCard className="p-8 h-full flex flex-col hover:border-white/[0.12] transition-colors">
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.06]"
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                      <p className="text-[14px] text-zinc-400 mb-6 leading-relaxed">{service.description}</p>

                      <ul className="space-y-2.5 mb-8 flex-1">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-2.5 text-[13px] text-zinc-400">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/60 shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>

                      {exampleProjects.length > 0 && (
                        <div className="pt-5 border-t border-white/[0.04]">
                          <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-500 mb-3 block">Example Projects</span>
                          <div className="flex flex-col gap-2">
                            {exampleProjects.slice(0, 2).map((proj) => (
                              <Link key={proj.slug} href={`/projects/${proj.slug}`}
                                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group">
                                <span>{proj.title}</span>
                                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* THE PROCESS                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">How We Work</h2>
            <p className="text-[16px] text-zinc-500 mb-16 max-w-xl">
              A proven, transparent process from first conversation to production launch.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid gap-0 md:grid-cols-4 border border-white/[0.04] rounded-2xl overflow-hidden">
            {processSteps.map((step, idx) => (
              <StaggerItem key={step.step}>
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                  transition={{ duration: 0.3 }}
                  className={`p-8 h-full flex flex-col ${idx < 3 ? 'md:border-r border-b md:border-b-0 border-white/[0.04]' : ''} group`}
                >
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

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PROOF — Project Thumbnails                                       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CTA                                                               */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
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
