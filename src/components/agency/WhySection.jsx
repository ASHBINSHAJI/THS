import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-title', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
      
      gsap.from('.why-points', {
        scrollTrigger: {
          trigger: '.why-points',
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="agency-section why-section" style={{ textAlign: 'center' }}>
      <h2 className="why-title agency-heading" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#888', filter: 'none', background: 'none', WebkitTextFillColor: '#888' }}>NOT FREELANCERS.</h2>
      <h2 className="why-title agency-heading" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#888', filter: 'none', background: 'none', WebkitTextFillColor: '#888' }}>NOT RANDOM VENDORS.</h2>
      <h2 className="why-title agency-heading" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginTop: '2rem' }}>ONE TRANSFORMATION SYSTEM.</h2>
      
      <div className="why-points" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '4rem', maxWidth: '800px' }}>
        {['Unified Workflow', 'Consistent Branding', 'AI-Enhanced Speed', 'Cinematic Quality', 'Technical Execution', 'Scalable Systems'].map((point, idx) => (
          <div key={idx} style={{ padding: '1rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}
