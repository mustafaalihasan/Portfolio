import React, { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const projectsData = [
  { id: 1, 
    title: 'Design Your Shoe', 
    category: 'web-dev', 
    image: '/design_shoe.jpeg', 
    description: 'Full Stack Custom 3D Sneaker Design Web App using React, Three.js and Tailwind CSS. Allows users to create fully customized 3D shoes with OpenAI integration to maximise design creativity.',
    video: '/design_shoe.webm',
    projectLink: 'https://vermillion-taffy-ef8f11.netlify.app/',
    secondLink: 'https://github.com/mustafaalihasan/design_your_shoe'
  },

  { id: 1, 
    title: 'ERPNOW Solutions Inc.', 
    category: 'web-dev', 
    image: '/erpnow.jpeg', 
    description: 'Developed a company website using HTML, CSS, JavaScript, & Bootstrap. Designed the user interface in Figma and implemented responsive design principles.',
    video: '/erpnow.webm',
    projectLink: 'https://mustafaalihasan.github.io/ERPNOW_Consulting_Inc/',
    secondLink: ''
  },

  { id: 2, 
    title: 'Germ Glide', 
    category: 'game', 
    image: '/germ_glide.jpeg', 
    description: '2D Game in C# and Unity where player must avoid bacteria-like obstacles in order to progress. Developed a leaderboard system for multiplayer action storing data on SQLite database.',
    video: '/germ_glide.webm',
    projectLink: 'https://vermillion-taffy-ef8f11.netlify.app/',
    secondLink: '_blank'
  },

  { id: 3, 
    title: 'Mclaren 720S', 
    category: '3d-creation', 
    image: '/car_tunnel.png', 
    description: '',
    video: '/car_tunnel.webm',
  },  // Add more projects with different categories

  { id: 3, 
    title: 'Star Wars Test', 
    category: '3d-creation', 
    image: '/planet.jpeg', 
    description: '',
    video: '/planet.mp4',
  }, 
];

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);


  const filterProjects = (category) => {
    if (category === 'all') {
      return projectsData;
    } else {
      return projectsData.filter((project) => project.category === category);
    }
  };

  const handleTabClick = (category) => {
    setSelectedTab(category);
    setSelectedProject(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseVideo = () => {
    setSelectedProject(null);
  };


  return (
    <div className='mt-64 text-white'>
      <h1 className='text-center text-6xl font-bold bg-gradient-to-tr from-purple-700 to-pink-600 bg-clip-text text-transparent'>
        PROJECTS
      </h1>
      <div className='flex justify-center flex-col items-center mt-14'>
        <p>Click the box for Project <span className=''>Preview</span> </p>
        <p className='flex-row flex gap-2'>Click the <FaExternalLinkAlt/> icon for Project <span>Website</span> </p>
        <p className='flex-row flex gap-2'>Click the <FaGithub/> icon for Project <span>GitHub</span> </p>
      </div>

      {/* Tab buttons */}
      <div className='flex justify-center mt-14 gap-20'>
        <button
          className={` bg-white text-black w-32 rounded-full p-2 tab-btn ${selectedTab === 'all' ? 'active' : 'bg-gradient-to-b from-purple-800 to-[#030014] text-white'}`}
          onClick={() => handleTabClick('all')}
        >
          ALL
        </button>
        <button
          className={`bg-white text-black w-32 rounded-full p-2 tab-btn ${selectedTab === 'web-dev' ? 'active' : 'bg-gradient-to-b from-purple-800 to-[#030014] text-white'}`}
          onClick={() => handleTabClick('web-dev')}
        >
          WEB DEV
        </button>
        <button
          className={`bg-white text-black w-32 rounded-full p-2 tab-btn ${selectedTab === 'game' ? 'active' : 'bg-gradient-to-b from-purple-800 to-[#030014] text-white'}`}
          onClick={() => handleTabClick('game')}
        >
          GAME DEV
        </button>
        <button
          className={`bg-white text-black w-32 rounded-full p-2 tab-btn ${selectedTab === '3d-creation' ? 'active' : 'bg-gradient-to-b from-purple-800 to-[#030014] text-white'}`}
          onClick={() => handleTabClick('3d-creation')}
        >
          3D CREATION
        </button>
      </div>

      {/* Project cards based on the selected tab */}
      <div className='flex flex-wrap justify-center mt-20 gap-8'>
        {filterProjects(selectedTab).map((project) => (
          <div 
          key={project.title} 
          className='border-t-2 border-b-2 border-purple-800 hover:scale-105 hover:border-t-8 hover:border-b-8 transition-all ease-in-out duration-300 rounded-3xl bg-slate-900 w-full max-w-xs h-full p-4 text-center'
          onClick={() => handleProjectClick(project)}
          >
            {project.projectLink ? (
              <h3 className='mt-2 flex justify-between text-white  cursor-pointer'>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  <span className='hover:text-blue-500'><FaExternalLinkAlt /></span>
                </a>
              <span className={project.secondLink ? "" : "mr-[4.25em]"}>{project.title}</span>
              {project.secondLink && (
                <a href={project.secondLink} target="_blank" rel="noopener noreferrer" className='flex justify-end'>
                  <span className='hover:text-blue-500'><FaGithub /></span>
                </a>
              )}
            </h3>

            ) : (
              <h3 className='mt-2'>{project.title}</h3>
            )}
            <img src={project.image} className='w-full rounded-xl mt-6 mb-6 object-cover' />
            <p>{project.description}</p>
            {/* Other project details */}
          </div>
        ))}
      </div>

            {/* Video player */}
      {selectedProject && (
        <>
          <div 
            className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75' 
            onClick={handleCloseVideo}
          />
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <video 
              controls
              className='w-full max-w-2xl'
              src={selectedProject.video} 
              type='video/mp4'
              autoPlay
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Projects;
