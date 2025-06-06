import React from 'react'
import { SectionWrapper } from '../hoc'
import { github2, linkedin } from '../assets'

const Footer = () => {
  return (
    <>
      <footer className="w-full py-4 bg-transparent flex justify-center items-center">
        <p className="text-sm" style ={{ color: "#534039" }}>
          © {new Date().getFullYear()} John Fang-Wu. All rights reserved.
        </p>
      </footer>

      <div className="flex justify-center items-center mt-4 ">
        <a href="https://www.github.com/j-fangwu" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-70 transition-opacity">
          <img src={github2} alt="GitHub" className="w-12 h-12" />
        </a>
        <a href="https://www.linkedin.com/in/john-fang-wu/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-70 transition-opacity">
          <img src={linkedin} alt="LinkedIn" className="w-12 h-12" />
        </a>
      </div>
    </>
  )
}

export default SectionWrapper(Footer, "footer");