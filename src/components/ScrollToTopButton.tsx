import { useEffect, useState } from 'react'

const SCROLL_THRESHOLD = 400

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(
    () => window.scrollY > SCROLL_THRESHOLD,
  )

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="scroll-to-top"
      aria-label="Přejít na začátek stránky"
      title="Přejít na začátek stránky"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
        <path
          d="m5 15 7-7 7 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
