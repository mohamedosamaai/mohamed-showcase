# 🏗️ System Architecture & C4 Model

The Mohamed Osama platform is architected as a high-performance sovereign cloud application combining Next.js 16 App Router, React 19 Server Components, SQLite3 Write-Ahead Logging (WAL) persistence, and an autonomous AI agent pipeline.

---

## 1. System Topology & Context

```mermaid
graph TD
    Client["Client Browser (Global)"] --> |HTTPS / HTTP3 (Port 443)| Caddy["Caddy Reverse Proxy"]
    Caddy --> |Internal TCP (Port 3000)| App["Next.js 16 Standalone Container"]
    
    subgraph "Application Runtime (Node.js 22 LTS)"
        App --> Middleware["next-intl Middleware (/en, /ar)"]
        Middleware --> ServerComp["React 19 Server Components"]
        ServerComp --> APIRoutes["/api/chat · /api/leads · /api/admin/*"]
    end
    
    APIRoutes --> DB[("SQLite3 Database (WAL Mode)")]
    
    subgraph "AI & Agentic Pipelines"
        AIBot["Autonomous AI Bot (ai_blog_bot)"] --> |Gemini 2.5 API| GoogleAI["Google Gemini API"]
        AIBot --> |Sync Articles & Content| DB
        AIBot --> |Telemetry Alert| Telegram["Telegram Alerts Gateway"]
    end
```

---

## 2. Architectural Invariants

1. **Edge-Optimized Standalone Runner:** The Next.js 16 build is configured with `output: 'standalone'`, producing an Alpine Docker image under 180MB.
2. **Deterministic Internationalization:** All URLs are scoped to `/[locale]/` (`en` or `ar`), with real-time RTL/LTR switching and complete metadata symmetry.
3. **Database Write-Ahead Logging (WAL):** SQLite3 operates in WAL mode with `PRAGMA synchronous = NORMAL`, achieving sub-millisecond query execution.
