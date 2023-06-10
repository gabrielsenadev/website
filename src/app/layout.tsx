import { Analytics } from '@vercel/analytics/react';
import { Source_Code_Pro } from 'next/font/google';

import './globals.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata = {
  title: 'Gabriel Sena | Software Engineer',
  description: 'My portfolio and testing place, where I will make some great things.',
}

export default function RootLayout({
  children,
}: {  
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${sourceCodePro.variable}`}>
      <body
        className={`bg-black text-white font-mono flex flex-col h-screen`}
      >
        <Header />
        {children}
        <Footer className="mt-auto p-2 sm:p-6" />
        <Analytics />
      </body>
    </html>
  )
}
