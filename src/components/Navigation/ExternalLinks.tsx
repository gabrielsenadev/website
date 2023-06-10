import { NavLink } from "@/components/NavLink";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function ExternalLinks() {
  return (
    <>
      <NavLink icon={<FaGithub />} altLabel="Github" href="https://github.com/gabrielsenadev" target="_blank"/>
      <NavLink icon={<FaLinkedinIn />} altLabel="LinkedIn" href="https://www.linkedin.com/in/gabrielsenadev" target="_blank"/>
    </>
  )
}