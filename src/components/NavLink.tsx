import Link from 'next/link';
import { ReactElement, cloneElement } from 'react';

export type NavLinkType = {
  label: string;
  icon?: ReactElement;
  href: string;
}

interface NavLinkProps extends NavLinkType{
  
}

export function NavLink({ label, href, icon }: NavLinkProps) {
  return (
    <Link
      href={href}
      className='inline-flex flex-row gap-1.5 items-center justify-start group/item hover:text-sky-400'
      data-testid="nav-link"
    >
      { icon && cloneElement(icon, {
        className: 'text-sky-300 w-5 h-4 group-hover/item:text-sky-500 group-hover/item:scale-125 ease-in duration-150',
        "data-testid": "nav-link-icon"
      }) }
      <span className='text-sm'>{ label }</span>
    </Link>
  );
}
