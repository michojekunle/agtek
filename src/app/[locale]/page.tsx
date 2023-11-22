import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import illustrationIntro from '@/public/assets/images/illustration-intro.svg';
import TestimonialsCarousel from '../components/TestimonialsCarousel.jsx';

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
        <div className='flex md:flex-row flex-col gap-20 items-center md:items-start justify-between px-4 xs:px-11 md:px-16 lg:px-24 xl:px-32 py-16 w-full'>
          <div className='flex flex-col items-center md:items-start w-full max-w-xs md:max-w-lg md:w-2/4 '>
            <h2 className='text-center md:text-left leading-snug w-full text-4xl text-dark_blue font-extrabold'>{`What's different about Manage?`}</h2>
            <p className='text-center md:text-left mt-5 text-dark_grayish_blue w-full md:w-8/12 leading-relaxed'>Manage provides all the functionality your team needs without the complexity. Our software is tailor-made for modern digital product teams.</p>
          </div>
          <div className='flex flex-col gap-14 items-start md:w-2/4'>
            <div className="">
              <div className='flex items-center gap-4 bg-very_pale_red md:bg-transparent md:gap-6 rounded-full'>
                <button className='outline-none bg-bright_red py-2 text-md px-7 rounded-full text-white '>01</button>
                <p className='xs:text-md md:text-lg font-bold text-dark_blue py-2 px-4'>Track company-wide progress</p>
              </div>
              <p className='mt-3 leading-loose md:ml-24 text-dark_grayish_blue'>See how your day-to-day task fit into the wider vision. go from tracking progress at the milestone level all the way down to the to the smallest details. Never lose sight of the bigger picture again.</p>
            </div>
            <div className="">
              <div className='flex items-center gap-4 bg-very_pale_red md:bg-transparent md:gap-6 rounded-full'>
                <button className='outline-none bg-bright_red py-2 text-md px-7 rounded-full text-white '>02</button>
                <p className='xs:text-md md:text-lg font-bold text-dark_blue py-2 px-4'>Track company-wide progress</p>
              </div>
              <p className='mt-3 leading-loose md:ml-24 text-dark_grayish_blue'>See how your day-to-day task fit into the wider vision. go from tracking progress at the milestone level all the way down to the to the smallest details. Never lose sight of the bigger picture again.</p>
            </div>
            <div className="">
              <div className='flex items-center gap-4 bg-very_pale_red md:bg-transparent md:gap-6 rounded-full'>
                <button className='outline-none bg-bright_red py-2 text-md px-7 rounded-full text-white '>03</button>
                <p className='xs:text-md md:text-lg font-bold text-dark_blue py-2 px-4'>Track company-wide progress</p>
              </div>
              <p className='mt-3 leading-loose md:ml-24 text-dark_grayish_blue'>See how your day-to-day task fit into the wider vision. go from tracking progress at the milestone level all the way down to the to the smallest details. Never lose sight of the bigger picture again.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center py-16'>
          <h3 className='text-4xl text-center text-dark_blue font-extrabold '>{`What they've said`}</h3>
          <TestimonialsCarousel/>
          <Link href='/api/auth/signin' className='rounded-full border py-3 px-7 md:px-9 text-white font-medium bg-bright_red text-xs sm:text-sm md:text-md hover:opacity-75 shadow-lg shadow-bright_red/70 border-none outline-none'>Get Started</Link>
        </div>
        <div className='flex md:flex-row items-center justify-between flex-col py-20  px-4 xs:px-11 md:px-16 lg:px-24 xl:px-32 bg-bright_red gap-11'>
            <h2 className='text-3xl md:text-[40px] md:text-left text-center max-w-[520px] text-very_light_gray font-bold'>Simplify how your team works today.</h2>
            <Link href='/api/auth/signin' className='rounded-full border px-6 py-3 md:py-4 md:px-9 text-bright_red font-bold bg-white text-xs sm:text-sm md:text-md hover:opacity-90 border-none outline-none'>Get Started</Link>
        </div>
        <Footer/>
      </section>
    </main>
  )
}
