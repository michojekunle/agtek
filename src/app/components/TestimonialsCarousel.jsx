'use client';

import Carousel from 'react-elastic-carousel';
import Card from './Card';

function myArrow() {
    return <span></span>
  }

function TestimonialsCarousel() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 },
      ]
  return (
    <div className='w-full py-3'>
    <Carousel
        itemsToShow={3}
        renderArrow={myArrow}
        className='py-11'
        renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className="flex gap-3 items-center">
                {pages.map(page => {
                  const isActivePage = activePage === page
                  return (
                    <div
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                      className={`${isActivePage ? 'bg-bright_red' : 'bg-transparent border-2 border-bright_red' } w-3 h-3 md:w-4 md:h-4 rounded-full cursor-grab`}
                    />
                  )
                })}
              </div>
            )
          }}
          breakPoints={breakPoints}
    >
      <Card avatar='/assets/images/avatar-anisha.png' testimonial="Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated." name='Anisha Li'/>
      <Card avatar='/assets/images/avatar-ali.png' testimonial="We have been able to cancel all other subscriptions since using Manage. There is no more cross-channel confusion and everyone is more focused." name='Ali Bravo'/>
      <Card avatar='/assets/images/avatar-richard.png' testimonial="Manage allows us to provide stucture and success. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!" name='Richard Watts'/>
      <Card avatar='/assets/images/avatar-shanai.png' testimonial="Their Software allow us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive" name='Shanai Gough'/>
    </Carousel>
  </div>
  )
}

export default TestimonialsCarousel