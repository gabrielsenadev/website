import Link from 'next/link';

export function Welcome() {
  return (
    <main>
      <h1 className='uppercase tracking-2x font-bold text-2xl'>Hi! Welcome to my space!</h1>
      <p className='max-w-prose my-5'>{"Here, I'll be testing out some cool things, doing great stuff while learning and sharing the results with you. If you'd like to get in touch, feel free to send me an email! Looking forward to connecting with you!"}</p>
      <Link className='underline underline-offset-4 hover:text-blue transition ease-in duration-200' href='mailto:hello@gabrielsena.dev'>
        Get in touch: hello@gabrielsena.dev
      </Link>
      <h6 className='lowercase tracking-2x font-bold text-1xl mt-5'>for now, that is it!</h6>
    </main>
  )
}
