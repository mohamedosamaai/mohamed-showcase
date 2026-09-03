/**
 * 👤 Verified Author & Authority Mock State
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

import { AuthorContract } from '../contracts/author.contract.js'

export const MOCK_AUTHOR: AuthorContract = {
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
