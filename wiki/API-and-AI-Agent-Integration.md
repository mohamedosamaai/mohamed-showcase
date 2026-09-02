# 🤖 API & AI Agent Integration

This document specifies the integration mechanisms for Google Gemini 2.5, Model Context Protocol (MCP), and real-time client communication.

---

## 1. AI Chatbot Engine (`/api/chat`)

The interactive AI companion is grounded in system context and powered by Google Gemini 2.5 Flash:
- **System Prompt:** Injects Mohamed Osama's architectural principles, bilingual proficiency, and project portfolio.
- **Latency Optimization:** Streaming response chunking over HTTP/2 & HTTP/3.
- **Lead Capture:** Automatic parsing and escalation of user inquiries into structured lead records.

---

## 2. Autonomous Daily Blog Bot (`ai_blog_bot`)

The bot operates autonomously via GitHub Actions and scheduled VPS cron:
1. **Topic Selection:** Rotates across AI Engineering, MCP, Next.js 16, and Sovereign Cloud.
2. **Schema Invariant:** Generates valid bilingual JSON articles with synchronized Schema.org JSON-LD FAQ blocks.
3. **Asset Generation:** Generates 16:9 optimized WebP banners.
4. **IndexNow & Sitemap Notification:** Pings search engines (Bing, Yandex, Google) upon new publication.
