import {PROJECTS} from "../constants";
import { motion } from "framer-motion";






const Projects = () => {

  const getProjectLink = (title) => {
    if (title === 'Real Estate Agency Website') {
      return 'https://www.hc24.de';
    // } else if (title === 'Expense Tracking App') {
    //   return 'https://www.manutd.com';
    // } else if (title === 'Portfolio Website') {
    //   return 'https://www.db.de';
    // } else if (title === 'Real Estate Agency Website') {
    //   return 'https://www.hc24.de';
    } else {
      return '#';
    }
  };


  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity: 1, y:0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 0.5 }} 
            className="w-full lg:w-1/4">
            <a href={getProjectLink(project.title)} target="_blank" rel="noopener noreferrer">
              <img 
              src={project.image}
              alt={project.title}
              width={150}
              height={150}
              className="mb-6 rounded"
              />
            </a>
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
              <h4 className="mb-2 font-semibold">{project.title}</h4>
              <p className="mb-4 text-neutral-400 text-justify">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-neutral-800 py-1 px-2 text-sm font-medium text-pink-100 bg-gradient-to-r from-pink-300 via-slate-500
                 to-purple-500 ">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;