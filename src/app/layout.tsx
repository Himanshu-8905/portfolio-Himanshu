import type { Metadata } from 'next'
import { Overpass } from 'next/font/google'
import './globals.css'

import { ToastProvider } from '@/providers/toast-provider'

const font = Overpass({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Himanshu Kumawat',
    default: 'Himanshu Kumawat',
  },
  description: 'An aspiring Software Engineer from India .'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}
