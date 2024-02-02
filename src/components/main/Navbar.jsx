import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='/' className='h-auto w-auto flex flex-row items-center'>
          <img
            src="/M.png"
            alt="Logo"
            className="cursor-pointer hover:animate-slowspin w-10 h-10"
          />

          <span className='font-bold ml-[10px] hidedn md:block text-gray-300'>
            Mustafa Ali Hasan
          </span>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex w-full h-auto items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-8 py-[10px] rounded-full text-gray-200'>
            <a href='#about-me' className='cursor-pointer font-bold'> About Me </a>
            <a href='#skills' className='cursor-pointer font-bold'> Skills </a>
            <a href='#projects' className='cursor-pointer font-bold'> Projects </a>
            <a href='#contact' className='cursor-pointer font-bold'> Contact Me </a>


          </div>

        </div>

        <div className='flex flex-row gap-5'>
          <a href='https://www.instagram.com/itzcaptmoses/' target='_blank'>
            <img
              src='/instagram.png'
              className='cursor-pointer'
              width={24}
              height={24}
            />
          </a>
          <a href='https://www.linkedin.com/in/mustafa-ali-hasan/' target='_blank'>
            <img
              src='/linkedin.png'
              className='cursor-pointer'
              width={24}
              height={24}
            />
          </a>

          <a href='https://github.com/mustafaalihasan' target='_blank'>
            <img
              src='/github.png'
              className='cursor-pointer'
              width={24}
              height={24}
            />
          </a>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar