/**
 * 🚀 Ecosystem Project Interface Contracts
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

export type ProjectStatus = 'live' | 'client' | 'dev'

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
