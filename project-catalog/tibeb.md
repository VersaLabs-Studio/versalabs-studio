# Tibeb — Traditional Habesha Clothing E-Commerce

[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8.svg)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e.svg)](https://supabase.com/)

> **Tibeb** is a premium e-commerce platform for traditional Ethiopian Habesha clothing — handcrafted dresses, menswear, and couples' sets. Built with enterprise-grade architecture and modern web technologies, Tibeb bridges centuries of Ethiopian artistry with contemporary digital commerce.

## 🌟 Key Features

### Core Functionality
- **Product Catalog**: Browsable collections across Dresses, Menswear, and Couples' categories
- **Dynamic Product Pages**: Individual product detail with size selection, quantity controls, and rich descriptions
- **Shopping Cart**: Real-time cart management with add, remove, and quantity updates
- **Stripe Checkout**: Secure payment processing with Stripe Elements integration
- **Subcategory Filtering**: Filter products by wedding, event, simple, and coffee dress types
- **Responsive Design**: Mobile-first layout with touch-friendly interactions

### Premium Experience
- **Animated Hero**: Abstract geometric hero with Framer Motion micro-interactions
- **Glassmorphism UI**: Frosted glass panels for elevated surfaces and navigation
- **OKLCH Theme System**: Perceptually uniform color tokens with semantic naming
- **Cultural Spotlight**: Dedicated sections celebrating Ethiopian heritage and artisan stories
- **Customer Reviews**: Testimonial carousel with authentic customer feedback
- **Newsletter Signup**: Email subscription with API integration

### Enterprise Architecture
- **Schema-First Development**: Types generated from database schema — zero type drift
- **Factory Pattern**: Centralized entity configuration drives all CRUD operations
- **Extreme Modularization**: Feature-isolated components with clear boundary rules
- **Dual API Namespace**: Public read-only routes separated from protected operations
- **Query Key Factory**: Structured cache keys for predictable invalidation

## 🏗️ Architecture Overview

Tibeb follows a **Tier 1 Public Interface** architecture — a read-optimized storefront with authenticated cart and checkout flows:

```
┌─────────────────────────────────────────────────────────────────┐
│                         TIBEB ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TIER 1: PUBLIC STOREFRONT                                      │
│  ──────────────────────────                                     │
│  Product discovery, category browsing, static content.          │
│  SEO-optimized with SSR/SSG. No auth required for browsing.     │
│                                                                  │
│  TIER 2: AUTHENTICATED FLOW                                     │
│  ──────────────────────────                                     │
│  Cart management, checkout, order history.                      │
│  Clerk auth with session-based cart persistence.                │
│                                                                  │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐        │
│  │   Next.js    │──▶│  Supabase    │──▶│   Stripe     │        │
│  │  App Router  │   │  PostgreSQL  │   │   Payments   │        │
│  └──────────────┘   └──────────────┘   └──────────────┘        │
│         │                  │                   │                 │
│         └──────────────────┼───────────────────┘                 │
│                            │                                     │
│                    ┌───────▼───────┐                             │
│                    │  Type-Safe    │                             │
│                    │  API Layer    │                             │
│                    └───────────────┘                             │
└─────────────────────────────────────────────────────────────────┘
```

### Component Architecture

```
components/
├── ui/                          # Primitive design system (future)
├── public/
│   ├── layout/                  # Header, Footer, navigation shells
│   ├── home/                    # Hero, Categories, Testimonials, Blog
│   ├── products/                # ProductGrid, ProductCard, SubcategoryFilter
│   └── shared/                  # CartPopup, CTABanner, cross-cutting
├── Hero.tsx                     # Geometric text-based hero
├── Header.tsx                   # Glassmorphism sticky header
├── Footer.tsx                   # Premium footer with newsletter
├── CartContext.tsx               # Cart state management
└── CartPopup.tsx                 # Slide-in cart panel
```

### Import Direction Rule

```
ui/ (primitives) ← shared/ (smart components) ← feature/ (domain components)
```

Dependencies flow downward. Feature components import from `ui/` and `shared/`. UI components never import from features.

## 🛠️ Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Framework** | Next.js (App Router) | 15.x | SSR/SSG, API routes, file-based routing |
| **Language** | TypeScript (Strict) | 5.x | End-to-end type safety |
| **Styling** | Tailwind CSS | 4.x | Utility-first with OKLCH design tokens |
| **Animations** | Framer Motion | 12.x | Declarative micro-interactions |
| **Database** | Supabase (PostgreSQL) | 2.x | Managed Postgres, Auth, Storage |
| **Payments** | Stripe | 18.x | Secure payment processing |
| **Auth** | Clerk | 6.x | Authentication and user management |
| **Icons** | Lucide React | 0.511 | Consistent, tree-shakeable icon set |
| **Fonts** | Playfair Display + Poppins | — | Serif headings + sans-serif body |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+
- Docker and Docker Compose (for local Supabase)
- Supabase CLI (`npm i -g supabase`)

### Development Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd tibeb
   npm install
   ```

2. **Start Local Supabase**
   ```bash
   supabase start
   ```
   This starts PostgreSQL, Auth, Storage, and Studio locally.

3. **Restore Database** (from backup)
   ```bash
   # Copy backup into container and restore
   docker cp backups/db_cluster.backup supabase_db_tibeb:/tmp/backup.backup
   docker exec supabase_db_tibeb psql -U postgres -d postgres < backups/db_cluster.backup
   ```

4. **Configure Environment**
   ```bash
   cp .env.example .env.local
   # Update with local Supabase credentials from `supabase status`
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
tibeb/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Public route group
│   │   ├── page.tsx              # Homepage
│   │   ├── dresses/page.tsx      # Dresses collection
│   │   ├── mens/page.tsx         # Menswear collection
│   │   ├── couples/page.tsx      # Couples' sets
│   │   ├── about/page.tsx        # About page
│   │   └── faq/page.tsx          # FAQ page
│   ├── product/[id]/page.tsx     # Dynamic product detail
│   ├── checkout/page.tsx         # Stripe checkout
│   ├── success/page.tsx          # Order confirmation
│   ├── sign-in/                  # Clerk auth
│   ├── sign-up/                  # Clerk auth
│   └── api/                      # API routes
│       ├── public/               # Read-only endpoints
│       ├── cart/                  # Cart CRUD
│       ├── products/             # Product queries
│       ├── create-payment-intent/ # Stripe integration
│       └── transactions/         # Order management
├── components/                   # React components
│   ├── ui/                       # Design system primitives
│   ├── public/                   # Tier 1 components
│   │   ├── layout/               # Header, Footer
│   │   ├── home/                 # Hero, Categories, etc.
│   │   ├── products/             # ProductGrid, ProductCard
│   │   └── shared/               # Cross-cutting components
│   ├── Hero.tsx                  # Geometric text hero
│   ├── Header.tsx                # Glassmorphism header
│   ├── Footer.tsx                # Premium footer
│   └── CartContext.tsx           # Cart state management
├── config/                       # Centralized configuration
│   └── entities.ts               # Entity definitions, query keys
├── lib/                          # Utilities
│   ├── supabase.ts               # Supabase client
│   └── stripe.ts                 # Stripe client
├── types/                        # TypeScript definitions
│   └── index.ts                  # Generated/manual types
├── styles/                       # Global styles
│   └── globals.css               # OKLCH theme, utilities, animations
├── public/                       # Static assets
│   └── product-images/           # Product photography
├── backups/                      # Database and storage backups
└── supabase/                     # Supabase local config
```

## 🔐 Authentication & Security

### Auth Flow
1. **Browsing**: All product pages are public — no authentication required
2. **Cart**: Requires authentication via Clerk to persist cart items
3. **Checkout**: Authenticated users proceed to Stripe payment
4. **Orders**: Transaction records tied to authenticated user IDs

### Security Features
- **Clerk Middleware**: Route protection with configurable public routes
- **API Auth**: Server-side auth checks on all mutation endpoints
- **Environment Isolation**: Separate keys for dev/staging/production
- **Supabase RLS**: Row-level security policies on all tables (when configured)

## 🎨 Design System

### Color Palette (OKLCH)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primaryBg` | `#1c2526` | Page background, dark surfaces |
| `--color-accentGold` | `#d4af37` | Primary accent, CTAs, highlights |
| `--color-secondaryBg` | `#f5f5f5` | Light surfaces, cards |
| `--color-textDark` | `#333333` | Body text on light surfaces |
| `--color-highlightRed` | `#a63c3c` | Destructive actions, sale badges |

### Typography
- **Headings**: Playfair Display (serif) — elegant, cultural
- **Body**: Poppins (sans-serif) — clean, readable
- **Scale**: `clamp()` responsive sizing from mobile to desktop

### Animation System
- **Easing**: `[0.22, 1, 0.36, 1]` (custom cubic-bezier)
- **Duration**: Fast (150ms), Normal (300ms), Slow (500ms)
- **Patterns**: Fade-up, scale-in, stagger-children, floating shapes

## 📊 Database Schema

### Core Tables
| Table | Purpose | Key Fields |
|-------|---------|------------|
| `products` | Product catalog | id, name, price, category, image, stock |
| `cart_items` | User cart | id, user_id, product_id, quantity |
| `orders` | Order records | id, user_id, status, total |
| `order_items` | Line items | id, order_id, product_id, quantity, price |
| `transactions` | Payment records | id, order_id, stripe_payment_intent_id, status |
| `reviews` | Customer reviews | id, user_id, quote, name, photo, category |
| `users` | User profiles | id, clerk_user_id, email |

## 🐳 Local Development with Supabase

### Services
| Service | URL | Purpose |
|---------|-----|---------|
| **API** | http://127.0.0.1:54321 | REST and GraphQL endpoints |
| **Studio** | http://127.0.0.1:54323 | Database management UI |
| **Database** | postgresql://postgres:postgres@127.0.0.1:54322/postgres | Direct DB access |
| **Mailpit** | http://127.0.0.1:54324 | Email testing |

### Storage
Product images are stored in Supabase Storage and served via the `/product-images/` public path.

## 📚 Documentation

- **[Architectural DNA](ARCHITECTURAL_DNA.md)** — Master design patterns and methodology
- **[Entity Config](config/entities.ts)** — Centralized entity definitions and query keys
- **[Types](types/index.ts)** — TypeScript interfaces for all domain entities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the Architectural DNA patterns for consistency
4. Commit with conventional commits (`feat:`, `fix:`, `refactor:`)
5. Open a Pull Request

### Development Guidelines
- TypeScript strict mode — zero `any` types
- Tailwind CSS with semantic tokens — never hardcoded colors
- Framer Motion for animations — consistent easing constants
- Components follow the import direction rule (ui ← shared ← feature)

## 📄 License

This project is proprietary software. All rights reserved.

## 🏢 About Tibeb

Tibeb celebrates the beauty of Ethiopian heritage through handcrafted Habesha clothing. Each piece is designed to bridge centuries of artistry with contemporary elegance — for weddings, cultural celebrations, and everyday grace.

### Collections
- **Dresses**: Wedding, event, simple, and coffee ceremony dresses
- **Menswear**: Traditional Kamis shirts and coordinated sets
- **Couples' Sets**: Matching outfits for weddings and anniversaries

---

**Built with heritage** | **Enterprise-Grade Architecture** | **Modern Web Stack**
