# JARVIS Core v1.0

**Enterprise Autonomous Software Engineering Platform** — An integrated system that orchestrates development workflows, automates code deployment pipelines, and scales for distributed enterprise operations.

## 🎯 Vision

JARVIS is a self-hosted autonomous software engineering workflow system built on:
- **OpenClaw** — Self-hosted AI gateway
- **OpenRouter** — Unified LLM API access (free SOTA models)
- **Individual MCPs** — Modular integrations (GitHub, Vercel, Notion, Gmail, etc.)
- **Docker** — Containerized, portable, scalable

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    JARVIS Core                          │
├─────────────────────────────────────────────────────────┤
│  Chat Interface (Telegram / WhatsApp / Web)             │
├─────────────────────────────────────────────────────────┤
│  OpenClaw Gateway (Model Router + Agent Orchestrator)   │
├─────────────────────────────────────────────────────────┤
│  Model Layer (via OpenRouter)                           │
│  ├── Nemotron-3-Super:free (Planning/Audit)             │
│  ├── MiniMax-M2.5:free (Heavy SWE/Office)               │
│  └── GLM-5-Turbo (Fallback/Fast Execution)             │
├─────────────────────────────────────────────────────────┤
│  MCP Servers (Individual Integrations)                  │
│  ├── GitHub MCP                                         │
│  ├── Vercel MCP                                         │
│  ├── Notion MCP                                         │
│  ├── Gmail/Google MCP                                   │
│  └── VS Code MCP                                        │
├─────────────────────────────────────────────────────────┤
│  Infrastructure (Hostinger KVM-4 VPS)                   │
│  └── Docker + Docker Compose                            │
└─────────────────────────────────────────────────────────┘
```

## 📁 Repository Structure

```
jarvis-core/
├── docs/                    # Master documentation (source of truth)
│   ├── MASTER-PLAN.md       # Project roadmap, versions, integrations
│   ├── ARCHITECTURE.md      # System design & technical decisions
│   └── CHANGELOG.md         # Version history
├── config/                  # Configuration files
│   ├── models.yaml          # Model routing configuration
│   └── mcp-servers/         # MCP server configurations
├── scripts/                 # Automation scripts
│   ├── docker-start.sh      # Start OpenClaw services
│   ├── docker-stop.sh       # Stop OpenClaw services
│   ├── docker-health.sh     # Health check
│   └── deploy.sh            # Full deployment
├── mcp/                     # MCP server implementations
├── chatbot/                 # Chatbot central (future)
├── docker-compose.yml       # Main Docker Compose
└── .env.example             # Environment template
```

## 🚀 Quick Start

### Prerequisites
- Ubuntu 22.04+ VPS (Hostinger KVM-4 recommended)
- Docker & Docker Compose
- OpenRouter API key
- Telegram Bot token

### Deploy

```bash
# Clone this repo
git clone https://github.com/kidusabdula/jarvis-core.git
cd jarvis-core

# Start services
./scripts/docker-start.sh

# Check health
./scripts/docker-health.sh
```

## 🤖 Model Routing

| Role | Model | Use Case |
|------|-------|----------|
| **Orchestrator** | Nemotron-3-Super:free | Planning, audit, master docs, scope adherence |
| **Implementation** | Nemotron-3-Super (or MiMo) | Architecture, production engineering |
| **Heavy Lifting** | MiniMax-M2.5:free | SWE tasks, office automation, tool-heavy steps |
| **Fast Execution** | GLM-5-Turbo | Long-chain tool use, persistent tasks |

## 🔌 MCP Integrations

- **GitHub** — Repository management, PRs, issues
- **Vercel** — Deployment, project management
- **Notion** — Documentation, knowledge base
- **Gmail/Google** — Email, calendar, drive
- **VS Code** — Workspace integration
- **Browser** — Web automation

## 📚 Documentation

- [Master Plan](docs/MASTER-PLAN.md) — Source of truth for everything
- [Architecture](docs/ARCHITECTURE.md) — Technical design decisions
- [Changelog](docs/CHANGELOG.md) — Version history

## 🛡️ Safety

- All services run in Docker containers
- Configs are version-controlled
- Easy rollback via Git
- VPS snapshots before major changes

## 📜 License

Private — Kidus Abdula © 2026

---

**Status:** Phase 2 — Building core integrations
**Next:** MCP servers + daily workflow automation
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
