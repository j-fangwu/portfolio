import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  margin: "0 0.5rem",
  border: "1px solid #ddd",
  borderRadius: "20px",
  width: "150px",
  background: "#B5A49E",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  color: "#FFFFFF",
  textAlign: "center",
  flexShrink: 0,
  fontWeight: "bold",
  fontSize: "14px",
};

const containerStyle = {
  display: "flex",
  width: "100%",
  overflow: "hidden",
  position: "relative",
  height: "150px",
};

const innerContainerStyle = {
  display: "flex",
  position: "absolute",
  left: 0,
  top: 0,
};

const CARD_WIDTH = 170; 
const DURATION = 30;
const TOTAL_WIDTH = technologies.length * CARD_WIDTH;

const Tech = () => {
  const topControls = useAnimation();
  const bottomControls = useAnimation();
  const topAnimationRef = useRef(null);
  const bottomAnimationRef = useRef(null);
  
  const halfLength = Math.ceil(technologies.length / 2);
  const topTechnologies = technologies.slice(0, halfLength);
  const bottomTechnologies = technologies.slice(halfLength);
  
  const duplicatedTopTech = [...topTechnologies, ...topTechnologies];
  const duplicatedBottomTech = [...bottomTechnologies, ...bottomTechnologies];
  
  const TOP_TOTAL_WIDTH = topTechnologies.length * CARD_WIDTH;
  const BOTTOM_TOTAL_WIDTH = bottomTechnologies.length * CARD_WIDTH;

  useEffect(() => {
    const startTopAnimation = async () => {
      await topControls.start({
        x: -TOP_TOTAL_WIDTH,
        transition: {
          duration: DURATION,
          ease: "linear",
        },
      });
      
      topControls.set({ x: 0 });
      topAnimationRef.current = requestAnimationFrame(startTopAnimation);
    };

    const startBottomAnimation = async () => {
      await bottomControls.start({
        x: 0,
        transition: {
          duration: DURATION,
          ease: "linear",
        },
      });
      
      bottomControls.set({ x: -BOTTOM_TOTAL_WIDTH });
      bottomAnimationRef.current = requestAnimationFrame(startBottomAnimation);
    };

    topControls.set({ x: 0 });
    bottomControls.set({ x: -BOTTOM_TOTAL_WIDTH });

    startTopAnimation();
    startBottomAnimation();

    return () => {
      cancelAnimationFrame(topAnimationRef.current);
      cancelAnimationFrame(bottomAnimationRef.current);
    };
  }, [topControls, bottomControls, TOP_TOTAL_WIDTH, BOTTOM_TOTAL_WIDTH]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{ color: '#534039' }}>Technologies</h2>
        <p className={`${styles.sectionSubText} mb-10`} style={{ color: '#534039' }}>I am familiar with</p>
      </motion.div>

      <div className="flex flex-col" style={containerStyle}>
        <motion.div
          style={innerContainerStyle}
          animate={topControls}
        >
          {duplicatedTopTech.map((tech, i) => (
            <div key={`top-${tech.name}-${i}`} style={cardStyle}>
              {tech.icon && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{ width: 40, height: 40, objectFit: "contain" }}
                />
              )}
              <span style={{ marginTop: "0.5rem" }}>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-5 flex flex-col" style={containerStyle}>
        <motion.div
          style={innerContainerStyle}
          animate={bottomControls}
        >
          {duplicatedBottomTech.map((tech, i) => (
            <div key={`bottom-${tech.name}-${i}`} style={cardStyle}>
              {tech.icon && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{ width: 40, height: 40, objectFit: "contain" }}
                />
              )}
              <span style={{ marginTop: "0.5rem" }}>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");