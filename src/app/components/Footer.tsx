'use client';
import { ExternalLinks } from "@/components/Navigation/ExternalLinks";
import { MainLinks } from "@/components/Navigation/MainLinks";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black-700 text-white p-2 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="font-bold uppercase text-1xl">
          <p>Links</p>
          <nav className="flex flex-row gap-6">
            <MainLinks />
          </nav>
        </div>
        <div className="flex flex-col my-4 sm:my-0">
          <p className="font-bold uppercase text-1xl">Contact me</p>
          <Link
            className='underline underline-offset-4 hover:text-blue transition ease-in duration-200' href='mailto:hello@gabrielsena.dev'>
            hello@gabrielsena.dev
          </Link>
        </div>
        <nav className="flex gap-6 my-4 sm:my-0">
            <ExternalLinks />
        </nav>
      </div>
      <div className="mt-6">
        <p>Website developed with Next.js, Tailwind CSS, and other great tools. You can find its repository on <Link
          className="underline underline-offset-4 transition ease-in duration-200 hover:text-blue"
          href="https://github.com/gabrielsenadev/website"
          target="_blank"
        >GitHub.</Link></p>
        <p>Copyright © 2023 Gabriel Sena. All rights reserved.</p>
      </div>
    </footer>
  )
}