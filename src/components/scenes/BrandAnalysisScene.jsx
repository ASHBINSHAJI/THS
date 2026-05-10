import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BrandAnalysisScene = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const targetRef = useRef(null);
  const weakBrandRef = useRef(null);

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

    tl.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(weakBrandRef.current, { opacity: 0, scale: 0.5, rotation: -45 }, { opacity: 1, scale: 1, rotation: 0, duration: 1 }, "-=0.5")
      .fromTo(targetRef.current, { opacity: 0, scale: 2 }, { opacity: 1, scale: 1, duration: 0.5 })
      .to(weakBrandRef.current, { filter: 'hue-rotate(90deg) blur(5px)', duration: 1 }, "+=0.5")
      .to([textRef.current, weakBrandRef.current, targetRef.current], { opacity: 0, y: -100, duration: 1 }, "+=1");

  }, []);

  return (
    <div ref={containerRef} className="scene-container brand-analysis" style={{ height: '100vh', position: 'relative' }}>
      
      <h2 ref={textRef} style={{ position: 'absolute', top: '15%', fontSize: '4vw', textAlign: 'center', opacity: 0, zIndex: 2 }}>WE IDENTIFY THE FAILURE POINTS.</h2>

      {/* Target Crosshair */}
      <div ref={targetRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '30vw', height: '30vw', border: '2px dashed red', borderRadius: '50%', opacity: 0, zIndex: 1, pointerEvents: 'none' }}></div>

      {/* Weak Brand Representation */}
      <div ref={weakBrandRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, zIndex: 2 }}>
        <div style={{ width: '15vw', height: '15vw', border: '1px solid #555', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(15deg)' }}>
          <span style={{ fontFamily: 'sans-serif', fontSize: '2vw', color: '#555' }}>LOGO</span>
        </div>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <div style={{ width: '4vw', height: '1vw', background: 'red', opacity: 0.5 }}></div>
          <div style={{ width: '6vw', height: '1vw', background: '#333' }}></div>
        </div>
      </div>

    </div>
  );
};

export default BrandAnalysisScene;
