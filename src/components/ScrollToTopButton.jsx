import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const buttonStyle = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 1000,
  width: '3rem',
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  background: '#B5A49E',
  color: '#fff',
  border: 'none',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  cursor: 'pointer',
  fontSize: '1.5rem',
  transition: 'all 0.3s ease',
  opacity: 0.85,
};

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          style={buttonStyle}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span style={{ fontSize: '1.5rem' }}>⬆</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
