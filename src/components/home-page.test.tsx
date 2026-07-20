import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HomePage } from './home-page'

describe('HomePage', () => {
  it('presents Avensyn as a clear business technology partner', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /digital systems that help businesses move forward/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('link', { name: /discuss your project/i }).length,
    ).toBeGreaterThan(0)
    expect(screen.getByText(/websites that build trust/i)).toBeInTheDocument()
    expect(screen.getByText(/software that removes busywork/i)).toBeInTheDocument()
  })

  it('does not use the prohibited bold or uppercase utilities', () => {
    const { container } = render(<HomePage />)

    expect(container.innerHTML).not.toMatch(/font-bold|uppercase/)
  })
})
