import { UserTitle } from "@components/UserTitle";
import { MainLinks } from "@components/Navigation/MainLinks";
import { ExternalLinks } from "@components/Navigation/ExternalLinks";

export function DesktopHeader() {
  return (
    <header className='flex justify-between p-6' data-testid="desktop-header">
      <UserTitle />
      <div className="[&>*]:mx-4 flex flex-row-reverse justify-start list-none">
        <nav className="flex justify-center list-none space-x-6 uppercase">
          <MainLinks />
          <ExternalLinks />
        </nav>
      </div>
    </header>
  )
}
