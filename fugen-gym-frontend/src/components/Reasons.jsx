import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import nb from '../assets/nb.png';
import adidas from '../assets/adidas.png';
import nike from '../assets/nike.png';
import tick from '../assets/tick.png';

const Reasons = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-700 text-white" id="reasons">

      {/* Left Section - Images */}
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        {/* <img src={image1} alt="Reason 1" className="w-60 rounded-lg shadow-lg hover:scale-105 transition-transform" /> */}
        <img src={image2} alt="Reason 2" className="rounded-lg shadow-lg hover:scale-105 transition-transform" />
        <img src={image3} alt="Reason 3" className="rounded-lg shadow-lg hover:scale-105 transition-transform" />
        <img src={image4} alt="Reason 4" className="rounded-lg shadow-lg hover:scale-105 transition-transform" />
      </div>

      {/* Right Section - Content */}
      <div className="md:w-1/2 space-y-8 mt-12 md:mt-0">
        <h2 className="text-3xl font-bold">Some reasons</h2>

        <div className="flex items-center space-x-4">
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            why
          </h3>
          <h3 className="text-4xl font-bold">choose us?</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src={tick} alt="Tick" className="w-6 h-6" />
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src={tick} alt="Tick" className="w-6 h-6" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src={tick} alt="Tick" className="w-6 h-6" />
            <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src={tick} alt="Tick" className="w-6 h-6" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <h4 className="text-gray-400 text-lg">OUR PARTNERS</h4>
        
        <div className="flex items-center space-x-8">
          <img src={nb} alt="NB" className="w-24 h-16 hover:scale-110 transition-transform" />
          <img src={adidas} alt="Adidas" className="w-24 h-16 hover:scale-110 transition-transform" />
          <img src={nike} alt="Nike" className="w-24 h-16 hover:scale-110 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
