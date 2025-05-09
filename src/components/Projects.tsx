import React from 'react';
import { Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Quote Generator',
      description: 'A dynamic web application that generates random quotes with a clean, modern interface. Built with React and styled using Tailwind CSS, featuring smooth animations and a responsive design.',
      tech: ['React', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/devkinariwala/quote-generator.git'
    },
    {
      title: 'Financial Portfolio Management Tool',
      description: 'A comprehensive financial portfolio management system that helps users track investments, analyze performance, and make informed financial decisions. Features include portfolio tracking, performance analytics, and investment insights.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/devkinariwala/Financial-Portfolio-Management-Tool.git'
    },
    {
      title: 'Supabase Authentication',
      description: 'A secure authentication system built with Supabase, featuring email/password authentication, user management, and protected routes. Demonstrates modern authentication practices and secure user data handling.',
      tech: ['React', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/devkinariwala/basic-supabaseAuth.git'
    }
  ];

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-teal-500">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-teal-500 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? 'bg-gray-600 text-teal-300'
                            : 'bg-teal-100 text-teal-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm ${
                      darkMode ? 'text-teal-300 hover:text-teal-400' : 'text-teal-600 hover:text-teal-700'
                    }`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;