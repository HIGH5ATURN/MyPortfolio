import Link from "next/link";

import {FaGithub, FaLinkedin, FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa";

const socials=[
    {icon:<FaGithub/>,path:"https://github.com/HIGH5ATURN"},
    {icon:<FaLinkedin/>,path:"https://www.linkedin.com/in/rowshan-mannan-oni"},
    {icon:<FaFacebook/>,path:"https://www.facebook.com/rowshan.mannan.2024"},
    {icon:<FaInstagram/>,path:"https://www.instagram.com/on_space_e_/"},
    {icon:<FaTwitter/>,path:""},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return <Link 
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
            >
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social