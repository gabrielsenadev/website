import { Analytics } from '@vercel/analytics/react';
import { Roboto_Slab } from 'next/font/google';

import './globals.css';
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata = {
  title: 'Gabriel Sena',
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: {  
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${robotoSlab.variable}`}>
      <body
        className={`
        bg-gray-900
        dark:bg-slate-100
        text-gray-900 
        dark:text-slate-50
        bg-light
        dark:bg-dark`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
