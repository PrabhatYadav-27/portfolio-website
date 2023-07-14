/* eslint-disable no-unused-vars */
import React from 'react'; 
import linkedin from '../assets/icons-white/linkedin-white.png';
import twitter from '../assets/icons-white/twitter-ico.png';
import github from '../assets/icons-white/github-white.png';
 


const Footer = () => {
  return (
    <div className='bg-black md:h-96 px-7'>
      <div className='max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between'>
        {/* logo and description */}
        <div className='md:w-2/5 my-3'>
          <h4 className='text-white font-bold text-2xl tracking-wide'>PRABHAT YADAV</h4>
          <p className='mt-5 text-sm leading-7 text-[#eee]'>A Frontend Developer building UI  and Web Application.</p>

        </div>
        {/* social icon */}
        <div className='my-3'>
            <h4 className='text-white font-bold text-2xl tracking-wide'>SOCIAL</h4>
            <div className='mt-5 flex gap-7 '>
              <a href=''className='ml-1'><img src={linkedin} alt='' className='w-7 h-7'/></a>
              <a href=''className='ml-1'><img src={twitter} alt='' className='w-7 h-7'/></a>
              <a href=''className='ml-1'><img src={github} alt='' className='w-7 h-7'/></a>
            </div>
        </div>

      </div>

      <hr className='text-slate-50 opacity-30 px-7'/>
      <div >
        <p className='md:my-10 py-10 md:py-0 text-sm leading-7 text-[#eee] text-center' >© Copyright 2023. Made by PRABHAT YADAV</p>
      </div>
    </div>
  );
};

export default Footer;