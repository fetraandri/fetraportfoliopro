import { motion } from 'framer-motion';
import profileImage from '../assets/images/imagepro.jpg'; // Import de l'image
import { stats } from '../data/stats'; // Import des statistiques

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Home() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="container mx-auto p-6 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Partie gauche : Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={profileImage}
            alt="Fetra Andriamamonjy"
            className="w-3/4 md:w-full max-w-sm rounded-full shadow-lg object-cover"
          />
        </motion.div>

        {/* Partie droite : Texte et statistiques */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Fetra Andriamamonjy</h1>
          <p className="text-lg mb-6">
            Un développeur frontend passionné par la création d'interfaces utilisateur intuitives et esthétiques. Avec une expertise en React et une maîtrise des technologies web modernes, je transforme des concepts en expériences interactives captivantes. Mon objectif est de construire des applications fluides et réactives qui répondent aux besoins des utilisateurs.
          </p>
          <p className="text-md mb-8">
            Découvrez mon travail en parcourant les différentes sections.
          </p>

          {/* Statistiques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: stat.id * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-blue-300">{stat.value}</h3>
                <p className="text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;