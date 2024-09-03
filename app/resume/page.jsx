'use client'
import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,FaJava,FaGithub,FaAndroid,FaApple,FaAws,FaPython} from 'react-icons/fa'
import { SiMysql } from "react-icons/si";
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {motion} from 'framer-motion'
import { Tooltip, TooltipContent, TooltipTrigger,TooltipPortal,TooltipProvider } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'


const about={
  title:"About Me",
  description:"I am Adnan Jafri, Mobile & Web Application Developer",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Adnan Jafri"
    },
    {
      fieldName:"Phone",
      fieldValue:"+91 8477086932"
    },
    
    {
      fieldName:"Nationality",
      fieldValue:"Indian"
    },
    {
      fieldName:"Email",
      fieldValue:"adnan.jafri7@gmail.com"
    },
    {
      fieldName:"Experience",
      fieldValue:"1+ Years"
    },
    {
      fieldName:"Languages",
      fieldValue:"English, Hindi, Urdu"
    },
  ]
}

const experience={
  icon:'/assets/resume/badge.svg',
  title:"My Experience",
  description:'I am Adnan Jafri, Mobile & Web Application Developer',
  items:[
    {
      company:'RRSC North, NRSC, ISRO',
      position:'Mobile & Web Application Developer',
      duration:'Aug, 2023 - Present'
    },
    {
      company:'RRSC - North, NRSC, ISRO',
      position:'Mobile Application Developer - Intern',
      duration:'Sep, 2022 - Dec, 2022'
    },

  ]
}

const education={
  icon:"/assets/resume/cap.svg",
  title:"My Education",
  description:"I am Adnan Jafri, Mobile & Web Application Developer.",
  items:[
    {
      institute:"Dr. APJ Abdul Kalam Technical University",
      degree:"B.Tech in Computer Science & Engineering",
      duration:"2020 - 2023"
    },
    {
      institute:"Jamia Millia Islamia",
      degree:"Diploma in Computer Engineering",
      duration:"2017 - 2020"
    },
    {
      institute:"Aley Mansoob Inter College",
      degree:"Intermediate (10+2)",
      duration:"2015 - 2016"
    },
    {
      institute:"British Higher Secondary School",
      degree:"Highschool",
      duration:"2013- 2014"
    },

  ]
}

const skills={
  title:"My Skills",
  description:'I am Adnan Jafri, Mobile & Web Application Developer',
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"HTML 5"
    },
    {
      icon:<FaCss3/>,
      name:"CSS 3"
    },
    {
      icon:<FaJs/>,
      name:"JavaScript"
    },
    {
      icon:<FaReact/>,
      name:"React JS"
    },
    {
      icon:<SiMysql/>,
      name:"My SQL"
    },
    {
      icon:<FaNodeJs/>,
      name:"Node JS"
    },
    {
      icon:<FaJava/>,
      name:"Java"
    },
    {
      icon:<FaGithub/>,
      name:"Github"
    },
    {
      icon:<FaAndroid/>,
      name:"Android"
    },
    {
      icon:<FaApple/>,
      name:"iOS"
    },
    {
      icon:<FaAws/>,
      name:"Amazon Web Services"
    },
    {
      icon:<FaPython/>,
      name:"Python"
    },

  ]
}



export default function Resume (){
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{
      opacity:1,
      transition:{delay:2.4,duration:0.4,ease:'easeIn'}}}
      className='min-h-[80vh] flex  items-center justify-center py-12 xl:py-0'
      >
        <div className='container mx-auto'>
          <Tabs 
            defaultValue='experience' 
            className='flex flex-col xl:flex-row gap-[60px]'>
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            <div className='min-h-[70vh] w-full'>
              <TabsContent value="experience" className='w-full'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {experience.title}
                  </h3>
                  {/* <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {experience.description}
                  </p> */}
                  <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid:cols-2 gap-[30px]'>
                      {experience.items.map((items,index)=>{
                        return( 
                        <li 
                          key={index} 
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                          flex flex-col justify-center items-center lg:items-start
                          gap-1">
                          <span className='text-accent'>{items.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{items.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* <span className='w-[6px] h-[6px] rounded full bg-accent'>

                            </span> */}
                            <p className='text-white/60'>{items.company}</p>
                          </div>
                        </li>
                        )
                      })}
                    </ul>

                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="education" className='w-full h-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {education.title}
                  </h3>
                  {/* <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {education.description}
                  </p> */}
                  <ScrollArea className="h-[400px] mb-10">
                    <ul className='grid grid-cols-1 lg:grid:cols-2 gap-[30px]'>
                      {education.items.map((items,index)=>{
                        return( 
                        <li 
                          key={index} 
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                          flex flex-col justify-center items-center lg:items-start
                          gap-1">
                          <span className='text-accent'>{items.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{items.degree}</h3>
                          <div className='flex items-center gap-3'>
                            {/* <span className='w-[6px] h-[6px] rounded full bg-accent'>
                              
                            </span> */}
                            <p className='text-white/60'>{items.institute}</p>
                          </div>
                        </li>
                        )
                      })}
                    </ul>

                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="skills" className='w-full h-full '>
                <div
                  className='flex flex-col gap-[40px] text-center xl:text-left mb-10'>
                    
                      <h3 className="text-4xl font-bold">
                        {skills.title}
                      </h3>
                      {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p> */}
                    
                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[40px] '>
                      {skills.skillList.map((skill,index)=>{
                        return(
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            </li>
                        )
                      })}
                    </ul>

                </div>
              </TabsContent>

              <TabsContent value="about" className='w-full text-center xl:text-left'>
                <div className="flex flex-col gap-[30px]">
                  <h3 className='text-4xl font-bold'>{about.title}</h3>
                  {/* <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p> */}
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                    {about.info.map((item,index)=>{
                      return(
                        <li key={index} className='flex flex-col justify-between]  items-left xl:justify-start gap-4'>
                          <span className='text-white/60 leading-3'>{item.fieldName}</span>
                          <span className='text-xl leading-3'>{item.fieldValue}</span><br></br>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
              
            </div>
          </Tabs>

        </div>
      
    </motion.div>
  )
}


