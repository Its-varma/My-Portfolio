import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-teal-200">
              SIVA VENKATA PAVAN
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-200 mt-2">
              RAGHAVENDRA VARMA
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium mt-4 text-blue-100">
              CHEKURI
            </span>
          </h1>
        </div>

        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
            Computer Science Engineering Student
          </p>
          <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about technology, innovation, and creating solutions that make a difference
          </p>
        </div>

        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-blue-200 text-blue-200 rounded-full font-semibold hover:bg-blue-200 hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="mailto:raghavendrachv123@gmail.com" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <Mail className="w-6 h-6 text-blue-200" />
            </a>
            <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="w-6 h-6 text-blue-200" />
            </a>
            <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <Github className="w-6 h-6 text-blue-200" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-blue-200" />
      </div>
    </section>
  );
};

export default Hero;