import fs from 'fs';
import path from 'path';
import type { ProjectData } from '@/config/types';

export { ProjectData };

const CATALOG_DIR = path.join(process.cwd(), 'project-catalog');

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].replace(/\s*[-–—]\s*.+$/, '').trim() : 'Untitled Project';
}

function extractDescription(content: string): string {
  const lines = content.split('\n');
  let inOverview = false;
  const descLines: string[] = [];

  for (const line of lines) {
    const headingMatch = line.match(/^#{1,3}\s+(.+)/);
    if (headingMatch) {
      const heading = headingMatch[1].toLowerCase();
      if (heading.includes('overview') || heading.includes('about')) {
        inOverview = true;
        continue;
      }
      if (inOverview) break;
      continue;
    }
    if (inOverview) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('[') && !trimmed.startsWith('!') && !trimmed.startsWith('>')) {
        descLines.push(trimmed);
        if (descLines.length >= 3) break;
      }
    }
  }

  if (descLines.length > 0) {
    return descLines.join(' ').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
  }

  const firstParagraph: string[] = [];
  let pastTitle = false;
  for (const line of lines) {
    if (line.startsWith('#') && !pastTitle) { pastTitle = true; continue; }
    if (line.startsWith('#') && pastTitle) break;
    const trimmed = line.trim();
    if (trimmed && pastTitle && !trimmed.startsWith('[') && !trimmed.startsWith('!') && !trimmed.startsWith('>') && !trimmed.startsWith('```')) {
      firstParagraph.push(trimmed);
      if (firstParagraph.length >= 3) break;
    }
  }

  return firstParagraph.join(' ').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim() || 'Enterprise-grade system by VersaLabs.';
}

function extractStack(content: string): string[] {
  const techKeywords: Record<string, string[]> = {
    'Next.js': ['next.js', 'next js'],
    'React': ['react'],
    'TypeScript': ['typescript'],
    'Python': ['python'],
    'PostgreSQL': ['postgresql', 'postgres'],
    'Tailwind CSS': ['tailwind'],
    'Framer Motion': ['framer motion'],
    'Frappe': ['frappe'],
    'Supabase': ['supabase'],
    'FastAPI': ['fastapi'],
    'Redis': ['redis'],
    'Docker': ['docker'],
    'Zod': ['zod'],
    'TanStack Query': ['tanstack', 'react query'],
    'Radix UI': ['radix'],
    'Expo': ['expo'],
    'React Native': ['react native'],
    'Zustand': ['zustand'],
    'Clerk': ['clerk'],
    'Scapy': ['scapy'],
    'TensorFlow': ['tensorflow'],
    'scikit-learn': ['scikit-learn', 'sklearn'],
    'Socket.io': ['socket.io'],
    'Hapi.js': ['hapi'],
    'Sequelize': ['sequelize'],
    'Chapa': ['chapa'],
    'SWR': ['swr'],
    'OpenRouter': ['openrouter'],
    'MCP': ['mcp'],
  };

  const contentLower = content.toLowerCase();
  const found: string[] = [];

  for (const [tech, patterns] of Object.entries(techKeywords)) {
    if (patterns.some(p => contentLower.includes(p))) {
      if (!found.includes(tech)) found.push(tech);
    }
  }

  return found;
}

function extractSystemFlow(content: string): string {
  const flowPatterns = [
    /(?:data flow|system flow|data flow architecture|flow)[^\n]*\n([\s\S]*?)(?=\n##|\n#\s|$)/i,
    /(?:architecture overview|system architecture|high.level architecture)[^\n]*\n([\s\S]*?)(?=\n##|\n#\s|$)/i,
  ];

  for (const pattern of flowPatterns) {
    const match = content.match(pattern);
    if (match) {
      const text = match[1]
        .replace(/```[\s\S]*?```/g, '')
        .replace(/#{1,6}\s+.*/g, '')
        .replace(/^\s*[-*]\s*/gm, '')
        .replace(/\*\*/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 10)
        .join(' → ')
        .trim();
      if (text.length > 20) return text;
    }
  }

  const stack = extractStack(content);
  const frontend = stack.filter(s => ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Expo', 'React Native'].includes(s));
  const backend = stack.filter(s => ['Frappe', 'FastAPI', 'Python', 'Hapi.js', 'Supabase', 'Redis'].includes(s));
  const db = stack.filter(s => ['PostgreSQL', 'Redis'].includes(s));

  const parts: string[] = [];
  if (frontend.length) parts.push(frontend.slice(0, 3).join(' + '));
  if (backend.length) parts.push(backend.slice(0, 2).join(' + '));
  if (db.length) parts.push(db.join(' + '));

  return parts.length > 0 ? parts.join(' → ') : 'Full-stack architecture';
}

function extractTags(content: string): string[] {
  const tags: string[] = [];
  const lower = content.toLowerCase();

  if (lower.includes('erp') || lower.includes('enterprise resource')) tags.push('ERP');
  if (lower.includes('e-commerce') || lower.includes('ecommerce') || lower.includes('commerce')) tags.push('E-Commerce');
  if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('llm') || lower.includes('ml')) tags.push('AI/ML');
  if (lower.includes('sport') || lower.includes('football')) tags.push('Sports');
  if (lower.includes('payment') || lower.includes('fintech') || lower.includes('wallet')) tags.push('Fintech');
  if (lower.includes('security') || lower.includes('threat') || lower.includes('cyber')) tags.push('Cybersecurity');
  if (lower.includes('queue') || lower.includes('management system')) tags.push('SaaS');
  if (lower.includes('bitcoin') || lower.includes('mining') || lower.includes('blockchain')) tags.push('Blockchain');
  if (lower.includes('event') || lower.includes('production')) tags.push('Events');
  if (lower.includes('printing') || lower.includes('print')) tags.push('Print');
  if (lower.includes('social media') || lower.includes('analytics')) tags.push('Analytics');
  if (lower.includes('autonomous') || lower.includes('orchestrat') || lower.includes('mcp')) tags.push('AI Infra');

  return tags.length > 0 ? tags : ['Enterprise'];
}

function extractUrls(content: string): { liveUrl?: string; githubUrl?: string } {
  const liveUrlMatch = content.match(/(?:production url|live site|live demo|live application)[^\n]*(?:https?:\/\/[^\s\]#)]+)/i)
    || content.match(/(?:https?:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s\]#)]*)?)/i);
  const githubMatch = content.match(/(?:github\.com\/[^\s\]#)]+)/i);

  let liveUrl: string | undefined;
  if (liveUrlMatch) {
    const url = liveUrlMatch[0].replace(/[\)\]]+$/, '');
    if (!url.includes('github.com') && !url.includes('img.shields') && !url.includes('google')) {
      liveUrl = url;
    }
  }

  return {
    liveUrl: githubMatch ? undefined : liveUrl,
    githubUrl: githubMatch ? githubMatch[0].replace(/[\)\]]+$/, '') : undefined,
  };
}

export function parseCatalogFile(slug: string): ProjectData {
  const filePath = path.join(CATALOG_DIR, `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf-8');

  const urls = extractUrls(content);

  return {
    slug,
    title: extractTitle(content),
    description: extractDescription(content),
    stack: extractStack(content),
    systemFlow: extractSystemFlow(content),
    tags: extractTags(content),
    ...urls,
  };
}

export function getAllProjects(): ProjectData[] {
  const files = fs.readdirSync(CATALOG_DIR);
  return files
    .filter(f => f.endsWith('.md'))
    .map(f => parseCatalogFile(f.replace('.md', '')))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(CATALOG_DIR);
  return files.filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''));
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return getAllProjects().find(p => p.slug === slug);
}
