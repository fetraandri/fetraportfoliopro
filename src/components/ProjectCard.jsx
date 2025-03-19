import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function ProjectCard({ title, description, link, image, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  // Phrases personnalisées selon le projet
  const achievementQuotes = {
    "GMAO": "J'ai conçu et déployé cette solution complète de gestion de maintenance, optimisant ainsi les processus opérationnels.",
    "Portfolio": "Ce projet reflète ma capacité à créer des interfaces modernes et performantes avec une approche centrée sur l'utilisateur.",
    "Passion Campagne": "Une réalisation qui allie développement mobile et gestion de contenu, au service d'une expérience client fluide.",
  };

  const achievement = achievementQuotes[title] || "Chaque défi relevé est une opportunité de repousser mes limites et d'innover.";

  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg 
                 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 
                 transition-all duration-300 ease-in-out 
                 group relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onClick={() => setIsOpen(true)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="p-4 relative">
        <h2 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-blue-300">
          {title}
        </h2>
        <a
          href={link}
          className="text-blue-400 opacity-0 group-hover:opacity-100 
                     transition-all duration-300 translate-y-2 group-hover:translate-y-0"
        >
          Voir le projet
        </a>
        {/* Overlay subtil au survol */}
        <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg text-white max-w-md w-full shadow-xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-300">{title}</h2>
              <p className="text-gray-200 mb-4">{description}</p>
              {/* Phrase professionnelle ou motivante */}
              <p className="text-gray-400 italic text-sm mb-6">{achievement}</p>
              <div className="flex justify-end gap-4">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  Visiter
                </a>
                <button
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-300"
                  onClick={handleClose}
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProjectCard;