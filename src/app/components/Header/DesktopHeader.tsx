import { UserTitle } from "@components/UserTitle";
import { MainLinks } from "@components/Navigation/MainLinks";
import Link from "next/link";

export function DesktopHeader() {
  return (
    <header className='flex justify-between p-6' data-testid="desktop-header">
      <Link href={'/'}>
        <UserTitle />
      </Link>
      <div className="[&>*]:mx-4 flex flex-row-reverse justify-start list-none">
        <nav className="flex justify-center list-none space-x-6">
          <MainLinks />
        </nav>
      </div>
    </header>
  )
}
