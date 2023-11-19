import Image from "next/image";

interface UserTitleProps {
  className?: string;
}

export function UserTitle({ className }: UserTitleProps) {
  return (
    <div className={className}>
      <div className="flex flex-row items-center">
        <div className="mr-3">
          <Image
            alt="gabriel sena github profile image"
            src={'https://github.com/gabrielsenadev.png'}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <p className="text-2xl font-bold">Gabriel Sena</p>
      </div>

    </div>
  )
}