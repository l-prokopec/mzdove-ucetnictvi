import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContentBlock } from './LessonPage'

describe('obsah lekce', () => {
  it('vykreslí praktický příklad s modelovým postupem', () => {
    render(
      <ContentBlock
        block={{
          type: 'example',
          title: 'Praktická situace',
          situation: 'Přišel nový podklad.',
          solution: 'Nejdříve ověřím jeho úplnost.',
        }}
      />,
    )
    expect(screen.getByText('Praktická situace')).toBeInTheDocument()
    expect(
      screen.getByText('Nejdříve ověřím jeho úplnost.'),
    ).toBeInTheDocument()
  })
})
