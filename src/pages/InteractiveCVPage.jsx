import { Link } from 'react-router-dom';

function InteractiveCVPage() {
  console.log("InteractiveCVPage is rendering");

  return (
    <div className="relative z-10 min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Mon CV Interactif</h1>
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
    </div>
  );
}

export default InteractiveCVPage;