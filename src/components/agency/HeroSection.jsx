import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Color transformation for THS logo
      gsap.to('.hero-logo-ths', {
        color: '#ff00f0', // Magenta
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      
      gsap.from('.hero-title-line', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
      });
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.5,
        ease: 'power2.out'
      });
      gsap.from('.hero-actions', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.8,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="agency-section hero-section">
      <div className="hero-content">
        <h1 className="agency-heading" style={{ overflow: 'hidden' }}>
          <div className="hero-title-line hero-logo-ths" style={{ color: 'var(--ths-primary)', transition: 'text-shadow 0.3s' }}>THS</div>
          <div className="hero-title-line" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', marginTop: '1rem', color: '#fff', opacity: 0.8 }}>EVOLVE YOUR EMPIRE.</div>
        </h1>
        <p className="agency-subheading hero-subtitle">
          The ultimate system for those who demand total digital dominance through <span style={{ color: '#ff00f0' }}>Art</span>, <span style={{ color: '#f0ff00' }}>Tech</span>, and <span style={{ color: 'var(--ths-primary)' }}>AI</span>.
        </p>
        <div className="hero-actions">
          <button className="magnetic-btn btn-primary">Enter The System</button>
          <button className="magnetic-btn">Start Your Transformation</button>
        </div>
      </div>
    </section>
  );
}
