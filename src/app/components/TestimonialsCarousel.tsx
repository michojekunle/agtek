'use client';

import Carousel from 'react-elastic-carousel';
import Card from './Card';

type Props = {}

function myArrow({ type, onClick, isEdge }) {
    return <span></span>
  }

function TestimonialsCarousel({}: Props) {
  return (
    <div className='w-full py-24'>
    <Carousel itemsToShow={1} renderArrow={myArrow} className='py-11'>
      <Card avatar='/assets/images/avatar-anisha.png' testimonial="Manage has supercharged our team's workflow" name='Anisha Li'/>
      <Card avatar='/assets/images/avatar-anisha.png' testimonial="Manage has supercharged our team's workflow" name='Anisha Li'/>
      <Card avatar='/assets/images/avatar-anisha.png' testimonial="Manage has supercharged our team's workflow" name='Anisha Li'/>
    </Carousel>
  </div>
  )
}

export default TestimonialsCarousel