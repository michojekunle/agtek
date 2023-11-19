import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className='bg-white px-7 py-3 flex items-center justify-between'>
        <div className=''>
            <Image
                src={logo}
                alt='brand-logo'
            />
        </div>
        <ul className='flex items-center gap-7'>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
        </ul>
        <Link href='/api/auth/signin' className='bg-gray-200 border py-2 px-5'>Get Started</Link>
    </div>
  )
}

export default Nav;