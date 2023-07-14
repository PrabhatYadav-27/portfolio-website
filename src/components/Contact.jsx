/* eslint-disable no-unused-vars */
import React from 'react';
import Headline from '../shared/Headline';

//motion animation
import{motion} from 'framer-motion';
//variant
import{fadeIn} from '../variants';

const Contact = () => {
    return (
        <motion.div className='contact mx-auto mt-8 px-7'id='contact'
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.2}}>
            <Headline title={'CONTACT'} subtitle={'Feel free to conatct me by submitting the form below and I will get back to you as soon as possible'} />

            <div className='md:w-2/3 mx-auto bg-white md:py-16 px-8 py-8 rounded mb-32'
           >
                <form >
                    <label htmlFor=''>Name</label>
                    <input type="text" name='name' id='name' placeholder='Enter your name'  className='p-5'/>
                    <label htmlFor=''>Email</label>
                    <input type="email" name='email' id='email' placeholder='Enter your Email Address'  className='p-5'/>
                    <label htmlFor=''>Message</label>
                    <textarea name='message' id='message' col='80' rows='10' placeholder='Enter your message' className='p-5 mb-8'></textarea>

                    <button className='btn px-14 py-4 shadow-sm'>Submit</button>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;