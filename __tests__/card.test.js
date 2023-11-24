import { render, screen } from '@testing-library/react';
import Card from '../src/app/components/Card';

it('renders a card component', () => {
    render(<Card name="Maker" avatar="/public/assets/next.svg" testimonial='This is one big family'/>)
    const headingElement = screen.getByRole('heading', {
        name: /maker/i,
    })
    expect(headingElement).toBeInTheDocument();
})