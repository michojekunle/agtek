'use client';

import Carousel from 'react-elastic-carousel';
import Card from './Card';

type Props = {}

function myArrow({ type, onClick, isEdge }) {
    return
  }

function TestimonialsCarousel({}: Props) {
  return (
    <div className='w-full:'>
    <Carousel itemsToShow={1} renderArrow={myArrow}>
      <Card avatar='/assets/images/avatar-anisha.png' testimonial="Manage has supercharged our team's workflow" name='Anisha Li'/>
    </Carousel>
  </div>
  )
}

export default TestimonialsCarousel