import { HighlightText } from '@/components/HighlightText';
import { NavLinkType } from '@/components/NavLink';
import { Navbar } from '@/components/Navbar';
import { WELCOME_FULL } from '@/consts';
import Link from 'next/link';
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const NAVLINKS: NavLinkType[] = [
  {
    href: 'https://github.com/gabrielsenadev',
    label: 'Github',
    icon: <AiOutlineGithub />
  },
  {
    href: 'https://www.linkedin.com/in/gabrielsenadev',
    label: 'LinkedIn',
    icon: <FaLinkedinIn />
  }
]

export function Welcome() {
  return (
    <main data-testid="welcome">
      <HighlightText as='h1' className='text-6.5xl font-bold text-sky-500 cursor-pointer mt-5 mb-1' text='Hi! Welcome to my space! 👋' highlightClassName='hover:text-sky-100'/>
      <p className='max-w-prose'>{WELCOME_FULL}</p>
      <Navbar links={NAVLINKS} className='my-4'/>
      <Link className='text-sky-40 underline underline-offset-4' href='mailto:hello@gabrielsena.dev'>
        <HighlightText as='span' text='Get in touch: hello@gabrielsena.dev' highlightClassName='hover:text-sky-100' className='font-bold text-sky-500 cursor-pointer'/>
      </Link>
    </main>
  )
}
