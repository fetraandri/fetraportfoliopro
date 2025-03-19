import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-100">
      <Header />

      {/* Section Accueil */}
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto p-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Bienvenue</h1>
          <p className="text-lg text-gray-600">Je suis Fetrakely, développeur web passionné.</p>
        </div>
      </motion.section>

      {/* Section À propos */}
      <motion.section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">À propos de moi</h1>
          <p className="text-gray-600 text-center">Je suis un développeur qui adore créer des applications modernes et performantes.</p>
        </div>
      </motion.section>

      {/* Section Projets */}
      <motion.section
        id="projects"
        className="min-h-screen flex items-center justify-center pt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Mes Projets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Contact */}
      <motion.section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-gray-200 pt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto p-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contactez-moi</h1>
          <p className="text-gray-600">Envoyez-moi un message à : <a href="mailto:tonemail@example.com" className="text-blue-500 hover:underline">tonemail@example.com</a></p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default App;