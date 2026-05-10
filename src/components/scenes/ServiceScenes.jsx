import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const services = [
  { title: "ART", desc: "Fluid Abstract Visuals & Morphing Typography" },
  { title: "TECH", desc: "Neural Networks & AI Scanning" },
  { title: "MARKETING", desc: "Data Streams & Social Pulse" },
  { title: "WEB", desc: "Futuristic UI Construction" }
];

const ServiceScenes = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    // Horizontal scroll effect or staggered vertical fade
    panelsRef.current.forEach((panel, i) => {
      gsap.fromTo(panel, 
        { opacity: 0, scale: 0.9, y: 100 }, 
        { 
          opacity: 1, scale: 1, y: 0, 
          scrollTrigger: {
            trigger: panel,
            start: "top center+=20%",
            end: "bottom center",
            scrub: 1,
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="scene-container services-scene" style={{ display: 'block', padding: '10vh 0' }}>
      {services.map((svc, i) => (
        <div key={i} ref={el => panelsRef.current[i] = el} style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '8vw', margin: 0 }}>{svc.title}</h2>
          <p style={{ fontSize: '2vw', color: '#888', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '1rem' }}>{svc.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceScenes;
