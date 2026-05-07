
const fs = require('fs');
const path = 'C:/Users/kidus/Documents/Projects/VersaLabs-Workspace/versalabs-studio/src/config/project-database.ts';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/\n\];\n*/, '\n' + `  // =========================================================================
  // 13. UNLOCK ETHIOPIA POTENTIAL
  // =========================================================================
  {
    slug: "unlock-ethiopia-potential",
    title: "Unlock Ethiopia Potential",
    subtitle: "Bitcoin Mining Summit 2025",
    summary: "The official digital face for Ethiopia's premier Bitcoin Mining Summit. A premium, immersive event landing page showcasing speakers, partners, and the future of global hashing power.",
    category: "Events",
    tags: ["Events", "Blockchain", "Landing Page"],
    year: "2025",
    status: "Production",
    liveUrl: "https://www.unlockethiopiapotential.com/",
    heroGradient: "from-[#AF8F6F]/20 via-transparent to-[#74512D]/10",
    thumbnail: "/Unlock Ethiopian Potential/Mockups/188shots_so.png",
    imageDir: "Unlock Ethiopian Potential",

    description: "Unlock Ethiopia Potential is the official platform for Ethiopia's premier Bitcoin Mining Summit. Built as an immersive, high-performance web experience, it highlights the nation's rising status as a global destination for Bitcoin mining. The platform features an interactive agenda, speaker profiles, a comprehensive partner showcase, and data-driven insights into energy allocation and hashrate metrics.",
    businessProblem: "A premier international summit requires a digital presence that reflects its magnitude. The organizers needed a premium, performant platform capable of handling international traffic, presenting complex industry statistics elegantly, and driving ticket registrations without relying on generic event templates.",
    architecturalSolution: "A component-based React SPA built with Vite for rapid loading and Framer Motion for cinematic scroll reveals. The architecture separates the agenda, vital statistics, and sponsor grids into isolated, easily updatable components. The routing is handled entirely client-side for zero-latency navigation, with a seamless handoff to Google Forms for registration processing.",
    systemFlow: "Visitor Arrival → Immersive Hero Animation → Industry Statistics Reveal → Agenda/Speaker Exploration → Registration Redirect",

    techStack: [
      {
        label: "Frontend",
        items: [
          { name: "React", version: "19+", purpose: "Component-based UI rendering" },
          { name: "Vite", version: "6+", purpose: "Lightning-fast build tooling and HMR" },
          { name: "React Router DOM", purpose: "Client-side SPA navigation" }
        ]
      },
      {
        label: "Styling & Animation",
        items: [
          { name: "Tailwind CSS", version: "4+", purpose: "Utility-first design system" },
          { name: "Framer Motion", version: "12+", purpose: "Declarative scroll and layout animations" },
          { name: "Flowbite", purpose: "Accessible Tailwind UI components" }
        ]
      }
    ],

    architecture: {
      pattern: "Single-Page Application (SPA) with Client-Side Routing",
      diagram: "Vite Bundler → React App Router → Shared UI Components (Hero, Teams, Vital-Info) → External Registration",
      designPatterns: [
        "Component-Based Architecture",
        "Declarative Animation Logic",
        "Mobile-First Responsive Grid"
      ]
    },

    boundedContexts: [
      { name: "Event Promotion", responsibility: "Hero, mission statement, and statistics", entities: ["StatisticCard", "HeroSection"] },
      { name: "Schedule & People", responsibility: "Agenda timeline, speaker profiles, and sponsor grids", entities: ["Speaker", "Session", "Sponsor"] }
    ],

    schema: [
      { name: "Event Content", description: "Static content structures powering the UI", keyFields: ["title", "description", "image_asset", "social_links"] }
    ],

    features: [
      { title: "Cinematic Scroll Reveals", description: "Framer Motion powers smooth fade-ins, slide-ups, and floating background elements for a premium feel.", icon: "Sparkles" },
      { title: "Dynamic Partner Grid", description: "Responsive showcase of 13+ global partner organizations with automated logo scaling and hover effects.", icon: "LayoutGrid" },
      { title: "Vital Industry Statistics", description: "Animated data cards presenting Ethiopia's hashrate, energy allocation, and mining footprint.", icon: "BarChart3" },
      { title: "Interactive Agenda", description: "Day-by-day timeline with speaker profiles, session descriptions, and integrated LinkedIn links.", icon: "Calendar" }
    ],

    adrs: [
      { id: "ADR-001", title: "Vite + React SPA", status: "Accepted", rationale: "Static event content does not require SSR; SPA provides fastest possible intra-page navigation." },
      { id: "ADR-002", title: "Framer Motion for Animations", status: "Accepted", rationale: "Declarative API simplifies complex scroll-triggered reveals compared to pure CSS." }
    ]
  },

  // =========================================================================
  // 14. MINAB CLOTHING
  // =========================================================================
  {
    slug: "minab-clothing",
    title: "Minab Clothing",
    subtitle: "Premium Ethiopian Fashion E-Commerce",
    summary: "A gallery-worthy digital storefront for contemporary Ethiopian fashion. Features dual-theme OKLCH styling, smooth spring animations, and a complete mock shopping flow.",
    category: "E-Commerce",
    tags: ["E-Commerce", "Fashion", "Retail"],
    year: "2025",
    status: "Production",
    liveUrl: "https://minab-clothing-fm7q.vercel.app/",
    heroGradient: "from-[#8B4513]/20 via-transparent to-[#D2B48C]/10",
    thumbnail: "/Minab/Mockups/524shots_so.png",
    imageDir: "Minab",

    description: "Minab Clothing is a premium digital storefront designed to showcase contemporary Ethiopian fashion rooted in heritage craftsmanship. Built as a high-fidelity demonstration of enterprise-grade UI architecture, it delivers a flawless shopping experience with a dual-theme OKLCH color system, fluid Framer Motion transitions, and extreme modularity.",
    businessProblem: "Fashion brands require more than just an 'add to cart' button; they need a digital environment that reflects the quality of their physical products. Standard templates often feel cheap and fail to provide the immersive, premium feel necessary for luxury or heritage fashion.",
    architecturalSolution: "Built on Next.js App Router, the platform employs a strict three-tier architecture (Public, Customer, Admin) and an 'Extreme Modularization' pattern. It utilizes a custom Radix-inspired UI primitive library, ensuring perfect accessibility while maintaining complete design freedom. State is managed locally with a robust mock data layer for instant interaction feedback.",
    systemFlow: "Discovery (Collections/Home) → Product Detail (SSG) → Cart Management → 3-Step Checkout Flow → Order Confirmation",

    techStack: [
      {
        label: "Frontend",
        items: [
          { name: "Next.js", version: "15.5", purpose: "App Router, SSR/SSG" },
          { name: "TypeScript", version: "5.8", purpose: "Strict mode schemas" },
          { name: "Tailwind CSS", version: "3.4", purpose: "OKLCH design tokens" },
          { name: "Framer Motion", version: "12.3", purpose: "Spring animations" }
        ]
      },
      {
        label: "Forms & State",
        items: [
          { name: "React Hook Form", version: "7.55", purpose: "Checkout and account forms" },
          { name: "Sonner", version: "2.0", purpose: "Toast notification system" }
        ]
      }
    ],

    architecture: {
      pattern: "Extreme Modularization Hybrid SSG",
      diagram: "Next.js Pages → Shared UI Primitives → Feature Components → Centralized Mock Data Layer",
      designPatterns: [
        "Three-Tier Architecture",
        "Schema-First (typefile.d.ts)",
        "Strict Import Direction (ui → shared → feature)"
      ]
    },

    boundedContexts: [
      { name: "Shop", responsibility: "Product discovery, filtering, and detail pages", entities: ["Product", "Collection", "Category"] },
      { name: "Account", responsibility: "Order history, wishlists, and shipping profiles", entities: ["Order", "Address", "WishlistItem"] },
      { name: "Checkout", responsibility: "Cart totals, promo codes, and multi-step payment", entities: ["Cart", "CheckoutSession"] }
    ],

    schema: [
      { name: "Product", description: "Fashion items with variations", keyFields: ["id", "name", "price", "colors", "sizes", "images"] },
      { name: "Order", description: "Customer purchases", keyFields: ["id", "status", "total", "items", "shipping_address"] }
    ],

    features: [
      { title: "OKLCH Dual Theme System", description: "Perceptually uniform color tokens provide perfect contrast ratios across both deep espresso dark mode and warm cream light mode.", icon: "Palette" },
      { title: "Fluid Spring Animations", description: "Framer Motion powers staggered entrances, layout transitions, and interactive micro-animations for a native app feel.", icon: "Activity" },
      { title: "Multi-Step Checkout", description: "A comprehensive mock checkout flow including shipping profiles, promo code validation, and order review.", icon: "CreditCard" },
      { title: "Custom UI Primitives", description: "A proprietary, Radix-inspired component library ensuring accessibility without sacrificing the bespoke brand aesthetic.", icon: "Component" }
    ],

    adrs: [
      { id: "ADR-001", title: "OKLCH Color Space", status: "Accepted", rationale: "Provides predictable, accessible color scaling across light/dark themes impossible with standard RGB/HSL." },
      { id: "ADR-002", title: "Extreme Modularization", status: "Accepted", rationale: "Strict downward-only import rules prevent dependency cycles and enforce clean boundaries." }
    ]
  },

  // =========================================================================
  // 15. TIBEB
  // =========================================================================
  {
    slug: "tibeb",
    title: "Tibeb",
    subtitle: "Traditional Habesha Clothing Platform",
    summary: "Bridging centuries of Ethiopian artistry with modern digital commerce. A premium storefront featuring Stripe payments, Supabase backend, and schema-first architecture.",
    category: "E-Commerce",
    tags: ["E-Commerce", "Cultural", "Retail"],
    year: "2025",
    status: "Production",
    githubUrl: "https://github.com/VersaLabs-Studio",
    heroGradient: "from-[#D4AF37]/20 via-transparent to-[#1C2526]/10",
    thumbnail: "/Tibeb/Mockups/765shots_so.png",
    imageDir: "Tibeb",

    description: "Tibeb is an enterprise-grade digital storefront celebrating the beauty of traditional Ethiopian Habesha clothing. Designed for high-end cultural fashion, it offers a seamless browsing experience for dresses, menswear, and couples' sets. The platform is architected with a tier-1 public interface for SEO-optimized discovery, transitioning to a secure, authenticated flow for cart management and checkout.",
    businessProblem: "Traditional clothing artisans and retailers often lack the technical infrastructure to reach global diaspora markets. They require a platform that not only processes international payments securely but also presents their handcrafted products with the visual dignity they deserve.",
    architecturalSolution: "Built on Next.js 15 App Router, Tibeb utilizes a dual-tier architecture. The public storefront is highly optimized for read-only discovery, while Clerk authentication protects the cart and checkout flows. Supabase PostgreSQL serves as the primary data store, integrated via a strict schema-first Factory Pattern. Payments are processed securely via Stripe Elements.",
    systemFlow: "Public Browsing (SSR/SSG) → Clerk Authentication (for Cart) → Supabase Real-time Cart → Stripe Checkout → Order Fulfillment",

    techStack: [
      {
        label: "Frontend & Auth",
        items: [
          { name: "Next.js", version: "15.x", purpose: "App Router and Server Actions" },
          { name: "Clerk", version: "6.x", purpose: "Authentication and session management" },
          { name: "Tailwind CSS", version: "4.x", purpose: "Utility styling with OKLCH tokens" }
        ]
      },
      {
        label: "Backend & Payments",
        items: [
          { name: "Supabase", version: "2.x", purpose: "PostgreSQL database and storage" },
          { name: "Stripe", version: "18.x", purpose: "Secure payment processing" }
        ]
      }
    ],

    architecture: {
      pattern: "Tier 1 Public Interface + Authenticated Backend",
      diagram: "Next.js Public Storefront → Clerk Auth Wall → Protected Cart/Checkout → Stripe + Supabase PostgreSQL",
      designPatterns: [
        "Schema-First Database Types",
        "Factory Pattern CRUD",
        "Dual API Namespace (Public vs Protected)",
        "Query Key Factory"
      ]
    },

    boundedContexts: [
      { name: "Storefront", responsibility: "SEO-optimized product catalog and cultural content", entities: ["Product", "Category", "Review"] },
      { name: "Commerce", responsibility: "Session-based carts, checkout, and payment intents", entities: ["Cart", "CartItem", "Transaction", "Order"] }
    ],

    schema: [
      { name: "products", description: "Catalog items with stock and category", keyFields: ["id", "name", "price", "category", "stock"] },
      { name: "transactions", description: "Stripe payment records", keyFields: ["id", "order_id", "stripe_payment_intent_id", "status"] }
    ],

    features: [
      { title: "Stripe Checkout Integration", description: "Secure, PCI-compliant payment processing supporting international cards via Stripe Elements.", icon: "CreditCard" },
      { title: "Clerk Auth Wall", description: "Frictionless browsing transitions into secure authentication only when users interact with the cart or checkout.", icon: "Lock" },
      { title: "Supabase Real-time Cart", description: "PostgreSQL-backed shopping cart that persists across devices for authenticated users.", icon: "ShoppingCart" },
      { title: "Cultural Spotlight UI", description: "Premium, abstract geometric hero sections and glassmorphism elements that elevate the brand aesthetic.", icon: "Sparkles" }
    ],

    adrs: [
      { id: "ADR-001", title: "Dual API Namespace", status: "Accepted", rationale: "Strict separation of /api/public and /api/protected ensures sensitive mutation routes cannot be accessed accidentally." },
      { id: "ADR-002", title: "Supabase + Stripe Stack", status: "Accepted", rationale: "Combines robust relational data integrity with enterprise-grade payment security." }
    ]
  }
];` + '\n');
fs.writeFileSync(path, content);
console.log('Done');
