import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import '../app/globals.css'
const Header = () => {
  return (
   <header className="py-5 xl:py-5 text-white">    
    <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
        <h1 className="text-4xl font-semibold group">
        <span className="text-accent group-hover:text-white transition-colors duration-300">{`<`}</span><span className="group-hover:text-accent transition-colors duration-300">{`Adnan`}</span><span className="text-accent group-hover:text-white transition-colors duration-300">{`/>`}</span>
        </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
        <Nav/>
        <Link href="/contact">
        <Button>Hire me</Button>
        </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav/>
        </div>
    </div>
   </header>
  )
}

export default Header
