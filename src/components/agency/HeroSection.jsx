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

        {/* REVEALING SOON LOGO MOTION - MOVED ABOVE PARA */}
        <div style={{ margin: '2rem 0', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            border: '2px solid rgba(255,255,255,0.1)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            filter: 'blur(10px)', // Increased blur
            opacity: 0.4,
            animation: 'pulse 3s infinite'
          }}>
            <div className="nav-logo" style={{ fontSize: '0.8rem', opacity: 0.6 }}>THS</div>
          </div>
          <div className="reveal-soon-text" style={{ 
            marginTop: '0.8rem', 
            fontFamily: 'monospace', 
            fontSize: '0.65rem', 
            color: 'var(--ths-primary)', 
            letterSpacing: '0.5em',
            fontWeight: 700,
            opacity: 0.8
          }}>
            REVEALING SOON
          </div>
        </div>

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
