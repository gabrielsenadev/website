interface UserTitleProps {
  className?: string;
}

export function UserTitle({ className }: UserTitleProps) {
  return (
    <div className={className}>
      <p className="text-xl sm:text-2xl uppercase font-bold tracking-2x">Gabriel Sena</p>
      <p className="text-lg sm:text-1xl lowercase tracking-1x">Software Engineer</p>
    </div>
  )
}