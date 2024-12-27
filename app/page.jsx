"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className=" container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br />
              <span className="text-accent-default">Rowshan Mannan</span>
              <br />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 2,
                    duration: 0.4,
                    ease: "easeIn"
                  },
                }}
              >
                <span
                  className="text-teal-400 transition-colors duration-500 ease-in-out hover:text-teal-100 hover:delay-100"
                  style={{ transitionDelay: "0ms" }}
                >
                  O
                </span>
                <span
                  className="text-teal-300 transition-colors duration-500 ease-in-out hover:text-teal-100 hover:delay-100"
                  style={{ transitionDelay: "100ms" }}
                >
                  n
                </span>
                <span
                  className="text-teal-200 transition-colors duration-500 ease-in-out hover:text-teal-100 hover:delay-100"
                  style={{ transitionDelay: "200ms" }}
                >
                  i
                </span>
              </motion.div>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              From Chattogram, Bangladesh
              <span className=""> 🚩</span>

            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <span>
                  Download CV
                </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-default hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* Photo */}

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;