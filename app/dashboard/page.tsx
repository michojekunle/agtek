import React from 'react';
import { auth } from '@/auth';

type Props = {}

const Page = async (props: Props) => {
  const session = await auth();
  return (
    <div className='flex items-center justify-center w-full'>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  )
}

export default Page