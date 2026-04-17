# OSKAZ E-Commerce Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6B46C1)](https://clerk.com/)
[![Frappe](https://img.shields.io/badge/Frappe-ERPNext-FF6B35)](https://frappe.io/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

**A proprietary enterprise-grade e-commerce platform developed by VersaLabs, powering OSKAZ's digital commerce operations with modern web technologies and domain-driven design principles, deployed for operational scale across Ethiopia.**

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Domain-Driven Design](#domain-driven-design)
- [Architecture Decision Records](#architecture-decision-records)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## 📖 Overview

OSKAZ E-Commerce Web Platform is a comprehensive digital commerce solution designed to provide seamless online shopping experiences for OSKAZ products. Built with enterprise-grade architecture and modern web technologies, the platform serves institutional and individual customers across Ethiopia and beyond.

The application implements a robust frontend architecture using Domain-Driven Design (DDD) principles to manage the complexity of e-commerce operations, including product catalog management, shopping cart functionality, order processing, and user management.

### 🎯 Business Value

- **Enterprise Reliability**: Built for high-traffic e-commerce operations
- **Scalable Architecture**: Designed to handle growing product catalogs and user bases
- **Modern UX**: Intuitive shopping experience with responsive design
- **Secure Transactions**: Enterprise-grade security and authentication
- **Performance Optimized**: Fast loading times and smooth interactions

## 🚀 Key Features

### Core E-Commerce Functionality
- **Product Catalog**: Comprehensive product listings with categories, search, and filtering
- **Shopping Cart**: Persistent cart management with real-time updates
- **User Authentication**: Secure login/signup with Clerk authentication
- **Order Management**: Complete order lifecycle from placement to fulfillment
- **Payment Integration**: Secure payment processing (integration ready)

### Advanced Features
- **Multi-language Support**: Internationalization with translation management
- **Dark/Light Theme**: Modern theming system with user preferences
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Real-time Updates**: Live cart and inventory status
- **SEO Optimized**: Server-side rendering for optimal search engine visibility

### Enterprise Features
- **Audit Logging**: Comprehensive logging for compliance and debugging
- **Error Handling**: Robust error boundaries and user-friendly error states
- **Performance Monitoring**: Built-in performance tracking and analytics
- **Accessibility**: WCAG compliant design patterns

## 🛠 Technology Stack

### Frontend Framework
- **Next.js 16.0.10** - React framework with App Router, SSR/SSG, API routes
- **React 19.2.0** - UI library with concurrent features and hooks
- **TypeScript 5.7.2** - Type-safe JavaScript with advanced language features

### UI/UX & Styling
- **Tailwind CSS 4.0.0** - Utility-first CSS framework with custom design system
- **Radix UI** - Accessible, unstyled UI primitives
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme management for dark/light modes

### Authentication & Security
- **Clerk 6.36.3** - Complete user management and authentication solution
- **Svix 1.77.0** - Webhook handling for real-time event processing

### Backend Integration
- **Frappe JS SDK 1.11.0** - Client library for Frappe/ERPNext integration
- **Custom API Layer** - Type-safe API client with error handling

### Development Tools
- **ESLint 9.17.0** - Code linting and quality enforcement
- **PostCSS 10.4.21** - CSS processing and optimization
- **Autoprefixer 10.4.21** - CSS vendor prefixing
- **Turbo** - High-performance build system

### Runtime Environment
- **Node.js 22.10.2** - Server runtime
- **Browserslist** - Target browser compatibility

## 🏗 System Architecture

### High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js App   │    │   Clerk Auth     │    │  Frappe ERP     │
│   (Frontend)    │◄──►│   (Identity)     │    │   (Backend)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Domain Layer   │    │  Application     │    │  Infrastructure │
│  (DDD)          │    │  Services        │    │  Layer           │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Application Structure

```
oskaz-ecommerce-web/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   ├── (pages)/                  # Application pages
│   └── layout.tsx                # Root layout
├── components/                   # Reusable UI components
├── context/                      # React context providers
├── lib/                          # Utility libraries
│   ├── frappe-client.ts          # ERP integration
│   ├── translations.ts           # i18n utilities
│   └── utils.ts                  # Helper functions
├── types/                        # TypeScript type definitions
├── public/                       # Static assets
└── styles/                       # Global styles
```

### Data Flow Architecture

1. **Client Request** → Next.js API Routes
2. **Authentication** → Clerk middleware validation
3. **Business Logic** → Domain services with DDD patterns
4. **Data Persistence** → Frappe ERP API calls
5. **Response** → Type-safe JSON responses

## 🎯 Domain-Driven Design

This project implements Domain-Driven Design (DDD) principles to manage the complexity of e-commerce operations. The domain is divided into strategic bounded contexts that align with business capabilities.

### Bounded Contexts

#### 1. Product Catalog Context
**Purpose**: Manage product information, categories, and inventory
- **Entities**: Product, Category, Brand
- **Value Objects**: Price, Rating, ProductFeatures
- **Aggregates**: ProductAggregate
- **Repositories**: ProductRepository

#### 2. Shopping Cart Context
**Purpose**: Handle cart operations and temporary order assembly
- **Entities**: Cart, CartItem
- **Value Objects**: Quantity, ItemPrice
- **Aggregates**: CartAggregate
- **Domain Services**: CartCalculationService

#### 3. Order Management Context
**Purpose**: Process and track customer orders
- **Entities**: SalesOrder, OrderItem
- **Value Objects**: OrderStatus, DeliveryInfo
- **Aggregates**: OrderAggregate
- **Domain Events**: OrderPlaced, OrderShipped

#### 4. User Management Context
**Purpose**: Handle user authentication and profiles
- **Entities**: User, Customer
- **Value Objects**: ContactInfo, Preferences
- **Aggregates**: UserAggregate

### DDD Patterns Implemented

- **Domain Events**: For order lifecycle management
- **Application Services**: Orchestrate domain operations
- **Repository Pattern**: Abstract data access
- **Factory Pattern**: Create complex domain objects
- **Value Objects**: Immutable domain concepts
- **Entity Pattern**: Objects with identity and lifecycle

## 📋 Architecture Decision Records

### ADR 001: Adoption of Domain-Driven Design for E-Commerce Frontend

**Date**: 2024-12-01  
**Status**: Accepted  
**Context**: The e-commerce domain is complex with multiple stakeholders (customers, administrators, fulfillment teams) and business rules. Traditional layered architecture was becoming difficult to maintain as features grew.

**Decision**: Implement Domain-Driven Design principles in the frontend application to better align code structure with business domain.

**Rationale**:
- E-commerce has clear bounded contexts (Product, Cart, Order, User)
- DDD provides better separation of concerns
- Improves maintainability for enterprise-scale applications
- Aligns technical architecture with business understanding

**Alternatives Considered**:
- Traditional MVC architecture
- Feature-based organization
- Service-oriented architecture

**Consequences**:
- ✅ Better code organization and maintainability
- ✅ Clearer business logic separation
- ✅ Easier testing of domain rules
- ⚠️ Initial learning curve for development team
- ⚠️ More complex codebase structure

### ADR 002: Bounded Context Definition

**Date**: 2024-12-01  
**Status**: Accepted  
**Context**: Need to define clear boundaries between different business capabilities in the e-commerce system.

**Decision**: Establish four primary bounded contexts:
1. Product Catalog
2. Shopping Cart
3. Order Management
4. User Management

**Rationale**:
- Each context has distinct business rules and stakeholders
- Clear interfaces between contexts prevent coupling
- Allows independent evolution of each domain area

**Consequences**:
- ✅ Clear domain boundaries
- ✅ Independent development teams can work on contexts
- ✅ Better scalability and maintainability
- ⚠️ Requires careful management of context mappings

### ADR 003: Frontend DDD Implementation Strategy

**Date**: 2024-12-01  
**Status**: Accepted  
**Context**: DDD is typically associated with backend systems, but frontend applications also benefit from domain modeling.

**Decision**: Implement DDD patterns in the frontend with adaptations for client-side constraints:
- Use TypeScript interfaces for domain entities
- Implement domain services as pure functions
- Use React context for aggregate state management
- Repository pattern for API abstraction

**Rationale**:
- Frontend contains significant business logic
- Improves code reusability and testability
- Better alignment between frontend and backend domain models

**Alternatives Considered**:
- Pure functional programming approach
- Traditional React component organization
- Backend-only DDD implementation

**Consequences**:
- ✅ Consistent domain modeling across frontend/backend
- ✅ Better testability of business logic
- ✅ Improved code maintainability
- ⚠️ Additional complexity in frontend architecture

### ADR 004: State Management with DDD Aggregates

**Date**: 2024-12-01  
**Status**: Accepted  
**Context**: Need to manage complex state in the frontend while maintaining domain integrity.

**Decision**: Use React Context with custom hooks that encapsulate aggregate behavior, following DDD aggregate patterns.

**Rationale**:
- Maintains aggregate invariants in the frontend
- Clear separation between domain logic and UI concerns
- Easier testing and debugging

**Consequences**:
- ✅ Domain integrity maintained in frontend
- ✅ Clear state management patterns
- ⚠️ Learning curve for context-based state management

### ADR 005: API Integration with Repository Pattern

**Date**: 2024-12-01  
**Status**: Accepted  
**Context**: Need to abstract data access from business logic while integrating with Frappe ERP backend.

**Decision**: Implement repository pattern for all domain data access, with Frappe JS SDK as the underlying data source.

**Rationale**:
- Decouples domain logic from data access technology
- Easier testing with mock repositories
- Consistent data access patterns across bounded contexts

**Consequences**:
- ✅ Technology-agnostic domain layer
- ✅ Easier testing and maintenance
- ⚠️ Additional abstraction layer

## 📋 Prerequisites

- **Node.js**: Version 18.17.0 or higher
- **npm**: Version 9.0.0 or higher
- **Frappe ERPNext**: Backend instance with API access
- **Clerk Account**: For authentication services

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone [INSERT_GITHUB_URL]
cd oskaz-ecommerce-web
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Frappe ERP Integration
NEXT_PUBLIC_ERP_API_URL=https://your-erp-instance.com
ERP_API_KEY=your_api_key
ERP_API_SECRET=your_api_secret

# Application Configuration
NEXT_PUBLIC_APP_URL=https://your-app-domain.com
```

### 4. Configure Frappe Integration

Ensure your Frappe instance has:
- Custom API endpoints for e-commerce operations
- Proper CORS configuration
- Required doctypes (Item, Sales Order, Customer)

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 💻 Development

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

### Code Quality

- **Linting**: ESLint with Next.js configuration
- **Type Checking**: Strict TypeScript configuration
- **Code Formatting**: Prettier integration
- **Testing**: Jest and React Testing Library (setup ready)

### Development Guidelines

#### File Organization
- Use feature-based folder structure
- Keep components small and focused
- Use TypeScript for all new code
- Follow established naming conventions

#### Commit Messages
- Use conventional commit format
- Include relevant issue numbers
- Keep messages descriptive but concise

## 🚢 Deployment

### Production Build

```bash
npm run build
```

### Environment Variables for Production

Ensure all environment variables are set in your deployment platform.

### Recommended Deployment Platforms

- **Vercel**: Optimal for Next.js applications
- **Netlify**: Alternative with good Next.js support
- **Docker**: For containerized deployments

### Live Deployment

**Production URL**: [INSERT_LIVE_URL]

## 📚 API Documentation

### Frontend API Routes

Located in `app/api/` directory:

- `GET /api/items` - Fetch product catalog
- `GET /api/items/[id]` - Fetch individual product
- `POST /api/orders` - Create new order
- `GET /api/customers` - Customer management

### Backend Integration

The application integrates with Frappe ERPNext via REST API:

- **Base URL**: Configured via `NEXT_PUBLIC_ERP_API_URL`
- **Authentication**: API Key/Secret authentication
- **Data Types**: JSON with TypeScript interfaces

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes with proper TypeScript types
4. Run tests and linting: `npm run lint`
5. Commit with conventional format
6. Push and create pull request

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration with Next.js overrides
- **Prettier**: Consistent code formatting
- **Testing**: Unit tests for utilities, integration tests for API routes

### Security Considerations

- Never commit sensitive data
- Use environment variables for secrets
- Follow OWASP guidelines for web security
- Regular dependency updates

## 🔒 Security

This is a proprietary enterprise application developed by VersaLabs. All code and documentation are confidential and protected under company intellectual property policies.

### Security Features

- **Authentication**: Clerk-based user management
- **Authorization**: Role-based access control
- **Data Protection**: Secure API communication
- **Audit Logging**: Comprehensive activity tracking

### Security Best Practices

- Regular security audits
- Dependency vulnerability scanning
- Secure coding practices
- Compliance with industry standards

## 📄 License

**Proprietary Software**  
Copyright © 2024 VersaLabs. All rights reserved.

This software and its documentation are proprietary to VersaLabs and may not be copied, modified, or distributed without explicit written permission.

For licensing inquiries, contact: licensing@versalabs.com

---

**Developed with ❤️ by VersaLabs**  
*Powering Enterprise E-Commerce Solutions*

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
