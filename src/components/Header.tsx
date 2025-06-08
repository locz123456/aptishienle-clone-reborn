import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`transition-all duration-100 ease-in-out ${
      isScrolled 
        ? 'fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm' 
        : 'bg-transparent -translate-y-1'
    }`}>
      <div className="h-[112px] flex lg:px-[160px] mx-auto px-0">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src="https://www.aptishienle.com/static/media/logo.c96a95d470df475d3bd2.png" 
              alt="logo" 
              className="w-20 h-20" 
            />
          </div>
          <div className='font-bold text-[#1B2A4E]'>
            <span className="text-[35px] font-playfair">Hien Le <span className='font-light'>Aptis</span></span>
            <p className="text-[16px] leading-none">Aptis Real Tests</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
