import React from 'react';
import { ExternalLink, Github, Star, Sparkles, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Lumi Hub',
      description: 'Lumi Hub is a modern, full-stack e-commerce platform designed for creators to easily sell their digital products. It features secure user authentication, intuitive product management, a dynamic marketplace, and seamless cryptocurrency payment processing via the Algorand blockchain.',
      technologies: ['React', 'Node.js', 'Algorand', 'Supabase'],
      gradient: 'from-purple-400 to-blue-500',
      bgColor: 'bg-purple-50',
      features: ['Secure user authentication', 'Intuitive product management', 'Dynamic marketplace', 'Cryptocurrency payment processing'],
      imageUrl: '/lumi4.png',
      githubUrl: 'https://github.com/Fatumayattani/lumi_hub',
      liveUrl: 'https://lumihub.live/'
    },
    {
      title: 'Vikify',
      description: 'Vikify is a privacy-first subscription platform built on Avalanche using the eERC20 token standard. It empowers users to pay for digital content like newsletters, communities, and exclusive memberships — anonymously and securely. This project won a developer bounty with Ava Labs.',
      technologies: ['Solidity', 'React', 'Avalanche', 'eERC20'],
      gradient: 'from-red-400 to-orange-500',
      bgColor: 'bg-red-50',
      features: ['Privacy-first subscriptions', 'Anonymous payments', 'Avalanche blockchain', 'Developer bounty winner'],
      imageUrl: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/Fatumayattani/vikify',
      liveUrl: 'https://github.com/Fatumayattani/vikify'
    },
    {
      title: 'Bitdoo',
      description: 'Bitdoo is a decentralized P2P Bitcoin microloan platform for the unbanked, offering borderless, bank-free lending via ICP\'s Chain Fusion.',
      technologies: ['Bitcoin', 'ICP', 'Chain Fusion', 'React'],
      gradient: 'from-orange-400 to-yellow-500',
      bgColor: 'bg-orange-50',
      features: ['P2P Bitcoin lending', 'Serves the unbanked', 'Borderless transactions', 'ICP Chain Fusion'],
      imageUrl: '/bit1.png',
      githubUrl: 'https://github.com/Fatumayattani/bitdoo',
      liveUrl: 'https://github.com/Fatumayattani/bitdoo'
    },
    {
      title: 'DuniaDAO - Empowering Africa Through Blockchain Education',
      description: 'Join our free bootcamps and get certified by top blockchain networks. Build the skills that will shape Africa\'s Web3 future.',
      technologies: ['Education', 'Blockchain', 'Web3', 'Community'],
      gradient: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      features: ['Free blockchain bootcamps', 'Network certifications', 'Community building', 'African Web3 focus'],
      imageUrl: '/dunn.png',
      githubUrl: 'https://duniadao.com/',
      liveUrl: 'https://duniadao.com/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-blue-300 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-green-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-300 rounded-full animate-bounce delay-300 opacity-40"></div>
        <div className="absolute top-60 left-1/3 w-5 h-5 bg-yellow-300 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-60 right-1/4 w-7 h-7 bg-pink-300 rounded-full animate-pulse delay-500 opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2 md:gap-3">
              <Rocket className="text-blue-500 animate-bounce" size={24} />
              Featured Projects
              <Sparkles className="text-yellow-500 animate-spin-slow" size={24} />
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Innovative blockchain solutions that are shaping the future of decentralized technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map(({ title, description, technologies, features, gradient, bgColor, imageUrl, githubUrl, liveUrl }, index) => (
              <div
                key={title}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 relative overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  const url = liveUrl && liveUrl !== '#' ? liveUrl : githubUrl;
                  if (url && url !== '#') {
                    window.open(url, '_blank');
                  }
                }}
              >
                {/* Decorative background gradient */}
                <div className={`absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br ${gradient} rounded-full opacity-10 transform translate-x-8 md:translate-x-12 -translate-y-8 md:-translate-y-12`}></div>
                
                {/* Project Image */}
                <div className="mb-4 md:mb-6">
                  <img 
                    src={imageUrl} 
                    alt={title}
                    className="w-full h-48 object-cover rounded-2xl mb-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>

                {/* Project Header */}
                <div className="relative mb-4">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 hover:text-pink-500 transition-colors">{title}</h3>
                </div>
                
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">{description}</p>

                {/* Features with artistic styling */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-1">
                    <Star size={12} className="text-yellow-500 md:w-3 md:h-3" />
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {features.map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className="text-xs md:text-sm text-gray-600 flex items-start hover:text-gray-800 transition-colors"
                        style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s` }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-br ${gradient} rounded-full mr-2 mt-1 animate-pulse hover:animate-bounce flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies with enhanced styling */}
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${bgColor} text-gray-700`}
                      style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.02)}s` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-br ${gradient} rounded-full mr-2 animate-pulse`}></div>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons with enhanced styling */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (githubUrl && githubUrl !== '#') {
                        window.open(githubUrl, '_blank');
                      }
                    }}
                    className="flex items-center justify-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white font-medium w-full sm:w-auto"
                  >
                    <Github size={14} className="md:w-4 md:h-4" />
                    <span>View Code</span>
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (liveUrl && liveUrl !== '#') {
                        window.open(liveUrl, '_blank');
                      }
                    }}
                    className="flex items-center justify-center space-x-2 px-4 md:px-6 py-2 md:py-3 border border-gray-300 hover:border-pink-400 hover:bg-pink-50 rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm text-gray-700 hover:text-pink-600 font-medium w-full sm:w-auto"
                  >
                    <ExternalLink size={14} className="md:w-4 md:h-4" />
                    <span>Live Demo</span>
                  </button>
                </div>

                {/* Animated corner decorations */}
                <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4 w-2 md:w-3 h-2 md:h-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-bounce opacity-60"></div>
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

export default Projects;