import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, useLocation } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { RoutesWithAuth } from './App'

vi.mock('../features/auth/AuthProvider', () => ({
  useAuth: () => ({
    user: { id: 'test-user', email: 'student@example.cz' },
    loading: false,
    client: {},
    signOut: vi.fn(),
  }),
}))
vi.mock('../features/progress/useProgress', () => ({
  useProgress: () => ({ data: [], isSuccess: true }),
  useSaveProgress: () => ({ mutate: vi.fn(), mutateAsync: vi.fn() }),
}))

function LocationProbe() {
  return <output aria-label="Aktuální cesta">{useLocation().pathname}</output>
}

describe('routing po odstranění Simulace', () => {
  it('původní URL bezpečně přesměruje přes obecný fallback', async () => {
    render(
      <MemoryRouter initialEntries={['/simulation']}>
        <RoutesWithAuth allowSignUp={false} />
        <LocationProbe />
      </MemoryRouter>,
    )

    await waitFor(() =>
      expect(screen.getByLabelText('Aktuální cesta')).toHaveTextContent('/'),
    )
    expect(screen.queryByText('Javorová dílna s.r.o.')).not.toBeInTheDocument()
  })
})
