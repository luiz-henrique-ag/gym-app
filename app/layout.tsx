import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '@radix-ui/themes/styles.css';
import { Sidebar } from '@/components/layout/sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gym App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="icon.svg" sizes="any" />
      <body className={inter.className}>
        <div className="flex min-h-screen h-screen min-w-full fixed">
          <Sidebar />
          <div className="relative py-10 w-full lg:px-[150px] px-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
