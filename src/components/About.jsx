'use client'
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants/constants"
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import astronaut from "../assets/header.svg";
import Resume from "./Abhishek_.pdf";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'
    glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px"
    tiltMaxAngleX={30} tiltMaxAngleY={30} tiltEnable={true} perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div

        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = "/Abhishek_.pdf"; // Assuming Resume is the path to your PDF file
    anchor.download = 'Abhishek_Resume.pdf'; // Set the desired filename for the download
    anchor.click(); // Trigger the click event to start the download
  };
  return (
    <>
      <div className='relative overflow-hidden lg:overflow-visible'>
        <motion.div variants={textVariant()}>
          <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Introduction</p>
          <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
        >
          I'm an experienced software developer proficient in JavaScript, with a strong focus on React and Next.js for front-end
          development, and Spring Boot for Java-based back-end solutions. I have in-depth knowledge of both SQL and No-SQL databases, 
          allowing me to design and manage data effectively. With a keen eye for detail and robust problem-solving skills, I work 
          closely with clients to create efficient, scalable, and user-friendly applications. My commitment to staying up-to-date 
          with the latest technologies ensures I can quickly adapt to new challenges and bring your ideas to life!
        </motion.p>
        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
        <Image src={astronaut} alt="astronaut" className="absolute z-[-1] h-80 -right-20 animation top-28" />
      </div>

      <div className='mt-20 flex-wrap justify-center gap-10 hidden md:flex'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="mt-20 flex-wrap justify-center md:flex">
      <a
  href="https://drive.google.com/file/d/18DvYno9pb_MDEg_eRiAnFsS4jW-rG18-/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="overflow-hidden relative flex justify-center items-center w-32 p-2 h-12 bg-violet text-white border border-10 border-light-purple rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Resume
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-white-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
    style={{ 
      backgroundColor: "#f2e6ff"
    }}
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-violet-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
    style={{ 
      backgroundColor: "rgb(64, 14, 164) " 
    }}
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-violet-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
    style={{ 
      backgroundColor: " #000000"
    }}
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
  >Hire me!</span>
</a>





      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
