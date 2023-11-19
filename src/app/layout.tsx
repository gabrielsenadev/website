import { Analytics } from '@vercel/analytics/react';
import { Source_Code_Pro } from 'next/font/google';

import './globals.css';
import { Header } from './components/Header/Header';
import { Metadata } from 'next';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gabrielsena.dev'),
  title: 'Gabriel Sena | Software Engineer',
  description: "Hello, I'm Gabriel Sena, a software engineer.",
  applicationName: "Portfolio and Experimental Place",
  authors: { name: 'Gabriel Sena', url: 'https://github.com/gabrielsenadev' },
  generator: 'Next.js',
  keywords: ['gabriel sena', 'software engineer', 'portfolio'],
  themeColor: '#000000',
  creator: 'Gabriel Sena',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://gabrielsena.dev',
    title: 'Gabriel Sena | Software Engineer',
    description: "Hello, I'm Gabriel Sena, a software engineer.",
    siteName: 'Portfolio and Experimental Place',
    images: [{
      url: 'https://res.cloudinary.com/gabes/image/upload/v1686425829/og.jpg',
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://gabrielsena.dev',
    creator: 'Gabriel Sena',
    images: 'https://res.cloudinary.com/gabes/image/upload/v1686425829/og.jpg',
    description: "Hello, I'm Gabriel Sena, a software engineer.",
    title: 'Gabriel Sena | Software Engineer',
  }
}

export default function RootLayout({
  children,
}: {  
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${sourceCodePro.variable}`}>
      <body
        className={`bg-white dark:bg-black dark:text-white text-black font-mono flex flex-col h-screen`}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
