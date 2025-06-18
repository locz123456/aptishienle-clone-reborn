import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { MenuOutlined, CloseOutlined, SearchOutlined as AntdSearchOutlined, DownOutlined } from '@ant-design/icons';

const TopHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileGioiThieuOpen, setIsMobileGioiThieuOpen] = useState(false);
  const [isMobileThuVienOpen, setIsMobileThuVienOpen] = useState(false);

  const mobileNavItems = [
    { label: 'TRANG CHỦ', link: '#' },
    { 
      label: 'GIỚI THIỆU', 
      link: '#', 
      hasDropdown: true, 
      dropdownItems: [
        { label: 'VỀ APTIS PRO', link: '#' },
        { label: 'ĐỘI NGŨ GIÁO VIÊN', link: '#' },
        { label: 'HỌC VIÊN', link: '#' },
        { label: 'PHƯƠNG PHÁP ĐÀO TẠO', link: '#' },
        { label: 'CHÍNH SÁCH VÀ CAM KẾT', link: '#' },
      ]
    },
    { label: 'KHÓA HỌC APTIS', link: '#' },
    { label: 'THI THỬ', link: '#' },
    { label: 'LIÊN HỆ', link: '#' },
  ];

  return (
    <div className="bg-white py-1 shadow-sm" style={{ backgroundImage: 'url(https://3022.mevivu.net/wp-content/uploads/2024/12/nensach.png)' }}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="lg:hidden flex items-center w-8">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-white focus:outline-none bg-main px-2 py-1 rounded-md">
            <MenuOutlined className="text-md" />
          </button>
        </div>
        <div className="flex-grow flex justify-center lg:flex-grow-0 lg:justify-start">
          <img src="https://cdn.tabtab.me/tabtab-dev/albums/7/images/6852de9531704.png" alt="Aptis Pro Logo" width={100} />
        </div>
        <div className="lg:hidden w-8"></div>
        <div className="flex-grow max-w-xl hidden lg:block">
          <div className="relative flex items-center border-[1px] rounded-full shadow-xl">
            <input
              type="text"
              placeholder="Bạn muốn tìm gì"
              className="w-full py-2 pl-5 pr-12 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2"
            />
            <button className="absolute right-4 text-gray-500 hover:text-[#f97316]">
              <Search size={20} />
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center ml-4">
          <button className="bg-main text-white px-6 py-2 rounded-full font-semibold hover:bg-main transition-colors whitespace-nowrap">
            ĐĂNG KÝ TƯ VẤN
          </button>
          <div className="flex items-center ml-4 gap-2">
            <img src="https://aptisone.vn/wp-content/plugins/gtranslate/flags/svg/en.svg" alt="UK Flag" className="h-5 w-7 object-cover" />
            <img src="https://aptisone.vn/wp-content/plugins/gtranslate/flags/svg/vi.svg" alt="Vietnam Flag" className="h-5 w-7 object-cover" />
          </div>
        </div>
      </div>

      <div className={`fixed top-0 left-0 h-full bg-white w-72 shadow-lg transform transition-transform duration-300 ease-in-out z-[999999] ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Bạn muốn tìm gì"
              className="w-full py-2 px-4 border rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-10"
            />
            <AntdSearchOutlined className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="ml-4 text-gray-600 focus:outline-none">
            <CloseOutlined className="text-md" />
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            {mobileNavItems.map((item, index) => (
              <li key={index}>
                {item.hasDropdown ? (
                  <>
                    <a 
                      href="#" 
                      className="block px-4 py-3 text-gray-500 text-[13px] font-semibold border-b hover:bg-gray-100 flex justify-between items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.label === 'GIỚI THIỆU') {
                          setIsMobileGioiThieuOpen(!isMobileGioiThieuOpen);
                        } else if (item.label === 'THƯ VIỆN') {
                          setIsMobileThuVienOpen(!isMobileThuVienOpen);
                        }
                      }}
                    >
                      {item.label} <DownOutlined className={`text-xs transition-transform duration-300 ${((item.label === 'GIỚI THIỆU' && isMobileGioiThieuOpen) || (item.label === 'THƯ VIỆN' && isMobileThuVienOpen)) ? 'rotate-180' : 'rotate-0'}`} />
                    </a>
                    {((item.label === 'GIỚI THIỆU' && isMobileGioiThieuOpen) || (item.label === 'THƯ VIỆN' && isMobileThuVienOpen)) && (
                      <ul className="bg-gray-50">
                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                          <li key={dropdownIndex}>
                            <a 
                              href={dropdownItem.link} 
                              className="block px-6 py-2 text-gray-500 text-[13px] font-semibold hover:bg-[#2F543C] hover:text-white"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.link} className="text-[13px] block px-4 py-3 text-gray-500 font-semibold border-b hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 flex justify-start gap-4 mt-2">
          <img src="https://aptisone.vn/wp-content/plugins/gtranslate/flags/svg/en.svg" alt="UK Flag" className="w-8 h-auto" />
          <img src="https://aptisone.vn/wp-content/plugins/gtranslate/flags/svg/vi.svg" alt="Vietnam Flag" className="w-8 h-auto" />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999998] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default TopHeader; 