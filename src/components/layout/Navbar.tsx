'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { href: '/studio', label: 'Studio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

const SPRING = { stiffness: 300, damping: 30 };

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={SPRING}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0F]/90 backdrop-blur-2xl border-b border-white/[0.05]"
      >
        <div className="mx-auto max-w-7xl flex h-[72px] items-center justify-between px-6 lg:px-8">
          {/* Logo Container on Left */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/versalabs-logo-light.png" 
              alt="VersaLabs" 
              className="h-8 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-[16px] font-semibold tracking-wide text-white">
              VersaLabs
            </span>
          </Link>

          {/* Nav Links and Actions on Right */}
          <div className="flex items-center gap-5 lg:gap-8">
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href || (href !== '/' && pathname.startsWith(href.split('#')[0]));
                return (
                  <Link
                    key={href}
                    href={href}
                    className="relative px-3 py-2 text-[14px] font-medium transition-colors"
                  >
                    <span className={isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}>
                      {label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-white rounded-full"
                        transition={SPRING}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block h-4 w-[1px] bg-white/[0.1]"></div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.9)" }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex items-center justify-center h-9 px-5 rounded-full bg-white text-[13px] font-bold text-black transition-colors"
            >
              Get Started
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="fixed top-[72px] left-0 right-0 z-40 lg:hidden overflow-hidden bg-[#0D0D0F]/95 backdrop-blur-2xl border-b border-white/[0.05]"
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href.split('#')[0]));
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 text-[14px] font-normal rounded-lg transition-colors ${
                  isActive ? 'text-white bg-white/[0.06]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="mt-3 pt-3 border-t border-white/[0.06]">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-white text-[14px] font-semibold text-black hover:bg-zinc-100 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
