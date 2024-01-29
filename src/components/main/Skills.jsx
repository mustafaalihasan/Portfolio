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
            <img src='../src/assets/html.png' alt='HTML' className='w-[5%] h-[5%]'/>
            <img src='../src/assets/css.png' alt='CSS' className='w-[5%] h-[5%]' />
            <img src='../src/assets/js.png' alt='JavaScript' className='w-[5%] h-[5%]' />
            <img src='../src/assets/react-native.png' alt='React-Native' className='w-[5%] h-[5%]'/>
            <img src='../src/assets/react-js.png' alt='React.js' className='w-[5%] h-[5%]' />
            <img src='../src/assets/c++.png' alt='C++' className='w-[5%] h-[5%]' />
            <img src='../src/assets/threejs.png' alt='Three.js' className='w-[5%] h-[5%]' />

         </div>
        <div className='image-row overflow-x-auto w-full mt-10 flex justify-center gap-10'>
            <img src='../src/assets/tailwind.png' alt='Tailwind' className='w-[5%] h-[5%]' />
            <img src='../src/assets/bootstrap.png' alt='Bootstrap' className='w-[5%] h-[5%]' />
            <img src='../src/assets/vue.png' alt='Vue.js' className='w-[5%] h-[5%]' />
            <img src='../src/assets/angular.png' alt='Angular.js' className='w-[5%] h-[5%]' />
            <img src='../src/assets/next.png' alt='Next.js' className='w-[5%] h-[5%]' />

        </div>

        {/* Back-End */}
        <div className='category'>
          <p className='text-white border-t-2 text-center text-2xl mt-14 bg-gradient-to-b from-purple-800 rounded-full py-1 px-4'>
            BACK-END
          </p>
        </div>
        <div className='image-row overflow-x-auto w-full mt-10 flex justify-center gap-10'>
            <img src='../src/assets/node.png' alt='Node.js' className='w-[5%] h-[5%]' />
            <img src='../src/assets/next.png' alt='Next.js' className='w-[5%] h-[5%]' />
            <img src='../src/assets/express.png' alt='Express.js' className='w-[5%] h-[5%]' />
            <img src='../src/assets/django.png' alt='Django' className='w-[5%] h-[5%]' />
            <img src='../src/assets/mongo.png' alt='MongoDB' className='w-[5%] h-[5%]' />
            <img src='../src/assets/.net.png' alt='ASP.NET Core' className='w-[5%] h-[5%]' />
            <img src='../src/assets/c++.png' alt='C++' className='w-[5%] h-[5%]' />

        </div>
        <div className='image-row overflow-x-auto w-full mt-10 flex justify-center gap-10'>
            <img src='../src/assets/c-sharp.png' alt='C#' className='w-[5%] h-[5%]' />
            <img src='../src/assets/python.png' alt='Python' className='w-[5%] h-[5%]' />
            <img src='../src/assets/sql.png' alt='SQL' className='w-[5%] h-[5%]' />


        </div>

        {/* Technologies */}
        <div className='category'>
          <p className='text-white border-t-2 text-center text-2xl mt-14 bg-gradient-to-b from-purple-800 rounded-full py-1 px-4'>
            TECHNOLOGIES
          </p>
        </div>
        <div className='image-row overflow-x-auto w-full mt-10 flex justify-center gap-10'>
          <img src='../src/assets/figma.png' alt='Figma' className='w-[5%] h-[5%]' />
          <img src='../src/assets/adobe.png' alt='Adobe' className='w-[5%] h-[5%]' />
          <img src='../src/assets/git.png' alt='Git' className='w-[5%] h-[5%]' />
          <img src='../src/assets/tableau.svg' alt='Tableau' className='w-[5%] h-[5%]' />
          <img src='../src/assets/powerbi.png' alt='Power BI' className='w-[5%] h-[5%]' />

        </div>

        {/* 3D and Game */}
        <div className='category'>
          <p className='text-white border-t-2 text-center text-2xl mt-14 bg-gradient-to-b from-purple-800 rounded-full py-1 px-4'>
            3D & GAME CREATION
          </p>
        </div>
        <div className='image-row overflow-x-auto w-full mt-8 flex justify-center gap-10'>
            <img src='../src/assets/blender.png' alt='Blender' className='w-[5%] h-[5%]' />
            <img src='../src/assets/maya.png' alt='Autodesk Maya' className='w-[5%] h-[5%]' />
            <img src='../src/assets/c4d.png' alt='Cinema 4D Maxon' className='w-[5%] h-[5%]' />
            <img src='../src/assets/unity.png' alt='Unity' className='w-[5%] h-[5%]' />
            <img src='../src/assets/unreal.png' alt='Unreal Engine' className='w-[5%] h-[5%]' />
            <img src='../src/assets/substance.png' alt='Substance Painter' className='w-[5%] h-[5%]' />
            <img src='../src/assets/marvelous.jpg' alt='Marvelous Designer' className='w-[5%] h-[5%] rounded-md' />
        </div>
        <div className='image-row overflow-x-auto w-full mt-8 flex justify-center gap-10'>
            <img src='../src/assets/zbrush.png' alt='ZBrush' className='w-[5%] h-[5%]' />
            <img src='../src/assets/3ds.png' alt='3DS Max' className='w-[5%] h-[5%]' />
            <img src='../src/assets/fuse.png' alt='Fuse' className='w-[5%] h-[5%]' />


        </div>

      </div>

      <div className='text-white text-4xl font-bold uppercase text-center mt-32'> 
      Certifications 

      <div className='certifications flex flex-col items-center relative mt-32 justify-center'>
        {/* ITIL V4 */}
        <div className='flex items-center absolute gap-4 p-4 w-2/5 h-48 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-purple-800 hover:bg-gradient-to-t hover:from-purple-800 rounded-3xl'>
          <img src='../src/assets/itil.png' alt='ITIL V4 Foundation' className='w-[25%]' />
          <p className='font-normal text-2xl'>
            ITIL V4 Foundation Certified
          </p>
        </div>
      </div>


      <div className='certifications flex flex-col items-center relative mt-60 justify-center'>
        {/* POWER BI */}
        <div className='flex items-center absolute gap-4 p-4 w-2/5 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-yellow-400 hover:bg-gradient-to-t hover:from-yellow-400 rounded-3xl'>
          <img src='../src/assets/powerbilogo.png' alt='Power BI' className='w-[50%] h-[50%]' />
          <p className='text-2xl text-black font-semibold'>
            Certified Power BI Data Analyst
          </p>
        </div>
      </div>


      <div className='certifications flex flex-col items-center relative mt-60 justify-center'>
        {/* Google */}
        <div className='flex items-center absolute gap-4 p-4 w-2/5 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-purple-800 hover:bg-gradient-to-t hover:from-purple-800 rounded-3xl'>
          <img src='../src/assets/google.png' alt='Google' className='w-[25%] h-[50%]' />
          <p className='text-2xl text-white font-semibold'>
            CERTIFIED GOOGLE DEVELOPER
          </p>
        </div>
      </div>


      <div className='certifications flex flex-col items-center relative mt-60 justify-center'>
        {/* Apple */}
        <div className='flex items-center absolute gap-20 p-4 w-2/5 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-purple-800 hover:bg-gradient-to-t hover:from-purple-800 rounded-3xl'>
          <img src='../src/assets/apple.png' alt='Apple' className='w-[20%] h-[50%]' />
          <p className='text-2xl text-white font-semibold'>
            CERTIFIED APPLE DEVELOPER
          </p>
        </div>
      </div>

      <div className='certifications flex flex-col items-center relative mt-60 justify-center'>
        {/* AWS */}
        <div className='flex items-center absolute gap-20 p-4 w-2/5 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-[#232E3D] hover:bg-gradient-to-t hover:from-[#232E3D] rounded-3xl'>
          <img src='../src/assets/aws.png' alt='AWS' className='w-[40%] h-[50%]' />
          <p className='text-2xl text-white font-semibold'>
            CERTIFICATION <br/> [IN PROGRESS]
          </p>
        </div>
      </div>

      <div className='certifications flex flex-col items-center relative mt-60 justify-center'>
        {/* DevOps */}
        <div className='flex items-center absolute gap-20 p-4 w-2/5 border-l-2 border-r-2 justify-center mt-32 bg-gradient-to-b from-white hover:bg-gradient-to-t hover:from-white rounded-3xl'>
          <img src='../src/assets/devops.png' alt='AWS' className='w-[20%] h-[50%]' />
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

