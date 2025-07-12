import React, { useState } from 'react';

const HeroSection = () => {
  return (
    <section >
      <img className='md:hidden' src="https://i.postimg.cc/kgS772jH/BannerM.jpg" alt="" />
      <div className="md:min-h-[78vh] flex items-center relative text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover hidden md:block"
          style={{
            backgroundImage: "url('banner.jpg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      <div className="hidden transition-all duration-300 ease-in-out relative z-10 md:flex items-center justify-center bottom-[40px] left-1/2 -translate-x-1/2">
        <span 
          className="bg-main text-white rounded-full px-8 py-5 text-lg font-bold flex items-center justify-center shadow-lg shadow-black/30 cursor-pointer hover:shadow-black/40" 
          style={{ height: 'auto' }}
          onClick={() => { 
            const element = document.getElementById('consultationBanner');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          TƯ VẤN MIỄN PHÍ
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
