import Link from "next/link"
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Social = ({containerStyles,iconStyles}) => {
    const socials=[
        {icon: <FaGithub/>, path:"https://github.com/adnan-jafri7"},
        {icon: <FaLinkedin/>, path:"https://www.linkedin.com/in/adnan-jafri-7a9730165/"},
        // {icon: <FaTwitter/>, path:""},
    ]
  return (
    <div className={containerStyles}>
      {socials.map((item,i)=>{
        return(
            <Link key={i} href={item.path} target="blank"
                 className={iconStyles}>
                    {item.icon}
                
            </Link>
        
        )
      })}
    </div>
  )
}

export default Social
