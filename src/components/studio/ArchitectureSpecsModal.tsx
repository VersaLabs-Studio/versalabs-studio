'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Cpu, GitBranch } from 'lucide-react';
import type { ProjectData } from '@/lib/catalog-parser';

interface ArchitectureSpecsModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

const SPRING = { type: 'spring' as const, stiffness: 300, damping: 30 };

export default function ArchitectureSpecsModal({ project, isOpen, onClose }: ArchitectureSpecsModalProps) {
  const [activeTab, setActiveTab] = useState<'flow' | 'stack'>('flow');

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={SPRING}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-lg overflow-y-auto bg-[#0D0D0F] border-l border-white/[0.06]"
            role="dialog"
            aria-modal="true"
            aria-label={`Architecture specs for ${project.title}`}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.06] bg-[#0D0D0F] px-6 py-4">
              <div>
                <h2 className="text-lg font-bold text-white">{project.title}</h2>
                <p className="text-xs text-zinc-500">Architecture Specifications</p>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-[#1C1C1F] text-zinc-400 transition-colors hover:text-white hover:bg-[#27272A]"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </motion.button>
            </div>

            <div className="border-b border-white/[0.06]">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('flow')}
                  className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'flow'
                      ? 'border-b-2 border-white text-white'
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  <GitBranch className="h-4 w-4" />
                  System Flow
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'stack'
                      ? 'border-b-2 border-white text-white'
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  <Cpu className="h-4 w-4" />
                  Technical Stack
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'flow' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Data Flow</h3>
                  <div className="rounded-xl bg-[#161618] border border-white/[0.06] p-4">
                    <p className="text-sm text-zinc-400 leading-relaxed whitespace-pre-wrap">
                      {project.systemFlow}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-zinc-500">Project Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="rounded-md bg-[#1C1C1F] px-2 py-1 text-xs text-zinc-400 border border-white/[0.06]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Technologies</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.stack.map((tech: string) => (
                      <div key={tech} className="rounded-lg bg-[#161618] border border-white/[0.06] px-3 py-2.5 text-sm text-white">
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-white hover:text-zinc-300 transition-colors"
                      >
                        Live Demo <ArrowRight className="h-3 w-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-white hover:text-zinc-300 transition-colors"
                      >
                        Source Code <ArrowRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
