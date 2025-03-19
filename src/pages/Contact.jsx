// pages/Contact.jsx
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

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
      <div className="container mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Contactez-moi</h1>
        <ContactForm />
      </div>
    </motion.section>
  );
}

export default Contact;