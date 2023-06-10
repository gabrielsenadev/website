import { ReactElement } from "react"
import { FiX } from "react-icons/fi";

interface DrawerProps {
  children: ReactElement;
  isOpen: boolean;
  toggle: () => void;
}

export function Drawer({ children, isOpen, toggle }: DrawerProps) {
  return (
    <>
    {isOpen && (
      <div
        className="bg-black opacity-75 w-full h-full fixed top-0 left-0"
        data-testid="drawer-overlay"
        onClick={toggle}
      />
    )}
    <div
      className={`w-72 h-full bg-black-700 shadow-lg fixed top-0 right-0 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      data-testid="drawer-container"
    >
      <div className="p-8 flex flex-col">
        <FiX className="self-end text-3xl cursor-pointer hover:text-blue" role="button" aria-label="close drawer" onClick={toggle}/>
        {children}
      </div>
    </div>
    </>
  );
}
