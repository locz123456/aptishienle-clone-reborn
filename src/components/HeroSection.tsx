
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="introduction" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Hello, I'm{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Apti Shien Le
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate developer crafting digital experiences with modern technologies. 
            Welcome to my world of innovation and creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="px-8 py-3 text-lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="sm" className="p-3">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="sm" className="p-3">
              <Linkedin size={24} />
            </Button>
            <Button variant="ghost" size="sm" className="p-3">
              <Mail size={24} />
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown size={32} className="mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
