# Pavilion360 V2.0

[![VersaLabs](https://img.shields.io/badge/Powered%20by-VersaLabs-blue.svg)](https://versalabs.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Latest-green.svg)](https://supabase.com/)
[![Enterprise Grade](https://img.shields.io/badge/Grade-Enterprise-red.svg)]()

> **Proprietary Software** - Developed by VersaLabs. All rights reserved. This repository contains confidential and proprietary information. Unauthorized access or use is strictly prohibited.

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Domain-Driven Design (DDD)](#domain-driven-design-ddd)
- [Architecture Decision Records (ADRs)](#architecture-decision-records-adrs)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [Support](#support)

## Overview

Pavilion360 V2.0 represents a complete architectural transformation of the existing static marketing website into a fully data-driven, enterprise-grade platform with an integrated Content Management System (CMS). This proprietary solution developed by VersaLabs enables Pavilion360 to manage their event production business with unprecedented efficiency and enterprise scalability.

### Business Context

Pavilion360 is a premium event production company specializing in audio-visual production, event management, and rental equipment. The V2.0 platform serves two primary user personas:

1. **Public Visitors**: Potential clients browsing services, viewing portfolios, and requesting quotes
2. **Administrative Staff**: Content managers and administrators maintaining the website and managing business operations

### Project Goals

- **Data-Driven Content**: Eliminate static content in favor of database-managed content
- **Premium CMS Interface**: Mobile-first, animated, and templated content management
- **Modular Architecture**: Clear separation between public site and administrative CMS
- **Type Safety**: End-to-end TypeScript with comprehensive validation
- **Performance**: Optimized queries with intelligent caching strategies
- **Lightweight CRM**: Integrated quote request and contact management
- **Scalability**: Enterprise-grade architecture supporting future growth

## Key Features

### 🏢 Content Management System (CMS)
- **8 Comprehensive Modules**: Services, Rentals, Portfolio, Venues, Blog, Team, FAQs, Testimonials
- **Rich Text Editing**: TipTap-powered WYSIWYG editor with image and link support
- **Media Library**: Centralized image management with Supabase Storage integration
- **User Management**: Role-based access control with admin authentication
- **Dashboard Analytics**: Real-time insights into content performance and business metrics

### 🌐 Public Website
- **Dynamic Content**: All content served from Supabase PostgreSQL
- **Advanced Filtering**: Category-based filtering for rentals and portfolio items
- **Quote Basket**: Interactive rental selection and quote request system
- **SEO Optimized**: Server-side rendering with comprehensive meta tags
- **Mobile-First**: Responsive design with touch-optimized interactions
- **Performance Focused**: Optimized loading with skeleton states and caching

### 📊 CRM & Analytics
- **Quote Management**: Full lifecycle management of rental and service quotes
- **Contact Integration**: Seamless handling of contact form submissions
- **Analytics Tracking**: Page view tracking and content performance metrics
- **Lead Management**: Status-based workflow for business development

### 🔒 Security & Compliance
- **Row Level Security (RLS)**: Database-level access control
- **Authentication**: Supabase Auth with custom user metadata
- **API Protection**: Route-level protection for administrative endpoints
- **Data Validation**: End-to-end Zod schema validation

## Technology Stack

### Core Framework
| Technology | Version | Purpose | Justification |
|------------|---------|---------|---------------|
| **Next.js** | 16.x | Full-stack React framework | App Router for modern routing, Server Components for performance, API routes for backend logic |
| **React** | 19.x | UI library | Latest features, concurrent rendering, optimized for large applications |
| **TypeScript** | 5.x | Type safety | End-to-end type safety, IntelliSense, compile-time error checking |

### Backend & Database
| Technology | Version | Purpose | Justification |
|------------|---------|---------|---------------|
| **Supabase** | Latest | Backend-as-a-Service | PostgreSQL database, authentication, storage, real-time subscriptions |
| **PostgreSQL** | 15.x | Primary database | ACID compliance, JSONB support, full-text search, RLS policies |
| **Supabase Auth** | Latest | Authentication | JWT tokens, session management, user metadata for roles |
| **Supabase Storage** | Latest | File storage | CDN-backed image storage, access control, thumbnail generation |

### State Management & Data Fetching
| Technology | Version | Purpose | Justification |
|------------|---------|---------|---------------|
| **TanStack Query** | 5.x | Server state management | Intelligent caching, background refetching, optimistic updates |
| **React Hook Form** | 7.x | Form state management | Performance, validation integration, accessibility |
| **Zod** | 3.x | Schema validation | TypeScript-first validation, runtime safety, API validation |

### UI & User Experience
| Technology | Version | Purpose | Justification |
|------------|---------|---------|---------------|
| **Tailwind CSS** | 4.x | Utility-first CSS | Consistent design system, responsive utilities, performance |
| **Radix UI** | Latest | Accessible primitives | WCAG compliance, customizable, battle-tested components |
| **Framer Motion** | 12.x | Animations | Performance-optimized animations, gesture support, accessibility |
| **Lucide React** | Latest | Icons | Consistent iconography, scalable SVGs, accessibility |
| **Sonner** | 1.x | Toast notifications | Non-intrusive, accessible, customizable |
| **TipTap** | Latest | Rich text editor | Extensible, customizable, modern editing experience |

### Development & Quality
| Technology | Purpose | Justification |
|------------|---------|---------------|
| **ESLint** | Code linting | Consistent code quality, error prevention |
| **Prettier** | Code formatting | Consistent formatting, automated style enforcement |
| **pnpm** | Package manager | Fast, disk-efficient, workspace support |

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              PAVILION360 V2.0                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────┐    ┌─────────────────────────────────────┐ │
│  │      PUBLIC WEBSITE         │    │           CMS DASHBOARD             │ │
│  │  ┌───────────────────────┐  │    │  ┌───────────────────────────────┐  │ │
│  │  │ Home / Services       │  │    │  │ Dashboard / Analytics         │  │ │
│  │  │ Rentals / Portfolio   │  │    │  │ Content Modules (CRUD)        │  │ │
│  │  │ Venues / Blog / FAQs  │  │    │  │ Media Library                 │  │ │
│  │  │ Contact / Quote Flow  │  │    │  │ Quote/Lead Management (CRM)   │  │ │
│  │  └───────────────────────┘  │    │  │ Settings & Configuration      │  │ │
│  └─────────────────────────────┘    │  └───────────────────────────────┘  │ │
│              │                       │              │                       │ │
│              ▼                       │              ▼                       │ │
│  ┌─────────────────────────────┐    │  ┌───────────────────────────────┐  │ │
│  │   /api/public/* (Read)      │    │  │   /api/cms/* (CRUD)           │  │ │
│  │   - GET services            │    │  │   - All CRUD operations       │  │ │
│  │   - GET rentals             │    │  │   - Protected by Auth         │  │ │
│  │   - POST quote-request      │    │  │   - Admin role required       │  │ │
│  └─────────────────────────────┘    │  └───────────────────────────────┘  │ │
│              │                       │              │                       │ │
│              └───────────┬───────────┘──────────────┘                       │ │
│                          ▼                                                   │ │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                         SUPABASE BACKEND                               │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌────────────────────────┐ │  │
│  │  │   PostgreSQL    │  │    Storage      │  │    Authentication      │ │  │
│  │  │   - 15+ Tables  │  │    - Images     │  │    - Admin Users       │ │  │
│  │  │   - RLS Enabled │  │    - Documents  │  │    - Session Mgmt      │ │  │
│  │  │   - Full-text   │  │    - Thumbnails │  │    - Role in Metadata  │ │  │
│  │  └─────────────────┘  └─────────────────┘  └────────────────────────┘ │  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Directory Structure

```
pavilion360/
├── app/
│   ├── (public)/                    # Public routes (grouped)
│   │   ├── page.tsx                 # Home
│   │   ├── about/
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── rentals/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── portfolio/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── venues/
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── faqs/
│   │   ├── resources/
│   │   └── contact/
│   │
│   ├── (cms)/                       # CMS routes (protected)
│   │   ├── layout.tsx               # CMS shell layout
│   │   ├── cms/
│   │   │   ├── page.tsx             # Dashboard
│   │   │   ├── services/
│   │   │   │   ├── page.tsx         # List
│   │   │   │   ├── new/page.tsx     # Create
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx     # Detail/View
│   │   │   │       └── edit/page.tsx # Edit
│   │   │   ├── rentals/
│   │   │   ├── portfolio/
│   │   │   ├── venues/
│   │   │   ├── testimonials/
│   │   │   ├── faqs/
│   │   │   ├── blog/
│   │   │   ├── team/
│   │   │   ├── quotes/              # CRM - Quote requests
│   │   │   ├── inquiries/           # CRM - Contact form submissions
│   │   │   ├── media/               # Media library
│   │   │   └── settings/
│   │   │       ├── page.tsx
│   │   │       └── site/page.tsx    # Site-wide settings
│   │   └── login/page.tsx           # CMS Login
│   │
│   ├── api/
│   │   ├── public/                  # Public API (read-mostly)
│   │   │   ├── services/
│   │   │   │   ├── route.ts         # GET all
│   │   │   │   └── [slug]/route.ts  # GET by slug
│   │   │   ├── rentals/
│   │   │   ├── portfolio/
│   │   │   ├── venues/
│   │   │   ├── testimonials/
│   │   │   ├── faqs/
│   │   │   ├── blog/
│   │   │   ├── quote-request/       # POST quote requests
│   │   │   │   └── route.ts
│   │   │   ├── contact/             # POST contact form
│   │   │   │   └── route.ts
│   │   │   └── analytics/           # POST view tracking
│   │   │       └── track/route.ts
│   │   │
│   │   └── cms/                     # Protected CMS API (full CRUD)
│   │       ├── services/
│   │       │   ├── route.ts         # GET all, POST create
│   │       │   └── [id]/route.ts    # GET, PUT, DELETE
│   │       ├── rentals/
│   │       ├── portfolio/
│   │       ├── venues/
│   │       ├── testimonials/
│   │       ├── faqs/
│   │       ├── blog/
│   │       ├── team/
│   │       ├── quotes/
│   │       ├── inquiries/
│   │       ├── media/
│   │       │   ├── route.ts         # Upload, list
│   │       │   └── [id]/route.ts    # Delete
│   │       ├── settings/
│   │       └── analytics/
│   │           └── route.ts         # GET dashboard stats
│   │
│   ├── proxy.ts                     # Auth middleware (Next.js 16 convention)
│   ├── layout.tsx                   # Root layout
│   └── globals.css
│
├── components/
│   ├── public/                      # Public site components
│   │   ├── services/
│   │   │   ├── service-card.tsx
│   │   │   ├── service-detail.tsx
│   │   │   └── service-grid.tsx
│   │   ├── rentals/
│   │   │   ├── rental-card.tsx
│   │   │   ├── rental-filters.tsx
│   │   │   ├── rental-grid.tsx
│   │   │   └── quote-basket.tsx
│   │   ├── portfolio/
│   │   ├── venues/
│   │   ├── blog/
│   │   ├── faqs/
│   │   ├── testimonials/
│   │   └── shared/
│   │       ├── hero-section.tsx
│   │       ├── cta-button.tsx
│   │       ├── instagram-feed.tsx
│   │       └── page-skeleton.tsx
│   │
│   ├── cms/                         # CMS components
│   │   ├── layout/
│   │   │   ├── cms-shell.tsx        # Main layout wrapper
│   │   │   ├── cms-header.tsx       # Top navigation
│   │   │   ├── cms-sidebar.tsx      # Side navigation
│   │   │   └── cms-breadcrumb.tsx
│   │   ├── dashboard/
│   │   │   ├── stats-card.tsx
│   │   │   ├── recent-activity.tsx
│   │   │   └── quick-actions.tsx
│   │   ├── data-table/
│   │   │   ├── data-table.tsx       # Reusable table component
│   │   │   ├── data-table-toolbar.tsx
│   │   │   ├── data-table-pagination.tsx
│   │   │   ├── data-table-column-header.tsx
│   │   │   └── data-table-row-actions.tsx
│   │   ├── forms/
│   │   │   ├── form-field.tsx       # Reusable form field wrapper
│   │   │   ├── image-upload.tsx     # Image upload component
│   │   │   ├── multi-image-upload.tsx
│   │   │   ├── rich-text-editor.tsx # TipTap integration
│   │   │   ├── slug-input.tsx       # Auto-slug generation
│   │   │   ├── tag-input.tsx        # Tag management
│   │   │   └── searchable-select.tsx
│   │   ├── shared/
│   │   │   ├── empty-state.tsx
│   │   │   ├── loading-skeleton.tsx
│   │   │   ├── confirm-dialog.tsx
│   │   │   ├── status-badge.tsx
│   │   │   └── page-header.tsx
│   │   └── modules/                 # Module-specific components
│   │       ├── services/
│   │       ├── rentals/
│   │       ├── portfolio/
│   │       ├── blog/
│   │       └── quotes/
│   │
│   ├── layout/                      # Site-wide layouts
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   │
│   └── ui/                          # Radix UI primitives
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       └── tooltip.tsx
│
├── hooks/
│   ├── public/                      # Public data hooks
│   │   ├── use-services.ts
│   │   ├── use-service.ts
│   │   ├── use-rentals.ts
│   │   ├── use-rental.ts
│   │   ├── use-portfolio.ts
│   │   ├── use-portfolio-project.ts
│   │   ├── use-venues.ts
│   │   ├── use-testimonials.ts
│   │   ├── use-faqs.ts
│   │   ├── use-blog-posts.ts
│   │   ├── use-blog-post.ts
│   │   └── use-quote-basket.ts
│   │
│   └── cms/                         # CMS data hooks
│       ├── use-services.ts
│       ├── use-service-mutations.ts
│       ├── use-rentals.ts
│       ├── use-rental-mutations.ts
│       ├── use-portfolio.ts
│       ├── use-portfolio-mutations.ts
│       ├── use-venues.ts
│       ├── use-venue-mutations.ts
│       ├── use-testimonials.ts
│       ├── use-testimonial-mutations.ts
│       ├── use-faqs.ts
│       ├── use-faq-mutations.ts
│       ├── use-blog-posts.ts
│       ├── use-blog-mutations.ts
│       ├── use-team.ts
│       ├── use-team-mutations.ts
│       ├── use-quotes.ts
│       ├── use-quote-mutations.ts
│       ├── use-inquiries.ts
│       ├── use-media.ts
│       ├── use-media-mutations.ts
│       ├── use-analytics.ts
│       └── use-settings.ts
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts                # Browser Supabase client
│   │   ├── server.ts                # Server Supabase client
│   │   ├── admin.ts                 # Admin client (for scripts)
│   │   └── types.ts                 # Generated database types
│   │
│   ├── schemas/                     # Zod validation schemas
│   │   ├── service.schema.ts
│   │   ├── rental.schema.ts
│   │   ├── portfolio.schema.ts
│   │   ├── venue.schema.ts
│   │   ├── testimonial.schema.ts
│   │   ├── faq.schema.ts
│   │   ├── blog.schema.ts
│   │   ├── team.schema.ts
│   │   ├── quote.schema.ts
│   │   ├── inquiry.schema.ts
│   │   ├── media.schema.ts
│   │   └── settings.schema.ts
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── database.types.ts        # Auto-generated from Supabase
│   │   ├── service.types.ts
│   │   ├── rental.types.ts
│   │   ├── portfolio.types.ts
│   │   ├── venue.types.ts
│   │   ├── testimonial.types.ts
│   │   ├── faq.types.ts
│   │   ├── blog.types.ts
│   │   ├── team.types.ts
│   │   ├── quote.types.ts
│   │   ├── inquiry.types.ts
│   │   └── api.types.ts             # API response types
│   │
│   ├── constants/
│   │   ├── navigation.ts            # CMS navigation config
│   │   ├── rental-categories.ts
│   │   ├── event-types.ts
│   │   └── query-keys.ts            # TanStack Query keys
│   │
│   ├── utils/
│   │   ├── cn.ts                    # Class name utility
│   │   ├── format.ts                # Formatting utilities
│   │   ├── slug.ts                  # Slug generation
│   │   ├── seo.ts                   # SEO utilities
│   │   └── storage.ts               # Supabase storage utilities
│   │
│   └── context/
│       ├── quote-basket-context.tsx
│       └── auth-context.tsx
│
├── scripts/
│   ├── migrate-images.ts            # Image migration to Supabase
│   ├── seed-data.ts                 # Initial data seeding
│   └── generate-types.ts            # Generate Supabase types
│
├── docs/
│   └── v2/
│       ├── ARCHITECTURE_V2.md       # This document
│       ├── WORKFLOW_V2.md           # Implementation workflow
│       ├── SCHEMA_V1.sql            # Database schema
│       └── CMS_UI_TEMPLATE.md       # UI/UX guidelines
│
└── public/
    └── ... (static assets)
```

## Domain-Driven Design (DDD)

Pavilion360 V2.0 implements Domain-Driven Design principles to ensure business logic is modeled around the core business domains. The application is structured around bounded contexts that represent distinct business capabilities.

### Core Bounded Contexts

#### 1. Content Management Domain
**Purpose**: Manage all website content including services, portfolio, blog posts, etc.

**Aggregates**:
- **Service Aggregate**: Root entity `Service` with value objects for `UseCase`, `ProcessStep`, and `Package`
- **Portfolio Aggregate**: Root entity `PortfolioProject` with embedded `TechnicalHighlight` and `ClientQuote`
- **Blog Aggregate**: Root entity `BlogPost` with value objects for `SEO` metadata

**Domain Services**:
- `ContentPublishingService`: Handles content lifecycle and publishing rules
- `SlugGenerationService`: Ensures unique, SEO-friendly URLs
- `MediaManagementService`: Coordinates image uploads and processing

#### 2. Rental Management Domain
**Purpose**: Manage rental equipment inventory, categories, and pricing

**Aggregates**:
- **RentalItem Aggregate**: Root entity `RentalItem` with specifications as JSONB
- **RentalCategory Aggregate**: Hierarchical category structure with tags
- **QuoteBasket Aggregate**: Temporary aggregate for quote building

**Domain Services**:
- `InventoryService`: Manages stock levels and availability
- `PricingService`: Calculates rental costs and discounts
- `QuoteCalculationService`: Generates quote estimates

#### 3. CRM Domain
**Purpose**: Manage customer interactions, quotes, and leads

**Aggregates**:
- **QuoteRequest Aggregate**: Customer quote requests with line items
- **Inquiry Aggregate**: General contact form submissions
- **Lead Aggregate**: Qualified leads with status tracking

**Domain Services**:
- `LeadScoringService`: Automatically scores and prioritizes leads
- `QuoteWorkflowService`: Manages quote lifecycle and notifications
- `CustomerCommunicationService`: Handles email and notification workflows

### Domain Events

- `ContentPublished`: Triggered when new content goes live
- `QuoteRequested`: Initiates lead management workflow
- `InventoryUpdated`: Updates pricing and availability
- `LeadStatusChanged`: Triggers follow-up actions

### Repository Pattern

All domain entities implement repository interfaces for data access:

```typescript
interface IServiceRepository {
  findBySlug(slug: string): Promise<Service | null>;
  findAll(options: QueryOptions): Promise<Service[]>;
  save(service: Service): Promise<void>;
  delete(id: string): Promise<void>;
}
```

### Value Objects

- `Slug`: Immutable URL-safe identifier
- `Email`: Validated email address
- `Money`: Currency-aware monetary value
- `Address`: Structured location data
- `SEO`: Search engine optimization metadata

## Architecture Decision Records (ADRs)

### ADR 001: Technology Stack Selection

**Date**: December 15, 2024  
**Status**: Accepted  
**Context**: Need to select a modern, scalable technology stack for V2.0 transformation.

**Decision**: Adopt Next.js 16 + Supabase + TypeScript stack.

**Rationale**:
- **Next.js 16**: App Router provides modern routing, Server Components for performance, API routes eliminate separate backend
- **Supabase**: BaaS reduces infrastructure overhead, PostgreSQL provides enterprise-grade database, built-in auth and storage
- **TypeScript**: End-to-end type safety prevents runtime errors, improves developer experience
- **TanStack Query**: Optimistic updates, intelligent caching, background refetching

**Consequences**:
- Faster development velocity with full-stack framework
- Reduced operational complexity with managed backend services
- Type safety reduces bugs and improves maintainability

### ADR 002: Database Schema Design

**Date**: December 16, 2024  
**Status**: Accepted  
**Context**: Design database schema supporting complex content relationships and CRM functionality.

**Decision**: Use PostgreSQL with JSONB, full-text search, and Row Level Security.

**Rationale**:
- **JSONB**: Flexible storage for complex data structures (service process steps, rental specs)
- **Full-text search**: Efficient content searching across all text fields
- **RLS**: Multi-tenant security at database level
- **Soft deletes**: Maintain data integrity while allowing "deletion" for audit purposes

**Consequences**:
- Schema evolution flexibility with JSONB
- Built-in search capabilities without external services
- Security enforced at database level

### ADR 003: State Management Strategy

**Date**: December 17, 2024  
**Status**: Accepted  
**Context**: Choose state management solution for client and server state.

**Decision**: Use TanStack Query for server state, React Context for client state.

**Rationale**:
- **TanStack Query**: Purpose-built for server state, handles caching, synchronization, background updates
- **React Context**: Simple solution for client-side state (auth, quote basket)
- **No global state library**: Reduces complexity and bundle size

**Consequences**:
- Optimized server state management
- Reduced boilerplate code
- Better performance with intelligent caching

### ADR 004: UI Component Architecture

**Date**: December 18, 2024  
**Status**: Accepted  
**Context**: Establish reusable component patterns for consistent UI.

**Decision**: Radix UI primitives + Tailwind CSS + custom component library.

**Rationale**:
- **Radix UI**: Accessible, unstyled primitives ensure WCAG compliance
- **Tailwind CSS**: Utility-first approach for consistent design system
- **Custom components**: Domain-specific components built on primitives

**Consequences**:
- Accessible by default
- Consistent design language
- Maintainable component library

### ADR 005: Authentication & Authorization

**Date**: December 19, 2024  
**Status**: Accepted  
**Context**: Implement secure admin access to CMS.

**Decision**: Supabase Auth with custom user metadata and middleware protection.

**Rationale**:
- **Supabase Auth**: JWT-based authentication with session management
- **User metadata**: Store role information in user profile
- **Middleware**: Route-level protection with automatic redirects
- **RLS**: Database-level authorization

**Consequences**:
- Secure authentication flow
- Role-based access control
- Automatic session management

### ADR 006: Content Management Approach

**Date**: December 20, 2024  
**Status**: Accepted  
**Context**: Design CMS for non-technical content managers.

**Decision**: CRUD-first approach with rich text editing and media management.

**Rationale**:
- **CRUD operations**: Familiar create/read/update/delete workflow
- **Rich text editor**: TipTap for advanced content creation
- **Media library**: Centralized image management
- **Templated forms**: Consistent editing experience across modules

**Consequences**:
- Intuitive content management
- Rich content creation capabilities
- Scalable to multiple content types

### ADR 007: API Design Patterns

**Date**: December 21, 2024  
**Status**: Accepted  
**Context**: Establish consistent API patterns for public and CMS endpoints.

**Decision**: RESTful conventions with consistent response format and error handling.

**Rationale**:
- **RESTful**: Standard HTTP methods and resource-based URLs
- **Consistent responses**: Standardized success/error format
- **Zod validation**: Runtime validation ensures data integrity
- **Caching headers**: Appropriate cache control for performance

**Consequences**:
- Predictable API consumption
- Type-safe API integration
- Optimized caching strategies

### ADR 008: Deployment Strategy

**Date**: December 22, 2024  
**Status**: Accepted  
**Context**: Choose deployment platform for production environment.

**Decision**: Vercel for frontend, Supabase for backend services.

**Rationale**:
- **Vercel**: Optimized for Next.js, global CDN, preview deployments
- **Supabase**: Managed PostgreSQL, automatic scaling, built-in monitoring
- **Integrated deployment**: Vercel integrates directly with Supabase

**Consequences**:
- Optimized performance for Next.js
- Simplified deployment workflow
- Built-in scaling and monitoring

## Installation & Setup

### Prerequisites

- **Node.js**: 18.x or higher
- **pnpm**: 8.x or higher
- **Git**: Latest version
- **Supabase Account**: For database and authentication

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/VersaLabs/pavilion360.git
   cd pavilion360
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Database Setup**
   - Create a new Supabase project
   - Execute the schema from `docs/v2/SCHEMA_V1.sql`
   - Generate types: `pnpm run generate-types`

5. **Data Seeding**
   ```bash
   pnpm run seed-data
   ```

6. **Image Migration** (if migrating from existing site)
   ```bash
   pnpm run migrate-images
   ```

7. **Start Development Server**
   ```bash
   pnpm dev
   ```

   Access the application at `http://localhost:3000`

### Production Setup

1. **Build the application**
   ```bash
   pnpm build
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Configure environment variables in Vercel dashboard
   - Deploy automatically on push to main branch

## Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role key |
| `NEXT_PUBLIC_SITE_URL` | No | Public site URL (defaults to localhost) |

### Supabase Configuration

1. **Database**: Execute schema from `docs/v2/SCHEMA_V1.sql`
2. **Authentication**: Configure auth settings for admin users
3. **Storage**: Create buckets for images and documents
4. **RLS Policies**: Ensure all policies are active

### Admin User Setup

Create admin user in Supabase Auth dashboard with metadata:
```json
{
  "role": "admin",
  "full_name": "Administrator Name"
}
```

## Usage

### Public Website

The public website is accessible at the root domain and provides:

- **Home Page**: Featured services, testimonials, company overview
- **Services**: Detailed service pages with use cases and process steps
- **Rentals**: Filterable equipment catalog with quote basket functionality
- **Portfolio**: Event case studies with technical details
- **Venues**: Venue information with booking links
- **Blog**: Company news and industry insights
- **Contact**: Quote request and contact forms

### CMS Dashboard

Access the CMS at `/cms/login` with admin credentials.

#### Dashboard Features
- **Analytics Overview**: Content statistics and performance metrics
- **Recent Activity**: Latest content updates and quote requests
- **Quick Actions**: Shortcuts to common tasks

#### Content Management
- **CRUD Operations**: Create, read, update, delete all content types
- **Media Library**: Upload and manage images
- **Rich Text Editing**: WYSIWYG editor for blog posts and descriptions
- **Bulk Operations**: Efficient management of multiple items

#### CRM Features
- **Quote Management**: Track and respond to rental quotes
- **Lead Management**: Manage contact form submissions
- **Status Tracking**: Monitor lead progression through sales funnel

## API Documentation

### Public API Endpoints

All public endpoints are read-only and do not require authentication.

#### Services
- `GET /api/public/services` - List all services
- `GET /api/public/services/[slug]` - Get service by slug

#### Rentals
- `GET /api/public/rentals` - List rentals with filters
- `GET /api/public/rentals/[slug]` - Get rental item by slug
- `GET /api/public/rental-categories` - List categories

#### Portfolio
- `GET /api/public/portfolio` - List portfolio projects
- `GET /api/public/portfolio/[slug]` - Get project by slug

#### Other Content
- `GET /api/public/venues` - List venues
- `GET /api/public/testimonials` - List testimonials
- `GET /api/public/faqs` - List FAQs
- `GET /api/public/blog` - List blog posts
- `GET /api/public/team` - List team members

#### Forms & Analytics
- `POST /api/public/quote-request` - Submit quote request
- `POST /api/public/contact` - Submit contact form
- `POST /api/public/analytics/track` - Track page views

### CMS API Endpoints

All CMS endpoints require authentication and admin role.

#### CRUD Pattern
Each module follows the same pattern:
- `GET /api/cms/{module}` - List with pagination
- `POST /api/cms/{module}` - Create new item
- `GET /api/cms/{module}/[id]` - Get by ID
- `PUT /api/cms/{module}/[id]` - Update item
- `DELETE /api/cms/{module}/[id]` - Soft delete item

#### Additional Endpoints
- `POST /api/cms/media` - Upload file
- `DELETE /api/cms/media/[id]` - Delete file
- `GET /api/cms/analytics` - Dashboard statistics

### Response Format

```typescript
// Success Response
{
  success: true,
  data: T | T[],
  meta?: {
    total: number,
    page: number,
    limit: number
  }
}

// Error Response
{
  success: false,
  error: {
    code: string,
    message: string,
    details?: Record<string, string[]>
  }
}
```

## Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm generate-types` | Generate Supabase types |
| `pnpm seed-data` | Seed database with initial data |
| `pnpm migrate-images` | Migrate images to Supabase Storage |

### Development Workflow

1. **Create Feature Branch**: `git checkout -b feature/your-feature`
2. **Make Changes**: Follow established patterns and conventions
3. **Run Tests**: Ensure all tests pass
4. **Type Check**: `pnpm typecheck`
5. **Lint**: `pnpm lint`
6. **Commit**: Use conventional commit messages
7. **Push**: Create pull request for review

### Code Conventions

- **TypeScript**: Strict mode enabled, no `any` types
- **Imports**: Absolute imports with `@/` prefix
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS utilities, no custom CSS
- **Naming**: PascalCase for components, camelCase for functions
- **Error Handling**: Try/catch with user-friendly messages

## Testing

### Testing Strategy

- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API endpoint and hook testing
- **E2E Tests**: Critical user flows (login, CRUD operations)
- **Performance Tests**: Core Web Vitals monitoring

### Running Tests

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test -- services.test.ts

# Run with coverage
pnpm test -- --coverage

# Run E2E tests
pnpm test:e2e
```

### Test Coverage Requirements

- **Components**: 80% coverage minimum
- **Hooks**: 90% coverage minimum
- **Utilities**: 95% coverage minimum
- **API Routes**: 85% coverage minimum

## Deployment

### Vercel Deployment

1. **Connect Repository**: Link GitHub repository to Vercel
2. **Configure Environment**: Set environment variables in Vercel dashboard
3. **Build Settings**: 
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
4. **Domain Configuration**: Set custom domain if needed

### Production Checklist

- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] Admin user created
- [ ] SSL certificate active
- [ ] CDN configured
- [ ] Monitoring enabled
- [ ] Backup procedures documented

### Monitoring

- **Performance**: Vercel Analytics for Core Web Vitals
- **Errors**: Sentry for error tracking
- **Database**: Supabase monitoring dashboard
- **Uptime**: External monitoring service

## Contributing

### Development Guidelines

1. **Code Review**: All changes require pull request review
2. **Testing**: Write tests for new features
3. **Documentation**: Update docs for API changes
4. **Security**: Follow security best practices
5. **Performance**: Consider performance impact of changes

### Pull Request Process

1. Create feature branch from `main`
2. Implement changes with tests
3. Ensure CI passes
4. Request review from team lead
5. Merge after approval

### Commit Conventions

Follow conventional commits:
```
feat: add new feature
fix: bug fix
docs: documentation update
style: formatting change
refactor: code restructure
test: add tests
chore: maintenance
```

## Security

### Authentication Security

- JWT tokens with short expiration
- Refresh token rotation
- Session management with httpOnly cookies
- Rate limiting on auth endpoints

### Data Protection

- Row Level Security (RLS) on all tables
- Encrypted sensitive data
- Audit logging for admin actions
- Data sanitization on all inputs

### API Security

- Input validation with Zod schemas
- CORS configuration
- Rate limiting
- Request size limits

### Best Practices

- Regular dependency updates
- Security scanning in CI/CD
- Access control reviews
- Incident response procedures

## License

**Proprietary Software - VersaLabs**

This software and its associated documentation are proprietary to VersaLabs. All rights reserved.

- Unauthorized copying, modification, distribution, or use is strictly prohibited
- Access is limited to authorized VersaLabs personnel and approved partners
- Source code is confidential and contains trade secrets
- Breach of this license may result in legal action

For licensing inquiries, contact legal@versalabs.com

## Support

### Internal Support

- **Documentation**: Comprehensive docs in `/docs/v2/` directory
- **Team Communication**: Slack channel `#pavilion360-dev`
- **Issue Tracking**: GitHub Issues for bugs and feature requests
- **Code Reviews**: Pull request reviews for quality assurance

### Production Support

- **Monitoring**: 24/7 system monitoring with alerts
- **On-call Rotation**: Development team on-call for critical issues
- **SLA**: 4-hour response time for production incidents
- **Backup Procedures**: Daily database backups with 30-day retention

### Contact Information

- **Project Lead**: [Name] - lead@versalabs.com
- **Technical Lead**: [Name] - tech@versalabs.com
- **DevOps**: [Name] - infra@versalabs.com
- **Security**: security@versalabs.com

---

**Pavilion360 V2.0** - Enterprise-grade content management platform by VersaLabs

**GitHub Repository**: https://github.com/VersaLabs/pavilion360  
**Live Application**: https://pavilion360.com  
**Documentation**: https://docs.versalabs.com/pavilion360  

*Built with ❤️ by the VersaLabs team*