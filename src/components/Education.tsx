import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = [
    { title: 'Certificate in Data Science', provider: 'Exposys Data Labs', period: 'Dec-Jan, 2024-2025' },
    { title: 'Complete Python', provider: 'Udemy', period: 'Jan-2025' },
    { title: 'Django Web Development Certificate', provider: 'Credo Systemz', period: 'Jul-2022 to Nov-2022' },
    { title: 'Certificate in Web Development', provider: '1Stop', period: 'Jan-Mar, 2022' },
    { title: 'Workshop on Web Development', provider: 'Professional Workshop', period: 'Jul-2021' },
  ];

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
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Education</h3>
                  <p className="text-gray-600">Academic Background</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Bachelor of Engineering</h4>
                <p className="text-lg text-blue-600 font-semibold mb-2">Computer Science Engineering</p>
                <p className="text-gray-600 mb-4">Graduated in 2024 from Sathyabama Institute of Science and Technology with a focus on software development, algorithms, and emerging technologies.</p>
                
                <div className="flex items-center text-gray-500">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-sm">Specialization in Software Development & Data Science</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
                  <p className="text-gray-600">Professional Development</p>
                </div>
              </div>

              <div className="space-y-4 max-h-80 overflow-y-auto">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="font-semibold text-gray-800 mb-1">{cert.title}</h4>
                    <p className="text-teal-600 font-medium text-sm mb-2">{cert.provider}</p>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="text-xs">{cert.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Summary */}
        <div className={`mt-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-white transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Committed to staying updated with the latest technologies and industry trends through continuous education and hands-on practice.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-blue-100">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-blue-100">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Multiple</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;