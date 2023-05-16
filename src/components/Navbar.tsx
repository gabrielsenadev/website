import { NavLink, NavLinkType } from './NavLink';

interface NavbarProps  extends React.ComponentPropsWithoutRef<'nav'> {
  links: NavLinkType[];
  className?: string;
}

export function Navbar({ links, className, ...rest }: NavbarProps) {
  return (
    <nav className={`flex items-center justify-start gap-2 ${className}`} data-testid="navbar" { ...rest }>
      {links.map((link, index) => {
        return <NavLink {...link} key={`${link.label}-${index}`} />
      })}
    </nav>
  )
}
