import React from 'react';
import { Button } from 'antd';

const HeroSection = () => {
  return (
    <section >
      <div className="min-h-[22vh] md:min-h-[78vh] flex items-center relative text-white">
        <div 
          className="absolute inset-0 z-0 bg-contain"
          style={{
            backgroundImage: "url('banner.jpg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      <div className="hidden transition-all duration-300 ease-in-out absolute z-10 md:flex items-center justify-center bottom-[70px]
       hover:bottom-[80px] left-1/2 -translate-x-1/2">
        <span 
          className="bg-main text-white rounded-full px-8 py-5 text-lg font-bold flex items-center justify-center
           shadow-lg shadow-black/30 cursor-pointer  hover:shadow-black/40" 
           style={{ height: 'auto' }}
         >
          TƯ VẤN CHƯƠNG TRÌNH
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
