// ProjectCard.jsx
import { motion } from 'framer-motion';

function ProjectCard({ title, description, link, image }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-300 mb-3">{description}</p>
        <a href={link} className="text-blue-500 hover:underline inline-block">
          Voir le projet
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;