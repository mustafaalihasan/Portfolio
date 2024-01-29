import React from 'react';
import { FaDownload, FaCopy, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const handleDownload = () => {
    const pdfUrl = 'your_pdf_url.pdf'; // Replace with the actual URL of your PDF file
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'your_file_name.pdf'; // Specify the desired file name
    link.click();
  };

  const handleCopyToClipboard = () => {
    const emailToCopy = 'mustali50@gmail.com';
    navigator.clipboard.writeText(emailToCopy).then(
      () => alert('Email address copied to clipboard!'),
      (err) => console.error('Error copying email to clipboard:', err)
    );
  };

  const handleCopyNumberToClipboard = () => {
    const numberToCopy = '+1 647 879 0863';
    navigator.clipboard.writeText(numberToCopy).then(
      () => alert('Phone number copied to clipboard!'),
      (err) => console.error('Error copying phone number to clipboard:', err)
    );
  };

  return (
    <div className='mt-40 text-black h-[100vh]'>
      <h1 className='text-center text-6xl font-bold bg-gradient-to-tr from-purple-700 to-pink-600 bg-clip-text text-transparent'>
        CONTACT ME
      </h1>

      <div className='flex flex-col justify-center text-center items-center gap-14 mt-14'>
        <div>
          <p className='text-white'>
            Hire me with this! :D
          </p>
          <button
            onClick={handleDownload}
            className='text-2xl flex flex-row gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-600 border-t-2 border-b-2 hover:bg-gradient-to-l hover:scale-110 hover:border-l-2 hover:border-r-2 hover:border-t-0 hover:border-b-0 font-semibold'
          >
            <FaDownload />
            Download CV
          </button>
        </div>
       
        <div>
          <p className='text-white'>
            Email me here! :)
          </p>

          <button
            onClick={handleCopyToClipboard}
            className='text-2xl flex flex-row gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-600 border-t-2 border-b-2 hover:bg-gradient-to-l hover:scale-110 hover:border-l-2 hover:border-r-2 hover:border-t-0 hover:border-b-0 font-semibold'
          >
            <FaCopy />
            mustali50@gmail.com
          </button>
        </div>
        
        <div>
          <p className='text-white'>
            Call me here! :P
          </p>

          <button
            onClick={handleCopyNumberToClipboard}
            className='text-2xl flex flex-row gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-600 border-t-2 border-b-2 hover:bg-gradient-to-l hover:scale-110 hover:border-l-2 hover:border-r-2 hover:border-t-0 hover:border-b-0 font-semibold'
          >
            <FaPhone />
            +1 647 879 0863
          </button>
        </div>

        <div>
          <p className='text-white border-t-4 border-l-4 rounded-2xl p-6 mt-8 mb-20 '>
            Hope you enjoyed! <br/> <br/> Reach out and connect, we can revolutionize the industry with just an idea.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
