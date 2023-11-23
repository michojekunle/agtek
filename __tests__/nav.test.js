import { render, screen } from '@testing-library/react'
import Nav from '../src/app/components/Nav';
import '@testing-library/jest-dom'

describe('Nav', () => {
  it('renders a heading', () => {
    render(<Nav />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})