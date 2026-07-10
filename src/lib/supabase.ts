import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import type { AppConfig } from './env'

let client: SupabaseClient | undefined

export const getSupabase = (config: AppConfig) => {
  client ??= createClient(config.supabaseUrl, config.supabaseKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })
  return client
}
