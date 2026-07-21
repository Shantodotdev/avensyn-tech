import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ProjectShowcase } from './project-showcase'

describe('ProjectShowcase', () => {
  it('renders the projects as a layered desktop stack', () => {
    render(<ProjectShowcase />)

    const stack = screen.getByRole('region', { name: /selected work projects/i })
    const cards = within(stack).getAllByRole('article')

    expect(cards).toHaveLength(10)
    expect(cards[0]).toHaveClass('md:sticky')
    expect(cards[0]).toHaveStyle({ top: '128px' })
    expect(cards[9]).toHaveStyle({ top: '128px' })
  })
})
