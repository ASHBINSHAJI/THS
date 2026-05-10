import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FinalScene = () => {
  const containerRef = useRef(null);
  const coreRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

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

    tl.fromTo(coreRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      .fromTo(text1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(text2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 })
      .to([text1Ref.current, text2Ref.current], { opacity: 0, duration: 0.5 }, "+=1")
      .to(coreRef.current, { scale: 5, opacity: 0, duration: 1 })
      .fromTo(text3Ref.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 });

  }, []);

  return (
    <div ref={containerRef} className="scene-container final-scene" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Visual representation of the core for DOM fallback, actual core is in Canvas */}
      <div ref={coreRef} style={{ position: 'absolute', width: '20vw', height: '20vw', borderRadius: '50%', background: 'radial-gradient(circle, #fff 0%, transparent 70%)', opacity: 0, filter: 'blur(20px)' }}></div>

      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <h1 ref={text1Ref} style={{ fontSize: '15vw', margin: 0, lineHeight: 0.9, opacity: 0 }}>THS</h1>
        <h3 ref={text2Ref} style={{ fontSize: '3vw', marginTop: '2rem', letterSpacing: '0.2em', opacity: 0 }}>FROM ZERO TO HERO</h3>
        
        <div ref={text3Ref} style={{ position: 'absolute', opacity: 0, textAlign: 'center' }}>
          <h2 style={{ fontSize: '4vw', margin: 0 }}>WE DON'T BUILD BRANDS.</h2>
          <h2 style={{ fontSize: '4vw', margin: 0, color: '#888' }}>WE BUILD DIGITAL POWER.</h2>
        </div>
      </div>
    </div>
  );
};

export default FinalScene;
