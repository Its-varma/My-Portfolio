import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Shield, TrendingUp, Brain, Calendar } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Analysis of Cloud Computing Security Challenges',
      description: 'Addressed data breach issues by analyzing threats and proposing comprehensive solutions for cloud security vulnerabilities.',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      technologies: ['Security Analysis', 'Cloud Computing', 'Risk Assessment'],
      features: ['Threat Analysis', 'Security Protocols', 'Breach Prevention']
    },
    {
      title: 'Car Price Prediction System',
      description: 'Developed a comprehensive Car Price Prediction System using Machine Learning with Python, implementing regression algorithms and performance evaluation.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
      features: ['Data Preprocessing', 'Model Training', 'Performance Metrics', 'Visualization']
    },
    {
      title: 'Wedding Hall Booking System',
      description: 'Designed and developed a dynamic web application to manage wedding hall reservations and streamline booking operations. Built with responsive design and real-time availability features.',
      icon: Calendar,
      color: 'from-purple-500 to-pink-500',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL', 'phpMyAdmin'],
      features: ['Real-time Availability', 'User Registration/Login', 'Booking Management', 'Responsive Design', 'Admin Dashboard']
    }
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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className={`group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4">
                    <IconComponent className="w-8 h-8 text-white/80" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                        <Github className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;