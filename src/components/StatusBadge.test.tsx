import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { StatusBadge } from './StatusBadge'

describe('stavové labely', () => {
  it.each([
    ['planned', 'Připravujeme'],
    ['available', 'Dostupné'],
    ['in_progress', 'Rozpracováno'],
    ['completed', 'Dokončeno'],
  ] as const)('vykreslí stav %s s textem %s', (status, label) => {
    render(<StatusBadge status={status} />)
    expect(screen.getByText(new RegExp(label))).toHaveClass(`status--${status}`)
  })
})
