import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CtaSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.cta-glow', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom bottom',
          scrub: 1,
        },
        scale: 1.5,
        opacity: 0.8,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="agency-section cta-section" style={{ position: 'relative' }}>
      <div className="cta-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(0.5)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: 1, opacity: 0, pointerEvents: 'none' }}></div>
      
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h2 className="agency-heading" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', textShadow: '0 0 40px var(--ths-glow)' }}>READY TO EVOLVE?</h2>
        <p className="agency-subheading" style={{ margin: '2rem auto 4rem', color: 'var(--ths-primary)' }}>Enter the THS ecosystem.</p>
        
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <button className="magnetic-btn btn-primary">Start a Project</button>
          <button className="magnetic-btn">Build With THS</button>
        </div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="agency-footer">
      <div style={{ fontFamily: 'monospace', color: '#888' }}>
        © {new Date().getFullYear()} THS AGENCY SYSTEM.
      </div>
      <div style={{ display: 'flex', gap: '2rem', color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>System Login</a>
      </div>
    </footer>
  );
}
