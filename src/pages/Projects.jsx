// projets.jsx
"use client"
import { motion, useMotionValue, useScroll, animate, useMotionValueEvent } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useRef } from 'react';
import '../pages/styles/ProjectsScroll.css'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(maskImage, `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`);
    } else if (value === 1) {
      animate(maskImage, `linear-gradient(90deg, #0000, #000 20%, #000 100%, #000)`);
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(maskImage, `linear-gradient(90deg, #0000, #000 20%, #000 80%, #0000)`);
    }
  });

  return maskImage;
}

function Projects() {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex items-center justify-center pt-16 bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="container mx-auto p-6 text-white projects-container">
        <h1 className="text-4xl font-bold mb-6 text-center">Mes Projets</h1>
        
        <svg className="projects-progress" width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>

        <motion.div 
          ref={containerRef}
          className="projects-list"
          style={{ maskImage }}
        >
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
              />
            ))
          ) : (
            <p className="text-white">Aucun projet à afficher</p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;