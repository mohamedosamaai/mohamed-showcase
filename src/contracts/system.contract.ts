/**
 * 📊 System Telemetry & Generic API Response Contracts
 * @package @mohamedosamaai/mohamed-showcase
 * @author Mohamed Osama <im@mohamedosama.me>
 * @license MIT
 */

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
