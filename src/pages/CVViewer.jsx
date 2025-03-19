import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration:2 } },
};

function CVViewer() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gray-900 p-6"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Mon CV Interactif</h1>
        <div className="w-full max-w-4xl mx-auto">
          <iframe
            src="https://drive.google.com/file/d/1HhnHQ9F8y8MWx7X5jiv4Ku6tZBJKWu5j/preview" 
            title="CV Interactif"
            className="w-full h-[80vh] border-0 rounded-lg shadow-lg"
            allow="autoplay"
          />
        </div>
        <div className="text-center mt-6">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default CVViewer;