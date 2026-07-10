import { z } from 'zod'

const envSchema = z.object({
  VITE_SUPABASE_URL: z.url('VITE_SUPABASE_URL musí být platná URL.'),
  VITE_SUPABASE_PUBLISHABLE_KEY: z
    .string()
    .min(1, 'VITE_SUPABASE_PUBLISHABLE_KEY nesmí být prázdný.'),
  VITE_ALLOW_SIGN_UP: z.enum(['true', 'false']).default('true'),
})

export type AppConfig = {
  supabaseUrl: string
  supabaseKey: string
  allowSignUp: boolean
}
export type ConfigResult =
  { ok: true; config: AppConfig } | { ok: false; missing: string[] }

export function parseAppConfig(
  values: Record<string, string | undefined>,
): ConfigResult {
  const result = envSchema.safeParse(values)
  if (!result.success) {
    return {
      ok: false,
      missing: result.error.issues.map((issue) => String(issue.path[0])),
    }
  }
  return {
    ok: true,
    config: {
      supabaseUrl: result.data.VITE_SUPABASE_URL,
      supabaseKey: result.data.VITE_SUPABASE_PUBLISHABLE_KEY,
      allowSignUp: result.data.VITE_ALLOW_SIGN_UP === 'true',
    },
  }
}

export const appConfig = parseAppConfig(import.meta.env)
