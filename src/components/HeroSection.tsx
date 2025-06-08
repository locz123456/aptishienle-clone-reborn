import React from 'react';
import { Button } from 'antd';

const HeroSection = () => {
  return (
    <section className="min-h-[60vh] md:min-h-[80vh] flex items-center relative text-white">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://www.aptishienle.com/static/media/background.8beaefc49a92d37dd202.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-10 bg-black bg-opacity-30" />
      <div className="px-4 md:px-8 lg:px-[160px] relative z-20">
        <div className="animate-fade-in">
          <p className="text-xl md:text-2xl lg:text-[33px] mb-2 md:mb-4">The Key To Your Future</p>
          
          <div className='flex items-center gap-2 md:gap-4'>
            <span className="text-4xl md:text-6xl lg:text-[88px] font-light mb-4 md:mb-8 bg-[#19243c] p-2 md:p-3 w-fit">
              <span className='font-bold font-playfair'>Hien Le </span> Aptis
            </span> 
          </div>
          <div className='max-w-[150px] flex items-center gap-2 cursor-pointer'>
            <div 
              className="bg-white text-[#1a2942] hover:bg-gray-100 py-2 md:py-3 px-3 md:px-4 text-base md:text-lg mb-8 md:mb-16 flex items-center justify-center border-l-4 border-[#51be78]"
            >
              Register Now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
