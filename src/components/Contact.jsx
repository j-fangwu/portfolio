import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { MagicCanvas } from './canvas';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formContainerRef = useRef(null);
  const magicContainerRef = useRef(null);
  const [formHeight, setFormHeight] = useState('auto');

  // Sync heights when form changes
  useEffect(() => {
    const updateHeight = () => {
      if (formContainerRef.current && magicContainerRef.current) {
        const height = formContainerRef.current.offsetHeight;
        setFormHeight(`${height}px`);
      }
    };

    // Initial height set
    updateHeight();

    // Create observer to watch for height changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (formContainerRef.current) {
      resizeObserver.observe(formContainerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          time: new Date().toLocaleString(),
          to_name: 'John',
          email: form.email,
          to_email: 'johnfangwu@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong. Please try again.')
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden items-start">
      <motion.div
        ref={formContainerRef}
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl min-w-[300px]"
        style={{ 
          background: "#6c534a",
          minHeight: 'fit-content',
          alignSelf: 'flex-start',
        }}
      >

        <div 
          style={{
            position: 'absolute',
            top: '4px',
            left: '4px',
            right: '4px',
            bottom: '4px',
            border: '2px dashed rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            pointerEvents: 'none',
          }}
        />
        
        <p className={styles.sectionSubText} style={{color: "#B5A49E"}}>Get in touch</p>
        <h3 className={styles.sectionHeadText} style={{color: "white"}}>Contact</h3>
      
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          style={{ minWidth: '100%' }} // Ensure form takes full width
        >
          
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              style={{ background: "#A0897F" }}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              style={{ background: "#A0897F" }}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-y" // Added resize-y
              style={{ 
                background: "#A0897F",
                minHeight: '150px', // Set a minimum height
              }}
            />
          </label>

          <motion.button
            type="submit"
            className="py-3 px-8 outline-none w-fit text-[#fff] font-bold rounded-xl text-xl"
            style={{ background: "#534039" }}
            whileHover={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        ref={magicContainerRef}
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 rounded-3xl overflow-hidden"
        style={{ 
          height: formHeight,
          minHeight: '350px', // Mobile fallback
          maxHeight: '800px', // Optional maximum
        }}
      >
        <MagicCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");