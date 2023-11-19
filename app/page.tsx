import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen gap-5 items-start p-24">
      <Link href='/api/auth/signin' className='bg-gray-200 border py-2 px-5'>Sign In</Link>
      <Link href='/api/auth/signout' className='bg-gray-200 border py-2 px-5'>Sign Out</Link>
    </main>
  )
}
