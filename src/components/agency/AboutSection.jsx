import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-glass', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
      
      gsap.from('.about-list li', {
        scrollTrigger: {
          trigger: '.about-list',
          start: 'top 80%',
        },
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="agency-section about-section">
      <div className="split-layout">
        <div className="split-left">
          <h2 className="agency-heading" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>THIS IS NOT A REGULAR AGENCY.</h2>
          <p className="agency-subheading" style={{ textAlign: 'left', marginLeft: 0 }}>
            THS combines creative direction, advanced visuals, technology, AI systems, marketing strategy, automation, and brand transformation into one powerful ecosystem.
          </p>
        </div>
        <div className="split-right">
          <div className="glass-panel about-glass">
            <h3 className="hologram-text" style={{ marginBottom: '2rem' }}>// CORE CAPABILITIES</h3>
            <ul className="about-list" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#fff', fontSize: '1.2rem' }}>
              <li>+ Creative Direction</li>
              <li>+ Advanced Visuals</li>
              <li>+ Technology & Code</li>
              <li>+ AI Systems Integration</li>
              <li>+ Marketing Strategy</li>
              <li>+ Brand Transformation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
