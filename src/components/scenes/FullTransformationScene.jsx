import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FullTransformationScene = () => {
  const containerRef = useRef(null);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

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

    // Before State
    tl.fromTo(beforeRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .to(beforeRef.current, { opacity: 0, scale: 0.8, filter: 'blur(10px)', duration: 1 }, "+=1")
      
    // Dramatic Flash
      .to(containerRef.current, { backgroundColor: '#ffffff', duration: 0.1 })
      .to(containerRef.current, { backgroundColor: 'transparent', duration: 0.5 })
      
    // After State
      .fromTo(afterRef.current, { opacity: 0, scale: 1.5 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.4")
      .fromTo(text1Ref.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5 })
      .fromTo(text2Ref.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5 }, "-=0.3");

  }, []);

  return (
    <div ref={containerRef} className="scene-container full-transformation" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Before State */}
      <div ref={beforeRef} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, zIndex: 1 }}>
        <h2 style={{ fontSize: '3vw', color: '#333', textDecoration: 'line-through' }}>OLD BRAND</h2>
      </div>

      {/* After State / Evolved Brand UI */}
      <div ref={afterRef} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0, zIndex: 2, background: 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 60%)' }}>
        <h1 className="interactive" style={{ fontSize: '12vw', textShadow: '0 0 50px rgba(255,255,255,0.5)', margin: 0 }}>THS</h1>
      </div>

      <div style={{ position: 'absolute', bottom: '15%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
        <h2 ref={text1Ref} style={{ fontSize: '4vw', opacity: 0, margin: 0 }}>FROM INVISIBLE</h2>
        <h2 ref={text2Ref} style={{ fontSize: '4vw', opacity: 0, margin: 0, color: 'cyan' }}>TO UNFORGETTABLE.</h2>
      </div>

    </div>
  );
};

export default FullTransformationScene;
