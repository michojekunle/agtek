import { render, screen } from '@testing-library/react';
import Card from '../app/components/Card';

it('renders a title element', () => {
    render(<Card name="Maker" avatar="/public/assets/next.svg" testimonial='This is one big family'/>)
    const headingElement = screen.getByRole('heading', {
        name: /maker/i,
    })
    expect(headingElement).toBeInTheDocument();
})

it('renders an avatar element', () => {
    render(<Card name="Maker" avatar="/public/assets/next.svg" testimonial='This is one big family'/>)
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
})