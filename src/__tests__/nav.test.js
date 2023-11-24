import { render, screen } from '@testing-library/react'
import Nav from '../app/components/Nav';
import '@testing-library/jest-dom'
jest.mock('next-auth/react');

describe('Nav', () => {
  it('renders a listitem', () => {
    render(<Nav />)
    const listitem = screen.getByRole('listitem');
    expect(listitem).toBeInTheDocument()
  })
})