# Pana Sports

[![Version](https://img.shields.io/badge/version-2.5-blue.svg)](https://panasport.et/)
[![Live Site](https://img.shields.io/badge/live-panasport.et-green.svg)](https://panasport.et/)
[![Proprietary](https://img.shields.io/badge/proprietary-VersaLabs-red.svg)]()

Enterprise-grade Ethiopian football platform architected for national-scale operations, featuring real-time match tracking, comprehensive league management, and a multilingual content management system deployed for operational excellence.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Architecture Decision Records](#architecture-decision-records)
- [Deployment](#deployment)
- [Security](#security)
- [Performance](#performance)
- [Roadmap](#roadmap)
- [Team and Support](#team-and-support)
- [License](#license)

## Project Overview

Pana Sports is VersaLabs' flagship product - a comprehensive digital platform serving the Ethiopian football ecosystem. Launched as a public-facing sports portal with an integrated admin CMS, the platform provides real-time match tracking, league standings, team and player profiles, and multilingual content management.

### Mission

To digitize and modernize Ethiopian football through technology, providing fans, teams, and administrators with a centralized, reliable platform for all football-related information and management.

### Key Objectives

- **Fan Experience**: Real-time scores, comprehensive league coverage, and engaging content
- **Administrative Efficiency**: Streamlined content management and match control
- **Multilingual Support**: Native English and Amharic support for Ethiopian audiences
- **Enterprise Grade**: Scalable architecture, robust security, and professional maintenance

### Target Audience

- **Football Fans**: Access to live scores, standings, team/player info, and news
- **Club Administrators**: Content management and match control tools
- **League Officials**: Tournament management and data oversight
- **Broadcasters/Media**: Access to structured football data

## Features

### Public Features

- **Live Match Tracking**: Real-time scores, events, and commentary
- **League Coverage**: Premier League, Ethiopian Cup, Higher League, Women's League
- **Team & Player Profiles**: Detailed statistics and information
- **News & Content**: Articles, features, and opinion pieces
- **Standings & Statistics**: Automated league tables and player stats
- **Global Search**: Instant search across teams, players, news, and matches
- **Responsive Design**: Optimized for mobile and desktop experiences

### CMS Features

- **Content Management**: News, teams, players, matches, leagues
- **Match Control Panel**: Real-time match management with event tracking
- **User Management**: Role-based access control
- **Media Management**: Image upload and management
- **Analytics Dashboard**: Usage statistics and content metrics
- **Backup & Recovery**: Automated data backups and rollback capabilities

### additional Features (v2.0 & v2.5)

- **Season Management**: Multi-season data organization
- **Cup Competitions**: Full knockout and group stage support
- **Advanced Statistics**: Player career stats and head-to-head records
- **Ad Management**: Dynamic advertising system
- **Enhanced Match Control**: Time persistence, penalty shootouts, event editing

## Technology Stack

### Frontend Framework
- **Next.js 16.0.3**: React framework with App Router, server components, and edge runtime
- **React 19.2.0**: UI library with concurrent features and hooks
- **TypeScript 5.x**: Type-safe development with advanced language features

### Backend & Database
- **Supabase**: PostgreSQL database with real-time subscriptions, authentication, and storage
- **PostgreSQL**: Robust relational database with advanced querying

### State Management & Data Fetching
- **TanStack Query 5.90.9**: Efficient data fetching, caching, and synchronization
- **Zod 4.1.13**: Runtime type validation and schema enforcement

### UI & Styling
- **Tailwind CSS 4.x**: Utility-first CSS framework with custom design system
- **Radix UI**: Accessible, unstyled UI primitives
- **Framer Motion 12.23.24**: Animation library for smooth interactions
- **Lucide React 0.553.0**: Consistent icon library

### Content & Forms
- **TipTap 3.11.x**: Rich text editor for content creation
- **React Hook Form 7.66.1**: Performant form handling with validation

### Development & Quality
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality gates

### Monitoring & Analytics
- **Sentry**: Error tracking and performance monitoring
- **Vercel Analytics**: Usage analytics and web vitals

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     PRESENTATION LAYER                       │
│         (Next.js Pages, Components, UI)                       │
├─────────────────────────────────────────────────────────────┤
│                  APPLICATION LAYER                           │
│           (TanStack Query Hooks, Business Logic)             │
├─────────────────────────────────────────────────────────────┤
│                    DOMAIN LAYER                              │
│         (Zod Schemas, Domain Models, Validation)             │
├─────────────────────────────────────────────────────────────┤
│                   INFRASTRUCTURE LAYER                       │
│         (Supabase, API Routes, External Services)            │
└─────────────────────────────────────────────────────────────┘
```

### Layered Architecture

Following Domain-Driven Design (DDD) principles, Pana Sports implements a clean layered architecture:

1. **Presentation Layer**: React components, pages, and UI logic
2. **Application Layer**: Use cases, data fetching hooks, and orchestration
3. **Domain Layer**: Business rules, validation schemas, and domain models
4. **Infrastructure Layer**: External dependencies, database, and APIs

### Component Organization

```
components/
├── ui/              # Base UI primitives (Radix)
├── shared/          # Reusable components across features
├── cms/             # Admin-specific components
├── [feature]/       # Feature-specific components
│   ├── premier-league/
│   ├── news/
│   └── ...
└── providers/       # React context providers
```

### Data Flow

```
User Action → Component → Hook → API Route → Supabase → Database
                                    ↓
                              Zod Validation
                                    ↓
                            Domain Logic
                                    ↓
                              Response
```

## Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account and project
- Vercel account (for deployment)

### Local Development Setup

1. **Clone Repository**
   ```bash
   git clone [repository-url]
   cd pana-sports
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Database Setup**
   - Run migrations on Supabase Dashboard
   - Execute `supabase/migrations/20241231_v2_0_migration.sql`

5. **Generate Types**
   ```bash
   npx supabase gen types typescript --project-id YOUR_PROJECT_ID > lib/supabase/database.types.ts
   ```

6. **Start Development Server**
   ```bash
   npm run dev
   ```

7. **Access Application**
   - Public site: http://localhost:3000
   - CMS: http://localhost:3000/cms

## Usage

### Public Site

Navigate through leagues, view live matches, read news, and explore team/player profiles. Use the global search (⌘K) to find content quickly.

### CMS Dashboard

Access via `/cms` with admin credentials. Manage content, control matches, and monitor analytics.

### API Usage

All endpoints are RESTful with JSON responses. Authentication required for CMS endpoints.

## API Documentation

### Public Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/public/leagues` | GET | List all leagues |
| `/api/public/leagues/[id]` | GET | League details with standings |
| `/api/public/matches` | GET | List matches with filtering |
| `/api/public/teams/[id]` | GET | Team profile and matches |
| `/api/public/players/[id]` | GET | Player profile and stats |
| `/api/public/news` | GET | News articles |
| `/api/public/search` | GET | Global search |

### CMS Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/teams` | GET, POST | Team CRUD operations |
| `/api/matches` | GET, POST, PATCH | Match management |
| `/api/news` | GET, POST, PUT, DELETE | Content management |
| `/api/upload` | POST | File upload |

### Authentication

- **Public**: No authentication required
- **CMS**: Supabase Auth with admin role required
- **API**: Bearer token for programmatic access

## Development

### Project Structure

```
pana-sports/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── cms/               # Admin pages
│   ├── [feature]/         # Public feature pages
│   └── layout.tsx         # Root layout
├── components/            # React components
├── lib/                   # Utilities and configs
│   ├── hooks/            # Custom hooks
│   ├── schemas/          # Zod schemas
│   ├── supabase/         # Database clients
│   └── utils.ts          # Helpers
├── public/               # Static assets
└── docs/                 # Documentation
```

### Coding Standards

- **TypeScript**: Strict type checking enabled
- **ESLint**: Airbnb config with custom rules
- **Prettier**: Consistent formatting
- **Commits**: Conventional commit format

### Testing

- Component testing with React Testing Library
- API testing with Jest
- E2E testing with Playwright (planned)

### Contributing

1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request
5. Code review and merge

## Architecture Decision Records

### ADR 001: Layered Architecture Adoption

**Date**: December 2025  
**Status**: Accepted

**Context**:  
Need for a maintainable, scalable codebase that can evolve with business requirements while keeping technical debt low.

**Decision**:  
Implement a 5-layer clean architecture: Presentation, Application, Domain, Infrastructure.

**Rationale**:  
- **DDD Alignment**: Separates domain logic from infrastructure concerns
- **Testability**: Each layer can be tested independently
- **Maintainability**: Changes in one layer don't cascade to others
- **Scalability**: Allows for future microservices migration

**Consequences**:  
- Increased initial development time
- More files and complexity
- Better long-term maintainability

**Alternatives Considered**:  
- Monolithic structure (rejected: poor separation of concerns)
- Feature-based organization (considered: but layered provides better domain modeling)

### ADR 002: Supabase as Primary Backend

**Date**: December 2025  
**Status**: Accepted

**Context**:  
Need for rapid development, real-time features, and managed infrastructure for Ethiopian football platform.

**Decision**:  
Use Supabase for database, authentication, real-time subscriptions, and file storage.

**Rationale**:  
- **DDD Infrastructure**: Provides reliable data persistence layer
- **Real-time Requirements**: Built-in WebSocket support for live scores
- **Developer Experience**: PostgreSQL with modern tooling
- **Cost Efficiency**: Managed service reduces infrastructure overhead

**Consequences**:  
- Vendor lock-in to Supabase ecosystem
- Limited customization of database features
- Excellent real-time performance

**Alternatives Considered**:  
- Self-hosted PostgreSQL (rejected: higher maintenance)
- Firebase (considered: but PostgreSQL preferred for complex queries)

### ADR 003: Zod Schema Validation

**Date**: December 2025  
**Status**: Accepted

**Context**:  
Need for runtime type safety and domain invariant enforcement in a TypeScript application.

**Decision**:  
Use Zod for all data validation, API schemas, and form validation.

**Rationale**:  
- **DDD Domain Layer**: Enforces business rules at boundaries
- **Type Safety**: Runtime validation complements TypeScript
- **Developer Experience**: Excellent DX with clear error messages
- **Consistency**: Single validation library across the application

**Consequences**:  
- Additional schema definition overhead
- Runtime performance impact (minimal)
- Strong type safety guarantees

**Alternatives Considered**:  
- Joi (rejected: less TypeScript integration)
- Manual validation (rejected: error-prone)

### ADR 004: TanStack Query for Data Management

**Date**: December 2025  
**Status**: Accepted

**Context**:  
Efficient data fetching, caching, and synchronization in a data-heavy sports application.

**Decision**:  
Use TanStack Query for all server state management and API interactions.

**Rationale**:  
- **DDD Application Layer**: Handles data flow and caching logic
- **Performance**: Intelligent caching and background updates
- **UX**: Loading states and error handling built-in
- **Real-time**: Automatic data invalidation and refetching

**Consequences**:  
- Learning curve for complex patterns
- Excellent performance for sports data
- Reduced boilerplate code

**Alternatives Considered**:  
- SWR (considered: TanStack Query preferred for maturity)
- Redux (rejected: overkill for server state)

### ADR 005: Bilingual Content Model

**Date**: December 2025  
**Status**: Accepted

**Context**:  
Ethiopian market requires native support for both English and Amharic languages.

**Decision**:  
All content entities include `_en` and `_am` fields for bilingual support.

**Rationale**:  
- **DDD Domain Model**: Language is a core domain concept
- **User Experience**: Native language support for Ethiopian users
- **Scalability**: Foundation for additional languages
- **SEO**: Proper language targeting

**Consequences**:  
- Increased database schema complexity
- UI complexity for language switching
- Strong cultural alignment

**Alternatives Considered**:  
- Single language with translation API (rejected: poor UX)
- Separate databases (rejected: maintenance nightmare)

### ADR 006: CMS as Separate Bounded Context

**Date**: December 2025  
**Status**: Accepted

**Context**:  
Admin users have different needs and workflows than public users.

**Decision**:  
Implement CMS as a separate bounded context with dedicated routes, components, and APIs.

**Rationale**:  
- **DDD Bounded Contexts**: Clear separation of admin and public domains
- **Security**: Isolated admin functionality
- **Maintainability**: Changes to CMS don't affect public site
- **User Experience**: Optimized interfaces for each user type

**Consequences**:  
- Code duplication between contexts
- Clear architectural boundaries
- Independent deployment capabilities

**Alternatives Considered**:  
- Shared components with role-based rendering (rejected: security concerns)
- Separate applications (considered: monolithic preferred for simplicity)

## Deployment

### Production Environment

- **Frontend**: Vercel with global CDN
- **Backend**: Supabase managed PostgreSQL
- **Storage**: Supabase Storage for media files
- **Analytics**: Vercel Analytics and Sentry

### CI/CD Pipeline

1. **Git Push** → Vercel auto-deployment
2. **Database Migrations** → Manual via Supabase Dashboard
3. **Type Generation** → Automated on deployment
4. **Monitoring** → Sentry error tracking

### Environment Variables

Production environment requires:
- Supabase production project credentials
- Sentry DSN
- Analytics tracking IDs

## Security

### Authentication
- Supabase Auth with email/password and social providers
- Role-based access control (admin, editor, viewer)
- JWT tokens with appropriate expiration

### Authorization
- Route-level protection with middleware
- API endpoint authentication checks
- Database row-level security policies

### Data Protection
- HTTPS encryption in transit
- Supabase encryption at rest
- Input sanitization and validation
- Rate limiting on API endpoints

### Security Monitoring
- Sentry for error tracking and alerting
- Supabase security dashboard
- Regular security audits and updates

## Performance

### Optimization Strategies

- **Server-Side Rendering**: Next.js ISR for dynamic content
- **Image Optimization**: Next.js Image component with WebP
- **Caching**: TanStack Query intelligent caching
- **Code Splitting**: Route-based and component-based splitting
- **CDN**: Vercel global edge network

### Monitoring

- **Web Vitals**: Core Web Vitals tracking
- **Performance Budgets**: Lighthouse score monitoring
- **Real-time Metrics**: Supabase database performance
- **Error Tracking**: Sentry for production issues

### Scalability

- **Database**: Supabase auto-scaling
- **Frontend**: Vercel serverless scaling
- **Storage**: Cloud-based media storage
- **Caching**: Redis (planned for v3.0)

## Roadmap

### v2.5 (Current - Soft Launch)
- ✅ Bug fixes and UI simplifications
- ✅ Match week filtering
- ✅ CMS dark mode overhaul
- ✅ Ad management temporary disable
- ⏳ Safari testing and polish

### v3.0 (Post-Migration)
- Standings automation from match results
- H2H display on match detail
- Player stats automation
- VPS backend migration
- Server-side caching layer

### Future Enhancements
- AI-powered match predictions
- Social media integration
- Advanced analytics dashboard
- Mobile native applications
- International league expansion

## Team and Support

### VersaLabs Team

Pana Sports is developed and maintained by VersaLabs, a technology company specializing in digital solutions for African markets.

### Support

For technical support, feature requests, or bug reports:
- **Email**: support@versalabs.et
- **Live Site**: https://panasport.et/
- **Response Time**: 24-48 hours for critical issues

### Documentation

- **Technical Docs**: `/docs/` directory
- **API Reference**: Inline code documentation
- **Architecture**: `/docs/v1/ARCHITECTURE.md`

## License

This project is proprietary software owned by VersaLabs. All rights reserved.

© 2025 VersaLabs. Unauthorized use, reproduction, or distribution is prohibited.

---

*Built with ❤️ by VersaLabs for Ethiopian football fans worldwide.*

[Live Site](https://panasport.et/) | [Documentation](./docs/)