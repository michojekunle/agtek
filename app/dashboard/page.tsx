import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

type Props = {}

const Page = (props: Props) => {
  const { data: session } = useSession();
  if(!session) {
    Router.
  }
  return (
    <div className=''>
      Page
    </div>
  )
}

export default Page