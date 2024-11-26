import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a highly motivated junior developer based in London, with a strong foundation in frontend web development and a passion for crafting user-friendly, visually appealing applications. My expertise includes React, JavaScript, TypeScript, HTML, CSS, TailwindCSS, and SQL, enabling me to create responsive and efficient web applications tailored to users' needs.
        <br/>
        <br/>
        In addition to web development, I have hands-on experience in 2D/3D game development, where I’ve explored creative problem-solving techniques to build engaging interactive experiences. This blend of web and game development experience has sharpened my ability to work on both technical and design challenges, giving me a well-rounded perspective in software development.
        <br/>
        <br/>
        I thrive in collaborative, fast-paced environments and have contributed to several projects using Agile methodologies like Scrum and Kanban, ensuring efficient project delivery and continuous improvement. My strong problem-solving skills and attention to detail allow me to quickly identify and address issues, ensuring that every project I work on is completed to the highest standard.
        <br/>
        <br/>
        I am constantly looking for opportunities to learn new technologies, improve my skills, and take on new challenges. My goal is to continue growing as a developer, contributing to impactful projects, and collaborating with talented teams to create innovative solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
