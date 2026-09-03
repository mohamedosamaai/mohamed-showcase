/**
 * ⚡ Architectural Services & Technical Competencies Contracts
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

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
