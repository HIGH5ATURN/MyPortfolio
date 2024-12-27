"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Photo = () => {
    const [imageSrc, setImageSrc] = useState("/assets/photo.jpg");

    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1,
                    transition:{
                        delay:2,
                        duration:0.4,
                        ease:"easeIn"
                    },
                }}
            >
                {/* Image */}
                <motion.div 
                                initial={{opacity:0}}
                                animate={{opacity:1,
                                    transition:{
                                        delay:2,
                                        duration:0.4,
                                        ease:"easeIn"
                                    },
                                }}
                    className="w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] rounded-full overflow-hidden shadow-[0_0_25px_2px_#00e187] transition-all duration-500 ease-in-out "
                    onMouseEnter={() => setImageSrc("/assets/photo2.jpg")} 
                    onMouseLeave={() => setImageSrc("/assets/photo.jpg")}
                >
                    <div className="relative w-full h-full">
                        {/* First Image with Blur Transition */}
                        <Image 
                            src="/assets/photo.jpg" 
                            priority 
                            quality={100} 
                            fill 
                            alt="" 
                            className="object-cover rounded-full transition-all duration-500 ease-in-out hover:blur-lg"
                        />
                        
                        {/* Second Image with Fade In Transition */}
                        <Image 
                            src={imageSrc} 
                            priority 
                            quality={100} 
                            fill 
                            alt="" 
                            className="object-cover rounded-full transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 absolute top-0 left-0"
                        />
                    </div>
                </motion.div >
                {/* circle */}
                {/* If you want to add this animated ring you need to add [absolute] to image motion.div */}
                {/* <motion.svg className="w-[298px] xl:w-[398px] h-298px xl:h-[398px]" 
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg">
                    <motion.circle 
                    cx="249" 
                    cy="245" 
                    r="250" 
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray:"24 10 0 0"}}
                    animate={{
                        strokeDasharray:["15 120 25 25","16 25 92 72","44 250 22 22"],
                        rotate:[120,360],
                    
                    }}
                    transition={{
                        duration:20,
                        repeat:Infinity,
                        repeatType:"reverse",
                    }}
                    />
                </motion.svg> */}
            </motion.div>
        </div>
    );
}

export default Photo;

