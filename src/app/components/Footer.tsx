import React from 'react';
import Image from 'next/image';
import logo from '@/public/assets/images/footer-logo.svg';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { FaYoutube, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

type Props = {}

const Footer = (props: Props) => {
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
          <div className='flex items-center md:gap-3 md:text-2xl gap-8 text-4xl'>
            <RiFacebookBoxFill />
            <div className='bg-white text-very_dark_blue rounded-full md:text-sm text-2xl flex items-center justify-center md:w-5 md:h-5 w-8 h-8'>
              <FaYoutube />
            </div>
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>
        <div className='flex items-start justify-between flex-1 gap-24'>
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
        <div className='md:w-1/4 flex flex-col gap-20'>
          <form className=' flex items-center gap-4 w-full'>
            <input type="text" placeholder='Updates in your inbox...' className='bg-white rounded-full text-sm py-3 px-5 text-cool_gray'/>
            <button className='bg-bright_red py-3 px-8 rounded-full text-cool_gray text-sm'>Go</button>
          </form>
          <p className='absolute bottom-0 left-0 w-full text-center md:relative text-dark_grayish_blue text-sm md:text-md'>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer