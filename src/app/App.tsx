import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ConfigPage } from './ConfigPage'
import { appConfig } from '../lib/env'
import { getSupabase } from '../lib/supabase'
import { AuthProvider, useAuth } from '../features/auth/AuthProvider'
import { LoginPage } from '../features/auth/LoginPage'
import { Layout } from '../components/Layout'
import {
  DashboardPage,
  CoursePage,
  ModulePage,
  ReviewPage,
  ChecklistPage,
  StatisticsPage,
  SimulationPage,
  SettingsPage,
} from '../features/pages/Pages'
import { LessonPage } from '../features/lessons/LessonPage'
import { ScrollRestoration } from '../components/ScrollRestoration'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: true } },
})

function RoutesWithAuth({ allowSignUp }: { allowSignUp: boolean }) {
  const { user, loading } = useAuth()
  if (loading)
    return (
      <div className="center-screen" role="status">
        Obnovuji přihlášení…
      </div>
    )
  if (!user)
    return (
      <Routes>
        <Route
          path="/login"
          element={<LoginPage allowSignUp={allowSignUp} />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    )
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="course" element={<CoursePage />} />
        <Route path="course/module/:moduleId" element={<ModulePage />} />
        <Route path="course/lesson/:lessonId" element={<LessonPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="checklist" element={<ChecklistPage />} />
        <Route path="simulation" element={<SimulationPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export function App() {
  if (!appConfig.ok) return <ConfigPage missing={appConfig.missing} />
  const client = getSupabase(appConfig.config)
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider client={client}>
        <HashRouter>
          <ScrollRestoration />
          <RoutesWithAuth allowSignUp={appConfig.config.allowSignUp} />
        </HashRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}
