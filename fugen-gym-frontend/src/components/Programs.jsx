import React from 'react';
import { programsData } from '../data/programsData';
import RightArrow from '../assets/rightArrow.png';

const Programs = () => {
  return (
    <div className="bg-gray-700 text-white py-16 px-8" id="programs">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Explore our
          </span> Programs
        </h2>
        <p className="text-2xl font-light mt-2">to shape you</p>
      </div>

      {/* Program Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {programsData.map((program, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              {program.image}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{program.heading}</h3>
            <p className="text-gray-400 mb-4">{program.details}</p>

            <div className="flex items-center justify-between">
              <span className="text-orange-500 font-bold">Join Now</span>
              <img
                src={RightArrow}
                alt="Right Arrow"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
