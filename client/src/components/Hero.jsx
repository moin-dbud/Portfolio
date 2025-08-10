import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col-reverse md:flex-row items-center justify-center pt-20 px-6 md:px-50 bg-[#090704] text-white">
      
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left space-y-7"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Heyy, I'm <span className="text-[#ef8c00]">Moin Sheikh</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#eb6320]">
          AI Developer & Web Innovator
        </h2>
        <p className="text-lg max-w-md mx-auto md:mx-0 font-medium">
          Passionate about building intelligent systems and scalable web solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start pt-2">
          <a
            href={assets.resume}
            download
            className="bg-white text-[#ef8c00] px-6 py-2 rounded-xl font-semibold hover:bg-[#ef8c00] hover:text-white transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="bg-white text-[#ef8c00] px-6 py-2 rounded-xl font-semibold hover:bg-[#ef8c00] hover:text-white transition duration-300"
          >
            Let’s Connect
          </a>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 flex justify-center mb-10 md:mb-0"
      >
        <div className=" overflow-hidden w-70 h-full md:w-110 md:h-auto p-2 shadow-xl">
          <img
            src={assets.profile}
            alt="Moin Sheikh"
            className="w-full h-full "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;