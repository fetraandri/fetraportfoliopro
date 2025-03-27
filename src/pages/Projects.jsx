"use client";
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
        <h1 className="text-4xl font-bold mb-12 text-center">Mes Projets en développement d'application Web</h1>
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
        {/* Phrase globale et invitation au repository */}
        <div className="text-center mt-12">
          <p className="text-gray-400 italic text-lg mb-2">
            "Ces projets illustrent mon engagement à transformer des idées en solutions concrètes et performantes."
          </p>
          <p className="text-gray-500 text-sm">
            Certains projets ne sont pas encore déployés.{" "}
            <a
              href="https://github.com/fetraandri" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Visitez mon repository
            </a>{" "}
            pour découvrir davantage de réalisations.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;