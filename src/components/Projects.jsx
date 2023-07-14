/* eslint-disable no-unused-vars */
import React from 'react';
import Headline from '../shared/Headline';
import projects from '../../public/projects';

//motion animation
import{motion} from 'framer-motion';
//variant
import{fadeIn} from '../variants';


const Projects = () => {
    return (
        <div className='max-w-7xl ms-auto md:pu-8 px-7' id='projects'>
            <Headline title={'PROJECTS'} subtitle={'Here you will find some of my Projects where I have put forth my knowledge and skills to showcase the work.'} />

            <div>
                {
                    projects.map(project => <div key={project.id}> 
                        <motion.div className='projects item-center my-20'
                        variants={fadeIn('up',0.3)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{once:true,amount:0.2}}>
                            <img src={project.image} alt='' />
                            <div className='md:w-10/12 text-center md:text-left px-2'>
                                <h4 className='text -2xl font-bold mb-4'>{project.name}</h4>
                                <p className='text-lg text-[#666] leading-6 mb-4'>{project.description}</p>
                                <button className='btn py-3 px-7 mb-3'>Case Study</button>
                            </div>
                        </motion.div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;