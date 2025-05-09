import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';
import labExperimentImage from './lab-experiment.jpg'; // adjust path if needed
import eLabImage from './elab.png'; // adjust path if needed

interface DAACourseProps {
  darkMode: boolean;
}

const DAACourse: React.FC<DAACourseProps> = ({ darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Placeholder images - these would be replaced with actual images
  const courseImages = [
    {
      id: 1,
      title: 'E-Lab Completion',
      description: 'Certificate of completion for all e-lab assignments',
      url: eLabImage,
    },
    {
      id: 2,
      title: 'Lab Experiment',
      description: 'Implementation of sorting algorithms',
      url: labExperimentImage,
    }
  ];

  const openModal = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="daa-course"
      className={`py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            DAA Course <span className="text-teal-500">Completion</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-teal-500 mb-8"></div>
          <p
            className={`max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Showcasing my achievements and completed work in the Design and Analysis of Algorithms
            course, including e-lab exercises and practical lab experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courseImages.map((image) => (
            <div
              key={image.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative aspect-video overflow-hidden group">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => openModal(image.url)}
                >
                  <button
                    className="p-3 bg-teal-500 rounded-full text-white hover:bg-teal-600 transition-colors duration-200"
                    aria-label="Zoom in"
                  >
                    <ZoomIn size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p
                  className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen image modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full mx-4">
            <img
              src={currentImage}
              alt="Enlarged view"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors duration-200"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// This is needed for the X icon in the modal
const X = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default DAACourse;