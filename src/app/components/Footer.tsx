'use client';
import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-white p-2 sm:p-6">
      <div className="mt-6">
        <p>Website developed with Next.js, Tailwind CSS, and other amazing tools. You can find its repository on <Link
          className="underline underline-offset-4 transition ease-in duration-200 hover:text-blue"
          href="https://github.com/gabrielsenadev/website"
          target="_blank"
        >GitHub.</Link></p>
        <p>Copyright © 2023 Gabriel Sena. All rights reserved.</p>
      </div>
    </footer>
  )
}