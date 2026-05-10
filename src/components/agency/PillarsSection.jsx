import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: 'ART DIVISION',
    tagline: 'VISUALS THAT CONTROL ATTENTION.',
    color: '#ff0055',
    items: ['Colour grading', 'VFX editing', 'CGI & animation', 'Motion editing', 'Motion detailing', 'Product visualization', 'Posters', 'Thumbnails']
  },
  {
    title: 'CODE DIVISION',
    tagline: 'WE BUILD DIGITAL INFRASTRUCTURE.',
    color: '#00f0ff',
    items: ['Web development', 'App development', 'SaaS animation', 'Interactive UI systems', 'Workflow automation', 'Bot assistance', 'Maintenance']
  },
  {
    title: 'MARKETING DIVISION',
    tagline: 'ATTENTION IS ENGINEERED.',
    color: '#00ff66',
    items: ['Full marketing systems', 'SEO optimization', 'Content strategy', 'Reel editing', 'Standard editing', 'Campaign systems']
  },
  {
    title: 'AI DIVISION',
    tagline: 'INTELLIGENCE ACCELERATES EVERYTHING.',
    color: '#9d00ff',
    items: ['Generative AI', 'AI image/video systems', 'AI research', 'Automation systems', 'Workflow intelligence', 'Update flow systems']
  }
];

export default function PillarsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pillar-card-anim', 
        { y: 100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const flipPairs = [
    { front: pillars[1], back: pillars[0] }, // Code -> Art
    { front: pillars[2], back: pillars[3] }  // Marketing -> AI
  ];

  return (
    <section ref={containerRef} className="agency-section pillars-section">
      <h2 className="agency-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem', textAlign: 'center' }}>FOUR CORE PILLARS</h2>
      <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        {flipPairs.map((pair, idx) => (
          <div key={idx} className="flip-card pillar-card-anim">
            <div className="flip-card-inner">
              {/* FRONT SIDE */}
              <div className="flip-card-front" style={{ background: 'rgba(10, 10, 15, 0.9)', backdropFilter: 'blur(10px)', border: `1px solid ${pair.front.color}40`, boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px ${pair.front.color}10` }}>
                <div className="hologram-text" style={{ color: pair.front.color, marginBottom: '1rem', textShadow: `0 0 10px ${pair.front.color}, 0 0 20px ${pair.front.color}` }}>// {pair.front.title} (HOVER TO FLIP)</div>
                <h3 className="pillar-title" style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', wordBreak: 'break-word', hyphens: 'auto' }}>{pair.front.tagline}</h3>
                <div className="pillar-desc" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
                  {pair.front.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="pillar-tag"
                      style={{ 
                        display: 'inline-block', 
                        padding: '0.4rem 0.8rem', 
                        background: `linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
                        border: `1px solid ${pair.front.color}50`, 
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        color: '#ddd',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = `${pair.front.color}20`;
                        e.target.style.color = '#fff';
                        e.target.style.boxShadow = `0 0 10px ${pair.front.color}80`;
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = `linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`;
                        e.target.style.color = '#ddd';
                        e.target.style.boxShadow = 'none';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      + {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="flip-card-back" style={{ background: 'rgba(10, 10, 15, 0.9)', backdropFilter: 'blur(10px)', border: `1px solid ${pair.back.color}40`, boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px ${pair.back.color}10` }}>
                <div className="hologram-text" style={{ color: pair.back.color, marginBottom: '1rem', textShadow: `0 0 10px ${pair.back.color}, 0 0 20px ${pair.back.color}` }}>// {pair.back.title}</div>
                <h3 className="pillar-title" style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', wordBreak: 'break-word', hyphens: 'auto' }}>{pair.back.tagline}</h3>
                <div className="pillar-desc" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
                  {pair.back.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="pillar-tag"
                      style={{ 
                        display: 'inline-block', 
                        padding: '0.4rem 0.8rem', 
                        background: `linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
                        border: `1px solid ${pair.back.color}50`, 
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        color: '#ddd',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = `${pair.back.color}20`;
                        e.target.style.color = '#fff';
                        e.target.style.boxShadow = `0 0 10px ${pair.back.color}80`;
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = `linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`;
                        e.target.style.color = '#ddd';
                        e.target.style.boxShadow = 'none';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      + {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
