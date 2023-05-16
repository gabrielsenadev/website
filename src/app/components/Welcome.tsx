import { HighlightText } from '@/components/HighlightText';
import { NavLinkType } from '@/components/NavLink';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const NAVLINKS: NavLinkType[] = [
  {
    href: 'https://github.com/gabrielsenadev',
    label: 'Github',
    icon: <AiOutlineGithub />
  },
  {
    href: 'https://www.linkedin.com/in/gabrielsenadev',
    label: 'LinkedIn',
    icon: <AiFillLinkedin />
  }
]

export function Welcome() {
  return (
    <main data-testid="welcome">
      <HighlightText as='h1' className='text-6.5xl font-bold text-sky-500 highlight-text cursor-pointer mt-5 mb-5' text='Hi! Welcome to my place! 👋' highlightClassName='hover:text-sky-100'/>
      <p className='max-w-prose'>In this space, I will share my experiments and discoveries, developing skills and experimenting with new ideas while enjoying the process.</p>
      <p>If you would like to talk to me, please send me an email!</p>
      <Navbar links={NAVLINKS} className='my-4'/>
      <Link className='text-sky-400 hover:text-sky-100' href='mailto:hello@gabrielsena.dev'>
        hello@gabrielsena.dev
      </Link>
    </main>
  )
}
