import React from 'react';
import Profile from './profile.jpg'

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-teal-500">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-teal-500 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className={`p-1 rounded-lg overflow-hidden ${
                darkMode ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-gradient-to-r from-teal-400 to-blue-400'
              }`}
            >
              <div
                className={`aspect-square rounded-lg overflow-hidden ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}
              >
                <img
                  src={Profile}
                  alt="Profile placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Computer Science Student</h3>
            <p
              className={`mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I'm currently pursuing my B.Tech in Computer Science with a specialization in Software
              Engineering, in my 2nd year of studies. My academic journey has equipped me with a strong
              foundation in programming, data structures, algorithms, and software development
              methodologies.
            </p>
            <p
              className={`mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I'm passionate about building efficient and user-friendly applications, with interests
              spanning web development, artificial intelligence, and software architecture. I'm constantly
              seeking opportunities to expand my knowledge and skills through coursework, projects, and
              self-directed learning.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-semibold text-teal-500 mb-2">Education</h4>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>B.Tech in Computer Science (2nd Year)</li>
                  <li>Specialization in Software Engineering</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-500 mb-2">Skills</h4>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>Programming</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Web Development</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;