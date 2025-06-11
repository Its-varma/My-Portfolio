import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              SIVA VENKATA PAVAN
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Computer Science Engineering student passionate about creating innovative solutions and contributing to the tech community.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-4">
              <a href="mailto:raghavendrachv123@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Open to opportunities and collaborations
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Siva Venkata Pavan Raghavendra Varma Chekuri. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;