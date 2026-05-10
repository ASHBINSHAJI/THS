import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MidCinematicScene = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const flashRef = useRef(null);

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

    tl.fromTo(flashRef.current, { opacity: 0, backgroundColor: '#ffffff' }, { opacity: 1, duration: 0.5 })
      .to(flashRef.current, { opacity: 0, duration: 0.5 })
      .fromTo(text1Ref.current, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.2")
      .to(text1Ref.current, { opacity: 0, y: -50, duration: 0.5 }, "+=0.5")
      .fromTo(text2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .to(text2Ref.current, { opacity: 0, scale: 1.5, filter: 'blur(10px)', duration: 1 }, "+=1");

  }, []);

  return (
    <div ref={containerRef} className="scene-container mid-scene" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div ref={flashRef} style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', mixBlendMode: 'screen' }}></div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <h2 ref={text1Ref} style={{ fontSize: '5vw', textAlign: 'center', opacity: 0, position: 'absolute' }}>TRANSFORMATION IS NOT DESIGN.</h2>
        <h2 ref={text2Ref} style={{ fontSize: '7vw', textAlign: 'center', opacity: 0, position: 'absolute' }}>IT IS ENGINEERING.</h2>
      </div>
    </div>
  );
};

export default MidCinematicScene;
