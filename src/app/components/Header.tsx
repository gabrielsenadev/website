import { HighlightText } from '@/components/HighlightText';
import { Navbar } from '@/components/Navbar';
import { Avatar } from '@components/Avatar';
import { NavLinkType } from '@components/NavLink';

interface HeaderProps {
  username: string;
  title: string;
  logoSrc: string;
}

const NAVLINKS: NavLinkType[] = [
  {
    href: '/posts',
    label: 'Posts',
  },
];

export function Header({ username, title, logoSrc }: HeaderProps) {
  return (
    <header className='flex flex-row gap-2.5' data-testid="app-header">
      <Avatar
        username={username}
        logoSrc={logoSrc}
        data-testid="app-header-avatar"
      />
      <div className='flex flex-col' >
        <HighlightText as='h2' className='text-2xl font-bold text-sky-400 cursor-default' text={username} highlightClassName='hover:text-sky-200' />
        <p className='text-base  dark:text-slate-50 text-gray-900 mb-2.5'>{title}</p>
        <Navbar
          links={NAVLINKS}
        />
      </div>
    </header>
  )
}
