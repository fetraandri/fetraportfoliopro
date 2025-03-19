"use client"
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex items-center justify-center pt-16 bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="container mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold mb-12 text-center">Mes Projets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
              index={index} // Passer l'index pour une animation décalée
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;