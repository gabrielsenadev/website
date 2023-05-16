import { Analytics } from '@vercel/analytics/react';
import { Roboto_Slab } from 'next/font/google';

import './globals.css';
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata = {
  title: 'Gabriel Sena | Software Engineer',
  description: 'In this space, I will share my experiments and discoveries, developing skills and experimenting with new ideas while enjoying the process.',
}

export default function RootLayout({
  children,
}: {  
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${robotoSlab.variable}`}>
      <body
        className={`bg-gray-900 text-slate-50 bg-dark box-border flex flex-col items-center justify-center h-screen p-2`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
