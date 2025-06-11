import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-teal-500"></div>

          <div className="relative">
            <div className="flex flex-col md:flex-row md:justify-center items-center md:items-start mb-8">
              <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300 md:ml-auto md:max-w-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Intern</h3>
                      <p className="text-blue-100">Exposys Data Labs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-100 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Dec 2024 - Jan 2025</span>
                  </div>

                  <p className="text-blue-100 leading-relaxed">
                    Gained hands-on experience in data science and analytics, working on real-world projects 
                    and developing practical skills in data processing, analysis, and machine learning applications.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                      Data Science
                    </span>
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                      Analytics
                    </span>
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                      Machine Learning
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>
        </div>

        <div className={`mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">What I Bring to the Table</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Technical Expertise</h4>
              <p className="text-gray-600 text-sm">Strong foundation in programming and problem-solving</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Adaptability</h4>
              <p className="text-gray-600 text-sm">Quick to learn new technologies and methodologies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Passionate about creating meaningful solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;