import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { isLessonSection } from '../lib/lesson-navigation'

export function ScrollRestoration() {
  const location = useLocation()

  useEffect(() => {
    const section = new URLSearchParams(location.search).get('section')
    if (!isLessonSection(section)) window.scrollTo({ top: 0 })
  }, [location.pathname, location.search])

  return null
}
