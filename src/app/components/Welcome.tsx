import Link from 'next/link';

interface WelcomeProps {
  showAboutButton: boolean;
}

export function Welcome({ showAboutButton }: WelcomeProps) {
  return (
    <main>
      <h1 className='tracking-2x font-bold text-2xl'>Hi! I’m Gabriel, a Software Enginer.</h1>
      <p className='max-w-prose my-5'>{"Hello, I'm Gabriel, a software engineer specializing in web development. I have a passion for constantly seeking evolution and improvement in every project I undertake."}</p>
      {showAboutButton && (<Link
        className='underline underline-offset-4 hover:text-blue transition ease-in duration-200 tracking-1x sm:tracking-2x uppercase decoration-blue'
        href='/about'
      >
        More about me
      </Link>)}
    </main>
  )
}
