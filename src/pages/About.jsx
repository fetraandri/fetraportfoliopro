import { motion } from 'framer-motion';
import { aboutStats } from '../data/aboutStats';
import '../pages/styles/AboutSkills.css'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillVariants = {
  hidden: { width: 0 },
  visible: { width: (percent) => `${percent}%`, transition: { duration: 1, ease: 'easeOut' } },
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
      <div className="container mx-auto p-6 text-white flex flex-col md:flex-row gap-20">
        {/* Partie gauche : À propos de moi */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>
          <p className="text-lg text-justify">
            J'ai été étudiant à l'Institut HEI (Haute École d'Informatique), où j'ai finalisé ma soutenance en spécialisation informatique, acquérant une expertise solide dans plusieurs domaines technologiques. Mon parcours académique m'a permis de maîtriser les principes fondamentaux du développement logiciel, ainsi que d'acquérir des compétences avancées en programmation. Grâce à des projets concrets, j'ai pu appliquer ces connaissances théoriques dans un cadre professionnel, renforçant ainsi ma capacité à résoudre des problématiques complexes. Mon expérience inclut également une familiarité avec les technologies émergentes, notamment en développement web et mobile. Avec cette formation et ma passion pour l'innovation, je me prépare activement à relever les défis de l'industrie informatique.
          </p>
        </motion.div>

        {}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Compétences */}
          <h2 className="text-3xl font-semibold mb-8 text-center ">Compétences</h2>
          <div className="space-y-6 mb-12">
            {aboutStats.map((skill) => (
              <div key={skill.id} className="flex flex-col">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-blue-300">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-blue-500 h-3 rounded-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={skillVariants}
                    custom={skill.percent}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Boutons CV */}
          <div className="text-center">
  <h3 className="text-xl font-medium mb-4">Intéressé par mon profil ?</h3>
  <p className="mb-6">Vous pouvez télécharger mon CV ou accéder à une version interactive en ligne.</p>
  <div className="cv-buttons-container"> {/* Remplace flex flex-col sm:flex-row justify-start gap-6 */}
    <a
      href="/cv-fetra.pdf"
      download
      className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
    >
      Télécharger le CV
    </a>
    <a
      href="https://your-interactive-cv-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
    >
      CV Interactif
    </a>
  </div>
</div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;