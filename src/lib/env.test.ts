import { describe, expect, it } from 'vitest'
import { parseAppConfig } from './env'

describe('konfigurace prostředí', () => {
  it('vrátí srozumitelný seznam chybějících proměnných', () => {
    const result = parseAppConfig({})
    expect(result.ok).toBe(false)
    if (!result.ok)
      expect(result.missing).toEqual(
        expect.arrayContaining([
          'VITE_SUPABASE_URL',
          'VITE_SUPABASE_PUBLISHABLE_KEY',
        ]),
      )
  })

  it('převede přepínač registrace', () => {
    const result = parseAppConfig({
      VITE_SUPABASE_URL: 'https://example.supabase.co',
      VITE_SUPABASE_PUBLISHABLE_KEY: 'public-key',
      VITE_ALLOW_SIGN_UP: 'false',
    })
    expect(result.ok && result.config.allowSignUp).toBe(false)
  })
})
