# Oskaz Import ERP v3.0

## Enterprise Resource Planning System for Printing & Manufacturing Industry

[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](https://github.com/VersaLabs/oskaz-erp)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

**Proprietary Software by VersaLabs** - Enterprise-grade ERP solution architected for printing and manufacturing businesses, providing comprehensive business management capabilities including CRM, Sales, Manufacturing, Inventory, and Accounting modules deployed for operational excellence.

## 🚀 Live Demo

- **Application URL**: [https://oskaz-erp.versalabs.com](https://oskaz-erp.versalabs.com)
- **GitHub Repository**: [https://github.com/VersaLabs/oskaz-erp](https://github.com/VersaLabs/oskaz-erp)
- **Documentation**: [https://docs.versalabs.com/oskaz-erp](https://docs.versalabs.com/oskaz-erp)

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture & Design](#architecture--design)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Domain-Driven Design (DDD)](#domain-driven-design-ddd)
- [Architecture Decision Records (ADR)](#architecture-decision-records-adr)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [Support](#support)

## Overview

Oskaz Import ERP is a comprehensive Enterprise Resource Planning system built specifically for the printing and manufacturing industry. It provides end-to-end business management capabilities from customer relationship management to financial reporting, enabling businesses to streamline operations, improve efficiency, and make data-driven decisions.

### Key Business Capabilities

- **CRM & Sales**: Lead management, quotation generation, sales order processing
- **Manufacturing**: Bill of Materials (BOM), Work Orders, Production tracking
- **Inventory Management**: Warehouse management, stock entries, material requests
- **Purchasing**: Purchase orders, supplier management, vendor invoicing
- **Accounting**: Double-entry bookkeeping, accounts receivable/payable, financial reporting
- **Logistics**: Delivery notes, driver/vehicle tracking, gate pass management

## Architecture & Design

### System Architecture

The system follows a modern micro-frontend architecture with a domain-driven backend:

```
┌─────────────────────────────────────────────────────────────────┐
│                    Oskaz Import ERP v3.0                         │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   Next.js       │  │   Frappe        │  │   PostgreSQL     │ │
│  │   Frontend      │◄►│   Backend       │◄►│   Database       │ │
│  │   (React)       │  │   (Python)      │  │   (via Frappe)   │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                 Bounded Contexts (DDD)                      │ │
│  ├─────────────────────────────────────────────────────────────┤ │
│  │ CRM │ Sales │ Manufacturing │ Inventory │ Accounting │     │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Design Principles

- **Domain-Driven Design (DDD)**: Each business module is a bounded context
- **Microservices Architecture**: Modular, scalable components
- **Event-Driven**: Asynchronous processing for complex workflows
- **API-First**: RESTful APIs with comprehensive documentation
- **Type Safety**: Full TypeScript coverage for reliability
- **Responsive Design**: Mobile-first, enterprise-grade UI/UX

## Technology Stack

### Frontend
- **Framework**: Next.js 16.0.10 (App Router)
- **Runtime**: React 19.2.3 with Concurrent Features
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.10 + Radix UI Components
- **State Management**: React Query (TanStack) 5.90.7
- **Forms**: React Hook Form 7.66.0 with Zod Validation
- **Icons**: Lucide React 0.516.0
- **Charts**: Recharts 2.15.3
- **PDF Generation**: jsPDF 3.0.3 with AutoTable
- **Package Manager**: pnpm (Workspace Support)

### Backend
- **Platform**: Frappe Framework (Python-based)
- **Database**: PostgreSQL (via Frappe ORM)
- **Authentication**: JWT Tokens + API Keys
- **File Storage**: Frappe File Manager
- **Background Jobs**: Frappe Queues
- **REST API**: Frappe REST API with Custom Endpoints

### Infrastructure
- **Deployment**: Docker + Kubernetes (Enterprise)
- **CI/CD**: GitHub Actions
- **Monitoring**: Application Insights + Custom Dashboards
- **Caching**: Redis (via Frappe)
- **Load Balancing**: Nginx
- **SSL/TLS**: Let's Encrypt with Auto-renewal

### Development Tools
- **Linting**: ESLint 9 + TypeScript ESLint
- **Code Generation**: Custom Type Generators
- **Testing**: Jest + React Testing Library (Planned)
- **Documentation**: TypeDoc + Custom MD Generators
- **Version Control**: Git with Conventional Commits

## Features

### Core Modules

#### 1. Customer Relationship Management (CRM)
- Lead Management with qualification workflows
- Customer profiles with contact and address management
- Opportunity tracking and conversion metrics
- Customer segmentation and analytics

#### 2. Sales Management
- Quotation generation with dynamic pricing
- Sales order processing with approval workflows
- Customer credit limit management
- Sales analytics and forecasting

#### 3. Manufacturing Operations
- Bill of Materials (BOM) with multi-level structures
- Work Order management with routing
- Workstation and operation scheduling
- Production tracking and quality control

#### 4. Inventory & Warehouse Management
- Multi-warehouse support with location tracking
- Stock entry automation (receipt, issue, transfer)
- Material request workflows
- Inventory valuation and costing

#### 5. Purchasing & Procurement
- Purchase order generation from material requests
- Supplier management and performance tracking
- Purchase invoice processing with 3-way matching
- Vendor payment management

#### 6. Financial Accounting
- Double-entry bookkeeping with automatic journal entries
- Accounts receivable and payable management
- Payment processing with reconciliation
- Financial reporting and analysis

#### 7. Logistics & Delivery
- Delivery note generation from sales orders
- Driver and vehicle management
- Gate pass printing and tracking
- Shipping documentation

### Enterprise Features

- **Multi-tenant Architecture**: Isolated data per organization
- **Role-based Access Control**: Granular permissions system
- **Audit Trail**: Complete transaction logging
- **Data Export**: Excel/PDF export capabilities
- **Real-time Notifications**: Toast notifications and alerts
- **Offline Capability**: Progressive Web App features
- **API Integration**: RESTful APIs for third-party integrations
- **Customizable Dashboards**: User-configurable analytics views

## Domain-Driven Design (DDD)

Oskaz ERP follows Domain-Driven Design principles to ensure business logic accuracy and maintainability:

### Bounded Contexts

1. **CRM Context**: Lead → Customer conversion, contact management
2. **Sales Context**: Quotation → Sales Order → Delivery workflow
3. **Manufacturing Context**: BOM → Work Order → Production tracking
4. **Inventory Context**: Warehouse → Stock Entry → Material flow
5. **Accounting Context**: Invoice → Payment → Journal entry reconciliation
6. **Purchasing Context**: Material Request → Purchase Order → Invoice processing

### Domain Entities & Aggregates

- **CRM**: Lead, Customer, Contact, Address
- **Sales**: Quotation, SalesOrder, SalesOrderItem
- **Manufacturing**: BOM, BOMItem, WorkOrder, Workstation, Operation
- **Inventory**: Warehouse, StockEntry, Item, MaterialRequest
- **Accounting**: Invoice, PaymentEntry, JournalEntry, Account

### Domain Services

- **PricingService**: Handles dynamic pricing calculations
- **InventoryService**: Manages stock levels and reservations
- **AccountingService**: Ensures double-entry compliance
- **WorkflowService**: Manages approval and status transitions

### Value Objects

- **Money**: Currency and amount handling
- **Quantity**: Unit-aware quantity management
- **Address**: Structured address representation
- **DateRange**: Business date calculations

## Architecture Decision Records (ADR)

### ADR-001: Domain-Driven Design with Bounded Contexts

**Date**: 2024-01-15  
**Status**: Accepted

**Context**: The ERP system needs to handle complex business workflows across multiple domains (CRM, Sales, Manufacturing, etc.) while maintaining clear boundaries and avoiding tight coupling.

**Decision**: Implement Domain-Driven Design with bounded contexts, where each major business module (CRM, Sales, Manufacturing, Inventory, Accounting) operates as a separate bounded context with its own domain model, language, and rules.

**Consequences**:
- ✅ Clear separation of concerns
- ✅ Independent evolution of each domain
- ✅ Easier testing and maintenance
- ❌ Increased complexity in cross-domain workflows
- ⚠️ Requires careful context mapping for integration points

**Rationale**: DDD ensures the software model reflects business reality, making it easier for domain experts to understand and validate the system.

### ADR-002: Frappe Framework as Backend Platform

**Date**: 2024-01-20  
**Status**: Accepted

**Context**: Need a robust backend that supports rapid development, multi-tenancy, and enterprise features like audit trails, permissions, and workflow management.

**Decision**: Use Frappe Framework (Python-based) as the backend platform, leveraging its built-in ERP capabilities, DocType system, and extensive ecosystem.

**Alternatives Considered**:
- Custom Django application
- Node.js with Express and custom ORM
- .NET Core with Entity Framework

**Consequences**:
- ✅ Rapid development with pre-built ERP features
- ✅ Built-in multi-tenancy and permissions
- ✅ Large ecosystem and community support
- ❌ Vendor lock-in to Frappe ecosystem
- ⚠️ Learning curve for Frappe-specific concepts

**Rationale**: Frappe provides 80% of typical ERP functionality out-of-the-box, allowing focus on business-specific customizations rather than reinventing core ERP features.

### ADR-003: Next.js with App Router for Frontend

**Date**: 2024-02-01  
**Status**: Accepted

**Context**: Need a modern, scalable frontend that supports server-side rendering, API routes, and excellent developer experience for complex ERP interfaces.

**Decision**: Use Next.js 13+ with App Router for the frontend architecture, enabling server components, streaming, and optimized performance.

**Alternatives Considered**:
- Create React App with React Router
- Vite with React and custom SSR
- SvelteKit

**Consequences**:
- ✅ Excellent performance with SSR/SSG
- ✅ Built-in API routes for backend integration
- ✅ Modern React features (Concurrent, Suspense)
- ❌ Steeper learning curve for App Router
- ⚠️ Requires careful data fetching strategies

**Rationale**: Next.js provides the best balance of performance, developer experience, and enterprise features required for a complex ERP system.

### ADR-004: React Query for State Management

**Date**: 2024-02-10  
**Status**: Accepted

**Context**: Complex ERP requires efficient server state management, caching, and synchronization across multiple components and pages.

**Decision**: Use TanStack React Query (formerly React Query) as the primary state management solution for server state, with local component state for UI concerns.

**Alternatives Considered**:
- Redux Toolkit with RTK Query
- SWR
- Zustand with custom caching

**Consequences**:
- ✅ Automatic caching and background refetching
- ✅ Excellent developer experience
- ✅ Built-in error handling and loading states
- ❌ Additional abstraction layer
- ⚠️ Requires understanding of stale-while-revalidate

**Rationale**: React Query handles the complexity of server state management in enterprise applications, reducing boilerplate and improving performance.

### ADR-005: TypeScript for Type Safety

**Date**: 2024-02-15  
**Status**: Accepted

**Context**: Enterprise ERP systems require high reliability, maintainability, and developer productivity. Runtime errors must be minimized.

**Decision**: Use TypeScript throughout the entire codebase with strict type checking enabled, including generated types from backend schemas.

**Alternatives Considered**:
- Flow
- JavaScript with JSDoc
- Pure JavaScript

**Consequences**:
- ✅ Compile-time error catching
- ✅ Excellent IDE support and refactoring
- ✅ Self-documenting code
- ❌ Slower initial development
- ⚠️ Requires type maintenance as APIs evolve

**Rationale**: TypeScript prevents entire classes of runtime errors common in large JavaScript applications, critical for enterprise software reliability.

### ADR-006: Radix UI + Tailwind for Component System

**Date**: 2024-03-01  
**Status**: Accepted

**Context**: Need a consistent, accessible, and maintainable component system that can handle complex ERP forms and data tables.

**Decision**: Build a design system using Radix UI primitives with Tailwind CSS for styling, creating reusable components with proper accessibility.

**Alternatives Considered**:
- Material-UI (MUI)
- Ant Design
- Custom CSS-in-JS solution

**Consequences**:
- ✅ Excellent accessibility compliance
- ✅ High customization flexibility
- ✅ Consistent design language
- ❌ Requires more upfront component development
- ⚠️ Tailwind learning curve for designers

**Rationale**: Radix UI provides unstyled, accessible primitives that can be styled consistently with Tailwind, ensuring enterprise-grade accessibility and customization.

### ADR-007: Zod for Schema Validation

**Date**: 2024-03-10  
**Status**: Accepted

**Context**: ERP forms handle complex business data that requires validation at multiple levels (client, server, API).

**Decision**: Use Zod for runtime type validation and schema definition, integrating with React Hook Form for form validation.

**Alternatives Considered**:
- Yup
- Joi
- Custom validation functions

**Consequences**:
- ✅ TypeScript-first validation
- ✅ Runtime type safety
- ✅ Composable validation rules
- ❌ Additional dependency
- ⚠️ Learning curve for complex validations

**Rationale**: Zod provides seamless integration between TypeScript types and runtime validation, ensuring data integrity across the application.

### ADR-008: Docker + Kubernetes for Deployment

**Date**: 2024-04-01  
**Status**: Accepted

**Context**: Enterprise deployment requires scalability, high availability, and easy rollbacks in production environments.

**Decision**: Use Docker for containerization and Kubernetes for orchestration, with Helm charts for deployment management.

**Alternatives Considered**:
- Docker Compose for single-server
- AWS ECS/Fargate
- Traditional VM deployment

**Consequences**:
- ✅ Scalable and highly available
- ✅ Easy rollbacks and blue-green deployments
- ✅ Environment consistency
- ❌ Increased operational complexity
- ⚠️ Requires DevOps expertise

**Rationale**: Kubernetes provides the scalability and reliability required for enterprise ERP systems handling multiple concurrent users and complex workflows.

## Installation

### Prerequisites

- Node.js 18+ and pnpm
- Python 3.8+ (for Frappe backend)
- PostgreSQL 13+
- Redis (for caching)
- Docker & Docker Compose (recommended)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/VersaLabs/oskaz-erp.git
   cd oskaz-erp
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   pnpm run dev
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

### Production Deployment

1. **Build the application**
   ```bash
   pnpm run build
   ```

2. **Start production server**
   ```bash
   pnpm start
   ```

### Docker Deployment

```bash
docker-compose up -d
```

## Configuration

### Environment Variables

```env
# Frappe Backend
NEXT_PUBLIC_ERP_API_URL=https://your-frappe-instance.com
ERP_API_KEY=your_api_key
ERP_API_SECRET=your_api_secret

# Application
NEXT_PUBLIC_APP_URL=https://your-app.com
NEXT_PUBLIC_APP_NAME=Oskaz Import ERP

# Database (if using direct connection)
DATABASE_URL=postgresql://user:pass@localhost:5432/oskaz_erp

# Redis
REDIS_URL=redis://localhost:6379

# Security
JWT_SECRET=your_jwt_secret
ENCRYPTION_KEY=your_encryption_key
```

### Frappe Setup

1. Install Frappe Bench
2. Create new site
3. Install ERPNext or custom app
4. Configure API keys and permissions

## Usage

### User Roles & Permissions

- **Administrator**: Full system access
- **Manager**: Department-level oversight
- **Operator**: Day-to-day operations
- **Viewer**: Read-only access

### Common Workflows

1. **Sales Process**: Lead → Quotation → Sales Order → Delivery → Invoice
2. **Manufacturing**: BOM → Work Order → Material Request → Production → Stock Entry
3. **Purchasing**: Material Request → Purchase Order → Goods Receipt → Invoice

### API Usage

```typescript
// Example: Fetch customers
import { frappeClient } from '@/lib/frappe-client';

const customers = await frappeClient.db.getList('Customer', {
  fields: ['name', 'customer_name', 'customer_type'],
  limit: 20
});
```

## API Documentation

Comprehensive API documentation is available at `/api/docs` when running in development mode.

### Key Endpoints

- `GET /api/crm/customers` - Customer management
- `POST /api/sales/orders` - Sales order creation
- `GET /api/manufacturing/work-orders` - Production tracking
- `POST /api/accounting/invoices` - Invoice processing

## Contributing

### Development Workflow

1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Create Pull Request

### Code Standards

- Use TypeScript for all new code
- Follow ESLint configuration
- Write descriptive commit messages
- Add tests for new features
- Update documentation

### Testing

```bash
# Run tests
pnpm test

# Run linting
pnpm lint

# Type checking
pnpm type-check
```

## Security

### Enterprise Security Features

- **Data Encryption**: AES-256 encryption for sensitive data
- **Audit Logging**: Complete transaction and access logging
- **Role-Based Access**: Granular permissions system
- **Input Validation**: Comprehensive input sanitization
- **CSRF Protection**: Token-based CSRF prevention
- **Rate Limiting**: API rate limiting and abuse prevention
- **Secure Headers**: OWASP-compliant security headers

### Compliance

- SOC 2 Type II compliant
- GDPR compliant data handling
- ISO 27001 information security standards

## License

This software is proprietary to VersaLabs. All rights reserved. Unauthorized use, reproduction, or distribution is strictly prohibited.

## Support

### Enterprise Support

- **Email**: support@versalabs.com
- **Documentation**: https://docs.versalabs.com/oskaz-erp
- **Issue Tracking**: https://github.com/VersaLabs/oskaz-erp/issues
- **Professional Services**: Contact VersaLabs for custom development and consulting

### Community Resources

- **Forum**: https://community.versalabs.com
- **Blog**: https://blog.versalabs.com
- **Training**: https://training.versalabs.com

---

**Built with ❤️ by VersaLabs - Enterprise Software Solutions**



