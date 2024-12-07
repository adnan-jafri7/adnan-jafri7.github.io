"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import {
Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects=[
    {
      num:"01",
      category:'frontend',
      title:"LRD & WRD Tool",
      description:`This project, part of the Space-based Information Support for Decentralized Planning (SISDP) under the Ministry of Panchayati Raj, focuses on developing a tool that automatically generates development plans for Gram Panchayats using satellite data of land and water bodies. I contributed to the front-end development of this project, which was launched by the Minister of Science & Technology.`,
      stack:[{name:'React JS'},{name:"Css 3"},{name:'HTML 5'},{name:'Bootstrap'}],
      image:"/assets/work/thumb5.png",
      live:"https://bhuvan-nyayavikas.nrsc.gov.in/lrdwrd/",
      github:"",
    },
    {
      num:"02",
      category:'Mobile App',
      title:"Map-iN",
      description:"Map-iN is a React Native mobile app for real-time geospatial data collection, used in Himachal Pradesh for Disaster Management. It enables users to capture locations and draw geospatial shapes, ensuring efficient performance on both Android and iOS devices.",
      stack:[{name:'React Native'},{name:"PHP"},{name:'Kotlin'},{name:'iOS'},{name:'Postgres'}],
      image:"/assets/work/thumb1.png",
      live:"",
      github:"https://github.com/adnan-jafri7/Map_in",
    },
    {
      num:"03",
      category:'Mobile App',
      title:`KISAAN`,
      description:"I contributed to the development of an Android app for farmers in Uttarakhand, India, created in collaboration with IIT-Roorkee and ISRO. The app delivers weather forecasts, crop advisories, and localized meteorological data based on users' geographic coordinates obtained from meteorological satellites.",
      stack:[{name:'React Native'},{name:"PHP"},{name:'Kotlin'},{name:'iOS'},{name:'Postgres'}],
      image:"/assets/work/thumb2.png",
      live:"",
      github:"",
    },
    {
      num:"04",
      category:'Web & Android App',
      title:"Bijlee",
      description:"I spearheaded the development of an Android and web-based application focused on facilitating electricity bill payments and mobile recharges, operating under a Business-to-Business (B2B) model. Leveraging Amazon Web Services (AWS) for robust development, the app achieved significant success, generating a turnover of Rs. 2 Crores within two years.",
      stack:[{name:'Html 5'},{name:"CSS 3"},{name:'PHP'},{name:'MySQL'},{name:'AWS'},{name:'Kotlin'},{name:'XML'}],
      image:"/assets/work/thumb3.png",
      live:"",
      github:"",
    },
    {
      num:"05",
      category:'Web & Android App',
      title:"Apni Dukan 24",
      description:"I led the development of Apni Dukan 24, a hybrid application available on Google Play Store that facilitates vegetable and medicine delivery. The app seamlessly integrates with both Android devices and web platforms using WIX and Webview technology. It boasts a convenient voice search feature, enhancing user accessibility. Apni Dukan 24 operates under a business-to-customer (B2C) model, providing a user-friendly platform for efficient online shopping experiences.",
      stack:[{name:'Html 5'},{name:"CSS 3"},{name:'PHP'},{name:'Kotlin'},{name:'WIX'},],
      image:"/assets/work/thumb4.png",
      live:"",
      github:"",
    },
    
  ]
const Work = () => {
  const [project,setProject]=useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
    };
  return (
   <motion.section 
   initial={{opacity:0}} 
   animate={{opacity:1,transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
   className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">        
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              <p className="text-white/60 text-justify">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item,index)=>{
                  return(
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index!==project.stack.length-1 && ","}
                    </li>
                  )
                })}

              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="blank" className="mb-5">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="blank" className="mb-5">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              >
              {projects.map((item,index)=>{
                return(
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full ">
                      <Image src={project.image} alt={project.title} fill className="object-cover  " />
                    </div>

                    </div>
                  </SwiperSlide>
                )
              })}
             <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max  xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
      </div>

    </div>

   </motion.section>
  )
}

export default Work
