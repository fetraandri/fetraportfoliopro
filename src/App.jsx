import Header from './components/Header';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <Particles
        particleCount={2000}
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

      <div className="relative z-10">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;