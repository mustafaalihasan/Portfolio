import React from 'react';
import BlackholeContent from '../sub/BlackholeContent';

const Blackhole = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        className="blackhole_vid rotate-180 absolute top-[-40%] left-0 z-[1] w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/blackhole.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <BlackholeContent />
    </div>
  );
};

export default Blackhole;