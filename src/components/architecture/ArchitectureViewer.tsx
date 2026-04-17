'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Copy, Check, Code2, GitBranch } from 'lucide-react';
import type { ProjectData } from '@/config/types';
import { motion } from 'framer-motion';

interface ArchitectureViewerProps {
  project: ProjectData;
}

const SPRING = { stiffness: 300, damping: 30 };

export function ArchitectureViewer({ project }: ArchitectureViewerProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getCodeSnippets = () => {
    const snippets: { title: string; language: string; code: string; description: string }[] = [];

    if (project.stack.some((s: string) => s.includes('Next.js'))) {
      snippets.push({
        title: 'API Route Example',
        language: 'typescript',
        code: `// app/api/${project.slug}/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const data = await fetchData();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}`,
        description: 'Next.js API route'
      });
    }

    if (project.stack.some((s: string) => s.includes('Zod'))) {
      snippets.push({
        title: 'Schema Validation',
        language: 'typescript',
        code: `import { z } from 'zod';

export const ${project.slug.replace(/-/g, '')}Schema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(100),
});`,
        description: 'Type-safe schema validation'
      });
    }

    if (project.stack.some((s: string) => s.includes('Frappe'))) {
      const className = project.slug.replace(/-/g, '_');
      snippets.push({
        title: 'Frappe DocType',
        language: 'python',
        code: `import frappe
from frappe.model.document import Document

class ${className}_Item(Document):
    def validate(self):
        if not self.title:
            frappe.throw("Title is required")`,
        description: 'Frappe DocType with validation'
      });
    }

    return snippets;
  };

  const codeSnippets = getCodeSnippets();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={SPRING}
      className="rounded-xl border border-white/[0.06] bg-[#161618] overflow-hidden"
    >
      <Tabs defaultValue="flow" className="w-full">
        <TabsList className="w-full grid grid-cols-2 rounded-none border-b border-white/[0.06] bg-[#0D0D0F]">
          <TabsTrigger
            value="flow"
            className="flex items-center gap-2 py-3 text-sm text-zinc-500 data-[state=active]:text-white data-[state=active]:bg-[#161618]"
          >
            <GitBranch className="h-4 w-4" />
            System Flow
          </TabsTrigger>
          <TabsTrigger
            value="stack"
            className="flex items-center gap-2 py-3 text-sm text-zinc-500 data-[state=active]:text-white data-[state=active]:bg-[#161618]"
          >
            <Code2 className="h-4 w-4" />
            Technical Stack
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flow" className="p-6">
          <div className="space-y-6">
            <div className="rounded-xl bg-[#1C1C1F] border border-white/[0.06] p-4">
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.systemFlow}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3 text-white">Project Tags</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="rounded-md bg-[#1C1C1F] px-2.5 py-1 text-xs text-zinc-400 border border-white/[0.06]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="stack" className="p-6">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-3">
              {project.stack.map((tech: string) => (
                <div key={tech} className="rounded-lg bg-[#1C1C1F] border border-white/[0.06] px-3 py-2.5 text-sm text-white">
                  {tech}
                </div>
              ))}
            </div>

            {codeSnippets.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Code Examples</h4>
                <div className="space-y-4">
                  {codeSnippets.map((snippet, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...SPRING, delay: index * 0.1 }}
                      className="rounded-lg border border-white/[0.06] bg-[#0D0D0F] overflow-hidden"
                    >
                      <div className="flex items-center justify-between px-4 py-2 bg-[#1C1C1F] border-b border-white/[0.06]">
                        <span className="text-xs text-zinc-500">{snippet.description}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => copyToClipboard(snippet.code, `snippet-${index}`)}
                          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors"
                        >
                          {copiedCode === `snippet-${index}` ? (
                            <Check className="h-3 w-3" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                          {copiedCode === `snippet-${index}` ? 'Copied' : 'Copy'}
                        </motion.button>
                      </div>
                      <pre className="p-4 text-xs overflow-x-auto font-mono bg-[#0D0D0F] text-zinc-400">
                        <code>{snippet.code}</code>
                      </pre>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
