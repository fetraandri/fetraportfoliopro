import AnimatedContent from './AnimatedContent';

function Header() {
  return (
    <AnimatedContent distance={50} direction="vertical" reverse={true}>
      <nav className="bg-blue-800 text-white p-4 shadow-md fixed top-0 w-full z-10">
        <ul className="flex space-x-6 justify-center">
          <li><a href="#home" className="hover:text-blue-300">Accueil</a></li>
          <li><a href="#about" className="hover:text-blue-300">À propos</a></li>
          <li><a href="#projects" className="hover:text-blue-300">Projets</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </nav>
    </AnimatedContent>
  );
}

export default Header;