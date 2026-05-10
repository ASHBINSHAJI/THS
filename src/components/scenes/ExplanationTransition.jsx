import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ExplanationTransition = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const uiRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
      }
    });

    tl.fromTo(uiRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
      .fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .to([textRef.current, uiRef.current], { opacity: 0, scale: 1.5, filter: 'blur(20px)', duration: 1 }, "+=1");

  }, []);

  return (
    <div ref={containerRef} className="scene-container explanation-transition" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      <div ref={uiRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0 }}>
        {/* Scanlines and holographic circles */}
        <div className="holo-panel" style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', borderRadius: '50%', border: '1px solid rgba(0, 255, 255, 0.3)', boxShadow: 'inset 0 0 50px rgba(0, 255, 255, 0.1)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: '1px', background: 'rgba(0, 255, 255, 0.5)' }}></div>
        <div style={{ position: 'absolute', top: '0', left: '50%', width: '1px', height: '100%', background: 'rgba(0, 255, 255, 0.5)' }}></div>
      </div>

      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <h2 ref={textRef} style={{ fontSize: '6vw', textAlign: 'center', opacity: 0, letterSpacing: '0.1em' }}>THIS IS HOW BRANDS EVOLVE.</h2>
      </div>
    </div>
  );
};

export default ExplanationTransition;
