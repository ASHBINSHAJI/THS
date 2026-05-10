import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorkflowSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.workflow-node', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'back.out(1.7)'
      });
      
      gsap.to('.workflow-line', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="agency-section workflow-section">
      <h2 className="agency-heading" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center' }}>ONE SYSTEM. FULL CONTROL.</h2>
      <p className="agency-subheading" style={{ marginBottom: '4rem' }}>An advanced futuristic production pipeline.</p>
      
      <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="workflow-line" style={{ position: 'absolute', top: '50%', left: 0, height: '2px', background: 'linear-gradient(90deg, var(--ths-primary), var(--ths-accent))', width: '0%', zIndex: 1, transform: 'translateY(-50%)' }}></div>
        
        {['Management', 'Content', 'AI Support', 'Delivery'].map((step, idx) => (
          <div key={idx} className="workflow-node" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--ths-dark)', border: '2px solid white', boxShadow: '0 0 20px var(--ths-glow)' }}></div>
            <div style={{ fontFamily: 'monospace', color: 'var(--ths-primary)', background: 'rgba(0,0,0,0.5)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid rgba(0,240,255,0.2)' }}>{step}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
