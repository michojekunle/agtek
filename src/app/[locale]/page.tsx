import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import illustrationIntro from '@/public/assets/images/illustration-intro.svg';
import Carousel from 'react-elastic-carousel';
import ReactElasticCarousel from 'react-elastic-carousel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

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
            <Link href='/api/auth/signin' className='rounded-full border px-7 py-3 md:px-9 text-very_light_gray bg-bright_red text-sm md:text-md hover:opacity-75 border-none outline-none shadow-lg shadow-bright_red/70'>Get Started</Link>
          </div>
          <div className='flex-1 flex items-center justify-center md:justify-end'>
            <Image
              src={illustrationIntro}
              alt='illustration intro'
              className='w-full max-w-md'
            />
          </div>
        </div>
        <div className='flex flex-col items-center py-16'>
          <h3 className='text-3xl md:text-4xl text-dark_blue font-extrabold '>{`What they've said`}</h3>
          <TestimonialsCarousel/>
          <Link href='/api/auth/signin' className='rounded-full border py-3 px-7 md:px-9 text-white font-medium bg-bright_red text-xs sm:text-sm md:text-md hover:opacity-75 shadow-lg shadow-bright_red/70 border-none outline-none'>Get Started</Link>
        </div>
        <div className='flex md:flex-row items-center justify-between flex-col py-20  px-4 xs:px-11 md:px-16 lg:px-24 xl:px-32 bg-bright_red gap-11'>
            <h2 className='text-[40px] md:text-left text-center max-w-[520px] text-very_light_gray font-bold'>Simplify how your team works today.</h2>
            <Link href='/api/auth/signin' className='rounded-full border px-6 py-3 md:py-4 md:px-9 text-bright_red font-bold bg-white text-xs sm:text-sm md:text-md hover:opacity-90 border-none outline-none'>Get Started</Link>
        </div>
        <Footer/>
      </section>
    </main>
  )
}
