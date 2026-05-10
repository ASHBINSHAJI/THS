import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const IdentityEngineScene = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const visualRef = useRef(null);

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

    tl.fromTo(text1Ref.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 })
      .fromTo(text2Ref.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
      .fromTo(visualRef.current, { opacity: 0, scale: 0, borderRadius: '0%' }, { opacity: 1, scale: 1, borderRadius: '50%', backgroundColor: '#fff', duration: 1.5 }, "-=1")
      .to(visualRef.current, { scale: 5, filter: 'blur(30px)', opacity: 0, duration: 1 }, "+=0.5")
      .to([text1Ref.current, text2Ref.current], { opacity: 0, duration: 0.5 }, "-=0.5");

  }, []);

  return (
    <div ref={containerRef} className="scene-container identity-engine" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Morphing Visual System */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, pointerEvents: 'none' }}>
        <div ref={visualRef} style={{ width: '20vw', height: '20vw', background: 'transparent', border: '1px solid #fff', opacity: 0 }}></div>
      </div>

      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <h2 ref={text1Ref} style={{ fontSize: '5vw', textAlign: 'center', opacity: 0 }}>IDENTITY IS NOT DECORATION.</h2>
        <h2 ref={text2Ref} style={{ fontSize: '5vw', textAlign: 'center', opacity: 0, color: '#888' }}>IT IS PSYCHOLOGY.</h2>
      </div>

    </div>
  );
};

export default IdentityEngineScene;
