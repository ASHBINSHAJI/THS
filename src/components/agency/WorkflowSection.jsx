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
      
      <div className="workflow-container">
        <div className="workflow-line"></div>
        
        {['Management', 'Content', 'AI Support', 'Delivery'].map((step, idx) => (
          <div key={idx} className="workflow-node">
            <div className="workflow-dot"></div>
            <div className="workflow-label">{step}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
