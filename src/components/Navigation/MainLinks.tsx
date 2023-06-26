import { NavLink } from "@/components/NavLink";

export function MainLinks() {
  return (
    <>
      <NavLink label="Home" href="/" />
      <NavLink label="About" href="/about" />
      <NavLink label="Articles" href="/articles" />
    </>
  )
}