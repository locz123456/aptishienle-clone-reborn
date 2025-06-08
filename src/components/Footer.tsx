import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B2A4E] text-white py-11">
      <div className="lg:px-[160px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="https://www.aptishienle.com/static/media/logo.c96a95d470df475d3bd2.png"
                alt="Hien Le Aptis"
                width={70}
                height={70}
                className="bg-white p-1"
              />
              <div>
                <h3 className="text-[24px] font-bold">Hien Le Aptis</h3>
                <p className="text-sm text-[#9ca3ab] font-semibold">The Key To Your Future</p>
              </div>
            </div>

            <p className="text-[#9ca3ab] max-w-xl font-semibold text-[16px]">
              Chúng tôi cung cấp các Khóa học Aptis cam kết đầu ra và Bộ tài liệu tự ôn Aptis chất lượng cao, giúp học viên đạt được mục tiêu trong học tập và sự nghiệp.
            </p>

            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-lg flex items-center justify-center"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.477 2.04 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.909.252 1.871.388 2.869.388 5.523 0 10-4.145 10-9.259C22 6.146 17.523 2 12 2.04Z"></path></svg>
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-lg"
              >
                <span class="text-xs sm:text-sm font-bold">Zalo</span>
              </a>
            </div>
          </div>

          <div className="flex justify-start md:justify-center">
            <div className="space-y-4">
              <h4 className="text-[18px] font-semibold leading-none">Thông tin liên hệ</h4>
              <div className="w-[50px] h-[5px] bg-[#3b4f84] leading-none"></div>
              <div className="flex gap-3 text-[#9ca3ab] font-semibold">
                <Mail className="text-gray-400 mt-1" size={25} />
                <div>
                  <p className="text-[16px] text-gray-400">Email</p>
                  <a 
                    href="mailto:aptisrealtests@gmail.com"
                    className="hover:text-gray-300 transition-colors"
                  >
                    aptisrealtests@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3 text-[#9ca3ab] font-semibold">
                <Phone className="text-gray-400 mt-1" size={25} />
                <div>
                  <p className="text-[16px] text-gray-400 " >Điện thoại</p>
                  <a 
                    href="tel:0523413488"
                    className="hover:text-gray-300 transition-colors"
                  >
                    0523413488
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 pb-4 border-t border-white/10 text-center text-sm text-[#9ca3ab] font-semibold">
          © 2025 Hien Le Aptis. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
