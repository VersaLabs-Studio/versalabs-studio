# Live Addis – VersaLabs Enterprise Project

## Table of Contents
- [Project Overview](#project-overview)
- [Architecture Overview](#architecture-overview)
- [Technology Stack](#technology-stack)
- [Domain‑Driven Design (DDD) & Bounded Contexts](#domain-driven-design-ddd--bounded-contexts)
- [Architecture Decision Records (ADRs)](#architecture-decision-records-adrs)
- [Repository & Live URLs](#repository--live-urls)
- [Setup & Development](#setup--development)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Deployment](#deployment)
- [License & Confidentiality](#license--confidentiality)
- [Contact](#contact)

---

## Project Overview
**Live Addis** is a proprietary, enterprise-grade web platform deployed for VersaLabs. It aggregates real-time social media data, provides analytics dashboards, and offers a customizable UI for monitoring live events in Addis Ababa. The application follows a **Domain-Driven Design (DDD)** approach, separating business concerns into well-defined bounded contexts and employing a layered architecture (Presentation → Application → Domain → Infrastructure) for enterprise scalability.

---

## Architecture Overview
```
+-------------------+      +-------------------+      +-------------------+
|   Presentation    | ---> |   Application     | ---> |      Domain       |
|   (Next.js UI)    |      |   Services/Use‑   |      |   Entities,      |
|                   |      |   Cases           |      |   Value Objects   |
+-------------------+      +-------------------+      +-------------------+
                                 |
                                 v
                         +-------------------+
                         |   Infrastructure  |
                         |   (Repos, APIs,   |
                         |    Persistence)   |
                         +-------------------+
```

- **Presentation** – Next.js (React) with TypeScript, Tailwind CSS, and Vercel‑compatible static assets.  
- **Application** – Service layer orchestrating use‑cases, validation, and transaction boundaries.  
- **Domain** – Core business logic, pure TypeScript classes, and domain events.  
- **Infrastructure** – External adapters (REST APIs, file storage, database) isolated behind repository interfaces.

---

## Technology Stack
| Layer            | Technology / Library                              | Reasoning |
|------------------|---------------------------------------------------|-----------|
| **Frontend**     | Next.js (13+), React 18, TypeScript, Tailwind CSS | Server‑side rendering, SEO, fast dev experience |
| **State Mgmt**   | React Context + SWR                               | Simple, cache‑aware data fetching |
| **Styling**      | Tailwind CSS, PostCSS                             | Utility‑first, consistent design system |
| **Build**        | PNPM, ESLint, Prettier                            | Fast installs, code quality |
| **Backend**      | (External) – Social media APIs (Facebook, Twitter) | Data sources are third‑party |
| **Data Store**   | JSON files in `public/` (dev) → Cloud storage (prod) | Simple for prototype, replaceable |
| **CI/CD**        | GitHub Actions, Vercel Deployments                | Automated testing & deployment |
| **Testing**      | Jest, React Testing Library                       | Unit & component tests |
| **Documentation**| Markdown, ADRs (adr-tools)                       | Structured decision records |

---

## Domain‑Driven Design (DDD) & Bounded Contexts
The system is divided into the following bounded contexts, each with its own **Ubiquitous Language**:

| Bounded Context | Responsibility | Key Entities / Value Objects |
|-----------------|----------------|------------------------------|
| **SocialIngestion** | Pulls live posts from external platforms, normalises them | `SocialPost`, `PlatformSource` |
| **Analytics** | Computes metrics, trends, sentiment | `Metric`, `Trend`, `SentimentScore` |
| **UserDashboard** | Stores user‑specific widget layout and preferences | `Dashboard`, `WidgetConfig` |
| **Notification** | Sends alerts when thresholds are crossed | `AlertRule`, `NotificationChannel` |

Each context communicates via **Domain Events** (e.g., `PostIngested`, `MetricCalculated`) and **Application Services** that translate external requests into domain commands.

---

## Architecture Decision Records (ADRs)

| # | Title | Status | Summary |
|---|-------|--------|---------|
| **ADR‑001** | Use **Next.js** with **TypeScript** for the UI | ✅ Accepted | Provides SSR, static generation, and excellent developer ergonomics. |
| **ADR‑002** | Adopt **Domain‑Driven Design** with bounded contexts | ✅ Accepted | Improves maintainability and aligns code with business concepts. |
| **ADR‑003** | Store dev data in **JSON files** under `public/` | ✅ Accepted | Enables rapid iteration; production will switch to cloud storage. |
| **ADR‑004** | Use **PNPM** as the package manager | ✅ Accepted | Faster installs, deterministic lockfile, reduces disk usage. |
| **ADR‑005** | Implement **React Context + SWR** for state management | ✅ Accepted | Simple, no extra Redux boilerplate, built‑in caching. |
| **ADR‑006** | Deploy via **Vercel** with GitHub integration | ✅ Accepted | Zero‑config CI/CD, edge network, automatic preview URLs. |
| **ADR‑007** | Write **ADRs** using **adr-tools** format | ✅ Accepted | Standardised decision documentation, easy to generate. |
| **ADR‑008** | Use **Tailwind CSS** for styling | ✅ Accepted | Consistent design system, rapid UI development. |
| **ADR‑009** | Keep **API keys** out of repo, load via Vercel env vars | ✅ Accepted | Security best practice for proprietary project. |
| **ADR‑010** | Write unit tests with **Jest** and **React Testing Library** | ✅ Accepted | Guarantees component reliability and regression safety. |

*All ADR files are located in the `adr/` directory (generated but not yet committed).*

---

## Repository & Live URLs
- **GitHub Repository**: https://github.com/kidusabdula/live-addis  
  (Private, owned by VersaLabs)

- **Live Demo (Staging)**: https://live-addis.vercel.app  
  (Password‑protected preview for internal stakeholders)

- **Production URL**: *To be announced upon release* (will be hosted on VersaLabs’ corporate domain).

---

## Setup & Development
```bash
# Clone the repository (access requires VersaLabs credentials)
git clone https://github.com/kidusabdula/live-addis.git
cd live-addis

# Install dependencies using PNPM
pnpm install

# Run lint & type checks
pnpm lint
pnpm type-check

# Generate ADR scaffolding (requires adr-tools)
adr new "New decision title"
```

### Environment Variables
| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FACEBOOK_TOKEN` | Facebook Graph API token (Vercel env) |
| `NEXT_PUBLIC_TWITTER_BEARER` | Twitter API bearer token |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL for any internal services |

Create a `.env.local` file for local development (do **not** commit).

---

## Running the Application
```bash
# Development mode (hot‑reloading)
pnpm dev

# Build for production
pnpm build
pnpm start
```
Open `http://localhost:3000` in a browser.

---

## Testing
```bash
# Run all unit and component tests
pnpm test

# Watch mode
pnpm test -- --watch
```

Coverage reports are generated in `coverage/`.

---

## Deployment
The project uses **Vercel** for CI/CD:

1. Push to `main` → Vercel builds and deploys a preview.
2. Merge `main` → Production deployment (protected branch).

All secrets are managed via Vercel’s Environment Variables UI.

---

## License & Confidentiality
This repository is **proprietary** and owned by **VersaLabs**.  
All source code, documentation, and ADRs are confidential and must not be disclosed outside the organization without explicit permission.

---

## Contact
- **Project Owner**: VersaLabs Architecture Team  
- **Lead Engineer**: *[Name]* – `lead@versalabs.com`  
- **Support**: `support@versalabs.com`

--- 

*Document generated on 2026‑04‑09.*  
*All information reflects the current state of the `live-addis` codebase.*