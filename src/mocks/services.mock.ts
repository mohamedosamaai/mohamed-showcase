/**
 * ⚡ Architectural Services & Technical Competencies Mock State
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

import { ServiceContract, SkillContract } from '../contracts/service.contract.js'

export const MOCK_SERVICES: ServiceContract[] = [
  {
    id: 1,
    slug: 'ai-systems-architecture',
    icon: 'Cpu',
    title_en: 'Production AI Systems Architecture',
    title_ar: 'هندسة معمارية أنظمة الذكاء الاصطناعي الإنتاجية',
    description_en: 'End-to-end design and deployment of fault-tolerant, scalable LLM pipelines, autonomous agent frameworks, and MCP connectors.',
    description_ar: 'تصميم وبناء مسارات نماذج الذكاء الاصطناعي التوليدي والوكلاء الذاتيين بموثوقية إنتاجية كاملة.',
    deliverables_en: [
      'MCP Server & Agent Integration Architecture',
      'High-throughput RAG & Vector Database Engineering',
      'Real-time Multimodal Streaming Pipelines'
    ],
    deliverables_ar: [
      'هندسة خوادم MCP وربط الوكلاء الذاتيين',
      'بناء قواعد بيانات المتجهات وأنظمة RAG فائقة الأداء',
      'مسارات البث المتعدد الوسائط في الوقت الفعلي'
    ],
    sort_order: 1
  },
  {
    id: 2,
    slug: 'fullstack-edge-engineering',
    icon: 'Layers',
    title_en: 'Full-Stack Edge Engineering',
    title_ar: 'هندسة وتطوير الويب فائق السرعة',
    description_en: 'Ultra-fast Next.js 16 & TypeScript architectures compiled to edge runtimes with sub-50ms TTFB worldwide.',
    description_ar: 'بناء تطبيقات ويب فائقة الأداء بـ Next.js 16 و TypeScript بزمن استجابة أقل من 50 مللي ثانية.',
    deliverables_en: [
      'Next.js 16 App Router & Turbopack Optimization',
      'Strict TypeScript Typing & Zero Technical Debt',
      'Cyber Bento & Micro-interaction UI Design Systems'
    ],
    deliverables_ar: [
      'تحسين بنية Next.js 16 App Router ومحرك Turbopack',
      'التحقق الصارم من أنماط TypeScript وتصفير الديون التقنية',
      'أنظمة تصميم واجهات Cyber Bento والتفاعلات الدقيقة'
    ],
    sort_order: 2
  },
  {
    id: 3,
    slug: 'devsecops-hardening',
    icon: 'ShieldCheck',
    title_en: 'DevSecOps & Zero-CVE Hardening',
    title_ar: 'الأمن السيبراني وتأمين خطوط الإنتاج البرمجي',
    description_en: 'Rigorous security compliance, secret scanning, Sigstore SLSA Level 3 provenance, and CodeQL static analysis.',
    description_ar: 'التأمين السيبراني الصارم، فحص الأسرار، وتوثيق سلاسل التوريد البرمجية بشهادات SLSA.',
    deliverables_en: [
      'Zero-CVE Dependency Audits & Deterministic Overrides',
      'SLSA Level 3 Cryptographic Provenance Attestations',
      'CodeQL Static Code Analysis & Multi-stage Containers'
    ],
    deliverables_ar: [
      'تصفير كافة ثغرات التبعيات بنسبة 100%',
      'توثيق حزم البرمجيات بشهادات Sigstore SLSA 3',
      'التحليل الأمني الثابت CodeQL وتأمين حاويات Docker'
    ],
    sort_order: 3
  }
]

export const MOCK_SKILLS: SkillContract[] = [
  { id: 1, category_en: 'AI & Machine Learning', category_ar: 'الذكاء الاصطناعي وتعلم الآلة', name: 'Vertex AI & Gemini API', level: 98, sort_order: 1 },
  { id: 2, category_en: 'AI & Machine Learning', category_ar: 'الذكاء الاصطناعي وتعلم الآلة', name: 'Model Context Protocol (MCP)', level: 96, sort_order: 2 },
  { id: 3, category_en: 'Frontend Engineering', category_ar: 'هندسة الواجهات الأمامية', name: 'Next.js 16 & React 19', level: 99, sort_order: 3 },
  { id: 4, category_en: 'Frontend Engineering', category_ar: 'هندسة الواجهات الأمامية', name: 'Strict TypeScript & Turbopack', level: 100, sort_order: 4 },
  { id: 5, category_en: 'DevSecOps & Cloud', category_ar: 'الأمن السحابي والعمليات', name: 'Docker & Multi-stage Builds', level: 95, sort_order: 5 },
  { id: 6, category_en: 'DevSecOps & Cloud', category_ar: 'الأمن السحابي والعمليات', name: 'CodeQL & SLSA Provenance', level: 95, sort_order: 6 }
]
