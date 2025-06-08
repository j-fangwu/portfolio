import React from 'react'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'  
import { github } from '../assets'

{/* Project Cards */}
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="p-5 rounded-2xl sm:w-[360px] w-full relative"
      style={{ backgroundColor: '#B5A49E' }}
    >
      {/* Dashed border effect */}
      <div className="absolute inset-2 rounded-xl border-2 border-dashed border-white/20 pointer-events-none"></div>
      
      {/* Project Image */}
      <div className="relative w-full h-[180px] z-10">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-md"
        />

        {/* GitHub Icon */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <motion.div
            onClick={() => window.open(source_code_link, "_blank")}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer group"
            style= {{ backgroundColor: '#7A6056' }}
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain transition-opacity duration-200 group-hover:opacity-60"
            />
          </motion.div>
        </div>
      </div>

      {/* Project Details */}
      <div className="mt-5 flex flex-col z-10">
        <h3 className="text-[24px] font-bold" style={{ color: '#534039' }}>{name}</h3>
        <p className="text-white text-[16px] mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <> 
      {/* Section Header */}  
      <motion.div variants = {textVariant()}>
        <h2 className={styles.sectionHeadText}  style={{ color: '#534039' }}>Projects</h2>
        <p className={styles.sectionSubText} style={{ color: '#6c534a' }}>My work</p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works");