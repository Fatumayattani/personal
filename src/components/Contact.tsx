import React from 'react';
import { Mail, MapPin, Clock, Github, Linkedin, BookOpen, Coffee, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your blockchain vision to life? Let's discuss how we can build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Artistic Illustration */}
            <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Let's Build the Future</h3>
                <p className="text-blue-100 mb-6">
                  From smart contracts to full-stack dApps, I'm here to turn your Web3 ideas into reality.
                </p>
                <div className="flex space-x-4">
                  <a href="mailto:fyattani@gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  </a>
                  <a href="https://wa.me/254106220624?text=Hi%20Fatuma%2C%20I%27d%20like%20to%20chat%20with%20you%20about%20your%20services!" target="_blank" rel="noopener noreferrer" aria-label="Chat with me on WhatsApp">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  </a>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/10 rounded-full animate-ping"></div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">fyattani@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Remote</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Availability</h4>
                    <p className="text-gray-600">Open for new projects and collaborations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Fatumayattani"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fatuma-yattani/"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://medium.com/@fyattani"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                >
                  <BookOpen className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Discord Coffee Chat */}
          <div className="h-full flex flex-col justify-center">
            <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Floating coffee cups */}
              <div className="absolute top-4 left-4 text-2xl animate-bounce">☕</div>
              <div className="absolute top-8 right-8 text-xl animate-pulse">☕</div>
              <div className="absolute bottom-6 left-8 text-lg animate-bounce delay-300">☕</div>
              
              {/* Steam animation */}
              <div className="absolute top-12 left-6 opacity-60">
                <div className="w-1 h-8 bg-white/30 rounded-full animate-pulse"></div>
                <div className="w-1 h-6 bg-white/20 rounded-full animate-pulse delay-150 ml-1 -mt-6"></div>
                <div className="w-1 h-4 bg-white/10 rounded-full animate-pulse delay-300 ml-2 -mt-4"></div>
              </div>

              {/* Bouncing message circles */}
              <div className="absolute top-16 right-4">
                <MessageCircle className="w-6 h-6 animate-bounce text-white/60" />
              </div>
              <div className="absolute bottom-16 right-12">
                <MessageCircle className="w-4 h-4 animate-bounce delay-200 text-white/40" />
              </div>

              {/* Sparkles on hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-200 rounded-full animate-ping delay-100"></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping delay-200"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="text-5xl md:text-6xl mb-6">☕</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Let's Chat Over Coffee!
                </h3>
                <p className="text-lg mb-8 text-blue-100">
                  I'm always excited to discuss new blockchain projects over a virtual coffee! 
                  Let's connect on Discord and build something amazing together.
                </p>
                <a
                  href="https://discord.com/users/1029067976445530204"
                  className="inline-flex items-center space-x-3 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  <Coffee className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Chat with me</span>
                  <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;