import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2982ca] lg:px-[80px] text-white py-8 lg:py-11">
      <div className="lg:px-[60px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col items-start ">
            <div className="flex flex-row items-start ">
              <img
                src="https://cdn.tabtab.me/tabtab-dev/albums/7/images/6852de9531704.png"
                alt="APTIS PRO"
                width={170}
                height={170}
                className="p-1 rounded w-[100px] h-[100px] bg-white"
              />
              <div className="ml-2 text-lg">
                <p className="font-bold">Aptis Pro</p>
                <p className="text-sm text-gray-300">Học Tinh Hoa ,Điểm Bứt Phá nữa</p>
              </div>
            </div>
            <p className='lg:w-80 mb-8 mt-2 lg:mb-0 text-sm text-gray-300'>
              AptisPro – luyện thi Aptis với nền tảng thi thử duy nhất mô phỏng 100% kỳ thi thật
            </p>
          </div>

          <div>
            <ul className="space-y-1 text-[14px] lg:text-[16px] font-medium">
              <h4 className="text-[18px] lg:text-[20px] font-bold uppercase mb-2">Thông tin liên hệ</h4>
              <li>Trung tâm luyện thi APTIS PRO</li>
              <li>Hotline: 0965 483 350</li>
              <li>Gmail: Aptisone.vn@gmail.com</li>
              <li>Fanpage: Aptis PRO - Thi 1 Lần Là Đạt</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] lg:text-[20px] font-bold uppercase mb-2">Danh sách khóa học</h4>
            <ul className="space-y-1 text-[14px] lg:text-[16px] font-medium">
              <li>Khóa học B1 Aptis</li>
              <li>Khóa học B2 Aptis</li>
              <li>Khóa học Master C Aptis</li>
            </ul>
          </div>

          <div>
            <div>
              <span className="font-bold uppercase text-[14px] lg:text-[16px]">Follow us</span>
              <div className="flex gap-3 mt-2">
                <a href="#" className="hover:bg-extra p-1 rounded-md flex items-center justify-center">
                  <img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg' className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]" />
                </a>
                <a href="#" className="hover:bg-extra p-1 rounded-md flex items-center justify-center">
                  <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg' className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]" />
                </a>
                <a href="#" className="hover:bg-extra p-1 rounded-md flex items-center justify-center">
                  <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg' className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]" />
                </a>
                <a href="#" className="hover:bg-extra p-1 rounded-md flex items-center justify-center">
                  <img src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-10 pt-6 border-t border-white/10 text-center text-xs lg:text-sm text-[#d1e7c6] font-semibold">
          © 2025 APTIS PRO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
