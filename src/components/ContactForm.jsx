import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { contactData } from '../data/contactData'; 

function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_b22gwap', 
        'template_tc5dfhb', 
        formRef.current,
        'iXEoJwv95GqkcnECZ' 
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: '', email: '', message: '' }); 
          setError(null);
          setTimeout(() => setIsSent(false), 3000); 
        },
        (error) => {
          setError('Une erreur est survenue. Veuillez réessayer.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Section des informations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Mes coordonnées</h2>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-blue-400 text-xl" />
          <a
            href={`mailto:${contactData.email}`}
            className="text-gray-200 hover:text-blue-300 transition-colors"
          >
            {contactData.email}
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FaPhone className="text-blue-400 text-xl" />
          <p className="text-gray-200">{contactData.phone}</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaWhatsapp className="text-blue-400 text-xl" />
          <a
            href={contactData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-300 transition-colors"
          >
            WhatsApp
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FaGithub className="text-blue-400 text-xl" />
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-300 transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-blue-400 text-xl" />
          <p className="text-gray-200">{contactData.address}</p>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Envoyez-moi un message</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Votre email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full mt-1 p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Votre message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Envoyer
          </button>
        </form>
        {isSent && (
          <p className="mt-4 text-green-400 text-center">Message envoyé avec succès !</p>
        )}
        {error && <p className="mt-4 text-red-400 text-center">{error}</p>}
      </div>
    </div>
  );
}

export default ContactForm;