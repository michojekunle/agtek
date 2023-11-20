'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';

type Props = {}

const Nav = (props: Props) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    
    const toggleNavbar = () => {
        setIsNavbarOpen(prev => !prev);
    }

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    }

  return (
    <div className='bg-transparent px-5 xs:px-11 md:px-16 lg:px-24 xl:px-32 py-3 mt-4 md:mt-11 flex items-center justify-between w-full'>
        <div className='flex items-center w-28 md:w-40'>
            <Image
                src={logo}
                alt='brand-logo'
                className='w-full'
            />
        </div>
        <ul className='hidden lg:flex items-center gap-5 lg:gap-8 xl:gap-11 text-md text-very_dark_blue'>
            <li className='cursor-pointer hover:text-dark_grayish_blue'>Pricing</li>
            <li className='cursor-pointer hover:text-dark_grayish_blue'>Product</li>
            <li className='cursor-pointer hover:text-dark_grayish_blue'>About Us</li>
            <li className='cursor-pointer hover:text-dark_grayish_blue'>Careers</li>
            <li className='cursor-pointer hover:text-dark_grayish_blue'>Community</li>
        </ul>
        <Link href='/api/auth/signin' className='hidden md:block rounded-full border px-6 py-2 md:py-3 md:px-9 text-very_light_gray bg-bright_red text-xs sm:text-sm md:text-md hover:opacity-75 border-none outline-none shadow-xl shadow-very_pale_red'>Get Started</Link>

        {/* Menubar */}
        
        {/* Mobile Navigation */}
        <div className='fixed md:hidden top-0 left-0 w-screen h-screen overflow-y-scroll'>
            <ul className=''>
                <li className='cursor-pointer hover:text-dark_grayish_blue'>Pricing</li>
                <li className='cursor-pointer hover:text-dark_grayish_blue'>Product</li>
                <li className='cursor-pointer hover:text-dark_grayish_blue'>About Us</li>
                <li className='cursor-pointer hover:text-dark_grayish_blue'>Careers</li>
                <li className='cursor-pointer hover:text-dark_grayish_blue'>Community</li>
            </ul>
            <Link href='/api/auth/signin' className='rounded-full border px-6 py-2 md:py-3 md:px-9 text-very_light_gray bg-bright_red text-xs sm:text-sm md:text-md hover:opacity-75 border-none outline-none shadow-xl shadow-very_pale_red'>Get Started</Link>
        </div>
    </div>
  )
}

export default Nav;