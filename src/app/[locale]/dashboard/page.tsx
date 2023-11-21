'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import Nav from '@/src/app/components/Nav';
import { useTranslations } from 'next-intl';
import Link from 'next/link';



type Props = {}

const Page = (props: Props) => {
  const { data: session } = useSession();
  const t = useTranslations('Index');

  if(!session) {
    return (
      <div className='w-full h-screen py-10 flex flex-col items-center justify-center'>
        <p className='text-lg text-center'>User Not Authenticated Sign In to Acees Yout Dashboard</p>
        <div className='text-md text-center mt-8'>
          <Link href='/api/auth/signin' className='rounded-full border px-6 py-2 md:py-3 md:px-9 text-very_light_gray bg-bright_red text-xs sm:text-sm md:text-md hover:opacity-75 border-none outline-none shadow-xl shadow-very_pale_red'>Sign In</Link>
        </div>
      </div>
    )
  }
  return (
    <div className='flex flex-col  w-full'>
      <Nav/>
      <div className='px-4 xs:px-11 md:px-16 lg:px-24 xl:px-32 mt-8'>
        <div className='flex items-center gap-3 justify-end'>
          <Link href="/en/dashboard" className='bg-bright_red font-medium text-white rounded-md transition border hover:border-bright_red hover:bg-transparent hover:text-bright_red w-11 h-11 flex items-center justify-center'>en</Link>
          <Link href='/fr/dashboard' className='bg-bright_red font-medium text-white rounded-md transition border hover:border-bright_red hover:bg-transparent hover:text-bright_red w-11 h-11 flex items-center justify-center'>fr</Link>
          <Link href='/es/dashboard' className='bg-bright_red font-medium text-white rounded-md transition border hover:border-bright_red hover:bg-transparent hover:text-bright_red w-11 h-11 flex items-center justify-center'>es</Link>
        </div>
        <div>
          <p className='text-2xl mt-5'>{t('intro')}</p>
          <p className='text-xl mt-4'>{t('title')}</p>
        </div>
        <pre className='bg-bright_red/10 rounded-md p-4 md:p-8 mt-4 w-full overflow-y-scroll'>
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default Page