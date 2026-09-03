/**
 * 🚀 Sovereign Ecosystem Projects Mock Dataset
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

import { ProjectContract } from '../contracts/project.contract.js'

export const MOCK_PROJECTS: ProjectContract[] = [
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
    url: 'https://bagbacktech.com',
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
