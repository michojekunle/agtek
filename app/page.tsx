'use client';

import Image from 'next/image';
import { signIn, useSession, signOut } from 'next-auth/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <button className='bg-gray-200 border py-2 px-5' onClick={() => signIn()}>Sign In</button>
    </main>
  )
}
