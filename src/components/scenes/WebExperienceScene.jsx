import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const WebExperienceScene = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const uiGridRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
      }
    });

    tl.fromTo(uiGridRef.current, { opacity: 0, scale: 2, rotationX: 45 }, { opacity: 1, scale: 1, rotationX: 0, duration: 1.5 })
      .fromTo(text1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=1")
      .fromTo(text2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");

    panelsRef.current.forEach((panel, i) => {
      tl.fromTo(panel, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.8");
    });

    tl.to(containerRef.current, { opacity: 0, duration: 1 }, "+=1");

  }, []);

  return (
    <div ref={containerRef} className="scene-container web-experience" style={{ height: '100vh', position: 'relative', overflow: 'hidden', perspective: '1000px' }}>
      
      {/* 3D UI Grid Architecture */}
      <div ref={uiGridRef} style={{ position: 'absolute', inset: 0, display: 'flex', flexWrap: 'wrap', gap: '2%', padding: '5%', pointerEvents: 'none', zIndex: 1, opacity: 0, transformStyle: 'preserve-3d' }}>
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} ref={el => panelsRef.current[i] = el} className="holo-panel" style={{ width: i < 2 ? '48%' : '31%', height: i < 2 ? '40%' : '25%', opacity: 0 }}></div>
        ))}
      </div>

      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2, pointerEvents: 'none' }}>
        <h2 ref={text1Ref} className="interactive" style={{ fontSize: '4vw', textAlign: 'center', opacity: 0, background: 'rgba(0,0,0,0.5)', padding: '1rem', backdropFilter: 'blur(10px)' }}>WE BUILD DIGITAL ENVIRONMENTS.</h2>
        <h2 ref={text2Ref} className="interactive" style={{ fontSize: '4vw', textAlign: 'center', opacity: 0, color: '#888', background: 'rgba(0,0,0,0.5)', padding: '1rem', backdropFilter: 'blur(10px)' }}>NOT JUST WEBSITES.</h2>
      </div>

    </div>
  );
};

export default WebExperienceScene;
