import { motion } from 'framer-motion'
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <section className="bg-[#090704] overflow-hidden text-white py-12 px-4 md:px-16" id="about">
      <div className="max-w-6xl mx-auto flex flex-col mt-12 md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <motion.div 
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-orange-500">About Me...</h2>
          
          <p className="text-lg font-medium leading-relaxed">
            Hello! I’m <span className="font-bold">Moin Sheikh</span>, a passionate 
            <span className="text-orange-400"> AI & Data Science student </span> 
            with a creative drive for building intelligent systems and sleek, 
            user-friendly web applications.
          </p>

          <p className="text-lg font-medium">
            <strong>Interests:</strong> Exploring AI tools, hackathons, upskilling via courses & internships.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-4" >
            <a className="hover:scale-110 w-10 h-10 transition-transform duration-300 cursor-pointer" href="https://github.com/moin-dbud" target='_blank' ><img src={assets.git} alt="" /></a>
            <a className="hover:scale-110 w-10 h-10 transition-transform duration-300 cursor-pointer" href="https://linkedin.com/in/moin-s-sheikh" target='_blank' ><img src={assets.linkedin} alt="" /></a>
            <a className="hover:scale-110 w-10 h-10 transition-transform duration-300 cursor-pointer" href="https://instagram.com/moin__sheikh_18" target='_blank' ><img src={assets.instagram} alt="" /></a>
            <a className="hover:scale-110 w-10 h-10 transition-transform duration-300 cursor-pointer" href="https://x.com/Moin_Sheikh09" target='_blank' ><img src={assets.twitter} alt="" /></a>
            <a className="hover:scale-110 w-10 h-10 transition-transform duration-300 cursor-pointer" href="mailto:moinsheikh1303@gmail.com" target='_blank' ><img src={assets.email} alt="" /></a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img 
            src={assets.about} 
            alt="Laptop Image" 
            width={500}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default About