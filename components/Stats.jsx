"use client";

import  CountUp  from "react-countup";

const stats =[

  {
    num: new Date().getFullYear() - 2021,
    text:"Years of Experience",
  },
  {
    num: 26,
    text:"Projects Completed",
  },
  {
    num: 8,
    text:"Technologies Learned",
  },
  {
    num: 500,
    text:"Code Commits",
  }

];

const Stats = () => {
  return (
  <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
    <div className="container mx-auto">
    <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl-max-w-none">
      {
        stats.map((item,index)=>{
          // now ADD a way, such that when clicked on project it takes to the project page
          return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start hover:cursor-pointer" key={index} onClick={()=>{if(item.text!=="Code Commits"){console.log(item.text)}}} >  
              <CountUp end={item.num} duration={5} delay={2} className="text-4xl
              xl:text-6xl font-extrabold"/>
              <p className={`${
                item.text.length<15?"max-w-[100px]":"max-w-[150px]"
              } leading-snug text-white/80`}>{item.text}</p>
          </div>
        })
      }
    </div>
    </div>
  </section>
  )
}

export default Stats