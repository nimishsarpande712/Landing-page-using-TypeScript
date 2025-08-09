"use client";

import { useState, useEffect } from 'react';
import { Github } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm opacity-90" />
            </div>
            <span className="text-xl font-semibold">Dimension</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#careers" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1">
              <span>Careers</span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">2</span>
            </a>
            <a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-200">
              Blog
            </a>
            <a href="#changelog" className="text-gray-300 hover:text-white transition-colors duration-200">
              Changelog
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
              Join waitlist
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}