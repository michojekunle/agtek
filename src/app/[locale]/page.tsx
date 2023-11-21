import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import illustrationIntro from '@/public/assets/images/illustration-intro.svg';

export default function Home() {
  return (
    <main className="w-full relative overflow-hidden">
      <div className='hero-bg' />
      <section className='w-full'>
        <Nav/>
        <div className='flex flex-col-reverse md:flex-row flex-wrap px-4 xs:px-11 md:px-16 lg:px-24 xl:px-32 mt-8 md:mt-16 gap-11 md:gap-7 py-11 '>
          <div className='md:w-2/4 flex flex-col items-center md:items-start'>
            <h1 className='text-dark_blue text-center md:text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-normal font-bold md:w-4/5'>Bring Everyone together to build better products</h1>
            <p className='text-dark_grayish_blue my-7 md:my-9 text-center md:text-left w-4/5 leading-relaxed'>
              Manage makes it simple for software teams to plan day to day taskswhile keeping the larger team goals in view.
            </p>
            <Link href='/api/auth/signin' className='rounded-full border px-7 py-3 md:px-9 text-very_light_gray bg-bright_red text-sm md:text-md hover:opacity-75 border-none outline-none shadow-xl shadow-very_pale_red'>Get Started</Link>
          </div>
          <div className='flex-1 flex items-center justify-center md:justify-end'>
            <Image
              src={illustrationIntro}
              alt='illustration intro'
              className='w-full max-w-md'
            />
          </div>
        </div>
        <div className=''>
          <div className=''>

          </div>
        </div>
        <div className='flex md:flex-row flex-col py-20  px-4 xs:px-11 md:px-16 lg:px-24 xl:px-32'>
          <h2 className=''>Simplify how your team works today.</h2>
          <button className='rounded-full border px-6 py-2 md:py-3 md:px-9 text-bright_red bg-white text-xs sm:text-sm md:text-md hover:opacity-75 border-none outline-none '>Get Started</button>
        </div>
        <Footer/>
      </section>
    </main>
  )
}
