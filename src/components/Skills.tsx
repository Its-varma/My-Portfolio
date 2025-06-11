import React, { useEffect, useRef, useState } from 'react';
import { Code, Globe, Database } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Python', level: 85, icon: Code, color: 'from-blue-500 to-blue-600' },
    { name: 'HTML', level: 90, icon: Globe, color: 'from-orange-500 to-orange-600' },
    { name: 'CSS', level: 80, icon: Database, color: 'from-teal-500 to-teal-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 500);
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
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform transition-all duration-1000 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">{skill.name}</h3>
                
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Proficiency</span>
                    <span className="text-sm font-bold text-gray-800">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out`}
                      style={{
                        width: animateProgress ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Currently Learning</h3>
            <p className="text-gray-600 text-lg">
              Always expanding my skillset with new technologies like React, Node.js, and Machine Learning frameworks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;