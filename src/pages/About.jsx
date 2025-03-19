import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="container mx-auto p-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">À propos de moi</h1>
        <p>Je suis un développeur qui adore créer des applications modernes et performantes.</p>
      </div>
    </motion.section>
  );
}

export default About;