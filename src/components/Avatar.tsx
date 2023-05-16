import Image from 'next/image';

interface AvatarProps {
  logoSrc: string;
  username: string;
  className?: string;
}

export function Avatar({ logoSrc, username, ...rest }: AvatarProps) {
  return (
    <Image
      src={logoSrc}
      width={100}
      height={100}
      alt={username}
      className={`rounded-full border-4 border-solid border-slate-50 hover:border-sky-400 ease-in duration-150 ${rest.className}`}
    />
  );
}
