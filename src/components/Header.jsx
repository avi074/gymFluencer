import { Navbar } from "flowbite-react"

function Header() {
  return (
    <header>
      <Navbar fluid rounded>
        <Navbar.Brand as="a" href="/">
        <img src="/logo.png" alt="" className="size-6"/>
        <span>GymFluencer</span>
        </Navbar.Brand>
      </Navbar>
    </header>
  )
}

export default Header
