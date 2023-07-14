/* eslint-disable no-unused-vars */
import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import Linkedin from '../assets/socials/linkedin.svg'; 
import Twitter from '../assets/socials/twitter.svg'; 
import GitHub from '../assets/socials/github.svg'; 

//motion animation
import{motion} from 'framer-motion';
//variant
import{fadeIn} from '../variants';

const Home = () => {
  
  return (
    <div className=' hero h-screen flex items-center justify-center' id='home'>
      < motion.div className='text-center md:w-1/2'
      variants={fadeIn('up',0.3)}
      initial='hidden'
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}>
        <h1 className='text-primary text-5xl font-extrabold tracking-wider mb-8'>HEY, I'M PRABHAT YADAV</h1>

        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WELCOME ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Here You will see your ideas into reality',
        1000,
        'Transforming visions into interactive realities through front-end expertise',
        1000,
        'where pixels come to life and user experiences thrive',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className='font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400  to-pink-600'
    />
        <p className='text-light text-xl my-8'> I'm a passionate and skilled front-end developer with a strong focus on creating engaging and user-friendly web experiences.
           </p>
        <button className='btn py-4 px-10'>Projects</button>
      </motion.div>
      {/* social */}
      <div className='bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block'>
        <div className='py-1'>
          <a href="" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
            <img src={Linkedin} alt='' className='w-10 h-10'/>
          </a>
        </div>
        <div className='py-1'>
          <a href="" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
            <img src={Twitter} alt='' className='w-10 h-10'/>
          </a>
        </div>
        <div className='py-1'>
          <a href="" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
            <img src={GitHub} alt='' className='w-10 h-10'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;