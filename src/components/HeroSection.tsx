
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="introduction" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/65120da0-35b9-40c6-840d-00dc0afb744e.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6">
            <p className="text-lg text-white/90 mb-4 font-medium">
              The Key To Your Future
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Hien Le{' '}
              <span className="text-white font-light italic">Aptis</span>
            </h1>
          </div>
          
          <div className="mb-8">
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg bg-white text-primary hover:bg-white/90 border-2 border-white"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
