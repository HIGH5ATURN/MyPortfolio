"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAndroid,
  FaDesktop,
  FaDatabase,
  FaJava
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiDotnet,
  SiOracle,
  SiC,
  SiCplusplus,
  SiKotlin,
  SiPython,

} from 'react-icons/si';


//about data

const about = {
  title: "About Me",
  description: "I am a developer with experience in building diverse projects, including web and mobile applications. I specialize in using technologies like Next.js, TypeScript, Tailwind CSS, Jetpack Compose and database systems like MongoDB and OracleSQL. I am also exploring pentesting, clustering algorithms. My work includes designing user-friendly interfaces and creating functional, testable software solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rowshan Mannan Oni"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+46) 76 966 98 04"
    },
    {
      fieldName: "Experience",
      fieldValue: (new Date().getFullYear()-2021).toString()+"+ years"
    },
    {
      fieldName: "Email",
      fieldValue: "rowshan@iut-dhaka.edu"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bengali, Hindi, Chatgaiyya"
    },
  ]
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "I am still an undergraduate student, but working on it!",
  items: [
    {
      company: "Alstom Sweden",
      position: "Freelance Software Developer",
      duration: "N/A",
    },
    {
      company: "Alstom Sweden",
      position: "Freelance Software Developer",
      duration: "N/A",
    },
    {
      company: "Alstom Sweden",
      position: "Freelance Software Developer",
      duration: "N/A",
    },
    {
      company: "Alstom Sweden",
      position: "Freelance Software Developer",
      duration: "N/A",
    },
    {
      company: "Alstom Sweden",
      position: "Freelance Software Developer",
      duration: "N/A",
    },
    {
      company: "Alstom Sweden",
      position: "Freelance Software Developer",
      duration: "N/A",
    },

  ]
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "I am an undergraduate student, currently at Mälardalen University pursuing my third year of Bachelor.",
  items: [
    {
      institution: "Islamic University of Technology",
      program: "Bachelor of Science in Software Engineering",
      duration: "2021-2026",
    },
    {
      institution: "Mälardalen University",
      program: "Bachelor of Science in Computer Science",
      duration: "2024-2025",
    },
    {
      institution: "Govt. Hazi Muhammed Mohsin College",
      program: "Higher Secondary School Certificate",
      duration: "2019-2021",
    },
    {
      institution: "Govt. Muslim High School",
      program: "Secondary School Certificate",
      duration: "2019-2021",
    },
    {
      institution: "Govt. Muslim High School",
      program: "Junior School Certificate",
      duration: "2019-2021",
    },
  ]
};

//compose ICon
const JetpackComposeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="48"
    height="48"
    fill="#4285F4" // Use Jetpack Compose's primary color
  >
    {/* Replace this path with the actual path data of the Jetpack Compose SVG */}
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
  </svg>
);

//skills data
const skills = {
  title: "My skills",
  description: "Mostly Self-taught, I have been working on various projects to improve my skills. I have experience in building web and desktop applications, and I am currently working on a mobile application.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaAndroid />,
      name: "Android",
    },
    {
      icon: <SiDotnet />,
      name: "Desktop Application",
    },
    {
      icon: <SiOracle />,
      name: "ORACLE SQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
    },
    {
      icon: <SiPython />,
      name: "Pyhton",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';



const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >

      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0
          gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6
                        px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">

                          <span className="text-accent-default">
                            {item.duration}
                          </span>

                          <h3 className="text-xl max-w-[260px] min-h-[60px]
                        text-center lg:text-left">
                            {item.position}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full
                            bg-accent-default">
                            </span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );

                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>





            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-auto py-6
                        px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-[20px]">

                          <span className="text-accent-default">
                            {item.duration}
                          </span>

                          <h3 className="text-xl max-w-[260px] min-h-[60px]
                        text-center lg:text-left">
                            {item.program}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full
                            bg-accent-default">
                            </span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );

                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[450px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 
                    xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {

                    return <li key={index}>
                      <TooltipProvider
                        delayDuration={100}
                      >
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329]
                                rounded-xl flex justify-center items-center
                                group">
                            <div className="text-6xl group-hover:text-accent-default
                                  transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto lg:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center
                    xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-white/80">{item.fieldValue}</span>
                    </li>
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

export default Resume