import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

function CVViewer() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gray-900 p-6"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Mon CV Interactif</h1>
        <a
          href="https://drive.google.com/file/d/1HhnHQ9F8y8MWx7X5jiv4Ku6tZBJKWu5j/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 mb-6"
        >
          Voir mon CV sur Google Drive
        </a>
        <div>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default CVViewer;