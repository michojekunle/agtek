import React from 'react'
import Image from 'next/image';

type Props = {
    avatar: string
    name: string
    testimonial: string
}

function Card({ name, testimonial, avatar }: Props) {
  return (
    <div className='bg-white rounded-md shadow-lg border pt-32 p-11 relative my-11 w-full max-w-xl'>
        <div className='absolute -top-7 left-2/4 -translate-x-2/4'>
            <Image
                src={avatar}
                alt="avatar"
                width={500}
                height={500}
                className='rounded-full w-16 h-16'
            />
        </div>
        <h4 className='text-dark_blue font-extrabold ms:text-lg text-xl'>{name}</h4>
        <p className='leading-relaxed md:text-md text-sm text-dark_grayish_blue'>{testimonial}</p>
        <div className=''>

        </div>
    </div>
  )
}

export default Card