import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../../../utils/motion';
import { ArrowLongRightIcon, SparklesIcon } from '@heroicons/react/24/solid';

const BlackholeContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='welcome-text text-[13px]'>
            Full Stack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white'
        >
          <div className="flex items-center z-10">
            Hi, my name is{' '}
            <span className='ml-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
              Mustafa
            </span>
          </div>

          <div className="flex items-center h-1/6 w-3/2">
            I am a
            <ArrowLongRightIcon className='w-20 ml-20' />
            <video autoPlay loop muted
            className='w-1/2 ml-2'
            style={{marginTop: '15%' }}
            >
                <source src='../src/assets/scrollVideo.webm' type='video/webm' />
                Your browser does not support the video tag.
              </video>
          </div>

          <div className="flex items-center h-3 mb-[-96px] ">
            <p className='text-sm font-normal ml-2 mt-20 max-w-sm pr-4'> A versatile Full
             Stack Software Engineer,
             passionate <br/> Game Developer, and creative 3D Artist. With a keen <br/> eye for design
              and a love for coding, I bring a unique <br/> blend of technical expertise and
               artistic flair to every project. </p>
          </div>
          <div className="flex items-center mt-2">
            <motion.div className="w-1/2 h-2/3 object-cover ml-2">
              
            </motion.div>
          </div>

        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } }}
        className='w-full flex justify-end'
        variants={slideInFromRight(0.5)}
      >
        <motion.div className="w-4/5 mb-24">
          <video autoPlay loop muted>
            <source src='../src/assets/cutout_1.webm' type='video/webm' />
          </video>
        </motion.div>
      </motion.div>
    </motion.div>

    
  );
};

export default BlackholeContent;