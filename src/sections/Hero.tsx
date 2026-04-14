import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import TiltedCard from "../components/TiltedCard";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-10 md:pt-32 md:pb-16 px-4 md:px-8 max-w-6xl mx-auto min-h-screen flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 flex flex-col items-start text-left w-full"
        >
          <h1 className="text-white mb-5 text-4xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-white">
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
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-left">
            Welcome to my portfolio!
            <br />Dive in and explore what I love to create ; )
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start w-full gap-4">
            <a
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-black-300 hover:bg-black-500 text-white border border-black-300 transition-all text-center"
            >
              Hire Me
            </a>
            <a
              download
              href="/CV.pdf"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-black-300 text-white border border-black-300 transition-all text-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 flex justify-center w-full"
        >
          <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]">
            <TiltedCard
              imageSrc="/musichero.png"
              altText="Hero profile"
              captionText="Hello!"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showTooltip={true}
              showMobileWarning={false}
              displayOverlayContent={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
