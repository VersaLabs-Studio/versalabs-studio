'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectSlideshowProps {
  images: string[];
  title: string;
  intervalMs?: number;
  hoverOnly?: boolean;
}

export default function ProjectSlideshow({ 
  images, 
  title, 
  intervalMs = 4000,
  hoverOnly = false 
}: ProjectSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    
    // If hoverOnly is true, only play when hovered. Otherwise, play always.
    if (hoverOnly && !isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images.length, intervalMs, isHovered, hoverOnly]);

  if (images.length === 0) {
    return (
      <div className="w-full aspect-[3/2] bg-[#141417] border border-white/[0.04] flex items-center justify-center rounded-xl overflow-hidden">
        <span className="text-zinc-600 text-sm">Visuals Unavailable</span>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full aspect-[3/2] overflow-hidden rounded-xl border border-white/[0.04] bg-[#0A0A0C]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {images.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
