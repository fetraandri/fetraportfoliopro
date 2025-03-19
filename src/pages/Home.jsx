import { motion } from 'framer-motion';

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
      <div className="container mx-auto p-6 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Bienvenue</h1>
        <p className="text-lg">Je suis Fetrakely, développeur web passionné.</p>
      </div>
    </motion.section>
  );
}

export default Home;