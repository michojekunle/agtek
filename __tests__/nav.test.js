import { render, screen } from '@testing-library/react'
import Nav from '../src/app/components/Nav';
import '@testing-library/jest-dom'

describe('Nav', () => {
  it('renders a listitem', () => {
    render(<Nav />)

    const listitem = screen.getByRole('listitem');

    expect(listitem).toBeInTheDocument()
  })
})