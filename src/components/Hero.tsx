import React from 'react';
import { Github, Linkedin, X, BookOpen, ChevronDown, Code, Zap, Shield, Coffee } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen pt-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-60 right-1/4 w-5 h-5 bg-purple-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Introduction */}
            <div className="lg:col-span-1 space-y-4 lg:space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-4 border-purple-300 bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500">
                    <img 
                      src="/20250228_160150.jpg" 
                      alt="Fatuma Yattani" 
                      className="object-contain rounded-full bg-transparent"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = '<div class="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse"><span class="text-white text-2xl font-bold">FY</span></div>';
                      }}
                    />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Hi, I'm Fatuma Yattani! 👋
                  </h1>
                  <p className="text-base md:text-lg text-gray-600">
                    Blockchain Developer crafting the future of Web3
                  </p>
                </div>
                
                <div className="flex justify-center space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com/Fatumayattani', label: 'GitHub', color: 'hover:bg-gray-100' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/fatuma-yattani/', label: 'LinkedIn', color: 'hover:bg-blue-100' },
                    { icon: X, href: 'https://x.com/fatumayattani', label: 'X', color: 'hover:bg-sky-100' },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`p-3 bg-gray-50 ${color} rounded-full transition-all duration-300 transform hover:scale-110`}
                      aria-label={label}
                    >
                      <Icon size={20} className="text-gray-600" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quote Card */}
              <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg border border-gray-200 relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">💡</span>
                </div>
                <p className="text-sm md:text-base text-gray-700 italic text-center">
                  Building secure, scalable blockchain solutions that transform industries
                </p>
              </div>
            </div>

            {/* Center Column - Artistic Illustration */}
            <div className="lg:col-span-1 order-first lg:order-none">
              <div className="bg-white rounded-3xl p-4 md:p-8 shadow-lg border border-gray-200 h-full">
                <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-teal-400 via-blue-400 to-purple-500 rounded-2xl overflow-hidden">
                  {/* Sky and Clouds */}
                  <div className="absolute top-2 md:top-4 left-4 md:left-8 w-8 md:w-12 h-4 md:h-6 bg-white rounded-full opacity-80 animate-float"></div>
                  <div className="absolute top-4 md:top-8 right-6 md:right-12 w-6 md:w-8 h-3 md:h-4 bg-white rounded-full opacity-70 animate-float-delayed"></div>
                  
                  {/* Ground */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-green-400 to-teal-400"></div>
                  
                  {/* Character - Blockchain Developer */}
                  <div className="absolute bottom-10 md:bottom-16 left-1/2 transform -translate-x-1/2">
                    {/* Body */}
                    <div className="relative">
                      {/* Head */}
                      <div className="w-12 md:w-16 h-12 md:h-16 bg-pink-300 rounded-full mx-auto mb-2 relative animate-bounce-slow">
                        <div className="absolute top-2 md:top-3 left-3 md:left-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-black rounded-full"></div>
                        <div className="absolute top-2 md:top-3 right-3 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-black rounded-full"></div>
                        <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 w-3 md:w-4 h-0.5 md:h-1 bg-black rounded-full"></div>
                      </div>
                      
                      {/* Body */}
                      <div className="w-10 md:w-12 h-12 md:h-16 bg-white rounded-lg mx-auto relative">
                        {/* Arms */}
                        <div className="absolute -left-2 md:-left-3 top-1 md:top-2 w-4 md:w-6 h-2 md:h-3 bg-pink-300 rounded-full transform rotate-12"></div>
                        <div className="absolute -right-2 md:-right-3 top-1 md:top-2 w-4 md:w-6 h-2 md:h-3 bg-pink-300 rounded-full transform -rotate-12"></div>
                        
                        {/* Laptop */}
                        <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-3 md:h-4 bg-gray-800 rounded-sm">
                          <div className="w-4 md:w-6 h-2 md:h-3 bg-green-400 rounded-sm mx-auto mt-0.5 animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Legs */}
                      <div className="flex justify-center space-x-1 mt-1">
                        <div className="w-1.5 md:w-2 h-6 md:h-8 bg-blue-600 rounded-full"></div>
                        <div className="w-1.5 md:w-2 h-6 md:h-8 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Code Elements */}
                  <div className="absolute top-8 md:top-12 left-2 md:left-4 bg-white rounded-lg p-1 md:p-2 shadow-lg animate-float">
                    <Code size={12} className="text-blue-600 md:w-4 md:h-4" />
                  </div>
                  <div className="absolute top-12 md:top-20 right-4 md:right-6 bg-white rounded-lg p-1 md:p-2 shadow-lg animate-float-delayed">
                    <Zap size={12} className="text-yellow-600 md:w-4 md:h-4" />
                  </div>
                  <div className="absolute bottom-16 md:bottom-24 left-4 md:left-8 bg-white rounded-lg p-1 md:p-2 shadow-lg animate-float">
                    <Shield size={12} className="text-green-600 md:w-4 md:h-4" />
                  </div>
                  
                  {/* Speech Bubble */}
                  <div className="absolute top-10 md:top-16 right-2 md:right-4 bg-white rounded-2xl p-2 md:p-3 shadow-lg max-w-20 md:max-w-24">
                    <p className="text-xs font-bold text-gray-800">Building Web3!</p>
                    <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform translate-y-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills & CTA */}
            <div className="lg:col-span-1 space-y-4 lg:space-y-6">
              {/* Skills Preview */}
              <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">What I Do</h3>
                <div className="space-y-3">
                  {[
                    { icon: '⚡', title: 'Smart Contracts', desc: 'Solidity & Rust' },
                    { icon: '🔗', title: 'DApp Integration', desc: 'Frontend & Wallets' },
                    { icon: '🛡️', title: 'Security Audits', desc: 'Safe & Secure' },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-center space-x-3 p-2 md:p-3 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors">
                      <span className="text-xl md:text-2xl">{icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900 text-xs md:text-sm">{title}</div>
                        <div className="text-xs text-gray-600">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-4 md:p-6 shadow-lg text-white text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2">I Build & Share</h3>
                <p className="text-pink-100 mb-4 text-xs md:text-sm">
                  Check out my blog for quick notes and updates.
                </p>
                <a 
    href="https://medium.com/@fyattani" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-white text-pink-600 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-pink-50 transition-colors transform hover:scale-105"
  >
    <BookOpen className="w-4 h-4" />
    Medium
  </a>
              </div>

              {/* Fun Fact */}
              <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg border border-gray-200 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-spin-slow">
                  <span className="text-sm">🎯</span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-gray-900 mb-2">Fun Fact!</h4>
                <p className="text-xs md:text-sm text-gray-600">
                  I've deployed over 50+ smart contracts on various blockchains! 
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8 md:mt-12">
            <button
              onClick={scrollToAbout}
              className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce group"
            >
              <ChevronDown size={24} className="text-gray-600 group-hover:text-pink-500" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;