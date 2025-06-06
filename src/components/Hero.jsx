import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { CatsCanvas } from './canvas';


const Hero = () => {
  return (
      <section 
  className="relative w-full h-screen mx-auto"
>


    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5"> 
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#534039]`}>Take care!
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#B5A49E]`}>Thank you for stopping by!</p>
        </div>
    </div>

        <CatsCanvas />
      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-[-75px] bottom-[-75px] w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  
  )
}

export default Hero