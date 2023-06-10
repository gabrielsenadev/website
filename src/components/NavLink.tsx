import Link from 'next/link';
import { ReactElement, cloneElement } from 'react';
import { usePathname } from 'next/navigation'

export type NavLinkType = {
  label?: string;
  icon?: ReactElement;
  href: string;
  target?: string;
}

interface NavLinkProps extends NavLinkType{
  
}

export function NavLink({ label, href, icon, target }: NavLinkProps) {
  const pathname = usePathname();
  const isActiveLink = pathname === href;
  return (
    <Link
      href={href}
      className={`inline-flex font-bold uppercase text-1xl tracking-2x transition ease-in duration-200 flex-row gap-1.5 items-center justify-start group/item hover:text-blue ${isActiveLink && 'text-blue'}`}
      target={target}
    >
      { icon && cloneElement(icon, {
        'data-testid': "icon-link"
      }) }
      { label && <span>{ label }</span> }
    </Link>
  );
}
