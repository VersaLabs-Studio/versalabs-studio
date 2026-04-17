# AuroQueue - Enterprise Queue Management System

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Next.js Version](https://img.shields.io/badge/Next.js-14+-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)

> **AuroQueue** is an enterprise-grade Queue Management System (QMS) architected for operational excellence in hospitals, banks, government offices, and enterprise organizations. The platform delivers real-time queue orchestration, comprehensive staff dashboards, self-service kiosk integration, and advanced analytics for operational optimization.

## 🌟 Key Features

### Core Functionality
- **Real-time Queue Management**: Live status updates with 5-second polling
- **Multi-Department Support**: Configurable departments with custom prefixes
- **Self-Service Kiosks**: Touch-enabled ticket generation
- **Staff Dashboards**: Dedicated interfaces for employees and administrators
- **Advanced Analytics**: Performance metrics, wait times, and reporting
- **Role-Based Access Control**: Secure authentication with JWT tokens

### Enterprise Features
- **Scalable Architecture**: Microservices-ready with Docker deployment
- **Multi-Tenant Support**: Instance isolation for different organizations
- **High Availability**: Redis caching and PostgreSQL support
- **Real-time Notifications**: Socket.io integration ready
- **Comprehensive Logging**: Structured logging with Winston
- **Database Migrations**: Automated schema management

## 🏗️ Architecture Overview

AuroQueue follows a **microservices-inspired monorepo architecture** with three main components:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Ticket Kiosk  │    │  Staff Frontend │    │  Admin Backend  │
│   (Expo/React)  │    │   (Next.js)     │    │   (Hapi.js)     │
│                 │    │                 │    │                 │
│ • Touch UI      │    │ • Admin Panel   │    │ • REST API      │
│ • QR Codes      │    │ • Analytics     │    │ • JWT Auth      │
│ • Real-time     │    │ • Real-time     │    │ • PostgreSQL    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Redis Cache   │
                    │   PostgreSQL    │
                    │   File Storage  │
                    └─────────────────┘
```

### Component Architecture

#### 🖥️ Backend (Hapi.js)
- **Framework**: Hapi.js v21+ with enterprise plugins
- **Database**: Sequelize ORM with PostgreSQL/SQLite
- **Authentication**: JWT with role-based permissions
- **Caching**: Redis for session and queue state
- **File Uploads**: Multer with S3/cloud storage support
- **Real-time**: Socket.io for live updates
- **Validation**: Joi schemas for API validation

#### 🌐 Frontend (Next.js)
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript 5+ with strict mode
- **UI Library**: ShadCN UI with Radix primitives
- **Styling**: Tailwind CSS v4 with custom design system
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for analytics visualization
- **Animations**: Framer Motion for micro-interactions

#### 📱 Ticket Kiosk (Expo)
- **Framework**: Expo SDK with React Native Web
- **Platforms**: Web, iOS, Android deployment
- **UI**: Native components with custom theming
- **Networking**: Axios with automatic retry logic
- **Offline Support**: Local storage for offline tickets
- **Accessibility**: Screen reader support and large touch targets

## 🛠️ Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Frontend** | Next.js | 14+ | Full-stack React framework |
| **Backend** | Hapi.js | 21+ | Enterprise API framework |
| **Database** | PostgreSQL | 13+ | Primary production database |
| **Cache** | Redis | 6+ | Session and queue caching |
| **ORM** | Sequelize | 6+ | Database abstraction |
| **Auth** | JWT | HS256 | Token-based authentication |
| **Real-time** | Socket.io | 4+ | Live queue updates |
| **Deployment** | Docker | 20+ | Containerization |
| **Reverse Proxy** | Traefik | 2+ | Load balancing |
| **Monitoring** | PM2 | 5+ | Process management |

## 📊 Domain-Driven Design (DDD) Overview

AuroQueue implements Domain-Driven Design principles with clear bounded contexts:

### Bounded Contexts

1. **Queue Management** (Core Domain)
   - Ticket lifecycle management
   - Queue algorithms and prioritization
   - Real-time status updates

2. **Staff Operations**
   - Employee authentication and roles
   - Ticket calling and completion
   - Performance tracking

3. **Administration**
   - Department configuration
   - User management
   - System settings

4. **Analytics & Reporting**
   - Performance metrics calculation
   - Historical data analysis
   - Dashboard visualization

### Domain Entities

- **Ticket**: Central aggregate with status, timestamps, and relationships
- **Department**: Configuration entity with prefixes and settings
- **User**: Staff member with roles and permissions
- **QueueSession**: Daily operational context

### Key Architectural Decisions

See [ADR Document](docs/adr/) for detailed Architecture Decision Records explaining DDD implementation choices, technology selections, and design patterns.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+
- Docker and Docker Compose (for infrastructure)
- PostgreSQL 13+ (production) or SQLite (development)

### Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/VersaLabs/auroqueue.git
   cd auroqueue
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run seed  # Create default admin user
   npm run dev   # Start development server on :8000
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm run dev   # Start on :3000
   ```

4. **Ticket Kiosk Setup**
   ```bash
   cd ../ticket
   npm install
   npm run web   # Start on :8081
   ```

### Production Deployment

1. **Infrastructure Setup**
   ```bash
   cd infrastructure
   docker-compose up -d --build
   ```

2. **Access Points**
   - Traefik Dashboard: http://localhost:8080
   - Client Instance: http://hospital.localhost
   - Additional clients can be added via docker-compose.yml

## 📁 Project Structure

```
auroqueue/
├── backend/                 # Hapi.js API server
│   ├── models/             # Sequelize models
│   ├── routes/             # API route handlers
│   ├── services/           # Business logic services
│   ├── config/             # Database, auth configs
│   └── scripts/            # Migration and utility scripts
├── frontend/                # Next.js admin dashboard
│   ├── app/                # App router pages
│   ├── components/         # Reusable UI components
│   ├── lib/                # Utilities and configurations
│   └── types/              # TypeScript definitions
├── ticket/                  # Expo kiosk application
│   ├── src/                # React Native components
│   ├── assets/             # Images and icons
│   └── utils/              # Kiosk-specific utilities
├── infrastructure/          # Docker deployment configs
│   ├── docker-compose.yml  # Multi-instance setup
│   └── traefik.yaml        # Reverse proxy config
└── docs/                    # Documentation
    ├── adr/                # Architecture Decision Records
    ├── api/                # API documentation
    └── deployment/         # Deployment guides
```

## 🔐 Authentication & Security

### JWT Authentication Flow
1. **Login**: Username/password verification with bcrypt hashing
2. **Token Generation**: HS256 signed JWT with user ID and role
3. **Request Authorization**: Bearer token validation on protected routes
4. **Role-Based Access**: Admin vs Employee permissions

### Security Features
- **Password Hashing**: Bcrypt with salt rounds
- **Token Expiration**: Configurable JWT expiry
- **CORS Protection**: Configured for frontend domains
- **Input Validation**: Joi schemas for all API inputs
- **SQL Injection Prevention**: Sequelize parameterized queries

## 📈 Analytics & Reporting

### Key Metrics
- **Average Wait Time**: Time from ticket issue to service start
- **Average Service Time**: Time from call to completion
- **Tickets per Hour**: Throughput measurement
- **Department Performance**: Comparative analytics
- **Staff Efficiency**: Individual performance tracking

### Real-time Dashboard
- Live queue status visualization
- Performance KPIs with trend analysis
- Department-wise statistics
- Historical data with date range filtering

## 🔄 Real-time Features

### Queue Updates
- **Short Polling**: 5-second interval status checks
- **WebSocket Ready**: Socket.io integration prepared
- **Optimistic Updates**: Immediate UI feedback
- **Conflict Resolution**: Concurrent operation handling

### Live Synchronization
- **Cross-Device Updates**: Consistent state across all clients
- **TV Display Integration**: Real-time public displays
- **Mobile Notifications**: Push alerts for staff (planned)

## 🐳 Docker Deployment

### Multi-Tenant Architecture
Each client instance runs in isolated containers:
- Separate databases for data isolation
- Independent scaling per client
- Shared infrastructure components

### Scaling Strategy
- **Horizontal Scaling**: Multiple backend instances per client
- **Load Balancing**: Traefik automatic distribution
- **Database Sharding**: Future multi-database support
- **CDN Integration**: Static asset optimization

## 📚 Documentation

- **[API Reference](docs/api/)** - Complete REST API documentation
- **[Architecture Decisions](docs/adr/)** - DDD and technical decisions
- **[Deployment Guide](docs/deployment/)** - Production setup instructions
- **[Developer Guide](docs/development/)** - Contribution guidelines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Maintain test coverage >80%
- Use conventional commits
- Document architectural changes in ADR format

## 📄 License

This project is proprietary software developed by VersaLabs. All rights reserved.

## 🏢 About VersaLabs

VersaLabs is a technology company specializing in enterprise software solutions for healthcare, finance, and government sectors. AuroQueue represents our commitment to modernizing traditional queue management systems with cutting-edge web technologies.

### Contact Information
- **Website**: https://versalabs.com
- **Email**: info@versalabs.com
- **GitHub**: https://github.com/VersaLabs

### Live Demo
- **Production Instance**: https://queue.versalabs.com
- **Admin Dashboard**: https://queue.versalabs.com/admin
- **Kiosk Preview**: https://queue.versalabs.com/kiosk

---

**Built with ❤️ by VersaLabs Team** | **Enterprise-Grade Queue Management** | **Modern Web Architecture**
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
