import { Analytics } from '@vercel/analytics/react';
import { Source_Code_Pro } from 'next/font/google';

import './globals.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Metadata } from 'next';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gabriel Sena | Software Engineer',
  description: "Welcome to my portfolio and testing place! I'm Gabriel Sena, a Software Engineer. Explore a collection of projects and experiments crafted by me, showcasing my skills and expertise in software engineering.",
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
    description: "Welcome to my portfolio and testing place! I'm Gabriel Sena, a Software Engineer. Explore a collection of projects and experiments crafted by me, showcasing my skills and expertise in software engineering.",
    siteName: 'Portfolio and Experimental Place',
    images: [{
      url: 'https://res.cloudinary.com/gabes/image/upload/v1686425532/og_oqdawj.jpg',
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://gabrielsena.dev',
    creator: 'Gabriel Sena',
    images: 'https://res.cloudinary.com/gabes/image/upload/v1686425532/og_oqdawj.jpg',
    description: "Welcome to my portfolio and testing place! I'm Gabriel Sena, a Software Engineer. Explore a collection of projects and experiments crafted by me, showcasing my skills and expertise in software engineering.",
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
