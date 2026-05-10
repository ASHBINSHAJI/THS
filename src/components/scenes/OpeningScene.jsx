import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const OpeningScene = () => {
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

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

    // Initial state setup via CSS/inline styles, then animate with GSAP
    tl.fromTo(textRef1.current, { opacity: 0, scale: 0.8, filter: 'blur(10px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1 })
      .to(textRef1.current, { opacity: 0, scale: 1.2, filter: 'blur(10px)', duration: 0.5 }, "+=0.5")
      
      .fromTo(textRef2.current, { opacity: 0, scale: 0.8, filter: 'blur(10px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1 })
      .to(textRef2.current, { opacity: 0, scale: 1.2, filter: 'blur(10px)', duration: 0.5 }, "+=0.5")
      
      .fromTo(textRef3.current, { opacity: 0, scale: 0.8, filter: 'blur(10px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1 })
      .to(textRef3.current, { opacity: 0, scale: 1.5, filter: 'blur(20px)', duration: 1 }, "+=0.5");

  }, []);

  return (
    <div ref={containerRef} className="scene-container opening-scene" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 ref={textRef1} style={{ fontSize: '10vw', opacity: 0, position: 'absolute', textAlign: 'center', margin: 0, letterSpacing: '-0.05em' }}>MOST BRANDS</h1>
        <h1 ref={textRef2} style={{ fontSize: '15vw', opacity: 0, position: 'absolute', textAlign: 'center', margin: 0, letterSpacing: '-0.05em' }}>DIE</h1>
        <h1 ref={textRef3} style={{ fontSize: '12vw', opacity: 0, position: 'absolute', textAlign: 'center', margin: 0, letterSpacing: '-0.05em' }}>INVISIBLE</h1>
      </div>
    </div>
  );
};

export default OpeningScene;
