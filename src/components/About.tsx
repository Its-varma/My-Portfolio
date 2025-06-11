import React, { useEffect, useRef, useState } from 'react';
import { Code, Target, Lightbulb } from 'lucide-react';

const About = () => {
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
    <section ref={sectionRef} className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Motivated CSE student proficient in Python, with strong problem-solving skills and a passion for technology. 
                Dedicated, adaptable, and eager to contribute to innovative projects in software development.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                I believe in continuous learning and staying updated with the latest technological trends. 
                My goal is to create meaningful solutions that solve real-world problems and make a positive impact.
              </p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <Code className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-bold mb-2">Technical Excellence</h4>
                <p className="text-blue-100">Committed to writing clean, efficient, and maintainable code</p>
              </div>

              <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <Target className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-bold mb-2">Problem Solving</h4>
                <p className="text-teal-100">Strong analytical skills with a systematic approach to challenges</p>
              </div>

              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <Lightbulb className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-bold mb-2">Innovation</h4>
                <p className="text-indigo-100">Passionate about exploring new technologies and creative solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;