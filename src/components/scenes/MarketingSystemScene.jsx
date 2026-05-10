import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MarketingSystemScene = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const streamRef = useRef(null);

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

    tl.fromTo(streamRef.current, { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: 1, duration: 1 })
      .fromTo(textRef.current, { opacity: 0, scale: 3, filter: 'blur(20px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1 }, "-=0.5")
      .to(streamRef.current, { width: '100vw', opacity: 0.5, duration: 1 }, "+=0.5")
      .to([textRef.current, streamRef.current], { opacity: 0, filter: 'blur(20px)', duration: 1 }, "+=1");

  }, []);

  return (
    <div ref={containerRef} className="scene-container marketing-scene" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Data Stream / Energy Propogation */}
      <div ref={streamRef} style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100vh', background: 'cyan', boxShadow: '0 0 30px 10px cyan', opacity: 0, zIndex: 1, pointerEvents: 'none' }}></div>

      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <h2 ref={textRef} className="glitch-text interactive" data-text="ATTENTION IS ENGINEERED." style={{ fontSize: '6vw', textAlign: 'center', opacity: 0 }}>ATTENTION IS ENGINEERED.</h2>
      </div>

    </div>
  );
};

export default MarketingSystemScene;
