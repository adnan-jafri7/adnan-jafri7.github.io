"use client";
import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import {FiDownload} from 'react-icons/fi'
// import my_resume from "../public/assets/resume/my_resume.pdf"
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Mobile & Web Application Developer</span>
          <h1 className="h1 mb-6">
            {`Hello I'm` }<br/> <span className="text-accent">Adnan Jafri</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80 text-justify">
          I excel at developing intuitive web and mobile applications and am proficient in a range of technologies, including React.js, React Native, HTML, CSS, and JavaScript.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8 mb-8 xl:mb-8">
            <Button size="lg" className="uppercase flex items-center gap-2"  onClick={() => window.open('my_resume.pdf')}>
              <span>Download Resume</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div>
              <Social 
              containerStyles={"flex gap-6 flex "} 
              iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center  text-accent text-base hover:bg-accent hover:text-primary hover:transaition-all duration-500"} />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
