import React from 'react'
import Image from 'next/image';

type Props = {
    avatar: string
    name: string
    testimonial: string
}

function Card({ name, testimonial, avatar }: Props) {
  return (
    <div className='bg-very_light_gray rounded shadow pt-16 p-5 md:p-11 relative my-11 w-full max-w-xl flex items-center flex-col mx-4 md:mx-6 text-center'>
        <div className='absolute -top-10 left-2/4 -translate-x-2/4'>
            <Image
                src={avatar}
                alt="avatar"
                width={500}
                height={500}
                className='rounded-full w-20 h-20'
            />
        </div>
        <h4 className='text-dark_blue font-extrabold text-md md:text-lg'>{name}</h4>
        <p className='leading-loose mt-4 md:text-md text-sm text-dark_grayish_blue'>{testimonial}</p>
    </div>
  )
}

export default Card