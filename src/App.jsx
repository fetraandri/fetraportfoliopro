// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Particles from './components/Particles';
import SplitText from './components/SplitText';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import InteractiveCVPage from './pages/InteractiveCVPage'; // Nouvelle page pour le CV

function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setTimeout(() => {
      setIsIntroComplete(true);
    }, 500);
  };

  const MainContent = () => (
    <div className="relative z-10 pt-20">
      <Header />
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );

  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <Particles
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleColors={["#ffffff", "#ffffff", "#ffffff"]}
            moveParticlesOnHover={true}
            particleHoverFactor={1}
            alphaParticles={true}
            particleBaseSize={300}
            sizeRandomness={1}
            cameraDistance={20}
          />
        </div>

        {!isIntroComplete ? (
          <div className="relative z-20 min-h-screen flex items-center justify-center bg-gray-900">
            <SplitText
              text="Bienvenue dans mon Portfolio"
              className="text-white text-4xl md:text-6xl font-bold"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleIntroComplete}
            />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/cv-interactif" element={<InteractiveCVPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;