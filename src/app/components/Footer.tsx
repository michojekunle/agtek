'use client';

import React from 'react';
import Image from 'next/image';
import logo from '@/public/assets/images/footer-logo.svg';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { FaYoutube, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import { useFormState } from '../hooks/useFormState';

type Props = {}

const Footer = (props: Props) => {
  const { formState, formErrors, handleChange, handleSubmit } = useFormState();

  return (
    <div className='w-full px-4 xs:px-11 md:px-16 lg:px-24 xl:px-32 bg-very_dark_blue py-16 text-white'>
      <div className='w-full flex items-center flex-col-reverse md:flex-row gap-24 relative pb-16 md:pb-0'>
        <div className='md:w-1/4 flex md:items-start items-center flex-col-reverse md:flex-col gap-11 md:gap-20'>
          <div>
            <Image
              src={logo}
              alt="logo"
            />
          </div>
          <div className='flex items-center md:gap-3 md:text-2xl gap-8 text-4xl  transition'>
            <RiFacebookBoxFill className='hover:text-bright_red'/>
            <div className='bg-white text-very_dark_blue hover:text-bright_red transition rounded-full md:text-sm text-2xl flex items-center justify-center md:w-5 md:h-5 w-8 h-8'>
              <FaYoutube />
            </div>
            <FaTwitter className='hover:text-bright_red'/>
            <FaPinterest className='hover:text-bright_red' />
            <FaInstagram className='hover:text-bright_red' />
          </div>
        </div>
        <div className='flex items-start justify-between flex-1 gap-24'>
          <ul className='flex items-start flex-col gap-4'>
            <li className='hover:text-bright_red transition'>Home</li>
            <li className='hover:text-bright_red transition'>Pricing</li>
            <li className='hover:text-bright_red transition'>Products</li>
            <li className='hover:text-bright_red transition'>About Us</li>
          </ul>
          <ul className='flex items-start flex-col gap-4'>
            <li className='hover:text-bright_red transition'>Careers</li>
            <li className='hover:text-bright_red transition'>Community</li>
            <li className='hover:text-bright_red transition'>Privacy Policy</li>
          </ul>
        </div>
        <div className='md:w-1/4 flex flex-col gap-20'>
          <form className=' flex items-start gap-4 w-full' onSubmit={handleSubmit}>
            <div className='flex flex-col items-start'>
              <input
                type="text"
                placeholder='Updates in your inbox...'
                className={`bg-white rounded-full text-sm py-3 px-5  outline-none ${formErrors.email ? 'border border-bright_red text-bright_red' : 'text-dark_grayish_blue'}`}
                name='email'
                value={formState.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className='text-xs mt-1 text-bright_red italic ml-3'>{formErrors.email}</span>}
            </div>
            <button type='submit' className='bg-bright_red py-3 px-8 rounded-full text-cool_gray text-sm outline-none'>Go</button>
          </form>
          <p className='absolute bottom-0 left-0 w-full text-center md:relative text-dark_grayish_blue text-sm md:text-md'>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer