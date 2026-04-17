'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ stiffness: 300, damping: 30 }}
      className="border-t border-white/[0.06] bg-[#0D0D0F]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img 
              src="/versalabs-logo-light.png" 
              alt="VersaLabs" 
              className="h-6 w-auto"
            />
            <p className="text-sm text-zinc-500">
              Enterprise-grade systems for global operational leaders.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-6">
              <Link href="/studio" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Studio
              </Link>
              <Link href="/about" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Intelligence
              </Link>
              <Link href="/contact" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-sm text-zinc-600">
              &copy; 2026 VersaLabs Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
