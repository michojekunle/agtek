import React from 'react'
import Image from 'next/image';

type Props = {
    avatar: string
    name: string
    testimonial: string
}

function Card({ name, testimonial, avatar }: Props) {
  return (
    <div className=''>
        <div className=''>
            <Image
                src={avatar}
                alt="avatar"
                className='rounded-full w-44 h-44'
            />
        </div>
        <h4 className='text-dark_blue font-extrabold ms:text-lg text-xl'>{name}</h4>
        <p className='leading-relaxed md:text-md text-sm text-dark_grayish_blue'>{testimonial}</p>
        <div>

        </div>

    </div>
  )
}

export default Card