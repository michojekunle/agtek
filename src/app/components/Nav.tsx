'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';
import { IoClose, IoMenu } from "react-icons/io5";
import { useSession } from 'next-auth/react';

type Props = {}

const Nav =  (props: Props) => {
    const { data: session, status }  = useSession();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(prev => !prev);
    }

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    }

  return (
    <div className='bg-transparent px-4 xs:px-11 md:px-16 lg:px-24 xl:px-32 py-3 mt-4 md:mt-11 flex items-center justify-between w-full'>
        <Link href='/' className='flex items-center w-28 md:w-40'>
            <Image
                src={logo}
                alt='brand-logo'
                className='w-full'
            />
        </Link>
        <ul className='hidden lg:flex items-center gap-5 lg:gap-8 xl:gap-11 text-md text-very_dark_blue'>
            <li className='cursor-pointer hover:text-dark_grayish_blue'>Pricing</li>
            <li className='cursor-pointer hover:text-dark_grayish_blue'>Product</li>
            <li className='cursor-pointer hover:text-dark_grayish_blue'>About Us</li>
            <li className='cursor-pointer hover:text-dark_grayish_blue'>Careers</li>
            <li className='cursor-pointer hover:text-dark_grayish_blue'>Community</li>
        </ul>
        {!session ? (
            <Link href='/api/auth/signin' className='hidden md:block rounded-full border px-6 py-2 md:py-3 md:px-9 text-very_light_gray bg-bright_red text-xs sm:text-sm md:text-md hover:opacity-75 border-none outline-none shadow-md shadow-bright_red'>Get Started</Link>
        ) : (
            <div className='items-center gap-5 hidden md:flex'>
                <Link href='/en/dashboard'>
                    <Image
                        src={session?.user?.image!}
                        alt='user-image'
                        width={44}
                        height={44}
                        className='rounded-full'
                    />
                </Link>
                <Link href='/api/auth/signout' className='rounded-full border px-4 py-2 md:py-3 md:px-7 text-bright_red bg-transprent text-xs sm:text-sm md:text-md hover:opacity-75 border-none outline-none shadow shadow-bright_red'>Sign Out</Link>
            </div>
        )}
        <button className='block md:hidden text-xl z-20' onClick={toggleNavbar}>
            {!isNavbarOpen ? <IoMenu /> : <IoClose /> }
        </button>

        {/* Menubar */}

        {/* Mobile Navigation */}
        {isNavbarOpen && (
            <div className='fixed flex items-start justify-center md:hidden top-0 left-0 w-screen h-screen overflow-y-scroll bg-black/[0.2]'>
                <div className='absolute top-0 left-0 w-full h-full ' onClick={closeNavbar}>

                </div>
                <ul className='bg-white w-5/6  flex items-center text-center gap-9 flex-col mt-16 py-6 rounded-md shadow-md z-20 relative'>
                    <li className='cursor-pointer hover:text-dark_grayish_blue'>Pricing</li>
                    <li className='cursor-pointer hover:text-dark_grayish_blue'>Product</li>
                    <li className='cursor-pointer hover:text-dark_grayish_blue'>About Us</li>
                    <li className='cursor-pointer hover:text-dark_grayish_blue'>Careers</li>
                    <li className='cursor-pointer hover:text-dark_grayish_blue'>Community</li>
                    <li>
                        {!session ? (
                            <Link href='/api/auth/signin' className='rounded-full border px-6 py-2 md:py-3 md:px-9 text-very_light_gray bg-bright_red text-xs sm:text-sm md:text-md hover:opacity-75 border-none outline-none shadow-md shadow-bright_red'>Get Started</Link>
                        ) : (
                            <div className='flex items-center gap-5'>
                                <Link href='/en/dashboard'>
                                    <Image
                                        src={session?.user?.image!}
                                        alt='user-image'
                                        width={36}
                                        height={36}
                                        className='rounded-full'
                                    />
                                </Link>
                                <Link href='/api/auth/signout' className='rounded-full border px-4 py-2 md:py-3 md:px-7 text-bright_red bg-transprent text-xs sm:text-sm md:text-md hover:opacity-75 border-none outline-none shadow shadow-bright_red'>Sign Out</Link>
                            </div>
                        )}
                    </li>
                </ul>
        </div>
        )}
    </div>
  )
}

export default Nav;