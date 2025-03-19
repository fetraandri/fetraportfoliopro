"use client";
import { useState } from 'react';
import SplitText from '../components/SplitText';
import Home from './Home';

function Intro() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsAnimationComplete(true); // Passe à la page d'accueil après un léger délai
    }, 500); // Délai optionnel de 500ms pour laisser le temps d'apprécier la fin de l'animation
  };

  return (
    <>
      {isAnimationComplete ? (
        <Home /> 
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <SplitText
            text="Bienvenue dans mon Portfolio !"
            className="text-white text-4xl md:text-6xl font-bold"
            delay={100}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      )}
    </>
  );
}

export default Intro;