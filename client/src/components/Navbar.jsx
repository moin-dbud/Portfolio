import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-auto flex items-center justify-between px-6 md:px-10 lg:px-36 py-5 bg-[#090704]">
      {/* Logo */}
      <a className="text-3xl font-bold text-[#f1fbfe] cursor-pointer max-sm:text-2xl" href="/">
        Moin Sheikh
      </a>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8 bg-[#ef8c00] px-8 py-2 rounded-full">
        <a href="#project" className="text-[#f1fbfe] hover:underline">Projects</a>
        <a href="#skills" className="text-[#f1fbfe] hover:underline">Skills</a>
        <a href="#service" className="text-[#f1fbfe] hover:underline">Services</a>
        <a href="#contact" className="text-[#f1fbfe] hover:underline">Contact Me</a>
      </div>

      {/* Resume Download */}
      <div className="text-[#f1fbfe] hover:underline hidden sm:block">
        <a href={assets.resume} download>Download Resume</a>
      </div>

      {/* Hamburger Menu Icon (Mobile Only) */}
      <div className="md:hidden cursor-pointer text-white text-3xl z-50" onClick={handleToggle}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-blur backdrop-blur flex flex-col items-center justify-center gap-10 text-xl font-semibold z-40">
          <a href="#upload" onClick={handleClose} className="text-[#f1fbfe] hover:text-black ">Projects</a>
          <a href="#how-it-works" onClick={handleClose} className="text-[#f1fbfe] hover:text-black">Skills</a>
          <a href="#service" onClick={handleClose} className="text-[#f1fbfe] hover:text-black">Services</a>
          <a href="#contact" onClick={handleClose} className="text-[#f1fbfe] hover:text-black">Contact Me</a>
          <a href={assets.resume} download className="text-[#f1fbfe] hover:text-[#ef8c00]">Download Resume</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
