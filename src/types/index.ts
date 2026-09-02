/**
 * 🏛️ Sovereign AI Architecture & Ecosystem Interface Contracts
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

export interface GeoLocation {
  region: string
  placename: string
  latitude: number
  longitude: number
}

export interface LegalEntity {
  name: string
  crNumber: string
  taxId: string
  unifiedNationalNumber: string
  jurisdiction: string
}

export interface KnowledgeGraphAuthority {
  wikidataId: string
  wikidataUrl: string
  linkedInUrl: string
  vertexAiStudioId: string
  dubaiChamberAwardId: string
  googleSkillshopId: string
  semrushAcademyId: string
}

export interface AuthorProfile {
  name: string
  title_en: string
  title_ar: string
  email: string
  website: string
  location: string
  geo: GeoLocation
  organization: LegalEntity
  authority: KnowledgeGraphAuthority
}

export interface ProjectHighlight {
  label: string
  value: string
}

export interface ProjectSection {
  title_en: string
  title_ar: string
  body_en: string
  body_ar: string
}

export type ProjectStatus = 'live' | 'client' | 'dev'

export interface ProjectContract {
  id: number
  slug: string
  status: ProjectStatus
  title_en: string
  title_ar: string
  tagline_en: string
  tagline_ar: string
  description_en: string
  description_ar: string
  tags: string[]
  stack: string[]
  url?: string
  repo?: string
  image?: string
  highlights?: ProjectHighlight[]
  sections?: ProjectSection[]
  featured: boolean
  sort_order: number
  created_at: string
}

export interface ServiceContract {
  id: number
  slug: string
  icon: string
  title_en: string
  title_ar: string
  description_en: string
  description_ar: string
  deliverables_en: string[]
  deliverables_ar: string[]
  sort_order: number
}

export interface SkillContract {
  id: number
  category_en: string
  category_ar: string
  name: string
  level: number
  sort_order: number
}

export interface SystemVitalsContract {
  ttfb: string
  cves: number
  compiledRoutes: number
  typeScriptErrors: number
  commitsStandardized: number
  uptimeSla: string
  activeEcosystemPlatforms: number
}

export interface ApiResponseContract<T> {
  success: boolean
  status: number
  data: T
  message?: string
  timestamp: string
}
