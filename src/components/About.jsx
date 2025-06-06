import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import profilePic from '../assets/profilePic.jpg'; // Adjust the path as necessary

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full"
      >
        <div 
          options={{ max: 45, scale: 1, speed: 450 }} 
          className="rounded-[20px] py-5 px-12 min-h-[280px] 
          flex justify-evenly items-center flex-col shadow-lg
          hover:shadow-xl transition-all duration-300
          relative before:content-[''] before:absolute before:inset-2
          before:rounded-[16px] before:border-2 before:border-dashed
          before:border-white/20"
          style={{
            background: '#6c534a',
            boxShadow: '0 10px 20px -5px rgba(28, 42, 83, 0.25)',
          }}
        >
          <img 
            src={icon} 
            alt={title} 
            className="w-20 h-20 object-contain z-10" 
          />
          <h3 className="text-white text-[20px] font-bold text-center z-10">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="flex flex-col mt-20 items-center justify-center w-full h-full">
      <motion.div variants={textVariant()} className="w-full flex flex-col">
        <p className={styles.sectionSubText} style={{ color: '#6c534a' }}>Welcome</p>
        <h2 className={styles.sectionHeadText} style={{ color: '#534039' }}> 
          <b>About Me</b>
        </h2>
      </motion.div>

      <div className="mt-4 flex flex-col md:flex-row items-center gap-8">
      <motion.img
        src={profilePic}
        alt="Profile"
        variants={fadeIn('left', '', 0.2, 1)}
        className="w-40 h-40 rounded-full object-cover border-4 border-[#b5a49e] shadow-lg cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onClick={() => window.open('https://www.linkedin.com/in/john-fang-wu/', '_blank')}
        style={{ cursor: 'pointer' }}
      />
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondarytext-[17px] leading-[32px] max-w-3xl" style ={{ color: '#6c534a' }}
      >
        {"Hello, I'm John Fang-Wu. "} <br />
        {"I'm a Computer Engineer with a deep interest in Software Engineering, Machine Learning, and Game Development. "}
        {"I aim to combine my technical skills with my creativity to develop new solutions that can help others. "} 
        {"I'm always eager to learn and grow, and I believe that technology can make a positive impact on the world. "}
        {"Thank you for checking out my portfolio, feel free to reach out if you have any questions or opportunities!"}
      </motion.p>
    </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper (About, "about");
// This code defines an About component that displays an introduction and a list of services offered.