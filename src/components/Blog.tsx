import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Edit3, Coffee, Star, Heart } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Science of Sustainable Token Launches Powered by Blackhole',
      excerpt: 'Exploring innovative mechanisms for creating sustainable tokenomics through blackhole technology and deflationary models.',
      date: '2024-01-20',
      readTime: '10 min read',
      category: 'Tokenomics',
      gradient: 'from-purple-400 to-indigo-500',
      bgColor: 'bg-purple-50',
      imageUrl: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://medium.com/@fyattani/the-science-of-sustainable-token-launches-powered-by-blackhole-5894fe703eb9'
    },
    {
      title: 'Lore: Building an Avalanche L1 Storytelling Blockchain with Avalanche CLI',
      excerpt: 'A comprehensive guide to building a custom Layer 1 blockchain on Avalanche focused on storytelling and narrative experiences.',
      category: 'Blockchain Development',
      gradient: 'from-red-400 to-orange-500',
      bgColor: 'bg-red-50',
      imageUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://medium.com/@fyattani/lore-building-an-avalanche-l1-storytelling-blockchain-with-avalanche-cli-9a999c78627b'
    },
    {
      title: 'AI-Powered DAOs: Can Bots Outvote Humans in Governance?',
      excerpt: 'Exploring the intersection of artificial intelligence and decentralized governance, examining whether AI agents can participate in DAO decision-making.',
      category: 'AI & Governance',
      gradient: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-50',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://medium.com/@fyattani/ai-powered-daos-can-bots-outvote-humans-in-governance-0aac121fa02d'
    },
    {
      title: 'Decentralized AI is Having Its Breakout Moment',
      excerpt: 'Exploring how decentralized AI is transforming the blockchain landscape and creating new opportunities for innovation.',
      category: 'AI & Blockchain',
      gradient: 'from-green-400 to-blue-500',
      bgColor: 'bg-green-50',
      imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://medium.com/@fyattani/decentralized-ai-is-having-its-breakout-moment-4a57a8b283fb'
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white relative overflow-hidden">
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
              <Edit3 className="text-blue-500 animate-bounce" size={24} />
              Latest Blog Posts
              <BookOpen className="text-green-500 animate-pulse" size={24} />
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Insights, tutorials, and thoughts on blockchain development and Web3 innovation
            </p>
          </div>

          {/* Featured Blog Illustration */}
          <div className="mb-12 md:mb-16 bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-2xl overflow-hidden">
              {/* Sky with clouds */}
              <div className="absolute top-2 md:top-4 left-4 md:left-6 w-12 md:w-16 h-6 md:h-8 bg-white rounded-full opacity-80 animate-float"></div>
              <div className="absolute top-3 md:top-6 right-6 md:right-8 w-8 md:w-12 h-4 md:h-6 bg-white rounded-full opacity-70 animate-float-delayed"></div>
              
              {/* Ground */}
              <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-green-400 to-teal-400"></div>
              
              {/* Writer character */}
              <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2">
                {/* Head */}
                <div className="w-10 md:w-12 h-10 md:h-12 bg-pink-300 rounded-full mx-auto mb-2 relative animate-bounce-slow">
                  <div className="absolute top-2 left-2.5 md:left-3 w-1 md:w-1.5 h-1 md:h-1.5 bg-black rounded-full"></div>
                  <div className="absolute top-2 right-2.5 md:right-3 w-1 md:w-1.5 h-1 md:h-1.5 bg-black rounded-full"></div>
                  <div className="absolute bottom-2.5 md:bottom-3 left-1/2 transform -translate-x-1/2 w-2 md:w-3 h-0.5 bg-black rounded-full"></div>
                </div>
                
                {/* Body with writing */}
                <div className="w-8 md:w-10 h-10 md:h-12 bg-white rounded-lg mx-auto relative">
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 md:w-6 h-2.5 md:h-3 bg-gray-200 rounded-sm">
                    <div className="w-3 md:w-4 h-1.5 md:h-2 bg-blue-400 rounded-sm mx-auto mt-0.5 animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating blog elements */}
              <div className="absolute top-8 md:top-12 left-2 md:left-4 bg-white rounded-lg p-1 md:p-2 shadow-lg animate-float">
                <Edit3 size={12} className="text-blue-600 md:w-4 md:h-4" />
              </div>
              <div className="absolute top-10 md:top-16 right-4 md:right-6 bg-white rounded-lg p-1 md:p-2 shadow-lg animate-float-delayed">
                <BookOpen size={12} className="text-green-600 md:w-4 md:h-4" />
              </div>
              
              {/* Speech bubble */}
              <div className="absolute top-6 md:top-8 right-2 md:right-4 bg-white rounded-2xl p-2 md:p-3 shadow-lg max-w-20 md:max-w-24">
                <p className="text-xs font-bold text-gray-800">Writing!</p>
                <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform translate-y-full"></div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {blogPosts.map(({ title, excerpt, date, readTime, category, gradient, bgColor, imageUrl, url }, index) => (
              <div
                key={title}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 relative overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => url && url !== '#' && window.open(url, '_blank')}
              >
                {/* Decorative background gradient */}
                <div className={`absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br ${gradient} rounded-full opacity-10 transform translate-x-8 md:translate-x-12 -translate-y-8 md:-translate-y-12`}></div>
                
                {/* Category Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${bgColor} text-gray-700`}>
                  <div className={`w-2 h-2 bg-gradient-to-br ${gradient} rounded-full mr-2 animate-pulse`}></div>
                  {category}
                </div>

                {/* Artistic Illustration */}
                <div className="mb-4 md:mb-6">
                  <img 
                    src={imageUrl} 
                    alt={title}
                    className="w-full h-48 object-cover rounded-2xl mb-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 hover:text-pink-500 transition-colors">{title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">{excerpt}</p>

                {/* Read More Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (url && url !== '#') {
                      window.open(url, '_blank');
                    }
                  }}
                  className="flex items-center justify-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white font-medium w-full sm:w-auto"
                >
                  <span>Read More</span>
                  <ArrowRight size={14} className="md:w-4 md:h-4" />
                </button>

                {/* Animated corner decorations */}
                <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4 w-2 md:w-3 h-2 md:h-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-bounce opacity-60"></div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Blog;