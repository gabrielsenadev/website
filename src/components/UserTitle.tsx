import Image from "next/image";

interface UserTitleProps {
  className?: string;
}

export function UserTitle({ className }: UserTitleProps) {
  return (
    <div className={className}>
      <div className="flex flex-row items-center">
        <div className="mr-3">
          <Image alt='gabriel sena github profile image' src={'https://github.com/gabrielsenadev.png'} width={50}
            height={50} className={`rounded-full animate-grayscaling grayscale hover:grayscale-0 transition ease-in duration-200`} />
        </div>
        <div>
          <p className="text-xl sm:text-2xl uppercase font-bold tracking-2x">Gabriel Sena</p>
          <p className="text-lg sm:text-1xl lowercase tracking-2x">Software Engineer</p>
        </div>
      </div>

    </div>
  )
}