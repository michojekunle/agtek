import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google';
import '@/src/app/[locale]/globals.css';
import Provider from '../components/Provider';
const beVietnamPro = Be_Vietnam_Pro({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manage',
  description: 'Manage bringing everyone together to build better products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.className} `}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
