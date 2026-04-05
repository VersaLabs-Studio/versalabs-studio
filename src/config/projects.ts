import { z } from 'zod';

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  longDescription: z.string(),
  stack: z.array(z.string()),
  githubUrl: z.string().url(),
  liveUrl: z.string().url().optional(),
  image: z.string(),
  highlights: z.array(z.string()),
  architecture: z.object({
    diagram: z.string(),
    decisions: z.array(z.object({
      context: z.string(),
      decision: z.string(),
      consequence: z.string(),
    })),
  }),
  featured: z.boolean(),
  org: z.enum(['VersaLabs', 'Personal']).default('VersaLabs'),
});

export type Project = z.infer<typeof ProjectSchema>;

export const projects: Project[] = [
  {
    slug: 'pana-sports',
    title: 'Pana Sports',
    description: "Ethiopia's first modern sports hub with real-time tracking and multi-language CMS",
    longDescription: 'Built a full-stack sports platform featuring real-time score tracking, multi-language content management (Amharic/English), and enterprise-grade UI. Architected with Next.js API routes communicating directly with PostgreSQL, implementing i18n at the core for Ethiopian market penetration.',
    stack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Tailwind v4', 'i18n', 'REST API'],
    githubUrl: 'https://github.com/VersaLabs/pana-sports',
    liveUrl: undefined,
    image: '/projects/pana-sports.png',
    highlights: [
      'Real-time score tracking with WebSocket-like polling',
      'Multi-language CMS supporting Amharic and English',
      'Enterprise UI with responsive design',
      'Direct Next.js API to PostgreSQL architecture',
    ],
    architecture: {
      diagram: 'graph TD\n  A[Next.js App] --> B[API Routes]\n  B --> C[(PostgreSQL)]\n  A --> D[i18n Layer]\n  A --> E[Tailwind UI]',
      decisions: [
        { context: 'Needed real-time updates without WebSocket infra', decision: 'Implemented intelligent polling with stale-while-revalidate', consequence: 'Reduced server load by 60% vs WebSocket approach' },
        { context: 'Ethiopian market requires Amharic support', decision: 'Built i18n at the routing level, not just content translation', consequence: 'Clean URL structure per locale, better SEO' },
        { context: 'Complex data relationships in sports data', decision: 'Chose PostgreSQL over MongoDB for relational integrity', consequence: 'Strict schemas prevented data corruption at scale' },
      ],
    },
    featured: true,
    org: 'VersaLabs',
  },
  {
    slug: 'versaforge-erp',
    title: 'VersaForge ERP v3.0',
    description: 'Full-spectrum ERP system covering CRM, Manufacturing, Accounting, HR, and Inventory',
    longDescription: 'Designed and deployed a complete ERP solution serving 3 active clients. Implemented Domain-Driven Design boundaries with Factory patterns for extensible module creation. Built on Frappe framework to avoid corporate bloat while maintaining enterprise-grade functionality across 5 core modules.',
    stack: ['Frappe', 'Python', 'JavaScript', 'DDD', 'Factory Pattern', 'PostgreSQL'],
    githubUrl: 'https://github.com/VersaLabs/versaforge-erp',
    liveUrl: undefined,
    image: '/projects/versaforge-erp.png',
    highlights: [
      '5 modules: CRM, Manufacturing, Accounting, HR, Inventory',
      '3 active production clients',
      'Factory pattern for extensible module architecture',
      'DDD boundaries enforcing clean separation of concerns',
      'Frappe backend avoiding enterprise bloat',
    ],
    architecture: {
      diagram: 'graph TD\n  A[Frappe Framework] --> B[CRM Module]\n  A --> C[Manufacturing]\n  A --> D[Accounting]\n  A --> E[HR Module]\n  A --> F[Inventory]\n  B --> G[(PostgreSQL)]\n  C --> G\n  D --> G\n  E --> G\n  F --> G',
      decisions: [
        { context: 'ERP modules need extensibility without breaking changes', decision: 'Implemented Factory pattern for module instantiation', consequence: 'New modules can be added without modifying existing code' },
        { context: 'Complex business logic across domains', decision: 'Strict DDD boundaries between modules', consequence: 'Each module can evolve independently, clear ownership' },
        { context: 'Corporate ERPs are bloated and expensive', decision: 'Chose Frappe over SAP/Oracle', consequence: '80% cost reduction, faster development, full customization' },
      ],
    },
    featured: true,
    org: 'VersaLabs',
  },
  {
    slug: 'printonline-et',
    title: 'Print Online Ethiopia',
    description: 'E-commerce platform with integrated admin, CMS, and payment gateway',
    longDescription: 'Full-featured e-commerce solution with schema-driven dynamic forms, 2-day blitz MVP delivery, and Frappe-based sync for inventory management. Integrated local Ethiopian payment gateways and built a comprehensive admin dashboard for order management.',
    stack: ['Next.js', 'Frappe', 'TypeScript', 'Tailwind', 'Payment Gateway', 'CMS'],
    githubUrl: 'https://github.com/VersaLabs/printonline-et',
    liveUrl: undefined,
    image: '/projects/printonline-et.png',
    highlights: [
      '2-day blitz MVP delivery',
      'Schema-driven dynamic product forms',
      'Local payment gateway integration',
      'Fappe-based inventory sync',
      'Admin dashboard with order management',
    ],
    architecture: {
      diagram: 'graph TD\n  A[Next.js Frontend] --> B[API Layer]\n  B --> C[Frappe Backend]\n  C --> D[(Database)]\n  B --> E[Payment Gateway]\n  A --> F[Admin Dashboard]',
      decisions: [
        { context: 'Needed rapid MVP delivery for market validation', decision: 'Schema-driven forms with Zod validation', consequence: '2-day delivery, zero form-related bugs' },
        { context: 'Local payment processing required', decision: 'Integrated Ethiopian payment gateway with fallback', consequence: '99% payment success rate for local customers' },
      ],
    },
    featured: true,
    org: 'VersaLabs',
  },
  {
    slug: 'jarvis-core',
    title: 'JARVIS Core v1.0',
    description: 'Autonomous SWE workflow system replacing every hosted development tool',
    longDescription: 'Built a self-hosted autonomous software engineering workflow system integrating OpenClaw (self-hosted AI gateway), OpenRouter (unified LLM API), modular MCPs for GitHub/Vercel/Notion/Gmail, all containerized with Docker for portability. Designed to scale into sellable client instances.',
    stack: ['Docker', 'OpenClaw', 'OpenRouter', 'MCP', 'Python', 'Node.js'],
    githubUrl: 'https://github.com/VersaLabs/jarvis-core',
    liveUrl: undefined,
    image: '/projects/jarvis-core.png',
    highlights: [
      'Self-hosted AI gateway via OpenClaw',
      'Unified LLM API access through OpenRouter',
      'Modular MCP integrations (GitHub, Vercel, Notion, Gmail)',
      'Docker containerized for portability',
      'Designed for multi-tenant client deployment',
    ],
    architecture: {
      diagram: 'graph TD\n  A[OpenClaw Gateway] --> B[OpenRouter LLM]\n  A --> C[GitHub MCP]\n  A --> D[Vercel MCP]\n  A --> E[Notion MCP]\n  A --> F[Gmail MCP]\n  A --> G[Docker Runtime]',
      decisions: [
        { context: 'Needed unified AI access without vendor lock-in', decision: 'OpenRouter as abstraction layer over multiple LLM providers', consequence: 'Can switch models without code changes, cost optimization' },
        { context: 'Development tools scattered across platforms', decision: 'Individual MCPs for each integration', consequence: 'Modular, replaceable, independently updatable' },
      ],
    },
    featured: true,
    org: 'VersaLabs',
  },
  {
    slug: 'threatmatrix-ai',
    title: 'ThreatMatrix AI',
    description: 'AI-powered network anomaly detection and cyber threat intelligence platform',
    longDescription: 'Python/ML capstone project building an intelligent threat detection system. Implements network traffic analysis, anomaly detection algorithms, and a real-time threat intelligence dashboard. Combines traditional signature-based detection with ML-powered behavioral analysis.',
    stack: ['Python', 'Scikit-learn', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/VersaLabs/threatmatrix-ai',
    liveUrl: undefined,
    image: '/projects/threatmatrix-ai.png',
    highlights: [
      'ML-powered anomaly detection',
      'Real-time threat intelligence dashboard',
      'Network traffic analysis pipeline',
      'Hybrid signature + behavioral detection',
    ],
    architecture: {
      diagram: 'graph TD\n  A[Network Traffic] --> B[Analysis Pipeline]\n  B --> C[ML Model]\n  B --> D[Signature DB]\n  C --> E[Anomaly Detection]\n  D --> F[Known Threats]\n  E --> G[Threat Dashboard]\n  F --> G',
      decisions: [
        { context: 'Traditional detection misses novel attacks', decision: 'Hybrid approach: signature + ML behavioral analysis', consequence: 'Catches both known and zero-day patterns' },
        { context: 'Real-time processing requirement', decision: 'Streaming pipeline with FastAPI backend', consequence: 'Sub-second detection latency' },
      ],
    },
    featured: true,
    org: 'VersaLabs',
  },
  {
    slug: 'pavilion-360',
    title: 'Pavilion 360',
    description: 'Enterprise project management and collaboration platform',
    longDescription: 'Full-featured enterprise platform providing project management, team collaboration, and resource tracking capabilities. Built with scalability in mind for multi-tenant deployment.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Shadcn/UI'],
    githubUrl: 'https://github.com/VersaLabs/pavilion-360',
    liveUrl: undefined,
    image: '/projects/pavilion-360.png',
    highlights: [
      'Multi-tenant architecture',
      'Real-time collaboration features',
      'Resource tracking and allocation',
      'Enterprise-grade security',
    ],
    architecture: {
      diagram: 'graph TD\n  A[Next.js App] --> B[API Routes]\n  B --> C[(PostgreSQL)]\n  B --> D[Auth Service]\n  A --> E[Real-time Layer]',
      decisions: [
        { context: 'Multiple organizations need isolated data', decision: 'Multi-tenant schema with row-level security', consequence: 'Data isolation without separate databases' },
      ],
    },
    featured: true,
    org: 'VersaLabs',
  },
  {
    slug: 'fastpay-ui',
    title: 'FastPay Mobile',
    description: 'Expo-based mobile payment application with modern UI',
    longDescription: 'Cross-platform mobile payment application built with Expo and React Native. Features include transaction history, wallet management, peer-to-peer transfers, and merchant payments with a focus on Ethiopian market needs.',
    stack: ['Expo', 'React Native', 'TypeScript', 'Zustand', 'NativeWind'],
    githubUrl: 'https://github.com/VersaLabs/fastpay-ui',
    liveUrl: undefined,
    image: '/projects/fastpay-ui.png',
    highlights: [
      'Cross-platform iOS/Android',
      'Wallet management and P2P transfers',
      'Transaction history with filtering',
      'Merchant payment integration',
    ],
    architecture: {
      diagram: 'graph TD\n  A[Expo App] --> B[Zustand Store]\n  A --> C[API Client]\n  C --> D[Backend]\n  B --> E[UI Components]',
      decisions: [
        { context: 'Needed cross-platform with native feel', decision: 'Expo + React Native over Flutter', consequence: 'Faster iteration, TypeScript consistency with web stack' },
      ],
    },
    featured: true,
    org: 'VersaLabs',
  },
  {
    slug: 'oskaz-ecommerce',
    title: 'Oskaz Import',
    description: 'Import/export e-commerce platform with dynamic catalog management',
    longDescription: 'E-commerce platform for import/export business with dynamic product catalog, inventory management, and multi-currency support. Built with schema-first approach for rapid catalog iteration.',
    stack: ['Next.js', 'Frappe', 'TypeScript', 'PostgreSQL'],
    githubUrl: 'https://github.com/VersaLabs/oskaz-ecommerce-web',
    liveUrl: undefined,
    image: '/projects/oskaz-ecommerce.png',
    highlights: [
      'Dynamic product catalog',
      'Multi-currency support',
      'Inventory management integration',
      'Schema-first catalog architecture',
    ],
    architecture: {
      diagram: 'graph TD\n  A[Next.js Storefront] --> B[Catalog API]\n  B --> C[Frappe Backend]\n  C --> D[(PostgreSQL)]',
      decisions: [
        { context: 'Frequently changing product catalog', decision: 'Schema-driven catalog with dynamic form generation', consequence: 'New product types added without code changes' },
      ],
    },
    featured: false,
    org: 'VersaLabs',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};
