/* eslint-disable no-unused-vars */
import React from 'react';
import Headline from '../shared/Headline';
import skills from '../../public/skills';

//motion animation
import{motion} from 'framer-motion';
//variant
import{fadeIn} from '../variants';


const About = () => {
    return (
        <div className='max-w-7xl mx-auto my-14 md:py-8 px-7' id='about'>
            <Headline  title={'ABOUT ME'} subtitle={" I'm a front-end enthusiast with a passion for creating captivating digital experiences. Proficient in HTML, CSS, JavaScript, and React.js, I love transforming ideas into interactive and visually stunning websites. With a keen eye for design and a dedication to delivering seamless user interfaces, I strive to bring creativity and functionality together in every project I undertake. Let's collaborate and bring your web vision to reality!" }/>

            {/* About content */}
            <div className='flex flex-col md:flex-row items-start justify-start'>
                {/* leftside */}
                <motion.div className='md:w-1/2 my-8'
                variants={fadeIn('right',0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{once:false,amount:0.5}}>
                     <h4 className='text-2xl font-bold mb-8'>Get To Know Me!</h4>
                     <div className='md:w-10/12 text-lg text-[#666] mb-8'>
                     <p className='mb-3'>I'm a <strong>Frontend Web Developer</strong> building the Front-end of websites and Web Application that leads to the success of the overall product.Check out some of my work in the <b>Projects</b> section</p>
                     <p className='mb-3 '>
                        I also practice <b>DSA in  Java</b> and I share all of my learnings in <b>Web Development and DSA</b> on my social Handles and Dev Community. Feel free to connect with me on my Social Handles. 
                     </p>
                     <p className='mb-3'>I'm open to <strong>Job</strong> Opportunities where I can contribute,learns and grow.If you have a good opportunity that matches my skills and expertise then don't hesitate to <b>Contact</b> me.</p>

                     </div>
                </motion.div>
                {/* rightside */}
                <motion.div className='md:w-1/2 my-8'
                variants={fadeIn('left',0.5)}
                initial='hidden'
                whileInView={"show"}
                viewport={{once:false,amount:0.5}}>
                    <h4 className='text-2xl    font-bold mb-8'>My Skills</h4>
                    <div className='flex flex-wrap gap-3 md:w-10/12'>
                        {
                            skills.map(skill => <p key={skill.id} className='bg-slate-300 text-light py-2 px-4 rounded'>{skill.title}</p>)
                        }
                    </div>
                </motion.div>
            </div>
        </div>
    ); 
};

export default About;