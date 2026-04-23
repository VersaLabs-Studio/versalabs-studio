// ============================================================================
// VERSALABS STUDIO — COMPLETE PROJECT DATABASE
// ============================================================================
// This file is the single source of truth for all project content displayed
// on the /studio listing page and /projects/[slug] detail pages.
// Every field is crafted from the original project README and architected
// for a premium portfolio showcase. The UI agent should consume this data
// directly — no parsing or transformation needed.
// ============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TechDependency {
  name: string;
  version?: string;
  purpose: string;
}

export interface TechLayer {
  label: string; // e.g. "Frontend Framework", "Backend & Database"
  items: TechDependency[];
}

export interface BoundedContext {
  name: string;
  responsibility: string;
  entities: string[];
}

export interface SchemaTable {
  name: string;
  description: string;
  keyFields: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: string; // lucide icon name for UI rendering
}

export interface ADRRecord {
  id: string;
  title: string;
  status: "Accepted" | "Proposed" | "Deprecated";
  rationale: string;
}

export interface ProjectEntry {
  // ── Card-level fields (studio listing page) ──
  slug: string;
  title: string;
  subtitle: string; // Short tagline for hero area
  summary: string; // 1-2 sentence hook for card
  category: string; // Primary vertical — "ERP", "Fintech", "AI/ML" …
  tags: string[];
  year: string;
  status: "Production" | "Beta" | "MVP" | "Development";
  client?: string; // End client name if applicable
  liveUrl?: string;
  githubUrl?: string;
  heroGradient: string; // CSS gradient classes for card accent

  // ── Detail page fields ──
  description: string; // Full 3-5 sentence project description
  businessProblem: string;
  architecturalSolution: string;
  systemFlow: string; // Plaintext pipeline e.g. "Client → API → DB"

  // ── Full tech stack: every dependency ──
  techStack: TechLayer[];

  // ── Architecture ──
  architecture: {
    pattern: string; // e.g. "Microservices-Inspired Monorepo"
    diagram: string; // ASCII or text description of the system topology
    designPatterns: string[];
  };

  // ── Domain-Driven Design ──
  boundedContexts: BoundedContext[];

  // ── Schema Design ──
  schema: SchemaTable[];

  // ── Premium Showcase Features ──
  features: Feature[];

  // ── Architecture Decision Records ──
  adrs: ADRRecord[];
}

// ---------------------------------------------------------------------------
// DATABASE
// ---------------------------------------------------------------------------

export const PROJECT_DATABASE: ProjectEntry[] = [
  // =========================================================================
  // 1. THREATMATRIX AI
  // =========================================================================
  {
    slug: "threatmatrix-ai",
    title: "ThreatMatrix AI",
    subtitle: "AI-Powered Cyber Threat Intelligence Platform",
    summary:
      "Enterprise-grade network anomaly detection platform combining a three-model ML ensemble with LLM-driven threat narratives, deployed for national-scale security operations.",
    category: "Cybersecurity",
    tags: ["AI/ML", "Cybersecurity", "Real-Time", "DevOps"],
    year: "2026",
    status: "Production",
    liveUrl: "https://threatmatrix-ai.vercel.app",
    githubUrl: "https://github.com/VersaLabs-Studio/threatmatrix-ai",
    heroGradient: "from-red-500/20 via-transparent to-orange-500/10",

    description:
      "ThreatMatrix AI is a proprietary cyber-security platform that delivers real-time network anomaly detection, automated threat-intel enrichment, and a war-room style command-center UI modeled after national intelligence agency operation centres. Purpose-built for Ethiopia's Digital Transformation initiative, it provides a locally-hosted, cost-effective alternative to expensive global SIEM solutions targeting government agencies, financial institutions, and telecom operators.",
    businessProblem:
      "Rapid digitisation across Ethiopia has outpaced local security tooling, leaving critical government and financial infrastructure reliant on prohibitively expensive global SIEM solutions that lack local context and Amharic language support.",
    architecturalSolution:
      "A three-tier, event-driven architecture separating Capture, Intelligence, and Interaction bounded contexts. Python/Scapy ingests live traffic, a FastAPI Intelligence Engine runs an ensemble of three ML models in parallel, and a Next.js Command Center renders real-time maps and dashboards via WebSocket. Redis Pub/Sub decouples all tiers for independent scaling.",
    systemFlow:
      "Scapy Capture → Redis Pub/Sub → FastAPI ML Inference (Isolation Forest + Random Forest + Autoencoder) → Alert Persistence (PostgreSQL) → WebSocket Push → Next.js Command Center",

    techStack: [
      {
        label: "Frontend",
        items: [
          { name: "Next.js", version: "16.x", purpose: "SSR/SSG full-stack React framework" },
          { name: "TypeScript", version: "5.x", purpose: "Strict type safety across the UI" },
          { name: "CSS Variables + Vanilla CSS", purpose: "Glass-morphism design system" },
          { name: "Deck.gl", purpose: "GPU-accelerated geospatial threat map rendering" },
          { name: "Maplibre GL", purpose: "Open-source vector tile map engine" },
          { name: "Recharts", purpose: "Analytics dashboard chart library" },
        ],
      },
      {
        label: "Backend",
        items: [
          { name: "FastAPI", version: "0.110+", purpose: "Async Python REST + WebSocket API" },
          { name: "Python", version: "3.11+", purpose: "Core runtime for ML and capture" },
          { name: "Scapy", version: "2.5+", purpose: "Raw packet capture and flow aggregation" },
          { name: "Alembic", purpose: "Database schema migration management" },
        ],
      },
      {
        label: "Machine Learning",
        items: [
          { name: "scikit-learn", purpose: "Isolation Forest and Random Forest classifiers" },
          { name: "TensorFlow / Keras", purpose: "Autoencoder deep learning reconstruction model" },
        ],
      },
      {
        label: "LLM Gateway",
        items: [
          { name: "OpenRouter", purpose: "Unified multi-model LLM API access" },
          { name: "Nemotron-Ultra 253B", purpose: "Complex analysis & narrative generation" },
          { name: "Step 3.5 Flash", purpose: "Real-time alert summarisation" },
          { name: "GPT-OSS 120B", purpose: "General-purpose investigation chat" },
          { name: "GLM-4.1v", purpose: "Bilingual Amharic/English translation" },
        ],
      },
      {
        label: "Infrastructure",
        items: [
          { name: "PostgreSQL", version: "16", purpose: "Primary relational store with JSONB and INET types" },
          { name: "Redis", version: "7", purpose: "Pub/Sub event bus and rate-limiting cache" },
          { name: "Docker Compose", version: "v2", purpose: "Multi-service orchestration" },
          { name: "Nginx", purpose: "Reverse proxy with TLS (Let's Encrypt)" },
          { name: "Vercel", purpose: "Frontend edge hosting and HTTPS" },
          { name: "GitHub Actions", purpose: "CI/CD lint, test, and build pipeline" },
        ],
      },
    ],

    architecture: {
      pattern: "Three-Tier Event-Driven Architecture with DDD Bounded Contexts",
      diagram:
        "Capture Engine (Python/Scapy) → Redis Pub/Sub → Intelligence Engine (FastAPI + ML Ensemble) → PostgreSQL → WebSocket → Command Center (Next.js/Vercel)",
      designPatterns: [
        "Event-Driven Communication (Redis Pub/Sub)",
        "Ensemble ML Scoring (Weighted Composite)",
        "Domain-Driven Design with Bounded Contexts",
        "Contract-First API (OpenAPI)",
        "Repository Pattern for data access",
        "CQRS-lite (read-optimised WebSocket push, write via REST)",
      ],
    },

    boundedContexts: [
      { name: "Capture", responsibility: "Ingest raw packets, produce flow records with 40+ features", entities: ["NetworkFlow", "CaptureSession"] },
      { name: "Intelligence", responsibility: "Apply ML models, enrich with threat intel feeds, generate alerts", entities: ["Alert", "MLModel", "ThreatIntelIOC"] },
      { name: "Interaction", responsibility: "UI rendering, user actions, LLM conversations, report generation", entities: ["User", "LLMConversation", "Report"] },
    ],

    schema: [
      { name: "network_flows", description: "Raw and aggregated network flow records", keyFields: ["flow_id", "src_ip", "dst_ip", "protocol", "feature_vector (JSONB)", "timestamp"] },
      { name: "alerts", description: "Detected anomalies with ML scores and LLM narratives", keyFields: ["alert_id", "severity", "composite_score", "ml_labels (JSONB)", "ai_narrative", "status"] },
      { name: "threat_intel_iocs", description: "Indicators of compromise from external feeds", keyFields: ["ioc_id", "type", "value", "source_feed", "confidence"] },
      { name: "users", description: "Platform users with RBAC roles", keyFields: ["user_id", "role (admin|soc_manager|analyst|viewer)", "jwt_claims"] },
      { name: "llm_conversations", description: "AI Analyst chat sessions", keyFields: ["conversation_id", "user_id", "messages (JSONB)", "model_used"] },
      { name: "ml_models", description: "Model registry with performance metrics", keyFields: ["model_id", "type", "version", "accuracy", "deployed_at"] },
    ],

    features: [
      { title: "War Room", description: "Real-time geospatial threat map with live alert ticker, metric cards, and global threat intelligence overlay.", icon: "Globe" },
      { title: "AI Analyst", description: "Conversational LLM interface enabling natural-language threat investigation, briefing generation, and Amharic translation.", icon: "Bot" },
      { title: "Three-Model ML Ensemble", description: "Parallel Isolation Forest, Random Forest, and Autoencoder inference with weighted composite scoring for zero-day and known-attack detection.", icon: "Brain" },
      { title: "Forensics Lab", description: "PCAP upload with packet inspection, flow reconstruction, and ML re-analysis for post-incident investigation.", icon: "FileSearch" },
      { title: "Real-Time Alert Pipeline", description: "Sub-200ms end-to-end latency from packet capture to analyst notification via WebSocket push.", icon: "Zap" },
      { title: "ML Operations Dashboard", description: "Model registry with performance metrics, retraining controls, and drift monitoring.", icon: "BarChart3" },
    ],

    adrs: [
      { id: "ADR-001", title: "Adopt Domain-Driven Design", status: "Accepted", rationale: "Establishes Ubiquitous Language across Capture, Intelligence, and Interaction contexts." },
      { id: "ADR-002", title: "Three Bounded Contexts", status: "Accepted", rationale: "Each context owns its model and persistence, reducing coupling and enabling independent scaling." },
      { id: "ADR-003", title: "Event-Driven Communication (Redis Pub/Sub)", status: "Accepted", rationale: "Guarantees eventual consistency while keeping contexts decoupled." },
      { id: "ADR-004", title: "FastAPI for Intelligence Engine", status: "Accepted", rationale: "Provides clean, contract-first API mirroring domain services." },
      { id: "ADR-005", title: "Next.js 16 for Interaction Layer", status: "Accepted", rationale: "Enables type-safe UI reflecting domain models (AlertDTO, FlowDTO)." },
      { id: "ADR-006", title: "PostgreSQL with JSONB", status: "Accepted", rationale: "Rich domain objects (Alert with embedded LLM Narrative) with relational integrity." },
      { id: "ADR-007", title: "LLM Gateway as Domain Service", status: "Accepted", rationale: "Treats LLM calls as application services augmenting Alert aggregates." },
      { id: "ADR-008", title: "Docker Compose Deployment", status: "Accepted", rationale: "Infrastructure model aligned with bounded contexts — one container per context." },
      { id: "ADR-009", title: "JWT-Based RBAC (4 Roles)", status: "Accepted", rationale: "Access control as domain policy ensuring authorized aggregate mutations." },
      { id: "ADR-010", title: "Three-Model ML Ensemble", status: "Accepted", rationale: "Each model represents a different anomaly detection sub-domain." },
      { id: "ADR-011", title: "AI Analyst as First-Class UI", status: "Accepted", rationale: "Elevates LLM from utility to domain-level collaborator." },
    ],
  },

  // =========================================================================
  // 2. OBSIDIAN ERP v3.0
  // =========================================================================
  {
    slug: "obsidian-erp-v3.0",
    title: "Obsidian ERP v3.0",
    subtitle: "Schema-First Manufacturing ERP System",
    summary:
      "Enterprise resource planning system for manufacturing and printing industries, featuring auto-generated TypeScript types from Frappe DocTypes and a zero-boilerplate factory pattern reducing CRUD code by 75%.",
    category: "ERP",
    tags: ["ERP", "Manufacturing", "Schema-First", "Enterprise"],
    year: "2026",
    status: "Production",
    heroGradient: "from-violet-500/20 via-transparent to-indigo-500/10",

    description:
      "Obsidian v3.0 is a proprietary enterprise resource planning system developed by VersaLabs for the manufacturing and printing industry. It transforms traditional job shop operations into streamlined digital workflows through lead-to-cash automation, real-time manufacturing execution, double-entry bookkeeping, and multi-tenant architecture — all powered by a revolutionary schema-first development approach where Frappe DocTypes serve as the single source of truth for the entire type system.",
    businessProblem:
      "Printing and manufacturing businesses rely on disconnected spreadsheets and manual handoffs across CRM, sales, production, inventory, and accounting — creating data silos, pricing errors, and delayed invoicing at national scale.",
    architecturalSolution:
      "A schema-first architecture where Frappe DocType metadata auto-generates TypeScript interfaces and Zod validation schemas, feeding into a Factory Pattern that eliminates 75% of boilerplate CRUD code. A centralized DocType registry provides a single source of truth for routing, queries, and UI generation across five enterprise modules.",
    systemFlow:
      "Frappe DocType (Backend) → Type Generation → TypeScript + Zod Validation → Factory Pattern Hooks → Next.js App Router UI",

    techStack: [
      {
        label: "Frontend Framework",
        items: [
          { name: "Next.js", version: "16.0.10", purpose: "Full-stack React framework with App Router" },
          { name: "React", version: "19.2.3", purpose: "Latest React with concurrent features" },
          { name: "TypeScript", version: "5.9.3", purpose: "Strict type checking" },
        ],
      },
      {
        label: "State Management & Data",
        items: [
          { name: "TanStack Query", version: "v5.90.7", purpose: "Server state management with caching" },
          { name: "React Hook Form", version: "v7", purpose: "Performant forms with validation" },
          { name: "Zod", version: "v3.25.76", purpose: "Runtime type validation and schema parsing" },
          { name: "Frappe JS SDK", version: "1.10.0", purpose: "Official Frappe API client" },
        ],
      },
      {
        label: "UI & Styling",
        items: [
          { name: "Tailwind CSS", version: "v4.1.10", purpose: "Utility-first CSS framework" },
          { name: "Radix UI", purpose: "Accessible component primitives" },
          { name: "Framer Motion", version: "v12", purpose: "Smooth animations and transitions" },
          { name: "Lucide React", purpose: "Consistent iconography" },
          { name: "Sonner", purpose: "Toast notifications" },
        ],
      },
      {
        label: "Backend",
        items: [
          { name: "Frappe Framework", purpose: "Python-based ERP platform with DocType ORM" },
          { name: "PostgreSQL", purpose: "Primary relational database (via Frappe)" },
          { name: "Redis", purpose: "Caching layer (via Frappe)" },
        ],
      },
      {
        label: "Development Tools",
        items: [
          { name: "ESLint", purpose: "Code linting and formatting" },
          { name: "PostCSS", purpose: "CSS processing and optimization" },
          { name: "TypeScript ESLint", purpose: "Type-aware linting rules" },
          { name: "pnpm", purpose: "Fast, disk-efficient package manager" },
        ],
      },
    ],

    architecture: {
      pattern: "Schema-First Monolith with Factory Pattern CRUD",
      diagram:
        "Frappe DocTypes → Auto-Gen Types → Central DocType Registry → Generic Hooks (useFrappeList, useFrappeCreate, useFrappeDoc) → Factory API Routes → Next.js App Router Pages",
      designPatterns: [
        "Schema-First Development (DocType → TS → Zod)",
        "Factory Pattern for zero-boilerplate CRUD",
        "Centralized DocType Configuration Registry",
        "Generic Hooks (DocType-agnostic data fetching)",
        "Dual Theme System (OKLCH color space)",
        "Repository Pattern for data access",
      ],
    },

    boundedContexts: [
      { name: "CRM", responsibility: "Lead-to-customer conversion, contact and address management", entities: ["Lead", "Customer", "Contact", "Address"] },
      { name: "Sales", responsibility: "Quotation-to-order pipeline, commission tracking", entities: ["Quotation", "SalesOrder", "SalesOrderItem", "SalesTeam", "SalesPartner"] },
      { name: "Manufacturing", responsibility: "BOM management, work order tracking, production scheduling", entities: ["BOM", "BOMItem", "WorkOrder", "Workstation", "Operation"] },
      { name: "Inventory", responsibility: "Multi-warehouse stock management and valuation", entities: ["Warehouse", "StockEntry", "Item", "MaterialRequest", "StockBalance"] },
      { name: "Accounting", responsibility: "Double-entry bookkeeping, invoicing, and payment reconciliation", entities: ["SalesInvoice", "PurchaseInvoice", "PaymentEntry", "JournalEntry", "Account", "CostCenter"] },
    ],

    schema: [
      { name: "Customer", description: "Enterprise customer profile with groups and territory", keyFields: ["name", "customer_name", "customer_group", "territory", "status"] },
      { name: "Quotation", description: "Professional quote creation with dynamic pricing", keyFields: ["name", "customer", "items", "total", "valid_till", "status"] },
      { name: "Sales Order", description: "Confirmed orders with fulfillment workflow", keyFields: ["name", "customer", "items", "delivery_date", "status", "payment_terms"] },
      { name: "BOM (Bill of Materials)", description: "Multi-level manufacturing recipe with operations", keyFields: ["name", "item", "bom_items", "operations", "total_cost"] },
      { name: "Work Order", description: "Production job with tracking and material consumption", keyFields: ["name", "bom", "qty", "status", "planned_start", "actual_start"] },
      { name: "Stock Entry", description: "Material receipt, issue, and transfer records", keyFields: ["name", "stock_entry_type", "items", "warehouse", "posting_date"] },
      { name: "Sales Invoice", description: "Revenue recognition with GL posting", keyFields: ["name", "customer", "items", "total", "outstanding_amount", "status"] },
      { name: "Payment Entry", description: "Universal cash handler with reconciliation", keyFields: ["name", "payment_type", "party", "paid_amount", "references"] },
    ],

    features: [
      { title: "Schema-First Type Generation", description: "Auto-generates TypeScript interfaces and Zod schemas from Frappe DocType metadata — zero manual types, 100% compile-time safety.", icon: "FileCode2" },
      { title: "Factory Pattern CRUD", description: "Generic hooks and API route generators reduce CRUD boilerplate by 75% while maintaining full type safety across all 5 modules.", icon: "Factory" },
      { title: "Lead-to-Cash Pipeline", description: "Complete sales automation from customer inquiry through quotation, order, delivery, invoicing, and payment collection.", icon: "TrendingUp" },
      { title: "Real-Time Manufacturing Execution", description: "Production tracking with BOM management, work order scheduling, material consumption, and workstation planning.", icon: "Settings2" },
      { title: "Double-Entry Bookkeeping", description: "Automated journal entries with Chart of Accounts, cost center tracking, and financial reporting suite.", icon: "BookOpen" },
      { title: "Dual Theme System", description: "Professional light/dark modes using OKLCH perceptually-uniform color space with 200ms smooth transitions.", icon: "Palette" },
    ],

    adrs: [
      { id: "ADR-001", title: "Schema-First Development from Frappe DocTypes", status: "Accepted", rationale: "Eliminates type drift between frontend and backend — DocTypes are the absolute source of truth." },
      { id: "ADR-002", title: "Factory Pattern for Generic CRUD", status: "Accepted", rationale: "75% reduction in boilerplate code while maintaining full type safety per module." },
      { id: "ADR-003", title: "Centralized DocType Configuration Registry", status: "Accepted", rationale: "Single source of truth for all routing, query keys, and API endpoints." },
      { id: "ADR-004", title: "TanStack Query for Server State", status: "Accepted", rationale: "Intelligent caching, background refetching, and optimistic updates for enterprise data." },
      { id: "ADR-005", title: "Frappe Framework as Backend Platform", status: "Accepted", rationale: "Provides 80% of ERP functionality out-of-the-box — focus on business-specific customizations." },
    ],
  },

  // =========================================================================
  // 3. OSKAZ ERP
  // =========================================================================
  {
    slug: "oskaz-erp",
    title: "Oskaz Import ERP v3.0",
    subtitle: "Full-Cycle Enterprise Resource Planning for Print & Manufacturing",
    summary:
      "Comprehensive ERP system spanning CRM, Sales, Manufacturing, Inventory, Purchasing, Accounting, and Logistics — with six bounded contexts and Kubernetes-ready deployment for enterprise scale.",
    category: "ERP",
    tags: ["ERP", "Manufacturing", "Print", "Enterprise"],
    year: "2026",
    status: "Production",
    liveUrl: "https://oskaz-erp.versalabs.com",
    githubUrl: "https://github.com/VersaLabs/oskaz-erp",
    heroGradient: "from-emerald-500/20 via-transparent to-teal-500/10",

    description:
      "Oskaz Import ERP is a comprehensive enterprise resource planning system built specifically for the printing and manufacturing industry. It provides end-to-end business management from customer relationship management to financial reporting, enabling businesses to streamline operations through seven core modules: CRM, Sales, Manufacturing, Inventory, Purchasing, Accounting, and Logistics — all deployed on Docker + Kubernetes for enterprise-grade scalability.",
    businessProblem:
      "Printing businesses manage complex workflows across sales quoting, bill-of-materials costing, multi-warehouse inventory, production scheduling, and double-entry accounting using fragmented tools, creating costly reconciliation errors and delayed fulfillment.",
    architecturalSolution:
      "A Next.js frontend with six DDD bounded contexts consuming a Frappe Framework backend via factory-pattern CRUD hooks. Each module (CRM, Sales, Manufacturing, Inventory, Accounting, Purchasing) operates as an independent domain with its own entities, services, and value objects, deployed on Docker + Kubernetes with automated CI/CD.",
    systemFlow:
      "Lead → Quotation → Sales Order → BOM → Work Order → Material Request → Stock Entry → Delivery Note → Sales Invoice → Payment Entry",

    techStack: [
      {
        label: "Frontend",
        items: [
          { name: "Next.js", version: "16.0.10", purpose: "Full-stack React framework with App Router" },
          { name: "React", version: "19.2.3", purpose: "Concurrent features and hooks" },
          { name: "TypeScript", version: "5.9.3", purpose: "Strict type checking" },
          { name: "Tailwind CSS", version: "4.1.10", purpose: "Utility-first CSS with custom design system" },
          { name: "Radix UI", purpose: "Accessible component primitives (shadcn/ui)" },
          { name: "TanStack Query", version: "5.90.7", purpose: "Server state management" },
          { name: "React Hook Form", version: "7.66.0", purpose: "Performant forms with validation" },
          { name: "Zod", purpose: "Runtime type validation" },
          { name: "Lucide React", version: "0.516.0", purpose: "Icon library" },
          { name: "Recharts", version: "2.15.3", purpose: "Analytics and reporting charts" },
          { name: "jsPDF", version: "3.0.3", purpose: "Client-side PDF generation" },
          { name: "jspdf-autotable", purpose: "PDF table generation for reports" },
        ],
      },
      {
        label: "Backend",
        items: [
          { name: "Frappe Framework", purpose: "Python-based ERP platform" },
          { name: "PostgreSQL", version: "13+", purpose: "Primary relational database (via Frappe ORM)" },
          { name: "Redis", purpose: "Caching and background job queues" },
        ],
      },
      {
        label: "Infrastructure",
        items: [
          { name: "Docker", purpose: "Containerization" },
          { name: "Kubernetes", purpose: "Enterprise orchestration and scaling" },
          { name: "Nginx", purpose: "Load balancing and TLS termination" },
          { name: "GitHub Actions", purpose: "Automated CI/CD pipeline" },
          { name: "Let's Encrypt", purpose: "Auto-renewal SSL/TLS certificates" },
          { name: "pnpm", purpose: "Workspace-aware package manager" },
        ],
      },
      {
        label: "Development Tools",
        items: [
          { name: "ESLint", version: "9", purpose: "Code linting with TypeScript ESLint" },
          { name: "TypeDoc", purpose: "API documentation generation" },
          { name: "Custom Type Generators", purpose: "Frappe DocType to TypeScript pipeline" },
        ],
      },
    ],

    architecture: {
      pattern: "Micro-Frontend Architecture with Domain-Driven Backend",
      diagram:
        "Next.js Frontend (React 19) ↔ Frappe Backend (Python) ↔ PostgreSQL Database (via Frappe ORM)\n\nBounded Contexts: CRM | Sales | Manufacturing | Inventory | Accounting | Purchasing",
      designPatterns: [
        "Domain-Driven Design with 6 Bounded Contexts",
        "Factory Pattern for CRUD operations",
        "Repository Pattern for data access",
        "Event-Driven workflows (status transitions)",
        "Double-Entry Accounting enforcement",
        "Role-Based Access Control (4 roles)",
      ],
    },

    boundedContexts: [
      { name: "CRM", responsibility: "Lead-to-customer conversion with qualification workflows", entities: ["Lead", "Customer", "Contact", "Address"] },
      { name: "Sales", responsibility: "Quotation generation through delivery and invoicing", entities: ["Quotation", "SalesOrder", "SalesOrderItem"] },
      { name: "Manufacturing", responsibility: "BOM management, work orders, and production tracking", entities: ["BOM", "BOMItem", "WorkOrder", "Workstation", "Operation"] },
      { name: "Inventory", responsibility: "Multi-warehouse stock management with valuation", entities: ["Warehouse", "StockEntry", "Item", "MaterialRequest"] },
      { name: "Accounting", responsibility: "Double-entry bookkeeping with AR/AP management", entities: ["SalesInvoice", "PurchaseInvoice", "PaymentEntry", "JournalEntry", "Account"] },
      { name: "Purchasing", responsibility: "Material request to PO to vendor invoice pipeline", entities: ["PurchaseOrder", "Supplier", "PurchaseInvoice"] },
    ],

    schema: [
      { name: "Customer", description: "Customer profiles with segmentation and credit limits", keyFields: ["name", "customer_name", "customer_type", "customer_group", "territory", "credit_limit"] },
      { name: "Sales Order", description: "Confirmed orders with approval workflows", keyFields: ["name", "customer", "items", "delivery_date", "total", "status"] },
      { name: "BOM", description: "Multi-level bill of materials with operations", keyFields: ["name", "item", "bom_items", "operations", "total_cost", "is_active"] },
      { name: "Work Order", description: "Production jobs with routing and material consumption", keyFields: ["name", "bom", "qty", "planned_start", "actual_start", "status"] },
      { name: "Stock Entry", description: "Material movements: receipt, issue, transfer", keyFields: ["name", "stock_entry_type", "items", "source_warehouse", "target_warehouse"] },
      { name: "Payment Entry", description: "Payment processing with multi-reference reconciliation", keyFields: ["name", "payment_type", "party", "paid_amount", "references"] },
    ],

    features: [
      { title: "Seven Core Modules", description: "CRM, Sales, Manufacturing, Inventory, Purchasing, Accounting, and Logistics — fully integrated with cross-domain workflow automation.", icon: "Layers" },
      { title: "Logistics & Delivery", description: "Delivery note generation, driver/vehicle management, gate pass printing, and shipment tracking.", icon: "Truck" },
      { title: "PDF Generation", description: "Client-side PDF reports for invoices, delivery notes, and gate passes using jsPDF with AutoTable.", icon: "FileText" },
      { title: "AES-256 Data Encryption", description: "Enterprise-grade encryption at rest with comprehensive audit logging and CSRF protection.", icon: "Shield" },
      { title: "Role-Based Access Control", description: "Four-tier permission system (Administrator, Manager, Operator, Viewer) with granular module access.", icon: "Lock" },
      { title: "Sales Pipeline Analytics", description: "Dynamic pricing engine, customer credit limits, commission tracking, and conversion forecasting.", icon: "LineChart" },
    ],

    adrs: [
      { id: "ADR-001", title: "Domain-Driven Design with 6 Bounded Contexts", status: "Accepted", rationale: "Each business module operates independently with clear domain boundaries." },
      { id: "ADR-002", title: "Frappe Framework as Backend Platform", status: "Accepted", rationale: "Provides 80% of ERP functionality out-of-the-box with built-in multi-tenancy." },
      { id: "ADR-003", title: "Next.js with App Router for Frontend", status: "Accepted", rationale: "SSR/SSG, built-in API routes, and Concurrent React for complex ERP interfaces." },
      { id: "ADR-004", title: "TanStack Query for State Management", status: "Accepted", rationale: "Handles server state caching and synchronization across enterprise modules." },
      { id: "ADR-005", title: "TypeScript Strict Mode", status: "Accepted", rationale: "Prevents runtime errors critical for enterprise financial data integrity." },
      { id: "ADR-006", title: "Radix UI + Tailwind for Components", status: "Accepted", rationale: "WCAG-compliant accessibility with full customization flexibility." },
      { id: "ADR-007", title: "Zod for Schema Validation", status: "Accepted", rationale: "TypeScript-first runtime validation ensuring data integrity at all boundaries." },
      { id: "ADR-008", title: "Docker + Kubernetes for Deployment", status: "Accepted", rationale: "Enterprise scalability with blue-green deployments and easy rollbacks." },
    ],
  },

  // =========================================================================
  // 4. OSKAZ E-COMMERCE
  // =========================================================================
  {
    slug: "oskaz-ecommerce",
    title: "OSKAZ E-Commerce",
    subtitle: "Enterprise Digital Commerce Platform",
    summary:
      "Full-stack e-commerce platform with Clerk authentication, Frappe ERP backend integration, and four DDD bounded contexts powering OSKAZ's national-scale digital commerce operations.",
    category: "E-Commerce",
    tags: ["E-Commerce", "Enterprise", "DDD"],
    year: "2026",
    status: "Production",
    heroGradient: "from-blue-500/20 via-transparent to-cyan-500/10",

    description:
      "OSKAZ E-Commerce is a comprehensive digital commerce solution built for OSKAZ's enterprise operations spanning institutional and individual customers across Ethiopia. The platform implements Domain-Driven Design with four bounded contexts managing product catalogs, shopping carts, order lifecycle, and user management — all backed by Frappe ERP for inventory and fulfillment, and secured by Clerk authentication.",
    businessProblem:
      "OSKAZ needed a customer-facing digital storefront integrated with their existing Frappe ERP backend, with enterprise-grade authentication, multi-language support, and a domain architecture that could evolve independently of the back-office systems.",
    architecturalSolution:
      "A Next.js frontend with DDD-modeled bounded contexts (Product Catalog, Shopping Cart, Order Management, User Management), Clerk for identity, and Frappe JS SDK for seamless ERP data integration via the Repository Pattern. Svix handles webhook event processing for real-time state synchronization.",
    systemFlow:
      "Customer Request → Clerk Auth Middleware → DDD Domain Services → Frappe JS SDK → ERPNext Backend → Type-Safe JSON Response",

    techStack: [
      {
        label: "Frontend Framework",
        items: [
          { name: "Next.js", version: "16.0.10", purpose: "Full-stack React framework with SSR/SSG" },
          { name: "React", version: "19.2.0", purpose: "Concurrent rendering and hooks" },
          { name: "TypeScript", version: "5.7.2", purpose: "Type-safe development" },
        ],
      },
      {
        label: "UI & Styling",
        items: [
          { name: "Tailwind CSS", version: "4.0.0", purpose: "Utility-first CSS with custom design system" },
          { name: "Radix UI", purpose: "Accessible, unstyled UI primitives" },
          { name: "Framer Motion", purpose: "Production-ready animations" },
          { name: "Lucide React", purpose: "Icon library" },
          { name: "next-themes", purpose: "Dark/light mode management" },
        ],
      },
      {
        label: "Authentication & Security",
        items: [
          { name: "Clerk", version: "6.36.3", purpose: "Complete user management and authentication" },
          { name: "Svix", version: "1.77.0", purpose: "Webhook handling for real-time events" },
        ],
      },
      {
        label: "Backend Integration",
        items: [
          { name: "Frappe JS SDK", version: "1.11.0", purpose: "Client library for ERPNext integration" },
        ],
      },
      {
        label: "Development & Build",
        items: [
          { name: "ESLint", version: "9.17.0", purpose: "Code linting and quality" },
          { name: "PostCSS", version: "10.4.21", purpose: "CSS processing" },
          { name: "Autoprefixer", version: "10.4.21", purpose: "CSS vendor prefixing" },
          { name: "Turbo", purpose: "High-performance build system" },
          { name: "Node.js", version: "22.10.2", purpose: "Server runtime" },
        ],
      },
    ],

    architecture: {
      pattern: "DDD Frontend with ERP Backend Integration",
      diagram:
        "Next.js App (Frontend) ↔ Clerk Auth (Identity) ↔ Frappe ERP (Backend)\n\nDomain Layer → Application Services → Repository Pattern → Frappe JS SDK",
      designPatterns: [
        "Domain-Driven Design with 4 Bounded Contexts",
        "Repository Pattern for data access abstraction",
        "Factory Pattern for complex domain objects",
        "Domain Events (OrderPlaced, OrderShipped)",
        "Aggregate Pattern (Cart, Order, Product)",
        "Value Objects (Price, Rating, ProductFeatures)",
      ],
    },

    boundedContexts: [
      { name: "Product Catalog", responsibility: "Product information, categories, and inventory management", entities: ["Product", "Category", "Brand", "ProductAggregate"] },
      { name: "Shopping Cart", responsibility: "Cart operations and temporary order assembly", entities: ["Cart", "CartItem", "CartAggregate"] },
      { name: "Order Management", responsibility: "Order lifecycle from placement to fulfillment", entities: ["SalesOrder", "OrderItem", "OrderAggregate"] },
      { name: "User Management", responsibility: "Authentication, profiles, and preferences", entities: ["User", "Customer", "UserAggregate"] },
    ],

    schema: [
      { name: "products", description: "Product catalog with categories and inventory", keyFields: ["id", "name", "category_id", "price", "stock_qty", "features (JSONB)"] },
      { name: "categories", description: "Hierarchical product categories", keyFields: ["id", "name", "parent_id", "slug"] },
      { name: "cart_items", description: "Shopping cart with user association", keyFields: ["id", "user_id", "product_id", "quantity", "selected_options"] },
      { name: "sales_orders", description: "Order records with status lifecycle", keyFields: ["id", "customer_id", "items", "total", "status", "delivery_info"] },
      { name: "customers", description: "Customer profiles linked to Clerk auth", keyFields: ["id", "clerk_user_id", "name", "contact_info", "preferences"] },
    ],

    features: [
      { title: "Clerk Authentication", description: "Enterprise identity management with social providers, session handling, and webhook-driven user sync.", icon: "UserCheck" },
      { title: "ERP-Backed Inventory", description: "Real-time stock levels and pricing from Frappe ERPNext with type-safe SDK integration.", icon: "Package" },
      { title: "Multi-Language Support", description: "Internationalization with translation management for Ethiopian market localization.", icon: "Languages" },
      { title: "Domain Event Architecture", description: "OrderPlaced and OrderShipped events drive notifications, inventory updates, and fulfillment workflows.", icon: "Workflow" },
      { title: "Responsive Dark/Light Theme", description: "System-aware theming with next-themes and user preference persistence.", icon: "Moon" },
      { title: "SEO Optimized SSR", description: "Server-side rendering with comprehensive meta tags for optimal search engine visibility.", icon: "Search" },
    ],

    adrs: [
      { id: "ADR-001", title: "DDD for E-Commerce Frontend", status: "Accepted", rationale: "E-commerce has clear bounded contexts that align code with business domain." },
      { id: "ADR-002", title: "Four Bounded Contexts", status: "Accepted", rationale: "Product, Cart, Order, User — each with distinct business rules and stakeholders." },
      { id: "ADR-003", title: "Frontend DDD with TypeScript", status: "Accepted", rationale: "Domain services as pure functions with React context for aggregate state." },
      { id: "ADR-004", title: "React Context + Custom Hooks for Aggregates", status: "Accepted", rationale: "Maintains aggregate invariants in frontend without Redux overhead." },
      { id: "ADR-005", title: "Repository Pattern with Frappe JS SDK", status: "Accepted", rationale: "Decouples domain logic from data access technology." },
    ],
  },

  // =========================================================================
  // 5. FASTPAY ET WALLET
  // =========================================================================
  {
    slug: "fastpay",
    title: "FastPay ET Wallet",
    subtitle: "Cross-Border Payment Mobile Application",
    summary:
      "MSB-licensed cross-border remittance app enabling instant USD-to-ETB transfers with 60fps Reanimated animations, five DDD domains, and Zustand state management.",
    category: "Fintech",
    tags: ["Fintech", "Mobile", "React Native", "DDD"],
    year: "2026",
    status: "Production",
    client: "FastPay LLC (NMLS #2327896)",
    heroGradient: "from-green-500/20 via-transparent to-emerald-500/10",

    description:
      "FastPay ET Wallet is a production-ready mobile application designed to facilitate seamless cross-border payments between the United States and Ethiopia. Built for FastPay LLC (MSB Licensed, NMLS #2327896), this application delivers a pixel-perfect user experience with 60fps UI-thread animations, comprehensive Zustand state management, and strict Domain-Driven Design across five core business domains — Auth, Wallet, Transaction, Contact, and Notification.",
    businessProblem:
      "Ethiopian diaspora communities in the US face high fees, slow settlement times, and poor mobile UX when sending remittances home. Existing apps lack native mobile feel, real-time exchange rates, and MSB-compliant security measures.",
    architecturalSolution:
      "A React Native (Expo SDK 52) mobile app with five DDD bounded contexts, Zustand state stores with MMKV encrypted persistence, and a 60fps animation system powered by Reanimated v3 running exclusively on the UI thread. Schema-first development ensures all data contracts are TypeScript interfaces before implementation, with factory patterns for zero-placeholder UI demos.",
    systemFlow:
      "PIN/Biometric Auth → Zustand Session Store → Wallet Balance (Multi-Currency) → Transaction Creation → Exchange Rate Engine → Recipient Selection → Confirmation → Push Notification",

    techStack: [
      {
        label: "Core Framework & Runtime",
        items: [
          { name: "Expo SDK", version: "52+", purpose: "Managed React Native runtime with custom builds" },
          { name: "React Native", version: "0.83.2", purpose: "Cross-platform mobile framework" },
          { name: "TypeScript", version: "5.x", purpose: "Strict type safety" },
          { name: "Expo Router", version: "v4", purpose: "File-based navigation with native performance" },
        ],
      },
      {
        label: "UI & Animation Engine",
        items: [
          { name: "React Native Reanimated", version: "v3", purpose: "UI-thread 60fps animations and gestures" },
          { name: "React Native Gesture Handler", version: "v2", purpose: "Advanced touch interactions and pan gestures" },
          { name: "Expo Linear Gradient", purpose: "Smooth gradient backgrounds" },
          { name: "Lottie React Native", purpose: "Complex micro-interactions and success animations" },
          { name: "Expo Blur", purpose: "Glass-morphism overlay effects" },
          { name: "Expo Haptics", purpose: "Tactile feedback for all interactive elements" },
        ],
      },
      {
        label: "State Management & Data",
        items: [
          { name: "Zustand", purpose: "Lightweight reactive global state container" },
          { name: "React Native MMKV", purpose: "Synchronous encrypted key-value persistence" },
          { name: "@faker-js/faker", purpose: "Realistic mock data generation (300+ transactions)" },
          { name: "Dayjs", purpose: "Date formatting and timezone handling" },
          { name: "@shopify/flash-list", purpose: "60fps virtualized lists" },
        ],
      },
      {
        label: "Asset & Font Management",
        items: [
          { name: "Expo Google Fonts", purpose: "Plus Jakarta Sans typography system" },
          { name: "Expo Vector Icons", purpose: "Ionicons and Material Community Icons" },
          { name: "React Native SVG", purpose: "Custom vector graphics and charts" },
          { name: "Expo Image", purpose: "High-performance image rendering with caching" },
        ],
      },
      {
        label: "Development & Quality",
        items: [
          { name: "ESLint + Prettier", purpose: "Code quality and formatting" },
          { name: "Expo Dev Client", purpose: "Custom development builds with hot reloading" },
          { name: "React Native Safe Area Context", purpose: "Cross-device safe area handling" },
        ],
      },
    ],

    architecture: {
      pattern: "Domain-Driven Mobile Architecture with Zustand State Machines",
      diagram:
        "Expo Router Screens → Domain Hooks → Zustand Stores (MMKV Persistence) → Factory Data Layer\n\nDomains: Auth | Wallet | Transactions | Contacts | Notifications",
      designPatterns: [
        "Domain-Driven Design with 5 Bounded Contexts",
        "Schema-First Development (Interfaces → Implementation)",
        "Factory Pattern for components and data generation",
        "Observer Pattern (Zustand subscriptions)",
        "UI-Thread Animation System (Reanimated v3)",
        "MMKV Encrypted Persistence",
      ],
    },

    boundedContexts: [
      { name: "Auth", responsibility: "PIN/biometric authentication, session lifecycle", entities: ["User", "PIN (Value Object)", "Session (Aggregate)"] },
      { name: "Wallet", responsibility: "Multi-currency balance tracking and funding sources", entities: ["Wallet", "Balance (Value Object)", "Currency (Value Object)", "FundingSource"] },
      { name: "Transaction", responsibility: "Cross-border transfer processing and history", entities: ["Transaction", "TransactionType (Enum)", "TransactionStatus (Enum)", "Recipient (Value Object)", "ExchangeRate (Value Object)"] },
      { name: "Contact", responsibility: "Recipient management with favorites and search", entities: ["Contact", "ContactMethod (Value Object)", "Favorite (Aggregate)"] },
      { name: "Notification", responsibility: "Real-time alerts for transactions and security", entities: ["Notification", "NotificationType (Enum)"] },
    ],

    schema: [
      { name: "users", description: "User profile with KYC and session data", keyFields: ["id", "phone", "email", "kyc_status", "pin_hash", "biometric_enabled"] },
      { name: "wallets", description: "Multi-currency balance tracking", keyFields: ["id", "user_id", "balance_usd", "balance_etb", "funding_sources"] },
      { name: "transactions", description: "Transfer records with exchange rates", keyFields: ["id", "sender_id", "recipient_id", "amount_cents", "currency", "exchange_rate", "status", "type"] },
      { name: "contacts", description: "Saved recipients with transaction history", keyFields: ["id", "user_id", "name", "phone", "bank_info", "is_favorite"] },
      { name: "notifications", description: "Push notification history", keyFields: ["id", "user_id", "type", "title", "body", "read_at"] },
    ],

    features: [
      { title: "60fps UI-Thread Animations", description: "Every interaction runs on the native UI thread via Reanimated v3 — spring physics, gesture-driven transitions, and Lottie micro-interactions.", icon: "Sparkles" },
      { title: "Biometric + PIN Authentication", description: "4-digit PIN with FaceID/TouchID support, session management, and MSB-compliant security measures.", icon: "Fingerprint" },
      { title: "Live Exchange Rate Engine", description: "Real-time USD-to-ETB conversion with live rate simulation and multi-currency balance display.", icon: "ArrowLeftRight" },
      { title: "Factory Pattern Data Generation", description: "50+ Ethiopian/US contacts and 300+ transaction records generated via typed factories for zero-placeholder demos.", icon: "Database" },
      { title: "Encrypted Offline Persistence", description: "MMKV synchronous storage with encryption for sensitive financial data — faster than AsyncStorage.", icon: "HardDrive" },
      { title: "Cross-Platform Deployment", description: "Single codebase deploying to iOS, Android, and Web via Expo managed workflow.", icon: "Smartphone" },
    ],

    adrs: [
      { id: "ADR-001", title: "Domain-Driven Design for Fintech", status: "Accepted", rationale: "Financial applications benefit from explicit domain modeling with clear bounded contexts." },
      { id: "ADR-002", title: "Schema-First Development", status: "Accepted", rationale: "TypeScript interfaces defined before implementation ensure frontend-backend contract alignment." },
      { id: "ADR-003", title: "Factory Pattern for Components and Data", status: "Accepted", rationale: "Reduces duplication, ensures consistency, enables rapid prototyping." },
      { id: "ADR-004", title: "Zustand over Redux", status: "Accepted", rationale: "Lightweight with better TypeScript support, synchronous updates, zero boilerplate." },
      { id: "ADR-005", title: "Reanimated v3 for Animation System", status: "Accepted", rationale: "UI-thread execution ensures 60fps on all devices — critical for fintech trust." },
      { id: "ADR-006", title: "Cross-Platform Expo Managed Workflow", status: "Accepted", rationale: "Faster development than bare React Native with excellent native performance." },
      { id: "ADR-007", title: "MMKV for Encrypted Persistence", status: "Accepted", rationale: "Synchronous operations with built-in encryption — better than AsyncStorage for financial data." },
    ],
  },

  // =========================================================================
  // 6. PANA SPORTS
  // =========================================================================
  {
    slug: "pana-sport",
    title: "Pana Sports",
    subtitle: "National-Scale Ethiopian Football Platform",
    summary:
      "Real-time football platform serving the Ethiopian football ecosystem with live match tracking, league management, bilingual CMS, and Supabase-powered real-time subscriptions.",
    category: "Sports",
    tags: ["Sports", "Real-Time", "CMS", "Analytics"],
    year: "2026",
    status: "Production",
    liveUrl: "https://panasport.et",
    heroGradient: "from-amber-500/20 via-transparent to-yellow-500/10",

    description:
      "Pana Sports is VersaLabs' flagship public-facing product — a comprehensive digital platform serving the Ethiopian football ecosystem. It delivers real-time match tracking, league standings, team and player profiles, and a bilingual (English/Amharic) content management system. Covering Premier League, Ethiopian Cup, Higher League, and Women's League, it serves fans, club administrators, league officials, and media broadcasters at national scale.",
    businessProblem:
      "Ethiopian football lacked a centralized, reliable digital platform for real-time scores, league data, and content management — forcing fans to rely on fragmented social media posts and administrators to manage data through spreadsheets.",
    architecturalSolution:
      "A clean layered architecture (Presentation → Application → Domain → Infrastructure) built on Next.js 16 with Supabase as Backend-as-a-Service providing PostgreSQL, real-time subscriptions for live scores, authentication, and file storage. Bilingual content is modeled as a first-class domain concept with _en and _am fields on all entities. The CMS operates as a separate bounded context from the public site.",
    systemFlow:
      "User Action → Next.js Component → TanStack Query Hook → API Route → Zod Validation → Supabase Client → PostgreSQL → Real-Time Subscription → WebSocket Push",

    techStack: [
      {
        label: "Frontend Framework",
        items: [
          { name: "Next.js", version: "16.0.3", purpose: "App Router with server components and edge runtime" },
          { name: "React", version: "19.2.0", purpose: "Concurrent features and hooks" },
          { name: "TypeScript", version: "5.x", purpose: "Strict type-safe development" },
        ],
      },
      {
        label: "Backend & Database",
        items: [
          { name: "Supabase", purpose: "PostgreSQL, real-time subscriptions, auth, and storage" },
          { name: "PostgreSQL", purpose: "Relational database with advanced querying" },
        ],
      },
      {
        label: "State Management & Data",
        items: [
          { name: "TanStack Query", version: "5.90.9", purpose: "Data fetching, caching, and sync" },
          { name: "Zod", version: "4.1.13", purpose: "Runtime type validation and schema enforcement" },
          { name: "React Hook Form", version: "7.66.1", purpose: "Performant CMS form handling" },
        ],
      },
      {
        label: "UI & Styling",
        items: [
          { name: "Tailwind CSS", version: "4.x", purpose: "Utility-first CSS with custom design system" },
          { name: "Radix UI", purpose: "Accessible UI primitives" },
          { name: "Framer Motion", version: "12.23.24", purpose: "Animation library" },
          { name: "Lucide React", version: "0.553.0", purpose: "Icon library" },
        ],
      },
      {
        label: "Content & Forms",
        items: [
          { name: "TipTap", version: "3.11.x", purpose: "Rich text editor for CMS content creation" },
        ],
      },
      {
        label: "Monitoring & Analytics",
        items: [
          { name: "Sentry", purpose: "Error tracking and performance monitoring" },
          { name: "Vercel Analytics", purpose: "Usage analytics and Web Vitals" },
        ],
      },
      {
        label: "Development & Quality",
        items: [
          { name: "ESLint", purpose: "Code linting and enforcement" },
          { name: "Prettier", purpose: "Code formatting" },
          { name: "Husky", purpose: "Git hooks for quality gates" },
        ],
      },
    ],

    architecture: {
      pattern: "Clean Layered Architecture (DDD) with BaaS Backend",
      diagram:
        "Presentation Layer (Next.js Pages, Components) → Application Layer (TanStack Query Hooks, Business Logic) → Domain Layer (Zod Schemas, Domain Models) → Infrastructure Layer (Supabase, API Routes)",
      designPatterns: [
        "Clean Layered Architecture (4 layers)",
        "DDD with Bounded Contexts (Public + CMS)",
        "Bilingual Content Model (_en / _am fields)",
        "Repository Pattern via Supabase Client",
        "Domain Events (PostIngested, MetricCalculated)",
        "ISR (Incremental Static Regeneration) for performance",
      ],
    },

    boundedContexts: [
      { name: "Public Platform", responsibility: "Fan-facing live scores, standings, team/player profiles, news", entities: ["Match", "League", "Team", "Player", "NewsArticle", "Standing"] },
      { name: "CMS", responsibility: "Admin content management, match control, media uploads", entities: ["CMS_Match", "CMS_News", "CMS_Team", "User", "MediaAsset"] },
      { name: "Analytics", responsibility: "Usage statistics, content metrics, and performance tracking", entities: ["PageView", "ContentMetric", "UserSession"] },
    ],

    schema: [
      { name: "leagues", description: "League definitions with season data", keyFields: ["id", "name_en", "name_am", "season_id", "type", "status"] },
      { name: "teams", description: "Club profiles with roster links", keyFields: ["id", "name_en", "name_am", "logo_url", "league_id", "founded_year"] },
      { name: "players", description: "Player profiles with career statistics", keyFields: ["id", "name_en", "name_am", "team_id", "position", "jersey_number", "stats (JSONB)"] },
      { name: "matches", description: "Match records with real-time event tracking", keyFields: ["id", "league_id", "home_team_id", "away_team_id", "score", "events (JSONB)", "status", "match_week"] },
      { name: "news", description: "Bilingual news articles with rich text content", keyFields: ["id", "title_en", "title_am", "content_en", "content_am", "category", "published_at"] },
      { name: "standings", description: "League table calculations", keyFields: ["id", "league_id", "team_id", "played", "won", "drawn", "lost", "gd", "points"] },
    ],

    features: [
      { title: "Real-Time Live Scores", description: "Supabase real-time subscriptions deliver live score updates, match events, and commentary via WebSocket.", icon: "Radio" },
      { title: "Bilingual Content System", description: "All entities carry _en and _am fields — native English and Amharic support as a first-class domain concept.", icon: "Languages" },
      { title: "Multi-League Coverage", description: "Premier League, Ethiopian Cup, Higher League, and Women's League with automated standings tables.", icon: "Trophy" },
      { title: "Match Control Panel", description: "CMS operators manage live matches with time persistence, penalty shootouts, event editing, and real-time score updates.", icon: "Gamepad2" },
      { title: "TipTap Rich Text Editor", description: "WYSIWYG content creation for news articles with image embedding and link support.", icon: "PenTool" },
      { title: "Global Search (⌘K)", description: "Instant fuzzy search across teams, players, news, and matches from any page.", icon: "Search" },
    ],

    adrs: [
      { id: "ADR-001", title: "Clean Layered Architecture", status: "Accepted", rationale: "DDD alignment with independent testability per layer." },
      { id: "ADR-002", title: "Supabase as Primary Backend", status: "Accepted", rationale: "Built-in WebSocket for live scores, PostgreSQL for complex queries, managed infrastructure." },
      { id: "ADR-003", title: "Zod Schema Validation", status: "Accepted", rationale: "Enforces domain invariants at boundaries with TypeScript-first DX." },
      { id: "ADR-004", title: "TanStack Query for Data Management", status: "Accepted", rationale: "Intelligent caching and background updates for data-heavy sports app." },
      { id: "ADR-005", title: "Bilingual Content Model (_en/_am)", status: "Accepted", rationale: "Language as a core domain concept — foundation for additional languages." },
      { id: "ADR-006", title: "CMS as Separate Bounded Context", status: "Accepted", rationale: "Clear isolation of admin and fan-facing domains for security and independent evolution." },
    ],
  },

  // =========================================================================
  // 7. PAVILION360 V2.0
  // =========================================================================
  {
    slug: "pavillion-360",
    title: "Pavilion360 V2.0",
    subtitle: "Data-Driven Event Production Platform with CMS & CRM",
    summary:
      "Full-stack event production platform with 8 CMS content modules, integrated quote-to-lead CRM, and Supabase PostgreSQL with Row Level Security — transformed from static marketing site to data-driven enterprise platform.",
    category: "Events",
    tags: ["Events", "CMS", "CRM", "Enterprise"],
    year: "2026",
    status: "Production",
    heroGradient: "from-purple-500/20 via-transparent to-pink-500/10",

    description:
      "Pavilion360 V2.0 represents a complete architectural transformation of a static marketing website into a fully data-driven, enterprise-grade platform with an integrated CMS and lightweight CRM. Built for a premium event production company specializing in audio-visual production and rental equipment, it features 8 comprehensive content modules, quote basket functionality, lead management, and Supabase PostgreSQL with Row Level Security.",
    businessProblem:
      "Pavilion360's static website required developer intervention for every content update, had no lead capture capability, and couldn't showcase their rental inventory dynamically — losing potential clients to competitors with interactive online presences.",
    architecturalSolution:
      "A Next.js full-stack platform with clear separation between public site and CMS bounded contexts. 15+ PostgreSQL tables with JSONB for flexible schemas, full-text search, and RLS policies. TipTap rich text editing, centralized media library via Supabase Storage, and TanStack Query for intelligent caching. RESTful APIs with consistent Zod validation across all public and protected endpoints.",
    systemFlow:
      "Public Visitor → Browse Services/Rentals → Quote Basket → Submit Request → CMS Admin Reviews → Lead Status Pipeline → Client Communication",

    techStack: [
      {
        label: "Core Framework",
        items: [
          { name: "Next.js", version: "16.x", purpose: "Full-stack React with App Router and Server Components" },
          { name: "React", version: "19.x", purpose: "Concurrent rendering" },
          { name: "TypeScript", version: "5.x", purpose: "End-to-end type safety" },
        ],
      },
      {
        label: "Backend & Database",
        items: [
          { name: "Supabase", purpose: "Backend-as-a-Service (PostgreSQL, Auth, Storage, Real-Time)" },
          { name: "PostgreSQL", version: "15.x", purpose: "ACID, JSONB, full-text search, RLS policies" },
          { name: "Supabase Auth", purpose: "JWT session management with user metadata for roles" },
          { name: "Supabase Storage", purpose: "CDN-backed image storage with thumbnails" },
        ],
      },
      {
        label: "State Management & Data",
        items: [
          { name: "TanStack Query", version: "5.x", purpose: "Server state with intelligent caching" },
          { name: "React Hook Form", version: "7.x", purpose: "Performant form state management" },
          { name: "Zod", version: "3.x", purpose: "Schema validation across all API boundaries" },
        ],
      },
      {
        label: "UI & UX",
        items: [
          { name: "Tailwind CSS", version: "4.x", purpose: "Utility-first CSS" },
          { name: "Radix UI", purpose: "WCAG-compliant component primitives" },
          { name: "Framer Motion", version: "12.x", purpose: "Performance-optimized animations" },
          { name: "Lucide React", purpose: "Consistent iconography" },
          { name: "Sonner", version: "1.x", purpose: "Toast notifications" },
          { name: "TipTap", purpose: "Extensible rich text editor for CMS" },
        ],
      },
      {
        label: "Development & Quality",
        items: [
          { name: "ESLint", purpose: "Code linting" },
          { name: "Prettier", purpose: "Code formatting" },
          { name: "pnpm", purpose: "Fast, disk-efficient package manager" },
        ],
      },
    ],

    architecture: {
      pattern: "Dual-Context Platform (Public + CMS) with BaaS Backend",
      diagram:
        "Public Website (/api/public/* — read-only) ↔ Supabase Backend (PostgreSQL + Storage + Auth)\nCMS Dashboard (/api/cms/* — CRUD, protected) ↔ Supabase Backend\n\n15+ Tables | RLS Policies | JSONB Schemas | Full-Text Search",
      designPatterns: [
        "DDD with 3 Bounded Contexts (Content, Rental, CRM)",
        "Repository Pattern (IServiceRepository interface)",
        "Value Objects (Slug, Email, Money, Address, SEO)",
        "Domain Events (ContentPublished, QuoteRequested)",
        "CRUD-First CMS with Templated Forms",
        "Row Level Security at Database Layer",
      ],
    },

    boundedContexts: [
      { name: "Content Management", responsibility: "Services, portfolio, blog, venues, FAQs, team, testimonials lifecycle", entities: ["Service", "PortfolioProject", "BlogPost", "Venue", "FAQ", "TeamMember", "Testimonial"] },
      { name: "Rental Management", responsibility: "Equipment inventory, categories, pricing, and quote basket", entities: ["RentalItem", "RentalCategory", "QuoteBasket"] },
      { name: "CRM", responsibility: "Quote requests, contact inquiries, and lead scoring", entities: ["QuoteRequest", "Inquiry", "Lead"] },
    ],

    schema: [
      { name: "services", description: "Service offerings with use cases and process steps", keyFields: ["id", "title", "slug", "description", "use_cases (JSONB)", "process_steps (JSONB)", "packages (JSONB)"] },
      { name: "rental_items", description: "Equipment catalog with specifications", keyFields: ["id", "name", "slug", "category_id", "specifications (JSONB)", "price_per_day", "stock"] },
      { name: "portfolio_projects", description: "Event case studies with technical highlights", keyFields: ["id", "title", "slug", "client_name", "technical_highlights (JSONB)", "client_quote"] },
      { name: "quote_requests", description: "Customer rental quote submissions", keyFields: ["id", "customer_name", "email", "items (JSONB)", "event_date", "status", "notes"] },
      { name: "inquiries", description: "General contact form submissions", keyFields: ["id", "name", "email", "message", "status", "created_at"] },
      { name: "blog_posts", description: "Company news with SEO metadata", keyFields: ["id", "title", "slug", "content", "seo (JSONB)", "published_at", "author"] },
      { name: "site_settings", description: "Global site configuration", keyFields: ["id", "company_name", "contact_info", "social_links (JSONB)"] },
    ],

    features: [
      { title: "8 CMS Content Modules", description: "Services, Rentals, Portfolio, Venues, Blog, Team, FAQs, and Testimonials — each with CRUD operations and rich text editing.", icon: "LayoutGrid" },
      { title: "Quote Basket System", description: "Interactive rental selection with multi-item quote builder, event date selection, and automated lead creation.", icon: "ShoppingCart" },
      { title: "Lead Management CRM", description: "Quote-to-lead pipeline with status tracking, priority scoring, and customer communication workflows.", icon: "Users" },
      { title: "Centralized Media Library", description: "Supabase Storage integration with CDN-backed image management, thumbnail generation, and access control.", icon: "Image" },
      { title: "Row Level Security", description: "Database-level access control ensuring public endpoints are read-only and CMS mutations require admin authentication.", icon: "ShieldCheck" },
      { title: "Analytics Dashboard", description: "Real-time content performance metrics, page view tracking, and business intelligence for administrative decision-making.", icon: "BarChart3" },
    ],

    adrs: [
      { id: "ADR-001", title: "Next.js 16 + Supabase + TypeScript Stack", status: "Accepted", rationale: "Full-stack framework with managed backend reduces infrastructure overhead." },
      { id: "ADR-002", title: "PostgreSQL with JSONB and RLS", status: "Accepted", rationale: "Flexible schemas for complex data + database-level security." },
      { id: "ADR-003", title: "TanStack Query + React Context for State", status: "Accepted", rationale: "Server state optimized with intelligent caching; client state kept simple." },
      { id: "ADR-004", title: "Radix UI + Tailwind for UI", status: "Accepted", rationale: "WCAG compliance with full customization flexibility." },
      { id: "ADR-005", title: "Supabase Auth with Metadata Roles", status: "Accepted", rationale: "JWT auth with role stored in user profile for middleware protection." },
      { id: "ADR-006", title: "CRUD-First CMS with TipTap", status: "Accepted", rationale: "Familiar workflow for non-technical content managers." },
      { id: "ADR-007", title: "RESTful API with Zod Validation", status: "Accepted", rationale: "Consistent response format with type-safe runtime validation." },
      { id: "ADR-008", title: "Vercel + Supabase Deployment", status: "Accepted", rationale: "Optimized for Next.js with integrated managed backend." },
    ],
  },

  // =========================================================================
  // 8. PRINTONLINE.ET
  // =========================================================================
  {
    slug: "printonline-et",
    title: "PrintOnline.et",
    subtitle: "Enterprise E-Commerce for Ethiopian Printing Services",
    summary:
      "Production e-commerce platform with matrix-based pricing engine, Chapa payment gateway integration, 8-step order status pipeline, and bilingual storefront deployed for national printing operations.",
    category: "E-Commerce",
    tags: ["E-Commerce", "Print", "Fintech", "Enterprise"],
    year: "2026",
    status: "Production",
    liveUrl: "https://printonline.et",
    githubUrl: "https://github.com/versalabs/printonline-et",
    heroGradient: "from-orange-500/20 via-transparent to-red-500/10",

    description:
      "PrintOnline.et is an enterprise-grade e-commerce platform built for the Ethiopian printing industry, empowering Pana Promotion to offer seamless online ordering for 15+ printing products. It features a matrix-based pricing engine replacing additive models, Chapa payment gateway integration for ETB transactions, an 8-step order status pipeline with email notifications, and a comprehensive admin CMS — transitioning from manual cash-on-delivery to a fully digital commerce operation.",
    businessProblem:
      "Ethiopian printing businesses rely on manual quoting, cash-on-delivery payments, and phone-based order tracking — creating pricing errors, payment delays, and zero visibility for customers into their order status.",
    architecturalSolution:
      "A schema-first Next.js 16 application with six DDD bounded contexts (Catalog, Ordering, Customer, Payment, Fulfillment, Admin). Matrix-based pricing stores exact prices per option combination in PostgreSQL. Chapa's hosted checkout provides PCI-compliant payment processing without card data touching the server. Better-auth handles user sessions, and Nodemailer sends automated order notifications via Ethio Telecom SMTP.",
    systemFlow:
      "Product Browse → Option Selection → Matrix Price Lookup → Cart (localStorage/DB) → Checkout Wizard → Chapa Payment → Order Created → 8-Step Status Pipeline → Email Notifications",

    techStack: [
      {
        label: "Frontend",
        items: [
          { name: "Next.js", version: "16.x", purpose: "Full-stack App Router with SSR/SSG" },
          { name: "React", version: "19.x", purpose: "Component-based UI" },
          { name: "TypeScript", version: "5.x", purpose: "Strict type safety" },
          { name: "Tailwind CSS", version: "v4.x", purpose: "Utility-first CSS" },
          { name: "shadcn/ui (Radix)", purpose: "Accessible component primitives (new-york variant)" },
          { name: "Framer Motion", version: "v11.x", purpose: "Micro-interactions" },
          { name: "Lucide React", purpose: "Icon library" },
          { name: "next-themes", purpose: "Dark mode with OKLCH color system" },
        ],
      },
      {
        label: "Data & State",
        items: [
          { name: "TanStack Query", version: "v5.x", purpose: "Server state management" },
          { name: "React Hook Form", version: "v7.x", purpose: "Form handling" },
          { name: "Zod", version: "v3.x", purpose: "Runtime validation" },
        ],
      },
      {
        label: "Backend & Database",
        items: [
          { name: "Supabase (PostgreSQL)", purpose: "Database, storage, and RLS" },
          { name: "Supabase Storage", purpose: "File uploads (4 files, 10MB each)" },
          { name: "better-auth", version: "v1.3.x", purpose: "Secure session-based authentication" },
          { name: "Nodemailer", purpose: "SMTP email (Ethio Telecom)" },
        ],
      },
      {
        label: "Payment",
        items: [
          { name: "Chapa", purpose: "Ethiopian payment gateway (redirect-based, PCI-compliant)" },
        ],
      },
      {
        label: "Deployment",
        items: [
          { name: "Vercel", purpose: "Hosting, CDN, and serverless functions" },
          { name: "GitHub Actions", purpose: "CI/CD pipeline" },
        ],
      },
    ],

    architecture: {
      pattern: "Schema-First E-Commerce with Matrix Pricing Engine",
      diagram:
        "Next.js (Storefront + CMS) → API Routes → better-auth (Sessions) → Supabase (PostgreSQL + Storage)\n\nChapa Payment Gateway → Webhook Verification → Order Status Pipeline → Nodemailer (SMTP)\n\nRoute Groups: (storefront) | (auth) | (account) | (cms)",
      designPatterns: [
        "DDD with 6 Bounded Contexts",
        "Matrix-Based Pricing (exact lookup, not additive)",
        "8-Step Order Status Pipeline with transition rules",
        "Schema-First Development (Supabase → Types → Zod)",
        "Component Decomposition (max 200 lines)",
        "Row Level Security for data isolation",
      ],
    },

    boundedContexts: [
      { name: "Catalog", responsibility: "Products, categories, options, and pricing matrices", entities: ["Product", "ProductOptions", "ProductOptionValues", "PricingMatrix"] },
      { name: "Ordering", responsibility: "Cart management, checkout wizard, order lifecycle", entities: ["Order", "OrderItems", "Cart", "CartItems"] },
      { name: "Customer", responsibility: "User profiles, authentication, account management", entities: ["CustomerProfile"] },
      { name: "Payment", responsibility: "Chapa integration and transaction verification", entities: ["PaymentTransaction", "ChapaSession"] },
      { name: "Fulfillment", responsibility: "Order status pipeline (8 steps) and notifications", entities: ["OrderStatus", "StatusHistory", "EmailNotification"] },
      { name: "Admin", responsibility: "CMS dashboard, order management, and customer insights", entities: ["CMS_Order", "CMS_Customer", "CMS_Analytics"] },
    ],

    schema: [
      { name: "products", description: "Printing product catalog", keyFields: ["id", "name", "slug", "category_id", "base_price", "description", "features (JSONB)"] },
      { name: "product_options", description: "Configurable options per product (size, paper, lamination)", keyFields: ["id", "product_id", "option_name", "display_order"] },
      { name: "product_option_values", description: "Possible values for each option", keyFields: ["id", "option_id", "value", "label"] },
      { name: "product_pricing_matrix", description: "Exact price per option combination (v3.0)", keyFields: ["id", "product_id", "option_combination (JSONB)", "price_etb", "quantity_range"] },
      { name: "orders", description: "Order headers with 8-step status pipeline", keyFields: ["id", "customer_id", "total_etb", "status", "status_history (JSONB)", "payment_ref"] },
      { name: "order_items", description: "Line items with option selections and file uploads", keyFields: ["id", "order_id", "product_id", "selected_options (JSONB)", "quantity", "file_urls"] },
      { name: "customer_profiles", description: "User data linked to better-auth", keyFields: ["id", "auth_user_id", "name", "phone", "city", "sub_city", "woreda"] },
    ],

    features: [
      { title: "Matrix-Based Pricing Engine", description: "Replaces additive pricing with exact price lookups per option combination — prevents calculation errors across 15+ product types.", icon: "Grid3X3" },
      { title: "Chapa Payment Gateway", description: "Ethiopian ETB payment processing via hosted checkout — PCI-compliant with zero card data on our servers.", icon: "CreditCard" },
      { title: "8-Step Order Pipeline", description: "Received → Confirmed → Designing → Printing → Quality Check → Ready → Shipped → Delivered — with email notifications at each transition.", icon: "GitBranch" },
      { title: "Design File Upload", description: "Multi-file upload (up to 4 files, 10MB each) stored securely in Supabase Storage, attached to order line items.", icon: "Upload" },
      { title: "Full-Text Product Search", description: "Debounced live search with premium UI suggestions across product catalog and categories.", icon: "Search" },
      { title: "ETB Currency Localization", description: "Localized Ethiopian Birr formatting and display throughout storefront, checkout, and admin dashboard.", icon: "BadgeDollarSign" },
    ],

    adrs: [
      { id: "ADR-001", title: "Schema-First Development", status: "Accepted", rationale: "Supabase schema as source of truth with auto-generated TypeScript types." },
      { id: "ADR-002", title: "Matrix-Based Pricing", status: "Accepted", rationale: "Client pricing depends on option combinations — prevents additive errors." },
      { id: "ADR-003", title: "Hosted Payment (Chapa)", status: "Accepted", rationale: "No card data on our servers reduces PCI compliance burden." },
      { id: "ADR-004", title: "8-Step Order Status Pipeline", status: "Accepted", rationale: "Models real printing business workflow with strict transition rules." },
      { id: "ADR-005", title: "200-Line Component Max", status: "Accepted", rationale: "Enforces single responsibility for maintainability and team collaboration." },
      { id: "ADR-006", title: "TanStack Query for Data Fetching", status: "Accepted", rationale: "Caching, sync, and error handling for all data operations." },
    ],
  },

  // =========================================================================
  // 9. AUROQUEUE
  // =========================================================================
  {
    slug: "auroqueue",
    title: "AuroQueue",
    subtitle: "Enterprise Queue Management System",
    summary:
      "Real-time queue orchestration platform for hospitals, banks, and government offices, featuring self-service kiosks, multi-tenant Docker deployment, and Traefik load balancing.",
    category: "SaaS",
    tags: ["SaaS", "Real-Time", "Multi-Tenant", "Healthcare"],
    year: "2026",
    status: "Production",
    heroGradient: "from-sky-500/20 via-transparent to-blue-500/10",

    description:
      "AuroQueue is an enterprise-grade Queue Management System architected for operational excellence in hospitals, banks, government offices, and enterprise organizations. It delivers real-time queue orchestration across three components — a Hapi.js API server, a Next.js staff dashboard, and an Expo self-service kiosk — with multi-tenant Docker deployment and Traefik load balancing for horizontal scaling.",
    businessProblem:
      "Service organizations manage walk-in queues with manual ticketing, paper logs, and verbal announcements — creating long wait times, staff confusion, and zero analytics on operational throughput and bottlenecks.",
    architecturalSolution:
      "A microservices-inspired monorepo with three independent components: a Hapi.js REST API with JWT auth and Sequelize ORM, a Next.js admin dashboard with ShadCN UI and Recharts analytics, and an Expo-based self-service kiosk with QR ticket generation. Multi-tenant isolation via Docker containers with Traefik automatic load balancing and Redis queue state caching.",
    systemFlow:
      "Self-Service Kiosk → Ticket Generation → Redis Cache → Staff Dashboard → Call/Complete → Analytics Engine → Performance Dashboard",

    techStack: [
      {
        label: "Backend",
        items: [
          { name: "Hapi.js", version: "v21+", purpose: "Enterprise API framework" },
          { name: "Sequelize", version: "6+", purpose: "ORM with PostgreSQL/SQLite support" },
          { name: "PostgreSQL", version: "13+", purpose: "Primary production database" },
          { name: "Redis", version: "6+", purpose: "Session and queue state caching" },
          { name: "JWT (HS256)", purpose: "Token-based authentication" },
          { name: "Joi", purpose: "API input validation schemas" },
          { name: "Socket.io", version: "4+", purpose: "Real-time queue updates" },
          { name: "Multer", purpose: "File uploads with S3/cloud storage support" },
          { name: "Winston", purpose: "Structured logging" },
          { name: "Bcrypt", purpose: "Password hashing with salt rounds" },
        ],
      },
      {
        label: "Frontend Dashboard",
        items: [
          { name: "Next.js", version: "14+", purpose: "Full-stack React framework with App Router" },
          { name: "TypeScript", version: "5+", purpose: "Strict type safety" },
          { name: "ShadCN UI (Radix)", purpose: "UI component library with Radix primitives" },
          { name: "Tailwind CSS", version: "v4", purpose: "Custom design system" },
          { name: "TanStack Query", purpose: "Server state management" },
          { name: "React Hook Form + Zod", purpose: "Form handling with validation" },
          { name: "Recharts", purpose: "Analytics visualization" },
          { name: "Framer Motion", purpose: "Micro-interactions" },
        ],
      },
      {
        label: "Ticket Kiosk",
        items: [
          { name: "Expo SDK", purpose: "React Native Web cross-platform kiosk" },
          { name: "React Native", purpose: "Native touch UI with large targets" },
          { name: "Axios", purpose: "HTTP client with automatic retry logic" },
        ],
      },
      {
        label: "Infrastructure",
        items: [
          { name: "Docker", version: "20+", purpose: "Containerization" },
          { name: "Traefik", version: "2+", purpose: "Automatic load balancing and routing" },
          { name: "PM2", version: "5+", purpose: "Process management" },
        ],
      },
    ],

    architecture: {
      pattern: "Microservices-Inspired Monorepo with Multi-Tenant Docker",
      diagram:
        "Self-Service Kiosk (Expo) → REST API (Hapi.js) ← Staff Dashboard (Next.js)\n\nAll → Redis Cache + PostgreSQL → Traefik Load Balancer → Per-Client Docker Instances",
      designPatterns: [
        "DDD with 4 Bounded Contexts",
        "Multi-Tenant Container Isolation",
        "Short Polling (5s) with WebSocket-Ready Architecture",
        "Repository Pattern (Sequelize)",
        "Role-Based Access Control (Admin vs Employee)",
        "Optimistic UI Updates with Conflict Resolution",
      ],
    },

    boundedContexts: [
      { name: "Queue Management", responsibility: "Ticket lifecycle, queue algorithms, prioritization", entities: ["Ticket", "QueueSession"] },
      { name: "Staff Operations", responsibility: "Employee authentication, ticket calling, performance tracking", entities: ["User", "CallRecord"] },
      { name: "Administration", responsibility: "Department configuration, user management, system settings", entities: ["Department", "SystemConfig"] },
      { name: "Analytics & Reporting", responsibility: "Performance metrics, wait time analysis, historical reporting", entities: ["Metric", "Report", "DashboardWidget"] },
    ],

    schema: [
      { name: "tickets", description: "Central queue ticket with status and timestamps", keyFields: ["id", "ticket_number", "department_id", "status", "created_at", "called_at", "completed_at"] },
      { name: "departments", description: "Service departments with custom prefixes", keyFields: ["id", "name", "prefix", "is_active", "avg_service_time"] },
      { name: "users", description: "Staff members with roles", keyFields: ["id", "username", "role (admin|employee)", "department_id", "password_hash"] },
      { name: "queue_sessions", description: "Daily operational context", keyFields: ["id", "date", "department_id", "total_served", "avg_wait_time"] },
    ],

    features: [
      { title: "Self-Service Kiosk", description: "Touch-enabled Expo app with QR code ticket generation, large accessibility targets, and offline fallback via local storage.", icon: "Tablet" },
      { title: "Multi-Tenant Deployment", description: "Each client runs in isolated Docker containers with separate databases, independent scaling, and shared Traefik infrastructure.", icon: "Server" },
      { title: "Real-Time Queue Status", description: "5-second polling with WebSocket-ready architecture, TV display integration, and cross-device state consistency.", icon: "MonitorPlay" },
      { title: "Performance Analytics", description: "Average wait time, service time, tickets-per-hour, department comparisons, and individual staff efficiency tracking.", icon: "PieChart" },
      { title: "Traefik Load Balancing", description: "Automatic horizontal scaling with Traefik reverse proxy distributing traffic across backend instances per client.", icon: "Network" },
      { title: "TV Display Integration", description: "Real-time public display showing current ticket numbers, called tickets, and estimated wait times.", icon: "MonitorPlay" },
    ],

    adrs: [
      { id: "ADR-001", title: "Hapi.js for Enterprise API", status: "Accepted", rationale: "Plugin architecture, Joi validation, and built-in caching for enterprise workloads." },
      { id: "ADR-002", title: "Multi-Tenant Docker Isolation", status: "Accepted", rationale: "Separate databases and containers per client for data isolation and independent scaling." },
      { id: "ADR-003", title: "Expo for Cross-Platform Kiosk", status: "Accepted", rationale: "Single codebase deploys to web, iOS, and Android kiosk hardware." },
      { id: "ADR-004", title: "Redis for Queue State", status: "Accepted", rationale: "In-memory caching for sub-second queue status reads across all clients." },
    ],
  },

  // =========================================================================
  // 10. POTENTIA
  // =========================================================================
  {
    slug: "potentia",
    title: "Potentia",
    subtitle: "Enterprise Bitcoin Mining Business Platform",
    summary:
      "Three-phase Bitcoin mining business management platform — Learn, Own, Operate — with DDD service layer architecture, financial P&L tracking, tax depreciation schedules, and fleet health monitoring.",
    category: "Blockchain",
    tags: ["Blockchain", "Enterprise", "Analytics"],
    year: "2026",
    status: "MVP",
    githubUrl: "https://github.com/kidusabdula/potentia-web",
    heroGradient: "from-yellow-500/20 via-transparent to-amber-500/10",

    description:
      "Potentia is an enterprise-grade Bitcoin mining business management platform that transforms mining operations from technical endeavors into professional enterprises. Built around three interconnected phases — Learn (education & certification), Own (equipment & asset management), and Operate (fleet monitoring & financial reporting) — it guides users through every stage of building a mining business with domain-driven service architecture.",
    businessProblem:
      "Bitcoin mining operators lack integrated tooling to manage the full business lifecycle — education, equipment procurement, hosting contracts, fleet health monitoring, P&L reporting, and tax compliance — resulting in fragmented spreadsheets and missed depreciation opportunities.",
    architecturalSolution:
      "A DDD-architected platform with three bounded contexts (Learn, Own, Operate), each with dedicated domain services (learnService, analyticsService, taxService, financeService). Client-side LocalStorage with structured service abstraction provides zero-backend MVP persistence, while TypeScript interfaces enforce strong domain models. Custom event tracking feeds real-time operational dashboards.",
    systemFlow:
      "Learning Curriculum → Certification → Equipment Procurement → Hosting Contracts → Fleet Health Dashboard → P&L Reports → Tax Depreciation Schedules",

    techStack: [
      {
        label: "Frontend Framework",
        items: [
          { name: "Next.js", version: "16.1.0", purpose: "React framework with App Router" },
          { name: "React", version: "19.0.0", purpose: "Concurrent features" },
          { name: "TypeScript", version: "5.0", purpose: "Type-safe domain modeling" },
        ],
      },
      {
        label: "UI & Styling",
        items: [
          { name: "Tailwind CSS", version: "4.1.9", purpose: "Utility-first CSS" },
          { name: "Radix UI", purpose: "Accessible component primitives" },
          { name: "Framer Motion", purpose: "Animation library" },
          { name: "Lucide React", purpose: "Icon library" },
        ],
      },
      {
        label: "Data Management",
        items: [
          { name: "LocalStorage API", purpose: "Client-side persistence (MVP)" },
          { name: "Custom Service Layer", purpose: "Business logic abstraction" },
          { name: "TypeScript Interfaces", purpose: "Strong domain model typing" },
        ],
      },
      {
        label: "Analytics",
        items: [
          { name: "Vercel Analytics", purpose: "Web analytics and performance monitoring" },
          { name: "Custom Event Tracking", purpose: "Domain-specific analytics events" },
        ],
      },
      {
        label: "Development Tools",
        items: [
          { name: "ESLint", purpose: "Code linting" },
          { name: "PostCSS", purpose: "CSS processing" },
          { name: "Autoprefixer", purpose: "CSS vendor prefixing" },
          { name: "pnpm", purpose: "Package management" },
        ],
      },
    ],

    architecture: {
      pattern: "DDD Service Layer Architecture with Client-Side Persistence",
      diagram:
        "Next.js App Router → React Components → Custom Hooks → Domain Services (learnService, taxService, financeService, analyticsService) → LocalStorage Persistence\n\nDomains: Learn | Own | Operate | Shared Infrastructure",
      designPatterns: [
        "Domain-Driven Design with 3 Bounded Contexts",
        "Service Layer Pattern",
        "Repository Pattern for persistence",
        "Observer Pattern (analytics event tracking)",
        "Strategy Pattern (financial calculations, tax strategies)",
        "Event-Driven Analytics",
      ],
    },

    boundedContexts: [
      { name: "Learn", responsibility: "Bitcoin mining curriculum, assessments, certification, study streaks", entities: ["Lesson", "Track", "Quiz", "Certification", "LearningProgress"] },
      { name: "Own", responsibility: "Equipment procurement, hosting contracts, capital deployment", entities: ["Equipment", "HostingContract", "Asset", "Facility"] },
      { name: "Operate", responsibility: "Fleet health, P&L reporting, tax depreciation, treasury management", entities: ["Fleet", "FinancialReport", "DepreciationSchedule", "Alert"] },
    ],

    schema: [
      { name: "lessons", description: "Individual learning units with video and assessment", keyFields: ["id", "track_id", "title", "content_url", "quiz", "duration"] },
      { name: "tracks", description: "Learning paths grouping related lessons", keyFields: ["id", "title", "lessons", "difficulty", "certification"] },
      { name: "equipment", description: "Mining hardware with specifications", keyFields: ["id", "model", "hash_rate", "power_consumption", "purchase_price", "acquisition_date"] },
      { name: "contracts", description: "Hosting agreements with terms and costs", keyFields: ["id", "facility_name", "start_date", "end_date", "monthly_cost", "power_rate"] },
      { name: "financial_reports", description: "P&L statements and balance sheets", keyFields: ["id", "period", "revenue", "expenses", "net_income", "cash_flow"] },
    ],

    features: [
      { title: "Interactive Learning Curriculum", description: "Comprehensive Bitcoin mining education from fundamentals to advanced strategy, with video content, quizzes, study streaks, and certification.", icon: "GraduationCap" },
      { title: "Equipment & Asset Management", description: "Track mining hardware inventory, hosting contracts, capital deployment, and facility management in one dashboard.", icon: "HardDrive" },
      { title: "P&L Financial Reporting", description: "Real-time profit & loss tracking with revenue, expense, and cash flow analysis across mining operations.", icon: "DollarSign" },
      { title: "Tax Depreciation Engine", description: "Automated depreciation schedules for mining equipment with multiple strategy options (straight-line, MACRS).", icon: "Calculator" },
      { title: "Fleet Health Monitoring", description: "Real-time operational dashboards for mining fleet performance, alert thresholds, and maintenance scheduling.", icon: "Activity" },
      { title: "Domain Analytics Events", description: "Structured event tracking across Learn, Own, and Operate phases for data-driven business decisions.", icon: "BarChart" },
    ],

    adrs: [
      { id: "ADR-001", title: "DDD with Learn/Own/Operate Contexts", status: "Accepted", rationale: "Complex mining business lifecycle requires explicit domain modeling." },
      { id: "ADR-002", title: "Service Layer Architecture", status: "Accepted", rationale: "Business logic decoupled from UI for testability and domain isolation." },
      { id: "ADR-003", title: "Client-Side LocalStorage for MVP", status: "Accepted", rationale: "Zero backend dependency for rapid development — migration path to full backend." },
      { id: "ADR-004", title: "Radix UI + Tailwind for Components", status: "Accepted", rationale: "WCAG compliance with consistent design system." },
      { id: "ADR-005", title: "Domain-Specific Event Tracking", status: "Accepted", rationale: "Structured analytics across all three phases for business intelligence." },
    ],
  },

  // =========================================================================
  // 11. LIVE ADDIS
  // =========================================================================
  {
    slug: "live-addis",
    title: "Live Addis",
    subtitle: "Real-Time Social Media Analytics Dashboard",
    summary:
      "Social media data aggregation and analytics platform for monitoring live events in Addis Ababa, with domain events, sentiment analysis, and customizable widget dashboards.",
    category: "Analytics",
    tags: ["Analytics", "Social Media", "Real-Time"],
    year: "2026",
    status: "Development",
    githubUrl: "https://github.com/kidusabdula/live-addis",
    heroGradient: "from-pink-500/20 via-transparent to-rose-500/10",

    description:
      "Live Addis is a proprietary web platform that aggregates real-time social media data from Facebook and Twitter, provides analytics dashboards with sentiment scoring, and offers customizable widget-based interfaces for monitoring live events in Addis Ababa. The application follows a strict DDD approach with four bounded contexts communicating via domain events, deployed on Vercel with automated CI/CD.",
    businessProblem:
      "Event organizers and media outlets in Addis Ababa lack unified dashboards to monitor social media activity around live events in real-time, relying instead on manual platform-by-platform monitoring.",
    architecturalSolution:
      "A clean layered architecture (Presentation → Application → Domain → Infrastructure) with four bounded contexts: SocialIngestion, Analytics, UserDashboard, and Notification. External social APIs are isolated behind repository interfaces, and domain events (PostIngested, MetricCalculated) drive cross-context communication. SWR provides cache-aware data fetching with React Context for state.",
    systemFlow:
      "External Social APIs (Facebook, Twitter) → SocialIngestion Context → Domain Events → Analytics Context (Sentiment, Trends) → UserDashboard Context → Notification Context (Threshold Alerts)",

    techStack: [
      {
        label: "Frontend",
        items: [
          { name: "Next.js", version: "13+", purpose: "SSR and static generation" },
          { name: "React", version: "18", purpose: "Component-based UI" },
          { name: "TypeScript", purpose: "Type-safe development" },
          { name: "Tailwind CSS", purpose: "Utility-first styling" },
          { name: "PostCSS", purpose: "CSS processing" },
        ],
      },
      {
        label: "State Management",
        items: [
          { name: "React Context", purpose: "Client state management" },
          { name: "SWR", purpose: "Cache-aware data fetching" },
        ],
      },
      {
        label: "Data Sources",
        items: [
          { name: "Facebook Graph API", purpose: "Social data ingestion" },
          { name: "Twitter API", purpose: "Tweet data ingestion" },
          { name: "JSON Files (dev)", purpose: "Prototype data store (prod: cloud storage)" },
        ],
      },
      {
        label: "Testing & Quality",
        items: [
          { name: "Jest", purpose: "Unit testing" },
          { name: "React Testing Library", purpose: "Component testing" },
          { name: "ESLint + Prettier", purpose: "Code quality" },
          { name: "adr-tools", purpose: "ADR documentation generation" },
        ],
      },
      {
        label: "Infrastructure",
        items: [
          { name: "Vercel", purpose: "Deployment with preview URLs" },
          { name: "GitHub Actions", purpose: "CI/CD pipeline" },
          { name: "PNPM", purpose: "Fast, deterministic package management" },
        ],
      },
    ],

    architecture: {
      pattern: "Clean Layered Architecture with Domain Events",
      diagram:
        "Presentation (Next.js UI) → Application (Services, Use Cases) → Domain (Entities, Value Objects, Events) → Infrastructure (Social APIs, File Storage)",
      designPatterns: [
        "DDD with 4 Bounded Contexts",
        "Domain Events (PostIngested, MetricCalculated)",
        "Layered Architecture (Presentation → Application → Domain → Infrastructure)",
        "Repository Pattern (API abstraction)",
        "SWR Cache-Aware Fetching",
      ],
    },

    boundedContexts: [
      { name: "SocialIngestion", responsibility: "Pull and normalise live posts from external platforms", entities: ["SocialPost", "PlatformSource"] },
      { name: "Analytics", responsibility: "Compute metrics, trends, and sentiment scores", entities: ["Metric", "Trend", "SentimentScore"] },
      { name: "UserDashboard", responsibility: "User-specific widget layouts and preferences", entities: ["Dashboard", "WidgetConfig"] },
      { name: "Notification", responsibility: "Threshold-based alerts across notification channels", entities: ["AlertRule", "NotificationChannel"] },
    ],

    schema: [
      { name: "social_posts", description: "Normalised posts from all platforms", keyFields: ["id", "platform", "content", "author", "engagement_metrics", "timestamp"] },
      { name: "metrics", description: "Computed analytics metrics", keyFields: ["id", "metric_type", "value", "period", "context"] },
      { name: "dashboards", description: "User-specific widget layouts", keyFields: ["id", "user_id", "widget_configs (JSONB)", "layout"] },
      { name: "alert_rules", description: "Threshold-based notification triggers", keyFields: ["id", "metric_type", "threshold", "channel", "is_active"] },
    ],

    features: [
      { title: "Social Media Aggregation", description: "Unified ingestion from Facebook and Twitter with normalised post schema and platform-agnostic querying.", icon: "Share2" },
      { title: "Sentiment Analysis Engine", description: "Real-time sentiment scoring with trend detection and anomaly alerts for live event monitoring.", icon: "TrendingUp" },
      { title: "Customizable Widget Dashboards", description: "User-configurable layouts with drag-and-drop widgets for metrics, trends, and social feeds.", icon: "LayoutDashboard" },
      { title: "Threshold Notifications", description: "Automated alerts when engagement metrics cross configurable thresholds across email and in-app channels.", icon: "Bell" },
      { title: "Domain Event Architecture", description: "PostIngested and MetricCalculated events drive decoupled cross-context communication.", icon: "Workflow" },
      { title: "ADR Documentation System", description: "Structured Architecture Decision Records generated via adr-tools for engineering transparency.", icon: "FileText" },
    ],

    adrs: [
      { id: "ADR-001", title: "Next.js with TypeScript for UI", status: "Accepted", rationale: "SSR, static generation, and excellent developer ergonomics." },
      { id: "ADR-002", title: "DDD with Bounded Contexts", status: "Accepted", rationale: "Aligns code structure with business capabilities." },
      { id: "ADR-003", title: "JSON Files for Dev Data", status: "Accepted", rationale: "Rapid iteration — production switches to cloud storage." },
      { id: "ADR-004", title: "PNPM Package Manager", status: "Accepted", rationale: "Faster installs, deterministic lockfile, disk efficiency." },
      { id: "ADR-005", title: "React Context + SWR for State", status: "Accepted", rationale: "Simple, no Redux boilerplate, built-in cache." },
      { id: "ADR-006", title: "Vercel with GitHub CI/CD", status: "Accepted", rationale: "Zero-config deployment with edge network and preview URLs." },
    ],
  },

  // =========================================================================
  // 12. JARVIS CORE
  // =========================================================================
  {
    slug: "jarvis",
    title: "JARVIS Core v1.0",
    subtitle: "Autonomous Software Engineering Orchestration Platform",
    summary:
      "Self-hosted autonomous SWE platform orchestrating multi-model LLM agents via OpenClaw gateway, with MCP integrations for GitHub, Vercel, Notion, and Gmail — deployed on Docker.",
    category: "AI Infra",
    tags: ["AI Infra", "AI/ML", "DevOps", "Automation"],
    year: "2026",
    status: "Development",
    githubUrl: "https://github.com/kidusabdula/jarvis-core",
    heroGradient: "from-cyan-500/20 via-transparent to-teal-500/10",

    description:
      "JARVIS Core is a self-hosted autonomous software engineering workflow system that orchestrates development tasks, automates code deployment pipelines, and scales for distributed enterprise operations. Built on OpenClaw as a self-hosted AI gateway with OpenRouter for unified multi-model LLM access, it integrates with GitHub, Vercel, Notion, Gmail, and VS Code via individual MCP (Model Context Protocol) servers — all containerized with Docker for portable, scalable deployment.",
    businessProblem:
      "Software engineering teams waste significant time on repetitive tasks — repo management, deployment, documentation updates, email triage, and cross-tool coordination — that could be orchestrated by autonomous AI agents with proper tool integration.",
    architecturalSolution:
      "A layered autonomous platform with Chat Interface (Telegram/WhatsApp/Web) feeding into OpenClaw Gateway for model routing and agent orchestration. Three-tier model routing assigns specialized LLMs to different task types (planning, implementation, heavy SWE). MCP servers provide modular, independently-deployable integrations with external tools, all running in Docker containers on a Hostinger KVM-4 VPS.",
    systemFlow:
      "Chat Interface (Telegram/Web) → OpenClaw Gateway → Model Router (Nemotron/MiniMax/GLM) → MCP Servers (GitHub, Vercel, Notion, Gmail, VS Code) → Execution Results",

    techStack: [
      {
        label: "AI Gateway",
        items: [
          { name: "OpenClaw", purpose: "Self-hosted AI gateway for model routing and orchestration" },
          { name: "OpenRouter", purpose: "Unified API access to free SOTA LLM models" },
        ],
      },
      {
        label: "LLM Models",
        items: [
          { name: "Nemotron-3-Super", purpose: "Planning, audit, master docs, scope adherence" },
          { name: "MiniMax-M2.5", purpose: "Heavy SWE tasks, office automation" },
          { name: "GLM-5-Turbo", purpose: "Long-chain tool use, persistent fast execution" },
        ],
      },
      {
        label: "MCP Integrations",
        items: [
          { name: "GitHub MCP", purpose: "Repository management, PRs, and issues" },
          { name: "Vercel MCP", purpose: "Deployment and project management" },
          { name: "Notion MCP", purpose: "Documentation and knowledge base" },
          { name: "Gmail/Google MCP", purpose: "Email, calendar, and drive automation" },
          { name: "VS Code MCP", purpose: "Workspace and code integration" },
          { name: "Browser MCP", purpose: "Web automation and research" },
        ],
      },
      {
        label: "Infrastructure",
        items: [
          { name: "Docker", purpose: "Containerized, portable deployment" },
          { name: "Docker Compose", purpose: "Multi-service orchestration" },
          { name: "Ubuntu 22.04+ (VPS)", purpose: "Hostinger KVM-4 server runtime" },
          { name: "Bash Scripts", purpose: "Deployment, health check, and lifecycle automation" },
        ],
      },
      {
        label: "Chat Interface",
        items: [
          { name: "Telegram Bot API", purpose: "Primary chat interface for agent interaction" },
        ],
      },
    ],

    architecture: {
      pattern: "Autonomous Agent Orchestration with MCP Protocol",
      diagram:
        "Chat (Telegram/WhatsApp/Web) → OpenClaw Gateway → Model Router → LLM Layer (Nemotron | MiniMax | GLM)\n↓\nMCP Servers (GitHub | Vercel | Notion | Gmail | VS Code | Browser)\n↓\nDocker + Docker Compose (Hostinger KVM-4 VPS)",
      designPatterns: [
        "Multi-Model Agent Orchestration",
        "MCP (Model Context Protocol) for tool integration",
        "Model Routing (task-type → optimal model)",
        "Containerized Microservice Deployment",
        "Config-as-Code (YAML model routing)",
        "VPS Snapshot Rollback Strategy",
      ],
    },

    boundedContexts: [
      { name: "Orchestration", responsibility: "Task routing, model selection, and agent lifecycle", entities: ["Task", "AgentSession", "ModelConfig"] },
      { name: "Integration", responsibility: "MCP server management and tool execution", entities: ["MCPServer", "ToolInvocation", "ExecutionResult"] },
      { name: "Communication", responsibility: "Chat interface handling and response formatting", entities: ["ChatMessage", "ConversationThread"] },
    ],

    schema: [
      { name: "models (YAML)", description: "Model routing configuration", keyFields: ["role", "model_name", "use_case", "priority"] },
      { name: "mcp_servers", description: "MCP server configurations", keyFields: ["server_name", "transport", "endpoint", "capabilities"] },
      { name: "task_log", description: "Execution history for audit and replay", keyFields: ["task_id", "model_used", "mcp_invoked", "status", "timestamp"] },
    ],

    features: [
      { title: "Multi-Model Agent Routing", description: "Intelligent routing assigns Nemotron for planning, MiniMax for heavy SWE, and GLM for fast execution — optimizing cost and quality per task.", icon: "Route" },
      { title: "MCP Tool Integrations", description: "GitHub, Vercel, Notion, Gmail, VS Code, and Browser integrations via Model Context Protocol for autonomous tool use.", icon: "Plug" },
      { title: "Self-Hosted AI Gateway", description: "OpenClaw provides a locally-controlled gateway for model management, reducing vendor lock-in and enabling custom routing logic.", icon: "Server" },
      { title: "Containerized Deployment", description: "All services run in Docker with Compose orchestration, Git-versioned configs, and VPS snapshot rollback for safety.", icon: "Container" },
      { title: "Chat-First Interface", description: "Telegram/WhatsApp/Web chat interface for natural-language task submission and status tracking.", icon: "MessageSquare" },
      { title: "Config-as-Code Model Routing", description: "YAML-defined model configurations enable rapid switching, A/B testing, and cost optimization across LLM providers.", icon: "Settings" },
    ],

    adrs: [
      { id: "ADR-001", title: "OpenClaw as Self-Hosted Gateway", status: "Accepted", rationale: "Local control over model routing without vendor lock-in." },
      { id: "ADR-002", title: "OpenRouter for Free Model Access", status: "Accepted", rationale: "Unified API to free SOTA models reduces cost to zero for development." },
      { id: "ADR-003", title: "Individual MCP Servers", status: "Accepted", rationale: "Modular integrations deployed and updated independently." },
      { id: "ADR-004", title: "Docker Containerization", status: "Accepted", rationale: "Portable, scalable deployment with easy rollback via snapshots." },
    ],
  },
];

// ---------------------------------------------------------------------------
// HELPER FUNCTIONS
// ---------------------------------------------------------------------------

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return PROJECT_DATABASE.find((p) => p.slug === slug);
}

export function getAllProjects(): ProjectEntry[] {
  return PROJECT_DATABASE;
}

export function getAllSlugs(): string[] {
  return PROJECT_DATABASE.map((p) => p.slug);
}

export function getProjectsByCategory(category: string): ProjectEntry[] {
  return PROJECT_DATABASE.filter((p) => p.category === category);
}

export function getProjectsByTag(tag: string): ProjectEntry[] {
  return PROJECT_DATABASE.filter((p) => p.tags.includes(tag));
}

export function getAllCategories(): string[] {
  return Array.from(new Set(PROJECT_DATABASE.map((p) => p.category)));
}

export function getAllTags(): string[] {
  return Array.from(new Set(PROJECT_DATABASE.flatMap((p) => p.tags)));
}
