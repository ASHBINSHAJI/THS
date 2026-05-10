import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// CSS
import './phase2.css';
import './agency.css'; // New Agency Core Styles

// Managers
import CursorManager from './components/CursorManager';
import CanvasBackground from './components/CanvasBackground';

// Agency Sections
import HeroSection from './components/agency/HeroSection';
import AboutSection from './components/agency/AboutSection';
import PillarsSection from './components/agency/PillarsSection';
import TeamSection from './components/agency/TeamSection';
import WorkflowSection from './components/agency/WorkflowSection';
import ProcessSection from './components/agency/ProcessSection';
import WhySection from './components/agency/WhySection';
import { CtaSection, FooterSection } from './components/agency/CtaAndFooter';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="app-container">
      <CursorManager />
      
      <div className="noise-overlay"></div>
      
      {/* 3D WebGL Background - maintained for cinematic environment */}
      <div className="canvas-container">
        <CanvasBackground />
      </div>

      {/* HTML DOM Content Overlay - New Agency Structure */}
      <div className="dom-overlay">
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <TeamSection />
        <WorkflowSection />
        <ProcessSection />
        <WhySection />
        <CtaSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
