import React, { useEffect, useState } from "react";
import Header from "./Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import NumberCounter from 'number-counter'
import { motion } from "framer-motion";

const HeroSection = () => {
  const transition = { type: "spring", duration: 3 };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="home" className="relative flex flex-col md:flex-row items-center justify-between bg-gray-700 text-white min-h-screen">
      {/* Blur Effect */}
      <div className="absolute w-[20rem] h-[28rem] bg-orange-300 opacity-30 left-0 blur-3xl md:blur-xl"></div>

      {/* Left Section */}
      <div className="flex flex-col gap-8 px-6 md:px-12 lg:px-24 pt-10 md:pt-16 flex-1">
        <Header />

        {/* Tagline */}
        <div className="relative flex items-center mt-12 bg-gray-700 rounded-full w-fit px-5 py-3 uppercase">
          <motion.div
            initial={{ left: isMobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
            className="absolute w-[5.4rem] h-[80%] left-2 bg-orange-400 rounded-full"
          />
          <span className="relative z-10">The Best Fitness Club in Town</span>
        </div>

        {/* Hero Text */}
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
          <div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Shape
            </span>{" "}
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <p className="text-base md:text-lg font-light normal-case leading-relaxed w-full md:w-3/4 mt-4">
            We will help you shape and build your ideal body, enhancing your lifestyle to the fullest.
          </p>
        </div>

        {/* Figures */}
        <div className="flex gap-6 mt-6">
          <div className="flex flex-col items-center">
            <span className="text-white text-3xl">
              <NumberCounter end={140} start={69} delay="3" preFix="+" />
            </span>
            <span className="text-gray-400 uppercase text-sm">Expert Coaches</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
              
            </span>
            <span className="text-gray-400 uppercase text-sm">Members</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">
              <NumberCounter end={50} start={10} delay="3" preFix="+" />
              
            </span>
            <span className="text-gray-400 uppercase text-sm">Fitness Programs</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-orange-500 text-white w-32 py-2 rounded-md hover:bg-orange-600 transition">
            Get Started
          </button>
          <button className="border-2 border-orange-500 text-white w-32 py-2 rounded-md hover:bg-orange-500 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative flex justify-center items-center p-6 md:p-0">
        {/* Join Now Button */}
        <button className="absolute top-6 right-6 md:right-12 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          Join Now
        </button>

        {/* Heart Rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "2rem" }}
          transition={transition}
          className="absolute flex flex-col gap-2 bg-gray-800 text-white p-4 rounded-md right-6 md:right-16 top-24 md:top-28"
        >
          <img src={Heart} alt="Heart" className="w-8" />
          <span className="text-gray-400">Heart Rate</span>
          <span className="text-xl">116 bpm</span>
        </motion.div>

        {/* Images */}
        {/* <img
          src={hero_image}
          alt="Hero"
          className="w-64 md:w-96 lg:w-[20rem] relative z-10"
        /> */}
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "18rem" }}
          transition={transition}
          src={hero_image_back}
          alt="Background"
          className="absolute w-48 md:w-60 top-20 md:top-16 right-10 md:right-48 z-[-1]"
        />

        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "2rem" }}
          transition={transition}
          className="absolute flex gap-4 bg-orange-200 p-4 rounded-md bottom-10 md:bottom-16 right-6 md:right-16"
        >
          <img src={Calories} alt="Calories" className="w-12" />
          <div className="flex flex-col justify-between">
            <span className="text-gray-500">Calories Burned</span>
            <span className="text-xl text-black">220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

