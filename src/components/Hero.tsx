import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Computer Science Student';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText]);

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center">
          <p
            className={`inline-block mb-4 text-lg sm:text-xl font-medium px-3 py-1 rounded-full ${
              darkMode ? 'bg-gray-800 text-teal-400' : 'bg-teal-50 text-teal-600'
            }`}
          >
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 tracking-tight">
            Dev Rajesh Kinariwala
          </h1>
          <div className="h-8 mb-6">
            <h2 className="text-xl sm:text-2xl font-medium text-teal-500">
              {typedText}
              {!isTypingComplete && (
                <span className="inline-block w-2 h-6 ml-1 bg-teal-500 animate-blink"></span>
              )}
            </h2>
          </div>
          <p
            className={`text-base sm:text-lg mx-auto max-w-lg mb-8 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            I'm a 2nd year B.Tech student specializing in software engineering, passionate about
            building creative and efficient solutions.
          </p>
        </div>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`animate-bounce inline-flex items-center mt-8 p-2 rounded-full ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          } transition-colors duration-200`}
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;