import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../src/app/components/Footer'

describe('Footer', () => {
    it('renders copyright', () => {
      render(<Footer />)

      const paragraph = screen.getByText(/copyright/i);

      expect(paragraph).toBeInTheDocument()
    })
  })