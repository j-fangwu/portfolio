import React from 'react'
import { SectionWrapper } from '../hoc'
import { VerticalTimeline } from 'react-vertical-timeline-component'  
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion';

const timelineStyles = `
  .vertical-timeline::before {
    background: #B5A49E !important;
  }
  .vertical-timeline-element-content {
    position: relative;
  }
  .vertical-timeline-element-content::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    border: 2px dashed rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    pointer-events: none;
  }
`;

const Experience = () => {
  return (
    <>   
      {/* Timeline Styles */}
      <style>{timelineStyles}</style>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{ color: '#534039' }}>Work Experience</h2>
        <p className={styles.sectionSubText} style={{ color: '#534039' }}>My journey so far</p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline layout="1-column-left" className="vertical-timeline">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              position="left"
              contentStyle={{ 
                background: '#6c534a', 
                color: '#fff',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: 'none',
                position: 'relative',
              }}
              contentArrowStyle={{ borderRight: '10px solid  #534039' }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                </div>
              }
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-[white] text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
              </div>
              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience");