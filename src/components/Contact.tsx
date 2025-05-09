import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Get In <span className="text-teal-500">Touch</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-teal-500 mb-8"></div>
          <p
            className={`max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`p-6 rounded-lg shadow-md text-center ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            } transition-colors duration-300`}
          >
            <div className="flex justify-center mb-4">
              <div
                className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-800 text-teal-400' : 'bg-teal-100 text-teal-600'
                }`}
              >
                <Mail size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p
              className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              dev.kinariwala@example.com
            </p>
          </div>

          <div
            className={`p-6 rounded-lg shadow-md text-center ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            } transition-colors duration-300`}
          >
            <div className="flex justify-center mb-4">
              <div
                className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-800 text-teal-400' : 'bg-teal-100 text-teal-600'
                }`}
              >
                <Phone size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p
              className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              +91 9876543210
            </p>
          </div>

          <div
            className={`p-6 rounded-lg shadow-md text-center ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
            } transition-colors duration-300`}
          >
            <div className="flex justify-center mb-4">
              <div
                className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-800 text-teal-400' : 'bg-teal-100 text-teal-600'
                }`}
              >
                <MapPin size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p
              className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Mumbai, India
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="#"
            className={`p-3 rounded-full ${
              darkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors duration-300`}
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className={`p-3 rounded-full ${
              darkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors duration-300`}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;