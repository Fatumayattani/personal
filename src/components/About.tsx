import React from 'react';
import { Code2, Zap, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-pink-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-yellow-300 rounded-full animate-bounce delay-300 opacity-60"></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-green-300 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-60 right-1/4 w-7 h-7 bg-purple-300 rounded-full animate-pulse delay-500 opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2 md:gap-3">
              <Heart className="text-pink-500 animate-pulse" size={24} />
              About Me
              <Sparkles className="text-yellow-500 animate-spin-slow" size={24} />
            </h2>
          </div>

          {/* Artistic Illustration Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 mb-12 md:mb-16">
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-2xl overflow-hidden">
              {/* Sky with clouds */}
              <div className="absolute top-2 md:top-4 left-4 md:left-6 w-12 md:w-16 h-6 md:h-8 bg-white rounded-full opacity-80 animate-float"></div>
              <div className="absolute top-3 md:top-6 right-6 md:right-8 w-8 md:w-12 h-4 md:h-6 bg-white rounded-full opacity-70 animate-float-delayed"></div>
              
              {/* Mountains */}
              <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 bg-gradient-to-t from-green-400 to-teal-400"></div>
              <div className="absolute bottom-12 md:bottom-16 left-6 md:left-8 w-16 md:w-24 h-12 md:h-16 bg-gray-600 rounded-t-full transform rotate-12"></div>
              <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 w-14 md:w-20 h-14 md:h-20 bg-gray-700 rounded-t-full"></div>
              
              {/* Developer character */}
              <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2">
                {/* Head */}
                <div className="w-10 md:w-12 h-10 md:h-12 bg-pink-300 rounded-full mx-auto mb-1 relative animate-bounce-slow">
                  <div className="absolute top-2 left-2.5 md:left-3 w-1 md:w-1.5 h-1 md:h-1.5 bg-black rounded-full"></div>
                  <div className="absolute top-2 right-2.5 md:right-3 w-1 md:w-1.5 h-1 md:h-1.5 bg-black rounded-full"></div>
                  <div className="absolute bottom-2.5 md:bottom-3 left-1/2 transform -translate-x-1/2 w-2 md:w-3 h-0.5 bg-black rounded-full"></div>
                </div>
                
                {/* Body with laptop */}
                <div className="w-6 md:w-8 h-10 md:h-12 bg-white rounded-lg mx-auto relative">
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 md:w-6 h-2.5 md:h-3 bg-gray-800 rounded-sm">
                    <div className="w-3 md:w-4 h-1.5 md:h-2 bg-green-400 rounded-sm mx-auto mt-0.5 animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 md:top-12 left-2 md:left-4 bg-white rounded-lg p-1 md:p-1.5 shadow-lg animate-float">
                <Code2 size={10} className="text-blue-600 md:w-3 md:h-3" />
              </div>
              <div className="absolute top-10 md:top-16 right-4 md:right-6 bg-white rounded-lg p-1 md:p-1.5 shadow-lg animate-float-delayed">
                <Zap size={10} className="text-yellow-600 md:w-3 md:h-3" />
              </div>
            </div>
          </div>

          {/* Story and Illustration Section */}
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">My Journey </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                  I'm a passionate blockchain developer with expertise in building decentralized applications 
                  that solve real-world problems. My journey in blockchain technology spans smart contract 
                  development, DeFi protocols, and Web3 integration.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  With a background shaped by self-driven learning and real-world project experience, I bring a practical and purpose-driven approach to blockchain innovation.
                </p>
              </div>
            </div>

          </div>

          {/* Fun Stats Section */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { number: '20+', label: 'Smart Contracts Deployed', icon: '⚡' },
              { number: '10+', label: 'DeFi Projects Built', icon: '🔥' },
              { number: '3+', label: 'Years Experience', icon: '⭐' }
            ].map(({ number, label, icon }, index) => (
              <div
                key={label}
                className="bg-white rounded-3xl p-4 md:p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl mb-2 animate-bounce-slow">{icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{number}</div>
                <div className="text-xs md:text-sm text-gray-600">{label}</div>
              </div>
            ))}
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

export default About;