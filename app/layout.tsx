
import './globals.css'
import { Inter } from 'next/font/google'
import {NavMenu} from '@/components';
import { Suspense } from 'react';
import Loading from './loading';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asad Ahmed',
  description: 'I am Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">

      <body className="w-full primary-bg">
      <Suspense fallback={<Loading />}>
        <NavMenu />
        {children}
        </Suspense>
      </body>

    </html>

  )
}
