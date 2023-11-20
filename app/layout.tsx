import type { Metadata } from 'next'
import { Neucha, Be_Vietnam_Pro } from 'next/font/google'
import '@/app/[lang]/globals.css';
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
      <body className={`${beVietnamPro.className} `}>{children}</body>
    </html>
  )
}
