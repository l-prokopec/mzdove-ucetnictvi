import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import type { Session, SupabaseClient, User } from '@supabase/supabase-js'

type AuthContextValue = {
  client: SupabaseClient
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<string | null>
  signUp: (email: string, password: string) => Promise<string | null>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({
  client,
  children,
}: PropsWithChildren<{ client: SupabaseClient }>) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    client.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const { data } = client.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
      setLoading(false)
    })
    return () => data.subscription.unsubscribe()
  }, [client])
  const value = useMemo<AuthContextValue>(
    () => ({
      client,
      user: session?.user ?? null,
      loading,
      signIn: async (email, password) =>
        (await client.auth.signInWithPassword({ email, password })).error
          ?.message ?? null,
      signUp: async (email, password) =>
        (await client.auth.signUp({ email, password })).error?.message ?? null,
      signOut: async () => {
        await client.auth.signOut()
      },
    }),
    [client, loading, session],
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth musí být uvnitř AuthProvider.')
  return value
}
