import type { ProviderProcessExit } from './managed-provider-process'

/** How a provider process ended, e.g. `(signal SIGTERM)` or `(code 1)`; empty when nothing was observed. */
export function providerExitStatusText(
  exit: Pick<ProviderProcessExit, 'code' | 'signal'> | null | undefined
): string {
  if (exit?.signal !== null && exit?.signal !== undefined) {
    return `(signal ${exit.signal})`
  }
  return exit?.code !== null && exit?.code !== undefined ? `(code ${exit.code})` : ''
}
