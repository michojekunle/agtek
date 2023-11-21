import React from 'react';
import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { FaYoutube, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='px-5 xs:px-11 md:px-16 lg:px-24 xl:px-32 bg-very_dark_blue py-16 text-white'>
      <div className='w-full flex items-center'>
        <div className='md:w-1/4 flex flex-col gap-20'>
          <div>
            <Image
              src={logo}
              alt="logo"
            />
          </div>
          <div className='flex items-center gap-4 text-xl md:text-2xl'>
            <RiFacebookBoxFill />
            <div className='bg-white text-very_dark_blue rounded-full text-md md:text-lg flex items-center justify-center w-5 h-5 md:w-6 md:h-6'>
              <FaYoutube />
            </div>
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>
        <div className='flex items-center justify-between flex-1'>
          <ul className='flex items-start flex-col gap-4'>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
          <ul className='flex items-start flex-col gap-4'>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='md:w-1/4'>
          <form className=' flex items-center gap-4'>
            <input type="text" placeholder='Updates in your inbox...' className='bg-white rounded-full py-3 px-5 text-cool_gray'/>
            <button className='bg-bright_red py-3 px-5 rounded-full text-cool_gray'>Go</button>
          </form>
          <p className='text-very_light_gray text-sm md:text-md'>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer