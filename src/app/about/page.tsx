import { ExternalLinks } from "@/components/Navigation/ExternalLinks";
import Link from "next/link";

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center py-12 px-2 h-full'>
      <div>
        <h1 className='tracking-2x font-bold text-2xl'>Hi! I’m Gabriel, a Software Enginer.</h1>
        <p className='max-w-prose my-5'>{"Hello, I'm Gabriel, a software engineer specializing in web development. I have a passion for constantly seeking evolution and improvement in every project I undertake."}</p>
        <p className="max-w-prose">{"Throughout my career, I have gained valuable experience through personal projects and professional collaborations, consistently delivering exceptional results. I am recognized for my clear and concise communication, as well as my confidence, professionalism, and ability to deliver high-quality work that enhances your organization's reputation."}</p>
        <p className="max-w-prose mt-5">You can reach out to me via email at <Link
          className='underline underline-offset-4 hover:text-blue transition ease-in duration-200' href='mailto:hello@gabrielsena.dev'>
          hello@gabrielsena.dev
        </Link> or social medias, feel free to contact me anytime.</p>
        <div className="[&>*]:text-3xl flex justify-start list-none space-x-6 my-10">
            <ExternalLinks />
          </div>
      </div>
    </div>
  )
}