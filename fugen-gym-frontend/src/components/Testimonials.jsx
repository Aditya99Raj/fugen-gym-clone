import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const transition = { type: 'spring', duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-700 text-white relative">

      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          What they
        </h3>
        <h3 className="text-3xl font-bold">say about us</h3>

        <motion.p
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          className="text-lg text-gray-300 leading-relaxed"
        >
          {testimonialsData[selected].review}
        </motion.p>

        <p className="text-lg">
          <span className="text-orange-400 font-semibold">
            {testimonialsData[selected].name}
          </span>{' '}
          - {testimonialsData[selected].status}
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="absolute w-72 h-72 bg-orange-400 opacity-30 rounded-full blur-3xl -z-10"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="absolute w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl -z-10"
        ></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt="Testimonial"
          className="w-80 h-80 rounded-lg shadow-lg object-cover"
        />

        {/* Arrows */}
        <div className="flex justify-between absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-4">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt="Left Arrow"
            className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
          />
          <img
            onClick={() =>
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
            src={rightArrow}
            alt="Right Arrow"
            className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
