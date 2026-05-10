import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processes = ['Analyze', 'Design', 'Build', 'Automate', 'Scale'];

export default function ProcessSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray('.process-node');
      
      nodes.forEach((node, i) => {
        gsap.to(node, {
          scrollTrigger: {
            trigger: node,
            start: 'top 60%',
            end: 'bottom 40%',
            toggleClass: 'active',
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="agency-section process-section" style={{ alignItems: 'flex-start' }}>
      <h2 className="hologram-text" style={{ marginBottom: '4rem', fontSize: '1.5rem' }}>// TRANSFORMATION JOURNEY</h2>
      
      <div className="process-container" style={{ width: '100%', maxWidth: '800px' }}>
        {processes.map((proc, idx) => (
          <div key={idx} className="process-node">
            <div className="process-number">0{idx + 1}</div>
            <div className="process-label">{proc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
