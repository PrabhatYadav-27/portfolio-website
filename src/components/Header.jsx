import React, { useState } from 'react';
import logo from '../assets/profile-pic.png';
import { Link as ScrollLink } from 'react-scroll'; // Rename the imported component
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';

const Header = () => {
  let links = [ // Rename the variable to lowercase 'links'
    { name: 'Home', link: 'home' },
    { name: 'About Me', link: 'about' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];
  let[open,setOpen] = useState(false);

  return (
    <div className='w-full relative z-[100  '>
      <div className='md:flex items-center justify-between bg-white py-2 md:px-14 px-7 fixed top-0 left-0 right-0 shadow-sm'>
        {/* Logo */}
        <div className='font-bold text-2xl tracking-wide cursor-pointer flex items-center gap-1 '>
          <img src={logo} alt='' className='md:w-12 w-10 h-10' />
          <span className='text-primary hover:text-secondary md:ml-3 ml-2'>PRABHAT YADAV</span>
        </div>
        {/* menu icon */}
        <div onClick={() => setOpen(!open) } className='w-7 h-7 text-primary cursor-pointer absolute right-8 top-6 md:hidden'>
          {open ? <XMarkIcon/> : <Bars3Icon/> }
        </div>

        {/* Nav */}
        <ul className={`md:flex md:items-center items-center md:pb-0 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 bg-white sm:bg-transparent ${open ? "top-12" : "top-[-490px]"}`}>
          {links.map((link) => (
            <li key={link.name} className='md:ml-8 mt-5 font-semibold text-xl vorder-b-2 md:border-b-0 text-right px-7 md:px-4 md:pb-0 cursor-pointer'>
              <ScrollLink to={link.link} 
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-100}
              className='text-light hover:text-secondary duration-500 uppercase'>
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
 