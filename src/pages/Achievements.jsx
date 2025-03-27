import { motion } from 'framer-motion';
import { useState } from 'react';
import achievementsData from '../data/achievementsData';
import '../pages/styles/Achievements.css'; 

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.3 },
  },
};

function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievements" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Mes Réalisations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-center mb-12 pb-9"
        >
          Je fais des choses à part le développement d'une application web. Voici quelques-unes de mes créations visuelles et projets variés.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={cardVariants}
              className="achievement-card"
            >
              <div className="achievement-image-wrapper">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="achievement-image"
                  onClick={() => setSelectedImage(achievement)}
                />
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.image}
            alt={selectedImage.title}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}
    </section>
  );
}

export default Achievements;