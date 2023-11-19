import { ExternalLinks } from "@/components/Navigation/ExternalLinks";
import Link from "next/link";

export function About() {
  return (
    <section className="flex flex-col max-w-prose gap-4 mt-5 text-black dark:text-white">
      <h2 className="text-center font-bold dark:text-white/70 text-black/70 text-2xl md:text-4xl">About</h2>
      <p>Since I was young, I have always been interested in the field of software development. This motivated me to start a career in the industry, where I always focus on delivering a high-quality product.</p>
      <p>If you want to know more about me or just chat, feel free to contact me via email or social media.</p>
      <div className="flex items-center flex-col gap-2">
        <Link
          href='mailto:hello@gabrielsena.dev'
          className="font-bold underline underline-offset-4 hover:text-blue"
        >
          hello@gabrielsena.dev
        </Link>
        <div className="flex flex-row gap-2">
          <ExternalLinks />
        </div>
      </div>
    </section>
  )
}
