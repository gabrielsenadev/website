interface UserTitleProps {
  className?: string;
}

export function UserTitle({ className }: UserTitleProps) {
  return (
    <div className={className}>
      <p className="text-xl sm:text-2xl uppercase font-bold tracking-[0.29em]">Gabriel Sena</p>
      <p className="text-lg sm:text-1xl lowercase tracking-[0.145em]">Software Engineer</p>
    </div>
  )
}