'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/motion';

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      <FadeIn>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          Open to remote SWE/DevOps roles
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Lead Systems Architect
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Building Production Systems
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Founder of VersaLabs. Architecting DDD, schema-first, and Frappe/Next.js systems
          in production. 3+ enterprise clients. Portfolio-first engineering.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/VersaLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-6 py-3 text-sm font-medium transition-colors hover:bg-muted/80"
          >
            <Github className="h-4 w-4" />
            VersaLabs Org
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-16 text-muted-foreground"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </FadeIn>
    </section>
  );
}
