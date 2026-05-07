'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn, GlassCard, StaggerContainer, StaggerItem, SlideIn, ScaleIn } from '@/components/ui/motion';
import { ArrowRight } from 'lucide-react';

const SPRING = { stiffness: 300, damping: 30 };

const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1, opacity: 1,
    transition: { duration: 1.5, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const team = [
  {
    name: 'Kidus Abdula',
    role: 'Founder & Systems Architect',
    portrait: '/Kidus.jpg',
    hasImage: true,
    bio: 'Full-stack systems architect and AI specialist leading VersaLabs Studio. Designs and builds enterprise platforms from the ground up — from database schema to production deployment. Obsessed with clean architecture and shipping fast.',
  },
  {
    name: 'Caleb Demelash',
    role: 'Senior Full Stack Engineer',
    portrait: '/Caleb.jpg',
    hasImage: true,
    bio: 'Experienced full-stack developer and business liaison. Bridges the gap between technical implementation and client needs, delivering polished user experiences across web and mobile platforms.',
  },
  {
    name: 'Bemnet Kibret',
    role: 'Full Stack Engineer & Designer',
    portrait: '/kino.png',
    hasImage: true,
    bio: 'Product designer and front-end specialist. Creates the visual identity and interactive experiences that make VersaLabs platforms feel premium and intuitive to every user.',
  },
  {
    name: 'Naol Girma',
    role: 'Backend Engineer & Project Manager',
    portrait: '',
    hasImage: false,
    bio: 'Backend systems specialist and project management lead. Orchestrates delivery timelines, manages client communication, and architects the server-side infrastructure that powers our platforms at scale.',
  },
];

const principles = [
  { icon: '◆', title: 'Data-Driven Design', desc: 'Every system starts with a clear data model. We define the structure first, then build everything around it — ensuring reliability at any scale.' },
  { icon: '◎', title: 'Clean Architecture', desc: 'Our code is organized into clear, focused sections so it\'s easy to understand, test, and extend as your business grows.' },
  { icon: '▲', title: 'No Wasted Code', desc: 'Every feature earns its place. We build lean, fast platforms without unnecessary complexity or bloated dependencies.' },
  { icon: '⬡', title: 'Weekly Delivery', desc: 'You see progress every week. We ship working features in short cycles, so you can give feedback early and often.' },
  { icon: '◇', title: 'AI-First Workflow', desc: 'We leverage AI at every stage — from code generation to testing to deployment. It\'s how a small team ships enterprise-grade platforms.' },
  { icon: '▣', title: 'Client Partnership', desc: 'We\'re not just vendors. We work alongside you, understand your business, and build solutions that actually solve your problems.' },
];

const milestones = [
  { year: '2024', event: 'VersaLabs Studio founded in Addis Ababa' },
  { year: '2024', event: 'First 5 client projects shipped to production' },
  { year: '2025', event: 'Obsidian ERP v3.0 launched — our flagship SaaS platform' },
  { year: '2025', event: 'ThreatMatrix AI deployed — real-time network security' },
  { year: '2026', event: '15+ products shipped, serving businesses locally and globally' },
];

/* Immersive avatar placeholder for team members without photos */
function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('');
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] flex items-center justify-center overflow-hidden">
      {/* Geometric Background */}
      <svg viewBox="0 0 200 250" className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          custom={0} variants={drawLine}
          d="M0 100 Q50 60, 100 100 Q150 140, 200 100"
          fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"
        />
        <motion.path
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          custom={1} variants={drawLine}
          d="M0 140 Q50 100, 100 140 Q150 180, 200 140"
          fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
        />
        <motion.circle
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          custom={2} variants={drawLine}
          cx="100" cy="125" r="50"
          fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="4 4"
        />
        <motion.path
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          custom={3} variants={drawLine}
          d="M70 95 L130 95 L130 155 L70 155 Z"
          fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"
        />
      </svg>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' as const }}
        className="absolute top-8 right-8 w-8 h-8 border border-white/[0.1] rounded-lg rotate-12"
      />
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: 1 }}
        className="absolute bottom-12 left-8 w-6 h-6 border border-white/[0.08] rounded-full"
      />

      {/* Initials */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm"
      >
        <span className="text-3xl font-bold text-white/80 tracking-tight">{initials}</span>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent" />
    </div>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO                                                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="px-6 pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-br from-violet-500/6 via-white/[0.02] to-indigo-500/6 blur-[140px] rounded-full pointer-events-none" />
        
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="mx-auto max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <SlideIn direction="left">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-violet-400/70 mb-6 block">
                  About VersaLabs Studio
                </span>
              </SlideIn>
              <FadeIn>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                  The Team Behind{' '}
                  <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">VersaLabs.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-[17px] text-zinc-400 leading-relaxed max-w-xl">
                  We&apos;re a small, focused team based in Addis Ababa, Ethiopia. We build enterprise-grade software — ERP systems, AI platforms, e-commerce stores, and custom business tools — for clients locally and around the world.
                </p>
              </FadeIn>
            </div>

            {/* Right: Animated Stats Bento */}
            <div className="lg:col-span-2">
              <ScaleIn>
                <div className="grid grid-cols-2 gap-3">
                  <GlassCard hover={false} className="p-5 text-center">
                    <div className="text-3xl font-bold text-white mb-1">4</div>
                    <div className="text-[11px] text-zinc-500 uppercase tracking-wider">Engineers</div>
                  </GlassCard>
                  <GlassCard hover={false} className="p-5 text-center">
                    <div className="text-3xl font-bold text-white mb-1">15+</div>
                    <div className="text-[11px] text-zinc-500 uppercase tracking-wider">Products</div>
                  </GlassCard>
                  <GlassCard hover={false} className="col-span-2 p-5 text-center">
                    <div className="text-xl font-bold text-white mb-1">Addis Ababa → Global</div>
                    <div className="text-[11px] text-zinc-500 uppercase tracking-wider">Built locally, deployed worldwide</div>
                  </GlassCard>
                </div>
              </ScaleIn>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* TEAM                                                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-500 mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Executive Team</h2>
            <p className="text-[16px] text-zinc-500 mb-16 max-w-lg">
              Every engineer on our team is full-stack capable. We don&apos;t just code — we architect, design, and deploy.
            </p>
          </FadeIn>
          
          <StaggerContainer staggerDelay={0.12} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={SPRING}
                  className="overflow-hidden h-full flex flex-col bg-[#161618] border border-white/[0.06] rounded-xl group"
                >
                  {/* Portrait or Placeholder Avatar */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0E0E10]">
                    {member.hasImage ? (
                      <Image
                        src={member.portrait}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        sizes="25vw"
                      />
                    ) : (
                      <AvatarPlaceholder name={member.name} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-transparent to-transparent" />
                  </div>
                  
                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[16px] font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[11px] font-medium text-violet-400/80 uppercase tracking-wider mb-3">{member.role}</p>
                    <p className="text-[12px] text-zinc-500 leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* GEOMETRIC BENTO — HOW WE THINK                                    */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 mb-20 items-center">
            {/* Left: Animated SVGs */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="lg:col-span-2 flex items-center justify-center gap-6"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const }}
                className="w-36 h-36"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.path custom={0} variants={drawLine} d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <motion.path custom={1} variants={drawLine} d="M50 25 L75 38 L75 62 L50 75 L25 62 L25 38 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <motion.circle custom={2} variants={drawLine} cx="50" cy="50" r="10" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                  <motion.circle custom={3} variants={drawLine} cx="50" cy="50" r="3" fill="rgba(255,255,255,0.2)" stroke="none" />
                </svg>
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' as const, delay: 1 }}
                className="w-36 h-36 hidden md:block"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.path custom={0} variants={drawLine} d="M20 50 Q50 15, 80 50 Q50 85, 20 50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <motion.path custom={1} variants={drawLine} d="M30 50 Q50 25, 70 50 Q50 75, 30 50" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <motion.line custom={2} variants={drawLine} x1="20" y1="50" x2="80" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  <motion.line custom={3} variants={drawLine} x1="50" y1="15" x2="50" y2="85" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Right: Text */}
            <div className="lg:col-span-3">
              <FadeIn>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald-400/70 mb-6 block">Our Philosophy</span>
                <h2 className="text-[36px] md:text-[44px] leading-[1.1] font-bold tracking-tighter text-white mb-6">
                  Small team.{' '}
                  <span className="text-zinc-500">Big impact.</span>
                </h2>
                <p className="text-[16px] text-zinc-400 leading-relaxed max-w-xl">
                  We believe the best software comes from small, focused teams that move fast and care deeply about quality. Every engineer at VersaLabs is full-stack — meaning fewer handoffs, faster shipping, and products that feel unified from the first click to the last.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Principles Bento Grid */}
          <StaggerContainer staggerDelay={0.08} className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3 border border-white/[0.04] rounded-2xl overflow-hidden">
            {principles.map((p, idx) => (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                  transition={{ duration: 0.3 }}
                  className={`p-8 h-full flex flex-col group transition-colors ${
                    idx < principles.length - 1 ? 'border-b sm:border-r border-white/[0.04]' : ''
                  } ${idx % 3 === 2 ? 'sm:border-r-0' : ''}`}
                >
                  <span className="text-xl mb-4 opacity-20 group-hover:opacity-50 transition-opacity duration-500">{p.icon}</span>
                  <h3 className="font-bold text-white text-[15px] mb-2">{p.title}</h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed">{p.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* TIMELINE                                                          */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-500 mb-4 block">Our Journey</span>
            <h2 className="text-3xl font-bold mb-16 text-white">Milestones</h2>
          </FadeIn>
          
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="absolute left-[18px] top-0 w-[1px] bg-gradient-to-b from-white/[0.1] via-white/[0.06] to-transparent"
            />

            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="flex items-start gap-6 group"
                >
                  <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#161618] border border-white/[0.08] group-hover:border-white/[0.15] transition-colors">
                    <div className="h-2 w-2 rounded-full bg-white/40 group-hover:bg-white/70 transition-colors" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block mb-1">{m.year}</span>
                    <p className="text-[15px] text-zinc-300 font-medium">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* TECH STACK BENTO                                                  */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-white">Our Technology</h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.08} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Frontend', items: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Framer Motion'] },
              { label: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Redis'] },
              { label: 'Infrastructure', items: ['Docker', 'Supabase', 'Vercel', 'OpenRouter AI', 'Clerk Auth'] },
            ].map((stack) => (
              <StaggerItem key={stack.label}>
                <GlassCard className="p-6 h-full">
                  <h3 className="font-semibold text-white text-sm mb-4">{stack.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.15)' }}
                        transition={SPRING}
                        className="rounded-lg bg-[#1C1C1F] px-3 py-1.5 text-xs text-zinc-400 border border-white/[0.06] cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CTA                                                               */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-32 border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none animate-glow-pulse" />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Let&apos;s build something great.
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Ready to turn your idea into a real, working platform? Let&apos;s talk.
            </p>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={SPRING}
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-zinc-200 transition-colors">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
