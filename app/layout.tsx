import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReduxProvider from '@/globalRedux/provider/ReduxProvider'
import Cart from '@/components/Cart'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className} relative`}>
        <ReduxProvider>
          <div className="min-h-full flex flex-col ">
            <Cart />
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
