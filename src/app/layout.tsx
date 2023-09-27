import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar';
import { SideBar } from '@/components/SideBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next photo gallery app',
  description: 'Created by Isfhan Ahmed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>

        {/* Navbar start */}
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <NavBar className="mx-6" />
          </div>
        </div>

        {/* SideBar start */}
        <div className='flex'>
          <SideBar />

          <div>

            {children}
          </div>
        </div>


      </body>
    </html>
  )
}
