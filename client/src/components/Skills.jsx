import { motion } from "framer-motion";
import React from "react";
import { assets } from "../assets/assets";

const skills = {
  Frontend: [
    { name: "HTML5", icon: assets.html },
    { name: "CSS3", icon: assets.css },
    { name: "TypeScript", icon: assets.typescript },
    { name: "React.js", icon: assets.react },
    { name: "Next.js", icon: assets.next },
    { name: "Tailwind CSS", icon: assets.tailwind },
  ],
  Backend: [
    { name: "Node.js", icon: assets.node },
    { name: "JavaScript", icon: assets.javascript },
    { name: "Express.js", icon: assets.express },
    { name: "Firebase", icon: assets.firebase },
    { name: "Python", icon: assets.python },
    { name: "JWT", icon: assets.jwt },
  ],
  Tools: [
    { name: "VS Code", icon: assets.vscode },
    { name: "Postman", icon: assets.postman },
    { name: "Vercel", icon: assets.vercel },
    { name: "MongoDB", icon: assets.mongodb },
    { name: "Netlify", icon: assets.netlify },
  ],
};

const fadeInProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 overflow-hidden md:px-16 bg-[#090704] text-white">
      <motion.div {...fadeInProps}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-2">
          Skills & Tools
        </h2>
        <p className="text-center text-white mb-12">
          My technical skills and the tools I use to build amazing digital experiences.
        </p>
      </motion.div>

      {Object.entries(skills).map(([category, skillList], index) => (
        <motion.div key={category} {...fadeInProps} className="mb-10 text-center">
          <h3 className="text-2xl font-semibold mb-4">{category}</h3>
          <div className="flex flex-wrap gap-5 justify-center">
            {skillList.map((skill, i) => (
              <motion.div
                key={skill.name}
                title={skill.name}
                className="w-16 h-16 p-2 bg-black border border-white rounded-lg flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Skills;