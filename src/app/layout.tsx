
import Navbar from '@/Components/Navbar/Navbar'
import './globals.css'
import 'aos/dist/aos.css';
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Footer from '@/Components/Footer/Footer'
import { ReduxProvider } from './provider'
export const metadata: Metadata = {
  title: 'Machic - Electronics Store',
  description: 'Here you will get electronics and daily use products',
}

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: ['400', '700', '100', '300', '500', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className} >

          <ReduxProvider>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </ReduxProvider>
      </body>
    </html>
  )
}

