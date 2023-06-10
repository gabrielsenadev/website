import Link from "next/link";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <p>2023 • Gabriel Sena</p>
      <p>website developed with Next.js, Tailwind CSS, and other great tools. You can find its repository on <Link
          className="underline underline-offset-4 transition ease-in duration-200 hover:text-blue"
          href="https://github.com/gabrielsenadev/website"
          target="_blank"
        >GitHub.</Link></p>
    </footer>
  )
}