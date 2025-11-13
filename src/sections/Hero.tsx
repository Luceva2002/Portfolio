import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Suspense } from "react";
import Scene3D from "../components/Scene3D";
import DogModel from "../components/DogModel";
import CanvasLoader from "../components/Loading";

const Hero = () => {
  return (
    <section id="home" className="py-10 md:py-16 px-4 md:px-8 max-w-6xl mx-auto min-h-screen flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4 md:gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-5 text-4xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BEC1CF] via-[#D5D8EA] to-white">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <span className="inline-block">
              <TypeAnimation
                sequence={[
                  "Luca",
                  1000,
                  "Coding Student",
                  1000,
                  "Web Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg ml-2 mb-6 lg:text-xl text-left">
            Welcome to my portfolio!
            <br />Dive in and explore what I love to create ; )
          </p>
          <div>
            <a
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-black-300 hover:bg-black-500 text-white border border-black-300 transition-all"
            >
              Hire Me
            </a>
            <a
              download
              href="/CV.pdf"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-black-300 text-white border border-black-300 transition-all mt-3"
            >
              Download CV
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 sm:mt-0 flex justify-center sm:justify-end"
        >
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Scene3D cameraPosition={[0, 0, 5]} enableControls={true}>
              <Suspense fallback={<CanvasLoader />}>
                <DogModel />
              </Suspense>
            </Scene3D>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
