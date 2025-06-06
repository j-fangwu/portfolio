import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`} style={{ backgroundColor: '#534039' }} >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src = {logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[20px] cursor-pointer flex">
            <span className = "sm:block hidden"> | Portfolio </span>
          </p>
        </Link>
        <ul className = "list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
        <li 
          key={link.id}
          className={`${
            active === link.title
              ? "text-white opacity-70"
              : "text-white"
          } hover:opacity-70 text-[18px] font-medium cursor-pointer transition-opacity duration-300`}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
          ))}
        </ul>
        
        {/* Mobile Navigation Bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src ={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)} 
          />
          <div 
  className={`${
    !toggle ? 'opacity-0 translate-y-[-10px] pointer-events-none' : 'opacity-100 translate-y-0'
  } transition-all duration-300 ease-in-out p-6 brown-gradient absolute top-20 right-0 mx-4 my-5 min-w-[140px] z-10 rounded-xl`}
>
            <ul className = "list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white opacity-70"
                    : "text-white"
                } hover:opacity-70 text-[18px] font-medium cursor-pointer transition-opacity duration-300 font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar