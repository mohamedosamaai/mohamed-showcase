/**
 * 🧪 Mock Data Layer & Interactive Simulation Engine
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

import {
  AuthorProfile,
  ProjectContract,
  ServiceContract,
  SkillContract,
  SystemVitalsContract,
  ApiResponseContract
} from '../types/index.js'

export * from '../types/index.js'

export const SHOWCASE_AUTHOR: AuthorProfile = {
  name: 'Mohamed Osama',
  title_en: 'Production AI Systems Architect & Senior Full-Stack Engineer',
  title_ar: 'مهندس معماري لأنظمة الذكاء الاصطناعي الإنتاجية ومطور برمجيات أول',
  email: 'im@mohamedosama.me',
  website: 'https://mohamedosama.me',
  location: 'Dubai, United Arab Emirates',
  geo: {
    region: 'AE-DU',
    placename: 'Dubai',
    latitude: 25.2048,
    longitude: 55.2708
  },
  organization: {
    name: 'Bagback Digital Solutions',
    crNumber: '218773',
    taxId: '757-139-248',
    jurisdiction: 'Dubai, UAE & Cairo, Egypt'
  },
  authority: {
    wikidataId: 'Q141252311',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q141252311',
    linkedInUrl: 'https://www.linkedin.com/in/mohamed-osama-ai/',
    vertexAiStudioId: '24009731',
    dubaiChamberAwardId: 'MeYYoRxN',
    googleSkillshopId: '192682733',
    semrushAcademyId: '807156'
  }
}

export const SHOWCASE_VITALS: SystemVitalsContract = {
  ttfb: '< 50ms',
  cves: 0,
  compiledRoutes: 99,
  typeScriptErrors: 0,
  commitsStandardized: 266,
  uptimeSla: '99.99%',
  activeEcosystemPlatforms: 7
}

export const SHOWCASE_PROJECTS: ProjectContract[] = [
  {
    id: 1,
    slug: 'resonance8',
    status: 'live',
    title_en: 'Resonance8 Audio Intelligence',
    title_ar: 'منصة Resonance8 للذكاء الاصطناعي الصوتي',
    tagline_en: 'Real-time multi-track neural audio synthesis and forensic analysis platform.',
    tagline_ar: 'منصة معالجة وتحليل الصوت العصبي متعدد المسارات في الوقت الفعلي.',
    description_en: 'Edge-native audio intelligence pipeline delivering real-time voice synthesis, acoustic separation, and neural watermark verification.',
    description_ar: 'بنية تحتية حافة لمعالجة الصوت العصبي بالذكاء الاصطناعي مع توثيق العلامات المائية الرقمية.',
    tags: ['AI Audio', 'WebAudio', 'Next.js 16', 'Rust/WASM'],
    stack: ['Next.js 16', 'TypeScript', 'Rust', 'WebAssembly', 'Tailwind CSS', 'SQLite'],
    url: 'https://resonance8.mohamedosama.me',
    repo: 'https://github.com/mohamedosamaai/resonance8',
    highlights: [
      { label: 'Latency', value: '< 18ms' },
      { label: 'Audio Engine', value: 'Rust WASM' },
      { label: 'Bandwidth Saved', value: '68%' }
    ],
    featured: true,
    sort_order: 1,
    created_at: '2026-01-15T00:00:00Z'
  },
  {
    id: 2,
    slug: 'bagbacktech',
    status: 'live',
    title_en: 'Bagback Digital Solutions Portal',
    title_ar: 'بوابة حلول باج باك الرقمية',
    tagline_en: 'Enterprise digital engineering and bespoke software development headquarters.',
    tagline_ar: 'المقر الرقمي للحلول البرمجية المؤسسية والأنظمة المخصصة.',
    description_en: 'Flagship corporate portal for Bagback Digital Solutions featuring dynamic service configuration and automated client onboarding.',
    description_ar: 'البوابة المؤسسية الرسمية لشركة باج باك للحلول الرقمية مع إعدادات آلية للخدمات.',
    tags: ['Enterprise', 'Architecture', 'TypeScript', 'Turbopack'],
    stack: ['Next.js 16', 'React 19', 'Tailwind CSS', 'SQLite', 'Docker'],
    url: 'https://bagback.tech',
    highlights: [
      { label: 'Client Retention', value: '98.4%' },
      { label: 'Security Score', value: '100/100' }
    ],
    featured: true,
    sort_order: 2,
    created_at: '2026-02-01T00:00:00Z'
  },
  {
    id: 3,
    slug: 'elitk',
    status: 'live',
    title_en: 'Elitk Arabic Intelligence Ecosystem',
    title_ar: 'منظومة إليتك للذكاء الرقمي العربي',
    tagline_en: 'Sovereign Arabic AI knowledge graphs, secure webmail, and digital services.',
    tagline_ar: 'منظومة سيادية عربية للذكاء الاصطناعي، البريد المشفر، والخدمات الرقمية.',
    description_en: 'Full-stack sovereign digital intelligence hub powering specialized Arabic NLP, secure mail server, and encrypted document storage.',
    description_ar: 'مركز رقمي سيادي متكامل لمعالجة اللغة العربية وتقديم البريد الإلكتروني المشفر.',
    tags: ['Arabic NLP', 'Webmail', 'DevSecOps', 'Docker Compose'],
    stack: ['Next.js 16', 'Docker Compose', 'Postfix', 'Dovecot', 'SQLite', 'TypeScript'],
    url: 'https://elitk.com',
    highlights: [
      { label: 'Arabic Accuracy', value: '99.2%' },
      { label: 'Sub-domain Isolation', value: 'Strict' }
    ],
    featured: true,
    sort_order: 3,
    created_at: '2026-02-10T00:00:00Z'
  },
  {
    id: 4,
    slug: 'ai-workspace',
    status: 'live',
    title_en: 'Autonomous AI Agent Studio',
    title_ar: 'استوديو وكلاء الذكاء الاصطناعي الذاتيين',
    tagline_en: 'Multi-agent orchestration platform integrating Model Context Protocol (MCP).',
    tagline_ar: 'منصة تنسيق وإدارة وكلاء الذكاء الاصطناعي المتعددة عبر بروتوكول MCP.',
    description_en: 'Interactive workspace allowing enterprise teams to orchestrate autonomous agents, execute tool calls, and run distributed workflows.',
    description_ar: 'مساحة عمل متطورة لتنسيق الوكلاء الذاتيين واستدعاء الأدوات البرمجية المتسلسلة.',
    tags: ['AI Agents', 'MCP Protocol', 'LLM Chains', 'WebSockets'],
    stack: ['TypeScript', 'Vertex AI', 'Node.js', 'Next.js 16', 'Tailwind CSS'],
    url: 'https://mohamedosama.me/projects/ai-workspace',
    highlights: [
      { label: 'Agent Throughput', value: '450 req/s' },
      { label: 'MCP Connectors', value: '18 Active' }
    ],
    featured: true,
    sort_order: 4,
    created_at: '2026-02-20T00:00:00Z'
  }
]

export const SHOWCASE_SERVICES: ServiceContract[] = [
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

export const SHOWCASE_SKILLS: SkillContract[] = [
  { id: 1, category_en: 'AI & Machine Learning', category_ar: 'الذكاء الاصطناعي وتعلم الآلة', name: 'Vertex AI & Gemini API', level: 98, sort_order: 1 },
  { id: 2, category_en: 'AI & Machine Learning', category_ar: 'الذكاء الاصطناعي وتعلم الآلة', name: 'Model Context Protocol (MCP)', level: 96, sort_order: 2 },
  { id: 3, category_en: 'Frontend Engineering', category_ar: 'هندسة الواجهات الأمامية', name: 'Next.js 16 & React 19', level: 99, sort_order: 3 },
  { id: 4, category_en: 'Frontend Engineering', category_ar: 'هندسة الواجهات الأمامية', name: 'Strict TypeScript & Turbopack', level: 100, sort_order: 4 },
  { id: 5, category_en: 'DevSecOps & Cloud', category_ar: 'الأمن السحابي والعمليات', name: 'Docker & Multi-stage Builds', level: 95, sort_order: 5 },
  { id: 6, category_en: 'DevSecOps & Cloud', category_ar: 'الأمن السحابي والعمليات', name: 'CodeQL & SLSA Provenance', level: 95, sort_order: 6 }
]

export async function fetchShowcaseProjects(): Promise<ApiResponseContract<ProjectContract[]>> {
  return {
    success: true,
    status: 200,
    data: SHOWCASE_PROJECTS,
    timestamp: new Date().toISOString()
  }
}

export async function fetchShowcaseAuthor(): Promise<ApiResponseContract<AuthorProfile>> {
  return {
    success: true,
    status: 200,
    data: SHOWCASE_AUTHOR,
    timestamp: new Date().toISOString()
  }
}

export async function fetchShowcaseVitals(): Promise<ApiResponseContract<SystemVitalsContract>> {
  return {
    success: true,
    status: 200,
    data: SHOWCASE_VITALS,
    timestamp: new Date().toISOString()
  }
}
