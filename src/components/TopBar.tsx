
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>aptisrealtests@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>0523413488</span>
          </div>
        </div>
        <div className="hidden md:block">
          <span>Aptis Real Tests</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
