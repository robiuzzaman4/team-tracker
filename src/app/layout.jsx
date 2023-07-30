import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import 'remixicon/fonts/remixicon.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Team Tracker App',
  description: 'Team Tracker App Made By Next.js And MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-50 text-neutral-900 min-h-screen`}>
        <Navbar />
        <div className='py-10'>
          {children}
        </div>
      </body>
    </html>
  )
}
