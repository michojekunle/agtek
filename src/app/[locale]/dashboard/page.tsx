'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import Nav from '@/src/app/components/Nav';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Loading from '../../components/Loading';



type Props = {}

const Page = (props: Props) => {
  const { data: session, status } = useSession();
  const t = useTranslations('Index');

  if(status === 'loading') {
    return (
      <div className='w-full h-screen py-10 flex flex-col items-center justify-center'>
        <Loading />
      </div>
    )
  }

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
        <div className='flex items-center flex-wrap-reverse gap-3 justify-between mb-5'>
          <div className=''>
            <h2 className='text-bright_red text-lg capitalize'>{session.user?.name}</h2>
            <p className='text-dark_grayish_blue text-xs md:text-sm'>{session.user?.email}</p>
          </div>
          <div className='flex items-center gap-3'>
            <Link href="/en/dashboard" className='bg-bright_red font-medium text-white rounded-md transition hover:border hover:border-bright_red hover:bg-transparent hover:text-bright_red md:w-11 md:h-11 w-8 h-8 flex items-center justify-center'>en</Link>
            <Link href='/fr/dashboard' className='bg-bright_red font-medium text-white rounded-md transition hover:border hover:border-bright_red hover:bg-transparent hover:text-bright_red md:w-11 md:h-11 w-8 h-8 flex items-center justify-center'>fr</Link>
            <Link href='/es/dashboard' className='bg-bright_red font-medium text-white rounded-md transition hover:border hover:border-bright_red hover:bg-transparent hover:text-bright_red md:w-11 md:h-11 w-8 h-8 flex items-center justify-center'>es</Link>
          </div>
        </div>
        <p className='w-full select-none py-3 px-4 bg-bright_red/5 text-bright_red/40 cursor-not-allowed rounded-md'>Your session expires {new Date(session.expires).toLocaleString()}</p>
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