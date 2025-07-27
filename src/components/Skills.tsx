import React from 'react';
import { Code2, Database, Server, Smartphone, Cpu, Layers, Zap, Shield } from 'lucide-react';

const Skills = () => {
  const skills = [
    // Row 1
    { name: 'Solidity', icon: '⚡', color: 'bg-blue-500', textColor: 'text-white' },
    { name: 'React', icon: '⚛️', color: 'bg-cyan-400', textColor: 'text-white' },
    { name: 'Web3.js', icon: '🌐', color: 'bg-orange-500', textColor: 'text-white' },
    { name: 'Ethereum', icon: '💎', color: 'bg-purple-500', textColor: 'text-white' },
    { name: 'TypeScript', icon: '📘', color: 'bg-blue-600', textColor: 'text-white' },
    { name: 'Hardhat', icon: '🔨', color: 'bg-yellow-500', textColor: 'text-black' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-500', textColor: 'text-white' },
    { name: 'Polygon', icon: '🔷', color: 'bg-indigo-500', textColor: 'text-white' },
    { name: 'IPFS', icon: '📁', color: 'bg-teal-500', textColor: 'text-white' },
    { name: 'GraphQL', icon: '🔗', color: 'bg-pink-500', textColor: 'text-white' },
    
    // Row 2 (offset)
    { name: 'Rust', icon: '🦀', color: 'bg-orange-600', textColor: 'text-white' },
    { name: 'Smart Contracts', icon: '📜', color: 'bg-emerald-500', textColor: 'text-white' },
    { name: 'DeFi', icon: '💰', color: 'bg-yellow-600', textColor: 'text-white' },
    { name: 'Chainlink', icon: '🔗', color: 'bg-blue-400', textColor: 'text-white' },
    { name: 'OpenZeppelin', icon: '🛡️', color: 'bg-red-500', textColor: 'text-white' },
    { name: 'Truffle', icon: '🍫', color: 'bg-amber-600', textColor: 'text-white' },
    { name: 'MetaMask', icon: '🦊', color: 'bg-orange-400', textColor: 'text-white' },
    { name: 'Foundry', icon: '⚒️', color: 'bg-gray-600', textColor: 'text-white' },
    { name: 'Next.js', icon: '▲', color: 'bg-black', textColor: 'text-white' },
    
    // Row 3
    { name: 'Solana', icon: '☀️', color: 'bg-purple-400', textColor: 'text-white' },
    { name: 'Go', icon: '🐹', color: 'bg-cyan-500', textColor: 'text-white' },
    { name: 'Docker', icon: '🐳', color: 'bg-blue-500', textColor: 'text-white' },
    { name: 'AWS', icon: '☁️', color: 'bg-orange-500', textColor: 'text-white' },
    { name: 'Python', icon: '🐍', color: 'bg-green-600', textColor: 'text-white' },
    { name: 'Avalanche', icon: '🏔️', color: 'bg-red-600', textColor: 'text-white' },
    { name: 'NFTs', icon: '🎨', color: 'bg-pink-400', textColor: 'text-white' },
    { name: 'DAOs', icon: '🏛️', color: 'bg-indigo-600', textColor: 'text-white' },
    { name: 'Security Audits', icon: '🔍', color: 'bg-emerald-600', textColor: 'text-white' },
    { name: 'Hedera', icon: '🌐', color: 'bg-teal-600', textColor: 'text-white' },
    { name: 'ICP', icon: '♾️', color: 'bg-violet-600', textColor: 'text-white' },
  ];

  const getRowSkills = (rowIndex) => {
    const skillsPerRow = 10;
    const startIndex = rowIndex * skillsPerRow;
    return skills.slice(startIndex, startIndex + skillsPerRow);
  };

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-8 h-8 bg-blue-200 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-200 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-200 rounded-full animate-bounce delay-300 opacity-40"></div>
        <div className="absolute top-60 left-1/3 w-5 h-5 bg-yellow-200 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-60 right-1/4 w-7 h-7 bg-pink-200 rounded-full animate-pulse delay-500 opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2 md:gap-3">
              <Cpu className="text-blue-500 animate-spin-slow" size={24} />
              Technical Expertise
              <Layers className="text-purple-500 animate-bounce" size={24} />
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Mastering the tools and technologies that power the decentralized future
            </p>
          </div>

          {/* Skills Tags Layout */}
          <div className="space-y-4 md:space-y-6">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4">
              {getRowSkills(0).map((skill, index) => (
                <div
                  key={skill.name}
                  className={`${skill.color} ${skill.textColor} px-3 md:px-6 py-2 md:py-3 rounded-full font-medium text-xs md:text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer relative overflow-hidden group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <span className="text-base md:text-lg">{skill.icon}</span>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  
                  {/* Animated sparkle */}
                  <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
                </div>
              ))}
            </div>

            {/* Row 2 - Offset */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4 md:ml-8">
              {getRowSkills(1).map((skill, index) => (
                <div
                  key={skill.name}
                  className={`${skill.color} ${skill.textColor} px-3 md:px-6 py-2 md:py-3 rounded-full font-medium text-xs md:text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer relative overflow-hidden group`}
                  style={{ animationDelay: `${(index + 10) * 0.1}s` }}
                >
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <span className="text-base md:text-lg">{skill.icon}</span>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  
                  {/* Animated sparkle */}
                  <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4">
              {getRowSkills(2).map((skill, index) => (
                <div
                  key={skill.name}
                  className={`${skill.color} ${skill.textColor} px-3 md:px-6 py-2 md:py-3 rounded-full font-medium text-xs md:text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer relative overflow-hidden group`}
                  style={{ animationDelay: `${(index + 20) * 0.1}s` }}
                >
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <span className="text-base md:text-lg">{skill.icon}</span>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  
                  {/* Animated sparkle */}
                  <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
                </div>
              ))}
            </div>
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

export default Skills;