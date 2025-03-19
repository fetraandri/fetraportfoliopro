import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center pt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="container mx-auto p-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contactez-moi</h1>
        <p>
          Envoyez-moi un message à :{' '}
          <a href="mailto:hei.fetra@gmail.com" className="text-blue-300 hover:underline">
            hei.fetra@gmail.com
          </a>
        </p>
      </div>
    </motion.section>
  );
}

export default Contact;