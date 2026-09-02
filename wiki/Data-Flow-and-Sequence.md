# 🔄 Data Flow & Request Lifecycle

This document outlines the synchronous and asynchronous data pipelines within the platform.

---

## 1. Request Lifecycle & Rendering Pipeline

```mermaid
sequenceDiagram
    autonumber
    actor User as Global User
    participant Proxy as Caddy Edge Proxy
    participant Next as Next.js 16 App Router
    participant SQLite as SQLite3 (WAL Mode)
    
    User->>Proxy: GET https://mohamedosama.me/ar/blog
    Proxy->>Next: Forward HTTP/3 Request (locale: ar)
    Next->>SQLite: SELECT * FROM posts WHERE published = 1 ORDER BY created_at DESC
    SQLite-->>Next: Return 100+ Published Articles
    Next-->>Proxy: Stream Compressed React 19 HTML + Schema.org JSON-LD
    Proxy-->>User: 200 OK (Sub-50ms TTFB)
```

---

## 2. Autonomous Daily AI Blog Publishing Engine

```mermaid
sequenceDiagram
    autonumber
    participant Cron as GitHub Actions / Cron Daemon
    participant Bot as ai_blog_bot Engine
    participant Gemini as Gemini 2.5 API
    participant Disk as Local Markdown / JSON Store
    participant DB as SQLite3 Database
    participant TG as Telegram Channel

    Cron->>Bot: Trigger Daily Generation Run
    Bot->>Gemini: Request Bilingual Tech Article (JSON Schema)
    Gemini-->>Bot: Stream Article (EN/AR Titles, Content, FAQs, JSON-LD)
    Bot->>Disk: Persist to content/blog/{slug}.json & public/blog_covers/
    Bot->>DB: INSERT INTO posts (slug, title_en, title_ar, content_en, content_ar, published)
    Bot->>TG: Dispatch Publication Confirmation
```
