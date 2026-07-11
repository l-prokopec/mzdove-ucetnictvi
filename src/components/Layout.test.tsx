import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { Layout } from './Layout'

vi.mock('../features/auth/AuthProvider', () => ({
  useAuth: () => ({
    user: { email: 'student@example.cz' },
    signOut: vi.fn(),
  }),
}))

describe('společný layout', () => {
  it('obsahuje globální tlačítko nahoru a neobsahuje Simulaci', () => {
    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true })
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<div>Obsah stránky</div>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('button', { name: 'Přejít na začátek stránky' }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Simulace' })).toBeNull()
    expect(screen.getByText('Obsah stránky')).toBeInTheDocument()
  })
})
