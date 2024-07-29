import Link from "next/link"
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Social = ({containerStyles,iconStyles}) => {
    const socials=[
        {icon: <FaGithub/>, path:""},
        {icon: <FaLinkedin/>, path:""},
        {icon: <FaTwitter/>, path:""},
    ]
  return (
    <div className={containerStyles}>
      {socials.map((item,i)=>{
        return(
            <Link key={i} href={item.path}
                 className={iconStyles}>
                    {item.icon}
                
            </Link>
        
        )
      })}
    </div>
  )
}

export default Social
