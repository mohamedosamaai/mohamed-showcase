/**
 * 🧪 Mock Data Layer & Interactive Simulation State Index
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

export * from './author.mock.js'
export * from './projects.mock.js'
export * from './services.mock.js'
export * from './vitals.mock.js'

// Backward-compatible named exports
export { MOCK_AUTHOR as SHOWCASE_AUTHOR } from './author.mock.js'
export { MOCK_PROJECTS as SHOWCASE_PROJECTS } from './projects.mock.js'
export { MOCK_SERVICES as SHOWCASE_SERVICES, MOCK_SKILLS as SHOWCASE_SKILLS } from './services.mock.js'
export * from '../client/index.js'
