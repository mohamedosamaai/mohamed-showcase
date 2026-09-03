import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import {
  MOCK_AUTHOR,
  MOCK_PROJECTS,
  MOCK_SERVICES,
  MOCK_SKILLS,
  MOCK_SYSTEM_VITALS,
  fetchAuthorProfile,
  fetchEcosystemProjects,
  fetchArchitecturalServices,
  fetchCompetencies,
  fetchSystemVitals
} from '../index.js'

describe('🏛️ Mohamed Osama Showcase — Architecture Contracts Suite', () => {
  test('Author profile adheres strictly to verified knowledge graph contracts', () => {
    assert.equal(MOCK_AUTHOR.name, 'Mohamed Osama')
    assert.equal(MOCK_AUTHOR.email, 'im@mohamedosama.me')
    assert.equal(MOCK_AUTHOR.website, 'https://mohamedosama.me')
    assert.equal(MOCK_AUTHOR.location, 'Dubai, United Arab Emirates')
    assert.equal(MOCK_AUTHOR.geo.region, 'AE-DU')
    assert.equal(MOCK_AUTHOR.geo.latitude, 25.2048)
    assert.equal(MOCK_AUTHOR.geo.longitude, 55.2708)
    assert.equal(MOCK_AUTHOR.organization.name, 'Bagback Digital Solutions')
    assert.equal(MOCK_AUTHOR.organization.crNumber, '218773')
    assert.equal(MOCK_AUTHOR.organization.taxId, '757-139-248')
    assert.equal(MOCK_AUTHOR.authority.wikidataId, 'Q141252311')
    assert.equal(MOCK_AUTHOR.authority.vertexAiStudioId, '24009731')
    assert.equal(MOCK_AUTHOR.authority.dubaiChamberAwardId, 'MeYYoRxN')
    assert.equal(MOCK_AUTHOR.authority.googleSkillshopId, '192682733')
    assert.equal(MOCK_AUTHOR.authority.semrushAcademyId, '807156')
  })

  test('System operational vitals match enterprise zero-CVE invariants', () => {
    assert.equal(MOCK_SYSTEM_VITALS.ttfb, '< 50ms')
    assert.equal(MOCK_SYSTEM_VITALS.cves, 0)
    assert.equal(MOCK_SYSTEM_VITALS.compiledRoutes, 99)
    assert.equal(MOCK_SYSTEM_VITALS.typeScriptErrors, 0)
    assert.equal(MOCK_SYSTEM_VITALS.commitsStandardized, 266)
    assert.equal(MOCK_SYSTEM_VITALS.uptimeSla, '99.99%')
    assert.equal(MOCK_SYSTEM_VITALS.activeEcosystemPlatforms, 7)
  })

  test('Ecosystem project contracts contain valid schemas and non-empty stacks', () => {
    assert.ok(MOCK_PROJECTS.length >= 4)
    const slugs = new Set<string>()
    for (const project of MOCK_PROJECTS) {
      assert.ok(project.id > 0)
      assert.ok(project.slug.length > 0)
      assert.ok(!slugs.has(project.slug), `Duplicate project slug: ${project.slug}`)
      slugs.add(project.slug)
      assert.ok(['live', 'client', 'dev'].includes(project.status))
      assert.ok(Array.isArray(project.tags) && project.tags.length > 0)
      assert.ok(Array.isArray(project.stack) && project.stack.length > 0)
      assert.ok(Array.isArray(project.highlights) && project.highlights.length > 0)
      assert.ok(project.created_at.length > 0)
    }
  })

  test('Services and competencies contain bilingual deliverables and valid proficiency ranges', () => {
    assert.ok(MOCK_SERVICES.length >= 3)
    for (const service of MOCK_SERVICES) {
      assert.ok(service.id > 0)
      assert.ok(service.deliverables_en.length > 0)
      assert.ok(service.deliverables_ar.length > 0)
    }

    assert.ok(MOCK_SKILLS.length >= 6)
    for (const skill of MOCK_SKILLS) {
      assert.ok(skill.level >= 1 && skill.level <= 100)
      assert.ok(skill.name.length > 0)
    }
  })

  test('Simulated API client helper envelope produces valid HTTP 200 payload envelopes', async () => {
    const authorRes = await fetchAuthorProfile()
    assert.equal(authorRes.status, 200)
    assert.equal(authorRes.success, true)
    assert.equal(authorRes.data.name, 'Mohamed Osama')
    assert.ok(authorRes.timestamp.length > 0)

    const projectsRes = await fetchEcosystemProjects()
    assert.equal(projectsRes.status, 200)
    assert.equal(projectsRes.success, true)
    assert.equal(projectsRes.data.length, MOCK_PROJECTS.length)

    const servicesRes = await fetchArchitecturalServices()
    assert.equal(servicesRes.status, 200)
    assert.equal(servicesRes.success, true)
    assert.equal(servicesRes.data.length, MOCK_SERVICES.length)

    const skillsRes = await fetchCompetencies()
    assert.equal(skillsRes.status, 200)
    assert.equal(skillsRes.success, true)
    assert.equal(skillsRes.data.length, MOCK_SKILLS.length)

    const vitalsRes = await fetchSystemVitals()
    assert.equal(vitalsRes.status, 200)
    assert.equal(vitalsRes.success, true)
    assert.equal(vitalsRes.data.cves, 0)
  })
})
