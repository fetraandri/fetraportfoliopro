import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import './styles/Header.css'; // Importation du fichier CSS

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu mobile
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Projets', href: '#projects' },
    { label: 'Réalisations', href: '#achievements' }, 
    { label: 'Contact', href: '#contact' },
  ];

  const animationTime = 600;
  const particleCount = 15;
  const particleDistances = [90, 10];
  const particleR = 100;
  const timeVariance = 300;
  const colors = [1, 2, 3, 1, 2, 3, 1, 4];

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');
      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);
        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e, section) => {
    const liEl = e.currentTarget;
    if (activeSection === section) return;
    setActiveSection(section);
    updateEffectPosition(liEl);
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach((p) => filterRef.current.removeChild(p));
      makeParticles(filterRef.current);
    }
    if (textRef.current) {
      textRef.current.classList.remove('active');
      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }
    setIsMenuOpen(false); // Ferme le menu mobile après un clic
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects','achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          const activeLi = navRef.current?.querySelectorAll('li')[sections.indexOf(section)];
          if (activeLi) updateEffectPosition(activeLi);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[navItems.findIndex(item => item.href === `#${activeSection}`)];
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add('active');
    }
  }, [activeSection]);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="motion-div fixed top-0 w-full z-10"
      ref={containerRef}
    >
      <nav className="flex relative" style={{ transform: 'translate3d(0,0,0.01px)' }}>
        {/* Bouton hamburger pour mobile */}
        <button
          className="hamburger md:hidden p-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger-icon"></span>
        </button>

        {/* Menu de navigation */}
        <ul
          ref={navRef}
          className={`nav-list ${isMenuOpen ? 'open' : ''} flex gap-8 list-none p-0 px-4 m-0 relative z-[3] justify-center w-full md:flex`}
          style={{
            color: 'white',
            textShadow: '0 1px 1px hsl(205deg 30% 10% / 0.2)',
          }}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`py-[0.6em] px-[1em] rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-white ${activeSection === item.href.slice(1) ? 'active' : ''}`}
              onClick={(e) => handleClick(e, item.href.slice(1))}
            >
              <a href={item.href} className="outline-none">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </motion.div>
  );
}

export default Header;