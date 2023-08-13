import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Drawer } from "@components/Drawer";
import { UserTitle } from "@components/UserTitle";
import { MainLinks } from "@components/Navigation/MainLinks";
import { ExternalLinks } from "@components/Navigation/ExternalLinks";
import Link from "next/link";

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className='flex justify-between items-center p-2 sm:p-6' data-testid="mobile-header">
      <Link href={'/'}>
        <UserTitle />
      </Link>
      <FaBars className="text-3xl cursor-pointer hover:text-blue" role="button" aria-label="open drawer" onClick={toggleMenu} />
      <Drawer toggle={toggleMenu} isOpen={isMenuOpen}>
        <div>
          <nav className="flex justify-between flex-col list-none space-y-1 uppercase">
            <MainLinks />
          </nav>
          <div className="[&>*]:text-3xl flex justify-start list-none space-x-6 my-10">
            <ExternalLinks />
          </div>
        </div>
      </Drawer>
    </header>
  )
}
