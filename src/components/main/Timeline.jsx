// src/components/Timeline.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { RiGraduationCapFill } from "react-icons/ri";
import { IoMdBriefcase } from "react-icons/io";


const Timeline = () => {
  return (
    <>
    <div className='experience h-full w-full'>
      <h1 className='text-center text-5xl font-bold bg-gradient-to-tr from-purple-700 to-pink-600 bg-clip-text text-transparent'>
        ABOUT ME
      </h1>
      
      <div className='w-full mx-auto max-w-3xl mt-16'>
      <p className='text-white text-center text-m'>
      I am a results-driven full-stack software engineer with a track record of crafting 
      efficient, user-centric solutions. My diverse project experience showcases a unique 
      blend of technical acumen and a keen eye for detail. Passionate about 3D artistry 
      and game development, I bring a creative edge to problem-solving. Thriving in 
      collaborative environments, I am committed to delivering high-quality work. 
      Currently seeking opportunities to contribute my skills and drive innovation in a 
      forward-thinking team. Let's connect and explore how my passion for technology 
      aligns with your organization's goals.
      </p>
      </div>

      <div className='w-full h-full mt-4 mb-40'>
        <VerticalTimeline lineColor='#fff'>
          <VerticalTimelineElement className='vertical-timeline-element--education text-white'
          iconStyle={{background:'#fff', color: '#030014'}}
          icon={<RiGraduationCapFill/>}
          date='Jan 2019 - Apr 2023'
          >
            <h3 className='text-black font-bold text-2xl'>
              Bachelors of Science in <br/> Computer Science
            </h3>
            <p className='text-black'>
              Trent University, Peterborough, ON, Canada
            </p>

          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--experience text-white'
          iconStyle={{background:'#fff', color: '#030014'}}
          icon={<IoMdBriefcase/>}
          date='July 2023 - Dec 2023'
          >
            <h3 className='text-black font-bold text-2xl'>
              Junior Software Developer - <br/> ERPNOW Solutions Inc.
            </h3>
            <p className='text-black'>
              Toronto, ON, Canada
            </p>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>


    </div>
    </>
  )
};

export default Timeline;