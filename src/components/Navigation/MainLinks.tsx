import { NavLink } from "@/components/NavLink";

export function MainLinks() {
  return (
    <>
      <NavLink label="Home" href="/" />
      <NavLink label="Posts" href="/posts" />
      <NavLink label="Tests" href="/tests" />
    </>
  )
}