import React from 'react';
import { Mail, Phone } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-[#1B2A4E] text-white py-2">
      <div className="lg:px-[160px] mx-auto py-2">
        <div className="flex justify-start items-center gap-6 text-sm md:flex-row flex-col">
          <a 
            href="mailto:aptisrealtests@gmail.com" 
            className="flex items-center gap-2 text-gray-400 hover:text-[#f97316] transition-colors"
          >
            <Mail size={16} />
            <span>aptisrealtests@gmail.com</span>
          </a>
          <a 
            href="tel:0523413488" 
            className="flex items-center gap-2 text-gray-400 hover:text-[#f97316] transition-colors"
          >
            <Phone size={16} />
            <span>0523413488</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader; 