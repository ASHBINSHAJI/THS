import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          <div className="hero-title-line">THS</div>
          <div className="hero-title-line" style={{ fontSize: '0.5em', marginTop: '1rem', color: 'var(--ths-primary)' }}>FROM ZERO TO HERO.</div>
        </h1>
        <p className="agency-subheading hero-subtitle">
          We build brands that dominate through Art, Tech, Marketing, and AI.
        </p>
        <div className="hero-actions">
          <button className="magnetic-btn btn-primary">Enter The System</button>
          <button className="magnetic-btn">Start Your Transformation</button>
        </div>
      </div>
    </section>
  );
}
