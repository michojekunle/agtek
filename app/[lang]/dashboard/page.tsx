import React from 'react';
import { auth } from '@/auth';
import Nav from '@/app/components/Nav';

type Props = {}

const Page = async (props: Props) => {
  const session = await auth();

  if(!session) {
    return (
      <div className='w-full '>
        
      </div>
    )
  }
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <Nav/>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  )
}

export default Page