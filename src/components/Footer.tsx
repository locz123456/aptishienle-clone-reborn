
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl text-foreground mb-4">Apti Shien Le</h3>
            <p className="text-muted-foreground mb-4">
              Passionate developer creating innovative solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#introduction" className="block text-muted-foreground hover:text-foreground transition-colors">
                Introduction
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Web Development</p>
              <p>Mobile Apps</p>
              <p>UI/UX Design</p>
              <p>Consulting</p>
              <p>Code Review</p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Apti Shien Le
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
