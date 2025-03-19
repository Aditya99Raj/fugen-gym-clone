import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Join = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h9g0btg', 'template_5urckpa', form.current, 'GJAtl73WZaFyf9KlA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="join-us" className="flex flex-col md:flex-row items-center justify-between bg-gray-700 text-white  px-6 md:px-12 lg:px-24 py-16 gap-12">
      
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <hr className="w-16 border-orange-500 mb-4" />

        <div className="text-4xl md:text-5xl font-bold uppercase leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            READY TO
          </span>
          <span className="ml-2">LEVEL UP</span>
        </div>

        <div className="text-4xl md:text-5xl font-bold uppercase leading-tight">
          <span>YOUR BODY</span>
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            WITH US?
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center">
        <form 
          ref={form}
          className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-4"
          onSubmit={sendEmail}
        >
          {/* Email Input */}
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="w-full p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            className="w-full p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
          />
           <input
            type="text"
            name="user_message"
            placeholder="Enter message"
            className="w-full p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* Submit Button */}
          <button 
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
