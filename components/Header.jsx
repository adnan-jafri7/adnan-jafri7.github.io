import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import '../app/globals.css'
const Header = () => {
  return (
   <header className="flex flex-col items-right py-5 xl:py-5 text-white mb-20">  
   <div className="container mx-auto flex justify-end mb-5 mr-10"> 
      <span className="bg-[#FF671F] w-[20px] h-[20px] rounded-full cursor-pointer mr-2"></span>
      <span className="bg-[#FFffff] w-[20px] h-[20px] rounded-full cursor-pointer mr-2"></span> 
        <span className="bg-accent w-[20px] h-[20px] rounded-full  cursor-pointer"></span>
        
      </div>  
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
