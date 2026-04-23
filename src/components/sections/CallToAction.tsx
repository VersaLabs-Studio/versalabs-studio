'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="px-6 py-40 bg-[#0A0A0C] border-t border-white/[0.04] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[72px] leading-[1.05] font-semibold tracking-tighter text-white mb-10"
        >
          Built for the future.<br/>
          <span className="text-white/90">Available today.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center h-12 px-8 rounded-full bg-white text-black text-[15px] font-semibold tracking-wide transition-colors hover:bg-white/90"
            >
              Get started
            </motion.div>
          </Link>
          
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center h-12 px-8 rounded-full bg-[#1A1A1A] border border-white/[0.08] text-white text-[15px] font-semibold tracking-wide transition-colors hover:bg-[#222222]"
            >
              Contact sales
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
