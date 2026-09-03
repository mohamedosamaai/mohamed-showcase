/**
 * 🏛️ Master Type Definitions & Contracts Export
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

export * from '../contracts/index.js'

// Backward-compatible type aliases
export type { AuthorContract as AuthorProfile } from '../contracts/author.contract.js'
export type { CorporateEntity as LegalEntity } from '../contracts/author.contract.js'
export type { AuthorityCredentials as KnowledgeGraphAuthority } from '../contracts/author.contract.js'
