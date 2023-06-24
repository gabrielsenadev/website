import Link from 'next/link';
import { ReactElement, cloneElement } from 'react';
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  label?: string;
  icon?: ReactElement;
  href: string;
  target?: string;
  altLabel?: string;
}

export function NavLink({ label, href, icon, altLabel, target }: NavLinkProps) {
  const pathname = usePathname();
  const isActiveLink = pathname === href;
  return (
    <Link
      href={href}
      className={`inline-flex font-bold uppercase text-1xl tracking-2x transition ease-in duration-200 flex-row gap-1.5 items-center justify-start group/item hover:text-blue ${isActiveLink && 'text-blue'}`}
      target={target}
      aria-label={altLabel}
    >
      { icon && cloneElement(icon, {
        'data-testid': "icon-link",
        className: "text-xl"
      }) }
      { label && <span>{ label }</span> }
    </Link>
  );
}
