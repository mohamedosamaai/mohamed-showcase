/**
 * 🌐 Simulated Architecture Client & Telemetry Helpers
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

import {
  AuthorContract,
  ProjectContract,
  ServiceContract,
  SkillContract,
  SystemVitalsContract,
  ApiResponseContract
} from '../contracts/index.js'
import {
  MOCK_AUTHOR,
  MOCK_PROJECTS,
  MOCK_SERVICES,
  MOCK_SKILLS,
  MOCK_SYSTEM_VITALS
} from '../mocks/index.js'

/**
 * Creates a deterministic standardized API response envelope.
 */
export function createResponse<T>(data: T, status = 200, message?: string): ApiResponseContract<T> {
  return {
    success: status >= 200 && status < 300,
    status,
    data,
    message,
    timestamp: new Date().toISOString()
  }
}

/**
 * Simulates fetching verified author and knowledge graph authority profile.
 */
export async function fetchAuthorProfile(): Promise<ApiResponseContract<AuthorContract>> {
  return createResponse(MOCK_AUTHOR)
}

/**
 * Simulates fetching active production ecosystem projects.
 */
export async function fetchEcosystemProjects(): Promise<ApiResponseContract<ProjectContract[]>> {
  return createResponse(MOCK_PROJECTS)
}

/**
 * Simulates fetching architectural services and deliverables.
 */
export async function fetchArchitecturalServices(): Promise<ApiResponseContract<ServiceContract[]>> {
  return createResponse(MOCK_SERVICES)
}

/**
 * Simulates fetching technical competencies and domain proficiencies.
 */
export async function fetchCompetencies(): Promise<ApiResponseContract<SkillContract[]>> {
  return createResponse(MOCK_SKILLS)
}

/**
 * Simulates fetching live system telemetry and operational vitals.
 */
export async function fetchSystemVitals(): Promise<ApiResponseContract<SystemVitalsContract>> {
  return createResponse(MOCK_SYSTEM_VITALS)
}

// Backward-compatible method aliases
export const fetchShowcaseAuthor = fetchAuthorProfile
export const fetchShowcaseProjects = fetchEcosystemProjects
export const fetchShowcaseVitals = fetchSystemVitals
