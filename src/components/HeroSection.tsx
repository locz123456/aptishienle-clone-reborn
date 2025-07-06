import React, { useState } from 'react';

const HeroSection = () => {
  const [showIcons, setShowIcons] = useState(false);
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
        <div className={`absolute flex gap-4 items-center justify-center -top-16 left-1/2 -translate-x-1/2 transition-all duration-300 ${showIcons ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`} style={{zIndex: 20}}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 rounded-full p-3 shadow-lg hover:bg-blue-100 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" alt="Facebook" className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-500 rounded-full p-3 shadow-lg hover:bg-blue-100 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a href="tel:0123456789" className="bg-white text-green-500 rounded-full p-3 shadow-lg hover:bg-green-100 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="Phone" className="w-8 h-8 md:w-12 md:h-12" />
          </a>
        </div>
        <span 
          className="bg-main text-white rounded-full px-8 py-5 text-lg font-bold flex items-center justify-center shadow-lg shadow-black/30 cursor-pointer hover:shadow-black/40" 
          style={{ height: 'auto' }}
          onClick={() => setShowIcons((prev) => !prev)}
        >
          TƯ VẤN MIỄN PHÍ
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
