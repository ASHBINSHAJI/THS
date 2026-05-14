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

        {/* PREMIUM LOGO EMBLEM */}
        <div className="hero-logo-emblem" style={{ 
          margin: '3rem 0', 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          animation: 'float 6s ease-in-out infinite'
        }}>
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 20px var(--ths-glow))' }}>
            {/* Outer Hexagon Frame */}
            <path d="M50 5L90 25V75L50 95L10 75V25L50 5Z" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
            <path d="M50 10L85 27.5V72.5L50 90L15 27.5V27.5L50 10Z" stroke="var(--ths-primary)" strokeWidth="1" strokeOpacity="0.5" />
            
            {/* Rotating Outer Rings */}
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.2" strokeDasharray="5 5" strokeOpacity="0.3">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite" />
            </circle>
            
            {/* Inner Core */}
            <circle cx="50" cy="50" r="15" fill="rgba(0, 240, 255, 0.05)" stroke="var(--ths-primary)" strokeWidth="0.5" />
            
            {/* THS Letters Stylized */}
            <path d="M35 45H50M50 45H65M50 45V65" stroke="white" strokeWidth="3" strokeLinecap="square" /> {/* T */}
            <path d="M35 55V40M65 55V40" stroke="white" strokeWidth="1" strokeOpacity="0.5" /> {/* Side bars */}
            
            {/* Abstract H/S elements */}
            <path d="M30 60V40M40 60V40M30 50H40" stroke="var(--ths-primary)" strokeWidth="1.5" opacity="0.8" /> {/* Small H */}
            <path d="M60 40H70V50H60V60H70" stroke="#ff00f0" strokeWidth="1.5" opacity="0.8" /> {/* Small S */}
            
            {/* Glow Core */}
            <circle cx="50" cy="50" r="5" fill="white">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          <div style={{ 
            marginTop: '1.5rem', 
            fontFamily: 'Syncopate', 
            fontSize: '0.8rem', 
            color: '#fff', 
            letterSpacing: '0.6em',
            fontWeight: 700,
            textShadow: '0 0 10px var(--ths-glow)'
          }}>
            SYSTEM CORE
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
