import { UserTitle } from "@components/UserTitle";
import { MainLinks } from "@components/Navigation/MainLinks";
import { ExternalLinks } from "@components/Navigation/ExternalLinks";

export function DesktopHeader() {
  return (
    <header className='flex justify-between p-6' data-testid="desktop-header">
      <UserTitle className="basis-[33.33%]" />
      <nav className="flex justify-center list-none space-x-6 uppercase basis-[33.33%]">
        <MainLinks />
      </nav>
      <div className="[&>*]:mx-4 flex flex-row-reverse justify-start list-none basis-[33.33%]">
        <ExternalLinks />
      </div>
    </header>
  )
}
