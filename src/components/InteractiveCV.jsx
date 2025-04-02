import { Link } from 'react-router-dom';

function InteractiveCV() {
  return (
    <Link
      to="/cv-interactif"
      className="inline-block px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
    >
      CV Interactif
    </Link>
  );
}

export default InteractiveCV;