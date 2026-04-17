# Potentia - Enterprise Bitcoin Mining Platform

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/kidusabdula/potentia-web)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)

**Potentia** is an enterprise-grade Bitcoin mining business management platform developed by VersaLabs. It transforms mining operations from technical endeavors into professional enterprises, guiding users through education, asset management, and operational excellence with enterprise-grade architecture.

## 🚀 Live Application

- **Production URL**: [https://potentia.versalabs.com](https://potentia.versalabs.com)
- **GitHub Repository**: [https://github.com/kidusabdula/potentia-web](https://github.com/kidusabdula/potentia-web)

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Domain-Driven Design](#domain-driven-design)
- [Architecture Decision Records](#architecture-decision-records)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Potentia serves the complete Bitcoin mining business lifecycle through three interconnected phases:

### 1. **Learn** 📚
- Comprehensive Bitcoin mining curriculum
- From fundamentals to advanced business strategy
- Interactive learning with video content and assessments
- Certification program for mining expertise

### 2. **Own** 🏢
- Complete equipment and asset management
- Hosting contract tracking
- Capital deployment monitoring
- Inventory management for mining hardware

### 3. **Operate** ⚙️
- Real-time fleet health monitoring
- Financial reporting and P&L tracking
- Tax compliance and depreciation schedules
- Treasury management and cash flow analysis

## 🏗️ Architecture

Potentia follows Domain-Driven Design (DDD) principles with a modular, service-oriented architecture designed for enterprise scalability.

### Core Architectural Patterns

- **Domain-Driven Design (DDD)**: Bounded contexts for Learn, Own, and Operate domains
- **Service Layer Pattern**: Business logic encapsulated in domain services
- **Repository Pattern**: Data access abstraction for persistence
- **Observer Pattern**: Event-driven architecture for analytics and notifications
- **Strategy Pattern**: Flexible algorithms for financial calculations and tax strategies

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Potentia Platform                        │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Learn     │  │    Own      │  │  Operate    │         │
│  │   Domain    │  │   Domain    │  │   Domain    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Shared Infrastructure                  │   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐ │   │
│  │  │ Storage │  │Analytics│  │   Tax   │  │ Finance │ │   │
│  │  │ Service │  │ Service │  │ Service │  │ Service │ │   │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │               Presentation Layer                     │   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐ │   │
│  │  │Next.js  │  │React    │  │Radix UI │  │Tailwind │ │   │
│  │  │App      │  │19       │  │         │  │CSS      │ │   │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 16.1.0** - React framework with App Router
- **React 19.0.0** - UI library with concurrent features
- **TypeScript 5.0** - Type-safe JavaScript

### UI & Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

### Data Management
- **Local Storage API** - Client-side persistence (MVP)
- **Custom Service Layer** - Business logic abstraction
- **TypeScript Interfaces** - Strong typing for domain models

### Analytics & Monitoring
- **Vercel Analytics** - Web analytics and performance monitoring
- **Custom Event Tracking** - Domain-specific analytics events
- **Real-time Metrics** - Operational dashboards

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Package Management
- **pnpm** - Fast, disk-efficient package manager
- **npm scripts** - Build and development automation

## 🎯 Domain-Driven Design

Potentia implements Domain-Driven Design (DDD) with clear bounded contexts and ubiquitous language specific to Bitcoin mining business operations.

### Bounded Contexts

#### 1. Learn Domain
**Ubiquitous Language:**
- Curriculum, Track, Lesson, Quiz
- Learning Progress, Certification
- Study Streak, Badge System

**Core Entities:**
- `Lesson`: Individual learning unit with video content and assessment
- `Track`: Grouped lessons forming a learning path
- `Quiz`: Assessment with questions and scoring
- `Certification`: Achievement recognition

#### 2. Own Domain
**Ubiquitous Language:**
- Equipment, Inventory, Asset
- Hosting Contract, Facility
- Capital Deployment, Purchase

**Core Entities:**
- `Equipment`: Mining hardware with specifications
- `Contract`: Hosting agreements with terms
- `Asset`: Complete inventory management

#### 3. Operate Domain
**Ubiquitous Language:**
- Fleet Health, Performance Monitoring
- P&L Statement, Cash Flow
- Tax Depreciation, Treasury
- Alert System, Reporting

**Core Entities:**
- `Fleet`: Collection of mining equipment
- `FinancialReport`: P&L and balance sheet
- `Alert`: System notifications and thresholds

### Domain Services

Each domain encapsulates business logic through dedicated services:

- `learnService`: Handles learning progress, certification, and analytics
- `analyticsService`: Manages event tracking and metrics calculation
- `taxService`: Implements tax calculation and depreciation logic
- `financeService`: Processes financial reporting and cash flow analysis

## 📋 Architecture Decision Records

### ADR-001: Domain-Driven Design Adoption

**Date:** 2026-01-15  
**Status:** Accepted  
**Context:**  
Building a comprehensive Bitcoin mining platform requires modeling complex business domains including education, asset management, and financial operations. Traditional layered architecture would lead to tight coupling and unclear boundaries.

**Decision:**  
Adopt Domain-Driven Design (DDD) with bounded contexts for Learn, Own, and Operate domains. Each domain will have:
- Dedicated type definitions
- Domain services for business logic
- Clear ubiquitous language
- Event-driven communication between domains

**Consequences:**  
- **Positive:** Clear separation of concerns, maintainable codebase, domain expert alignment
- **Negative:** Initial complexity, learning curve for DDD patterns
- **Mitigation:** Start with core domain modeling, iterative refinement

### ADR-002: Service Layer Architecture

**Date:** 2026-02-01  
**Status:** Accepted  
**Context:**  
Business logic for Bitcoin mining operations is complex, involving financial calculations, tax compliance, and equipment management. Direct UI coupling would create maintenance challenges.

**Decision:**  
Implement a service layer pattern with dedicated domain services:
- Each service handles one domain's business logic
- Services are injected into React components via hooks
- Clear separation between UI, business logic, and data access

**Consequences:**  
- **Positive:** Testable business logic, UI flexibility, domain isolation
- **Negative:** Additional abstraction layer, potential over-engineering
- **Mitigation:** Keep services focused, use TypeScript for type safety

### ADR-003: Client-Side Storage Strategy

**Date:** 2026-02-15  
**Status:** Accepted  
**Context:**  
For MVP, full backend infrastructure is not required. User progress and data must persist across sessions while maintaining performance.

**Decision:**  
Use browser LocalStorage with structured service abstraction:
- `storageService` handles all persistence operations
- Data serialized as JSON with type safety
- Migration strategy for schema changes
- Performance optimization for large datasets

**Consequences:**  
- **Positive:** Zero backend dependency, fast development, works offline
- **Negative:** Storage limits, security considerations, data portability
- **Mitigation:** Clear data limits, backup/export functionality, future backend migration path

### ADR-004: Component Architecture with Radix UI

**Date:** 2026-03-01  
**Status:** Accepted  
**Context:**  
Enterprise applications require accessible, consistent UI components. Custom component development would be time-consuming and error-prone.

**Decision:**  
Adopt Radix UI primitives with custom styling:
- Headless UI components for accessibility
- Tailwind CSS for consistent styling
- Custom variants using class-variance-authority
- Framer Motion for animations

**Consequences:**  
- **Positive:** WCAG compliance, consistent design system, accessibility built-in
- **Negative:** Learning curve for Radix API, styling complexity
- **Mitigation:** Comprehensive component documentation, design system guidelines

### ADR-005: Analytics and Event Tracking

**Date:** 2026-03-15  
**Status:** Accepted  
**Context:**  
Understanding user behavior across learning, ownership, and operations phases is critical for platform improvement and business intelligence.

**Decision:**  
Implement comprehensive event tracking system:
- Domain-specific event types (learn, own, operate)
- Structured event data with metadata
- Real-time metrics calculation
- Privacy-compliant data collection

**Consequences:**  
- **Positive:** Data-driven decisions, user behavior insights, performance optimization
- **Negative:** Performance impact, privacy compliance complexity
- **Mitigation:** Efficient event batching, clear data retention policies, GDPR compliance

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kidusabdula/potentia-web.git
   cd potentia-web
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm run build
pnpm run start
```

### Code Quality

```bash
pnpm run lint
```

## 📁 Project Structure

```
potentia-web/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Landing page
│   ├── platform/                 # Platform pages
│   ├── own/                      # Asset management
│   ├── resources/                # Resource pages
│   └── waitlist/                 # Waitlist functionality
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── learn-public.tsx          # Learning components
│   ├── tax-readiness-checklist.tsx
│   └── ...
├── lib/                          # Business logic and utilities
│   ├── services/                 # Domain services
│   │   ├── learnService.ts       # Learning business logic
│   │   ├── analyticsService.ts   # Analytics and events
│   │   ├── taxService.ts         # Tax calculations
│   │   └── ...
│   ├── types/                    # TypeScript definitions
│   │   ├── learn.ts              # Learn domain types
│   │   ├── analytics.ts          # Analytics types
│   │   ├── user.ts               # User types
│   │   └── ...
│   ├── hooks/                    # Custom React hooks
│   ├── content/                  # Static content
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── styles/                       # Global styles
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS config
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## 📚 API Documentation

### Learn Domain API

#### Get User Learning Progress
```typescript
const progress = learnService.getUserOverallLearnProgress()
// Returns: OverallLearnProgress with tracks, lessons, certification status
```

#### Start a Lesson
```typescript
learnService.startLesson(lessonId, trackId)
// Updates progress and triggers analytics events
```

#### Submit Quiz Attempt
```typescript
const attempt = learnService.submitQuiz(lessonId, userAnswers)
// Returns: QuizAttempt with score and correctness
```

### Analytics Domain API

#### Track User Event
```typescript
analyticsService.logEvent({
  category: 'learn',
  action: 'lesson_completed',
  label: lessonId,
  metadata: { timeSpent: 1800 }
})
```

#### Get User Metrics
```typescript
const metrics = analyticsService.getUserMetrics(userId)
// Returns: UserMetrics with engagement data
```

## 🤝 Contributing

As a proprietary VersaLabs project, contributions are managed internally. For external collaboration inquiries, please contact the development team.

### Development Workflow

1. Create feature branch from `main`
2. Implement changes with comprehensive tests
3. Ensure TypeScript compilation
4. Run linting and formatting
5. Submit pull request for review

### Code Standards

- **TypeScript**: Strict type checking enabled
- **ESLint**: Airbnb configuration with React rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Structured commit messages

## 📄 License

This project is proprietary software owned by VersaLabs. All rights reserved.

For licensing inquiries or partnership opportunities, please contact:
- **Email**: legal@versalabs.com
- **Website**: https://versalabs.com

## 🏢 About VersaLabs

VersaLabs is an enterprise software company specializing in blockchain and cryptocurrency business solutions. Our mission is to transform complex blockchain operations into manageable, professional business processes.

### Contact Information

- **Company**: VersaLabs Inc.
- **Website**: https://versalabs.com
- **Location**: Enterprise Headquarters
- **Industry**: Blockchain Enterprise Software

---

**Built with ❤️ by VersaLabs** | **Transforming Bitcoin Mining into Professional Business**
## Architecture

### High-Level Architecture

```
flowchart TD
    A[Client] --> B[API/UI Layer]
    B --> C[Domain Logic]
    C --> D[Infrastructure]
```

### Architecture Decisions

- **Technology Stack**: Modern web stack with Next.js, TypeScript, PostgreSQL
- **Architecture Pattern**: Layered architecture with domain-driven design
- **Data Flow**: Synchronous request-response with async processing where needed
- **Scalability Strategy**: Horizontal scaling with stateless services

### Key Components

- **Core Domain**: Business logic and domain models
- **Application Layer**: Use cases and orchestration  
- **Infrastructure**: Database, external services, and adapters
- **API/UI**: Presentation and interaction layer

### Design Patterns

- Repository pattern for data access
- Domain-driven design (DDD) bounded contexts
- Layered architecture for separation of concerns
- Dependency inversion for testability
