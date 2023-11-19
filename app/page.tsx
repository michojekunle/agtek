'use client';

import Image from 'next/image';
import { signIn, useSession, signOut } from 'next-auth/react';
import Provider from './components/Provider';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Provider session={session}>
        
      </Provider>
      <button className='bg-gray-200 border py-2 px-5' onClick={() => signIn()}>Sign In</button>
    </main>
  )
}
