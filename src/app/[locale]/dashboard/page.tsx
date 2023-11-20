import React from 'react';
import { auth } from '@/auth';
import Nav from '@/src/app/components/Nav';
import { getTranslations } from 'next-intl/server';



type Props = {}

const Page = async (props: Props) => {
  const session = await auth();
  const t = await getTranslations('Index');

  if(!session) {
    setTimeout(() => window.location.replace('/api/auth/signin'), 3000);

    return (
      <div className='w-full'>
        <p className='text-lg text-center mt-5'>User Not Authenticated Sign In</p>
        <p className='text-md text-center mt-8'>Redirecting to Sign In...</p>
      </div>
    )
  }
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <Nav/>
      <div className='flex items-center justify-end'>
        <button className='bg-'>en</button>
      </div>
      <div>
        <p className='text-3xl'>{t('title')}</p>
      </div>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  )
}

export default Page