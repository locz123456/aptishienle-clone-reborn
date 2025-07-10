import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const gioiThieuItems = [
    { label: 'VỀ APTIS PRO', link: '#' },
    { label: 'ĐỘI NGŨ GIÁO VIÊN', link: '#' },
    { label: 'CHÍNH SÁCH VÀ CAM KẾT', link: '#' },
  ];

  const thuVienItems = [
    { label: 'TÀI LIỆU VỀ APTIS', link: '#' },
    { label: 'TÀI LIỆU TIẾNG ANH', link: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`hidden lg:block transition-all duration-100 ease-in-out bg-main ${
      isScrolled 
        ? 'fixed top-0 left-0 right-0 z-50 shadow-sm'
        : ''
    }`}>
      <div className="py-5 flex mx-auto px-0 justify-center items-center">
        <nav>
          <ul className="flex items-center gap-8 text-white font-bold text-sm">
            <li>
              <a href="#" className="hover:bg-white hover:text-main px-6 py-3 rounded-full">TRANG CHỦ</a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:bg-white hover:text-main px-6 py-3 rounded-full">GIỚI THIỆU <DownOutlined className="text-xs ml-1" /></a>
              <ul className="absolute top-full left-1/2 -translate-x-1/4 w-max bg-white text-[#1B2A4E] shadow-lg rounded-md mt-4
               overflow-hidden z-[999999] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
                p-4 before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-2 before:w-0 before:h-0 before:border-l-8
                 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white">
                  {gioiThieuItems.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={item.link} 
                        className={`block rounded-md px-4 py-2 ${'hover:bg-main hover:text-white'}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
            </li>
            <li>
              <a href="#" className="hover:bg-white hover:text-main px-6 py-3 rounded-full" onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('pricingTwo');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}>KHÓA HỌC APTIS</a>
            </li>
            <li>
              <a href="#" className="hover:bg-white hover:text-main px-6 py-3 rounded-full">LỊCH KHAI GIẢNG</a>
            </li>
            <li>
              <a href="#" className="hover:bg-white hover:text-main px-6 py-3 rounded-full">THI THỬ FREE</a>
            </li>
            <li>
              <a href="#" className="hover:bg-white hover:text-main px-6 py-3 rounded-full">LIÊN HỆ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
