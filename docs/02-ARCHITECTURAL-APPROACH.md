# VersaLabs Studio - Architectural Approach

## 1. Core Technical Paradigms

### Domain-Driven Design (DDD)
Every project shipped by VersaLabs must follow DDD bounded contexts.
- **Aggregates and Value Objects:** Models must have clear domain boundaries (e.g., `OrderManagement`, `ThreatIntelligence`, `Inventory`).
- **Domain Services:** Business logic must reside in domain services, decoupled from the router/controller layers.

### Schema-First Development
We eliminate type drift between frontend and backend.
- **Types Extraction:** Rely on Frappe `DocTypes` or Postgres `SQL` as the absolute source of truth.
- **Zod & TypeScript:** Enforce runtime validation via Zod and strict compilation checks in TS natively across all projects.

### Zero-Bloat Architecture
- Avoid massive UI libraries if a targeted primitive (like Radix UI) handles the accessibility just fine.
- Prioritize **Tailwind CSS v4** for ultra-efficient utility-based rendering.
- No phantom state management. We default to `Zustand` for complex client stores and `TanStack Query` for robust server-state execution.

## 2. Default Stack Configuration

### Frontend (User & Control Planes)
- **Framework:** Next.js 16 (App Router paradigm)
- **Language:** TypeScript 5+ (Strict Mode)
- **UI:** Radix Primitives + Custom Tailwind v4 styling
- **Animations:** Framer Motion (only use `spring` physics for premium interactions)

### Backend (The Intelligence Layer)
- **Monolithic / Distributed Core:** Python (Frappe/FastAPI) or Node (Hapi.js/Next.js Route Handlers)
- **Database:** PostgreSQL (with heavily utilized JSONB and RLS capabilities)
- **State/PubSub:** Redis (for real-time capabilities and aggressive query caching)
- **Hosting:** Vercel Edge (Frontend) + Self-Hosted Ubuntu VPS via Docker Compose (Backend/Infra)

## 3. AI-First Integration Rules

AI is treated as a structural domain collaborator, not an afterthought.
- **Model Context Protocol (MCP):** Build APIs supporting autonomous tool calling naturally.
- **Multi-Model Fallbacks:** Use OpenRouter to orchestrate Nemotron, GPT, and specialized MoE models concurrently. No infrastructure should lock into a single LLM vendor.
- **Isolation Forests/Classification:** Standardize backend ML pipelines leveraging fast predictive models for operational heavy lifting where generative AI is too slow.
