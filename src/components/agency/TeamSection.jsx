import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: 'ASHBIN',
    role: 'Creative Technology & Visual Systems',
    tagline: 'VISUAL ENGINEERING.',
    specs: ['CGI & animation', 'Web/App dev', 'Gen AI visuals', 'Electronic specialist', 'Project manager']
  },
  {
    name: 'NEVIN',
    role: 'Marketing Strategy & Operations',
    tagline: 'GROWTH IS SYSTEMIZED.',
    specs: ['Marketing systems', 'Workflow control', 'AI research', 'Marketing specialist', 'Editing', 'COO (Chief Operating Officer)']
  },
  {
    name: 'ATHEN',
    role: 'Motion Systems & Automation',
    tagline: 'MOTION CREATES IMPACT.',
    specs: ['SaaS animation', 'Automation', 'Branding expert', 'Graphic designer', 'CGO (Chief Growth Operator)']
  }
];

export default function TeamSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-card-blur', {
        scrollTrigger: {
          trigger: '.team-container',
          start: 'top 80%',
        },
        filter: 'blur(20px)',
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1.5,
        ease: 'power3.out'
      });

      // Subtle blur animation for upcoming creators
      gsap.to('.reveal-soon-text', {
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="agency-section team-section" style={{ alignItems: 'flex-start', padding: '10vw 5vw' }}>
      <h2 className="agency-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem' }}>ELITE OPERATORS</h2>
      
      <div className="team-container" style={{ width: '100%', maxWidth: '1200px' }}>
        {teamMembers.map((member, idx) => (
          <div key={idx} className="team-card team-card-blur">
            <div>
              <div className="team-role">// {member.role}</div>
              <h3 className="team-name">{member.name}</h3>
              <div style={{ color: 'var(--ths-primary)', marginTop: '0.5rem', fontWeight: 600 }}>{member.tagline}</div>
            </div>
            <div style={{ maxWidth: '400px', textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              {member.specs.map((spec, i) => {
                const isSpecial = spec === 'Project manager' || spec.includes('COO') || spec.includes('CGO');
                return (
                  <div key={i} style={
                    isSpecial ? {
                      color: '#fff',
                      marginBottom: '1rem',
                      marginTop: '0.5rem',
                      fontWeight: 800,
                      fontSize: '1.2rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      textShadow: '1px 1px 0px var(--ths-secondary), 2px 2px 0px var(--ths-primary), 0px 0px 15px var(--ths-glow)',
                      transform: 'scale(1.05)',
                    } : { color: '#888', marginBottom: '0.5rem' }
                  }>
                    {spec}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* REVEALING SOON SECTION */}
        <div className="team-card team-card-blur" style={{ borderStyle: 'dashed', borderColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ filter: 'blur(12px)', opacity: 0.3, textAlign: 'center', userSelect: 'none' }}>
            <div className="team-role">// [IDENTITY_ENCRYPTED]</div>
            <h3 className="team-name">ELITE CREATORS</h3>
            <div style={{ color: 'var(--ths-primary)', marginTop: '0.5rem', fontWeight: 600 }}>SYSTEM ACCESS PENDING</div>
          </div>
          <div className="reveal-soon-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'monospace', fontSize: '1.2rem', color: 'var(--ths-primary)', letterSpacing: '0.5em', fontWeight: 700 }}>
            REVEALING SOON
          </div>
        </div>
      </div>
    </section>
  );
}
