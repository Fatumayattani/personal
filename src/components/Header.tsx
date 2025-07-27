import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, BookOpen, Mail, Home } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { icon: Home, label: 'Home', id: 'hero' },
    { icon: User, label: 'About', id: 'about' },
    { icon: Code, label: 'Skills', id: 'skills' },
    { icon: Briefcase, label: 'Projects', id: 'projects' },
    { icon: BookOpen, label: 'Blog', id: 'blog' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="relative group"
          >
            <div className="flex items-center">
              {/* Combined FY Letters */}
              <div className="relative w-16 h-8 md:w-20 md:h-10 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                <span className="text-white font-bold text-lg md:text-xl animate-pulse tracking-tight">FY</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-80"></div>
              </div>
              
              {/* Floating sparkles */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map(({ icon: Icon, label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-gray-50/80 hover:bg-white hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200/50 hover:border-gray-300 group"
              >
                <Icon size={16} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors text-sm">{label}</span>
              </button>
            ))}
            
            {/* Contact Button - Special styling like Connect button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ml-2"
            >
              <Mail size={16} className="text-white" />
              <span className="text-sm">Contact</span>
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-200"
          >
            {isMenuOpen ? <X size={20} className="text-gray-700" /> : <Menu size={20} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200">
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map(({ icon: Icon, label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gray-50/80 hover:bg-white hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] border border-gray-200/50 hover:border-gray-300"
                >
                  <Icon size={18} className="text-blue-600" />
                  <span className="font-medium text-gray-700">{label}</span>
                </button>
              ))}
              
              {/* Mobile Contact Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg mt-2"
              >
                <Mail size={18} className="text-white" />
                <span>Contact</span>
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></div>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;