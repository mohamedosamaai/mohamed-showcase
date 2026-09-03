/**
 * 🏛️ Author & Entity Interface Contracts
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

export interface CorporateEntity {
  name: string
  crNumber: string
  taxId: string
  jurisdiction: string
}

export interface AuthorityCredentials {
  wikidataId: string
  wikidataUrl: string
  linkedInUrl: string
  vertexAiStudioId: string
  dubaiChamberAwardId: string
  googleSkillshopId: string
  semrushAcademyId: string
}

export interface AuthorContract {
  name: string
  title_en: string
  title_ar: string
  email: string
  website: string
  location: string
  geo: GeoLocation
  organization: CorporateEntity
  authority: AuthorityCredentials
}
