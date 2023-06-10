import { NavLink } from "@/components/NavLink";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function ExternalLinks() {
  return (
    <>
      <NavLink icon={<FaGithub />} href="https://github.com/gabrielsenadev" target="_blank"/>
      <NavLink icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/gabrielsenadev" target="_blank"/>
    </>
  )
}