import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import {
  SHOWCASE_AUTHOR,
  SHOWCASE_VITALS,
  SHOWCASE_PROJECTS,
  SHOWCASE_SERVICES,
  SHOWCASE_SKILLS,
  fetchShowcaseProjects,
  fetchShowcaseAuthor,
  fetchShowcaseVitals
} from '../mocks/index.js'

describe('🏛️ Mohamed Osama Showcase — Mock Layer Tests', () => {
  test('Author profile adheres to knowledge graph standards', () => {
    assert.equal(SHOWCASE_AUTHOR.name, 'Mohamed Osama')
    assert.equal(SHOWCASE_AUTHOR.email, 'im@mohamedosama.me')
    assert.equal(SHOWCASE_AUTHOR.website, 'https://mohamedosama.me')
    assert.equal(SHOWCASE_AUTHOR.geo.region, 'AE-DU')
    assert.equal(SHOWCASE_AUTHOR.geo.latitude, 25.2048)
    assert.equal(SHOWCASE_AUTHOR.geo.longitude, 55.2708)
    assert.equal(SHOWCASE_AUTHOR.organization.crNumber, '218773')
    assert.equal(SHOWCASE_AUTHOR.organization.taxId, '757-139-248')
    assert.equal(SHOWCASE_AUTHOR.authority.wikidataId, 'Q141252311')
    assert.equal(SHOWCASE_AUTHOR.authority.vertexAiStudioId, '24009731')
    assert.equal(SHOWCASE_AUTHOR.authority.dubaiChamberAwardId, 'MeYYoRxN')
  })

  test('System vitals match production engineering invariants', () => {
    assert.equal(SHOWCASE_VITALS.ttfb, '< 50ms')
    assert.equal(SHOWCASE_VITALS.cves, 0)
    assert.equal(SHOWCASE_VITALS.compiledRoutes, 99)
    assert.equal(SHOWCASE_VITALS.typeScriptErrors, 0)
    assert.equal(SHOWCASE_VITALS.commitsStandardized, 266)
    assert.equal(SHOWCASE_VITALS.activeEcosystemPlatforms, 7)
  })

  test('Projects contain valid schemas, tags, and highlights', () => {
    assert.ok(SHOWCASE_PROJECTS.length >= 4)
    const slugs = new Set()
    for (const project of SHOWCASE_PROJECTS) {
      assert.ok(project.id > 0)
      assert.ok(project.slug.length > 0)
      assert.ok(!slugs.has(project.slug), `Duplicate slug: ${project.slug}`)
      slugs.add(project.slug)
      assert.ok(['live', 'client', 'dev'].includes(project.status))
      assert.ok(Array.isArray(project.tags))
      assert.ok(Array.isArray(project.stack))
      assert.ok(Array.isArray(project.highlights))
    }
  })

  test('Services and skills contain correct categories and score ranges', () => {
    assert.ok(SHOWCASE_SERVICES.length >= 3)
    for (const service of SHOWCASE_SERVICES) {
      assert.ok(service.deliverables_en.length > 0)
      assert.ok(service.deliverables_ar.length > 0)
    }

    assert.ok(SHOWCASE_SKILLS.length >= 6)
    for (const skill of SHOWCASE_SKILLS) {
      assert.ok(skill.level >= 1 && skill.level <= 100)
    }
  })

  test('Async API simulation helpers return valid 200 responses', async () => {
    const projectsRes = await fetchShowcaseProjects()
    assert.equal(projectsRes.status, 200)
    assert.equal(projectsRes.success, true)
    assert.equal(projectsRes.data.length, SHOWCASE_PROJECTS.length)

    const authorRes = await fetchShowcaseAuthor()
    assert.equal(authorRes.status, 200)
    assert.equal(authorRes.success, true)
    assert.equal(authorRes.data.name, 'Mohamed Osama')

    const vitalsRes = await fetchShowcaseVitals()
    assert.equal(vitalsRes.status, 200)
    assert.equal(vitalsRes.success, true)
    assert.equal(vitalsRes.data.cves, 0)
  })
})
