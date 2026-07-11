import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ScrollToTopButton } from './ScrollToTopButton'

const setScrollY = (value: number) => {
  Object.defineProperty(window, 'scrollY', { value, configurable: true })
  fireEvent.scroll(window)
}

describe('globální tlačítko nahoru', () => {
  it('se zobrazí až po překročení prahu a plynule posune stránku nahoru', async () => {
    const scrollTo = vi
      .spyOn(window, 'scrollTo')
      .mockImplementation(() => undefined)
    setScrollY(0)
    render(<ScrollToTopButton />)
    expect(
      screen.queryByRole('button', { name: 'Přejít na začátek stránky' }),
    ).not.toBeInTheDocument()

    setScrollY(401)
    const button = screen.getByRole('button', {
      name: 'Přejít na začátek stránky',
    })
    await userEvent.click(button)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })

    setScrollY(20)
    expect(button).not.toBeInTheDocument()
    scrollTo.mockRestore()
  })
})
