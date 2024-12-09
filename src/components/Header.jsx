import { Button, Navbar } from "flowbite-react"

function Header() {
  return (
    <header className="px-2">
      <Navbar fluid rounded>
        <Navbar.Brand
          as='a'
          href='/'
          className='gap-2 py-1 px-2 shadow-md rounded-md hover:scale-105 hover:border-2 active:scale-95'>
          <img src='/logo.png' alt='' className='size-6' />
          <span className='font-semibold text-lg'>GymFluencer</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active>Home</Navbar.Link>
          <Navbar.Link>Diet Plans</Navbar.Link>
          <Navbar.Link>Workout Plans</Navbar.Link>
          <Navbar.Link>Blog</Navbar.Link>
          <Navbar.Link>Contact Us</Navbar.Link>
        </Navbar.Collapse>
        <div className='p-1 flex justify-center items-center gap-2'>
          <Button gradientMonochrome='success' pill>
            Get Started
          </Button>
          <Button pill gradientDuoTone='greenToBlue'>
            Login
          </Button>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
