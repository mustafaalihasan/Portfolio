import React from 'react';

const Skills = () => {
  return (
    <div>
      <h1 className='text-center text-6xl font-bold bg-gradient-to-tr from-purple-700 to-pink-600 bg-clip-text text-transparent'>
        SKILLS
      </h1>

      <div className='text-white text-4xl font-bold uppercase text-center mt-14'> Expertise </div>

      <div className='flex flex-col items-center'>
        {/* Front-End */}
        <div className='category'>
          <p className='text-white border-t-2 text-center text-2xl mt-14 bg-gradient-to-b from-purple-800 rounded-full py-1 px-4'>
            FRONT-END
          </p>
        </div>
        <div className='image-row overflow-x-auto w-full mt-10 flex justify-center gap-10'>
          <img src='/html.png' alt='HTML' className='w-[5%] h-[5%]'/>
          <img src='/css.png' alt='CSS' className='w-[5%] h-[5%]' />
          <img src='/js.png' alt='JavaScript' className='w-[5%] h-[5%]' />
          <img src='/react-native.png' alt='React-Native' className='w-[5%] h-[5%]'/>
          <img src='/react-js.png' alt='React.js' className='w-[5%] h-[5%]' />
          <img src='/c++.png' alt='C++' className='w-[5%] h-[5%]' />
          <img src='/threejs.png' alt='Three.js' className='w-[5%] h-[5%]' />


         </div>
        <div className='image-row overflow-x-auto w-full mt-10 flex justify-center gap-10'>
            <img src='/tailwind.png' alt='Tailwind' className='w-[5%] h-[5%]' />
            <img src='/bootstrap.png' alt='Bootstrap' className='w-[5%] h-[5%]' />
            <img src='/vue.png' alt='Vue.js' className='w-[5%] h-[5%]' />
            <img src='/angular.png' alt='Angular.js' className='w-[5%] h-[5%]' />
            <img src='/next.png' alt='Next.js' className='w-[5%] h-[5%]' />

        </div>

        {/* Back-End */}
        <div className='category'>
          <p className='text-white border-t-2 text-center text-2xl mt-14 bg-gradient-to-b from-purple-800 rounded-full py-1 px-4'>
            BACK-END
          </p>
        </div>
        <div className='image-row overflow-x-auto w-full mt-10 flex justify-center gap-10'>
            <img src='/node.png' alt='Node.js' className='w-[5%] h-[5%]' />
            <img src='/next.png' alt='Next.js' className='w-[5%] h-[5%]' />
            <img src='/express.png' alt='Express.js' className='w-[5%] h-[5%]' />
            <img src='/django.png' alt='Django' className='w-[5%] h-[5%]' />
            <img src='/mongo.png' alt='MongoDB' className='w-[5%] h-[5%]' />
            <img src='/.net.png' alt='ASP.NET Core' className='w-[5%] h-[5%]' />
            <img src='/c++.png' alt='C++' className='w-[5%] h-[5%]' />

        </div>
        <div className='image-row overflow-x-auto w-full mt-10 flex justify-center gap-10'>
            <img src='/c-sharp.png' alt='C#' className='w-[5%] h-[5%]' />
            <img src='/python.png' alt='Python' className='w-[5%] h-[5%]' />
            <img src='/sql.png' alt='SQL' className='w-[5%] h-[5%]' />


        </div>

        {/* Technologies */}
        <div className='category'>
          <p className='text-white border-t-2 text-center text-2xl mt-14 bg-gradient-to-b from-purple-800 rounded-full py-1 px-4'>
            TECHNOLOGIES
          </p>
        </div>
        <div className='image-row overflow-x-auto w-full mt-10 flex justify-center gap-10'>
          <img src='/figma.png' alt='Figma' className='w-[5%] h-[5%]' />
          <img src='/adobe.png' alt='Adobe' className='w-[5%] h-[5%]' />
          <img src='/git.png' alt='Git' className='w-[5%] h-[5%]' />
          <img src='/tableau.svg' alt='Tableau' className='w-[5%] h-[5%]' />
          <img src='/powerbi.png' alt='Power BI' className='w-[5%] h-[5%]' />

        </div>

        {/* 3D and Game */}
        <div className='category'>
          <p className='text-white border-t-2 text-center text-2xl mt-14 bg-gradient-to-b from-purple-800 rounded-full py-1 px-4'>
            3D & GAME CREATION
          </p>
        </div>
        <div className='image-row overflow-x-auto w-full mt-8 flex justify-center gap-10'>
            <img src='/blender.png' alt='Blender' className='w-[5%] h-[5%]' />
            <img src='/maya.png' alt='Autodesk Maya' className='w-[5%] h-[5%]' />
            <img src='/c4d.png' alt='Cinema 4D Maxon' className='w-[5%] h-[5%]' />
            <img src='/unity.png' alt='Unity' className='w-[5%] h-[5%]' />
            <img src='/unreal.png' alt='Unreal Engine' className='w-[5%] h-[5%]' />
            <img src='/substance.png' alt='Substance Painter' className='w-[5%] h-[5%]' />
            <img src='/marvelous.jpg' alt='Marvelous Designer' className='w-[5%] h-[5%] rounded-md' />
        </div>
        <div className='image-row overflow-x-auto w-full mt-8 flex justify-center gap-10'>
            <img src='/zbrush.png' alt='ZBrush' className='w-[5%] h-[5%]' />
            <img src='/3ds.png' alt='3DS Max' className='w-[5%] h-[5%]' />
            <img src='/fuse.png' alt='Fuse' className='w-[5%] h-[5%]' />


        </div>

      </div>

      <div className='text-white text-4xl font-bold uppercase text-center mt-32'> 
      Certifications 

      <div className='certifications flex flex-col items-center relative mt-32 justify-center'>
        {/* ITIL V4 */}
        <div className='flex items-center absolute gap-4 p-4 w-2/5 h-48 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-purple-800 hover:bg-gradient-to-t hover:from-purple-800 rounded-3xl'>
          <img src='/itil.png' alt='ITIL V4 Foundation' className='w-[25%]' />
          <p className='font-normal text-2xl'>
            ITIL V4 Foundation Certified
          </p>
        </div>
      </div>


      <div className='certifications flex flex-col items-center relative mt-60 justify-center'>
        {/* POWER BI */}
        <div className='flex items-center absolute gap-4 p-4 w-2/5 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-yellow-400 hover:bg-gradient-to-t hover:from-yellow-400 rounded-3xl'>
          <img src='/powerbilogo.png' alt='Power BI' className='w-[50%] h-[50%]' />
          <p className='text-2xl text-black font-semibold'>
            Certified Power BI Data Analyst
          </p>
        </div>
      </div>


      <div className='certifications flex flex-col items-center relative mt-60 justify-center'>
        {/* Google */}
        <div className='flex items-center absolute gap-4 p-4 w-2/5 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-purple-800 hover:bg-gradient-to-t hover:from-purple-800 rounded-3xl'>
          <img src='/google.png' alt='Google' className='w-[25%] h-[50%]' />
          <p className='text-2xl text-white font-semibold'>
            CERTIFIED GOOGLE DEVELOPER
          </p>
        </div>
      </div>


      <div className='certifications flex flex-col items-center relative mt-60 justify-center'>
        {/* Apple */}
        <div className='flex items-center absolute gap-20 p-4 w-2/5 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-purple-800 hover:bg-gradient-to-t hover:from-purple-800 rounded-3xl'>
          <img src='/apple.png' alt='Apple' className='w-[20%] h-[50%]' />
          <p className='text-2xl text-white font-semibold'>
            CERTIFIED APPLE DEVELOPER
          </p>
        </div>
      </div>

      <div className='certifications flex flex-col items-center relative mt-60 justify-center'>
        {/* AWS */}
        <div className='flex items-center absolute gap-20 p-4 w-2/5 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-[#232E3D] hover:bg-gradient-to-t hover:from-[#232E3D] rounded-3xl'>
          <img src='/aws.png' alt='AWS' className='w-[40%] h-[50%]' />
          <p className='text-2xl text-white font-semibold'>
            CERTIFICATION <br/> [IN PROGRESS]
          </p>
        </div>
      </div>

      <div className='certifications flex flex-col items-center relative mt-60 justify-center'>
        {/* DevOps */}
        <div className='flex items-center absolute gap-20 p-4 w-2/5 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-white hover:bg-gradient-to-t hover:from-white rounded-3xl'>
          <img src='/devops.png' alt='AWS' className='w-[20%] h-[50%]' />
          <p className='text-2xl text-white font-semibold'>
            CERTIFICATION <br/> [IN PROGRESS]
          </p>
        </div>
      </div>




      </div>


    </div>
  );
};

export default Skills;

