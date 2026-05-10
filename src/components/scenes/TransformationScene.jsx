import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TransformationScene = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const linesRef = useRef([]);

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

    tl.fromTo(titleRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(subtitleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");

    linesRef.current.forEach((line, index) => {
      tl.fromTo(line, { width: 0, opacity: 0 }, { width: '100%', opacity: 0.2, duration: 0.5 }, "-=0.8");
    });

    tl.to([titleRef.current, subtitleRef.current, ...linesRef.current], { opacity: 0, y: -100, duration: 1 }, "+=1");
  }, []);

  return (
    <div ref={containerRef} className="scene-container transformation-scene" style={{ height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
      
      {/* Holographic grid lines simulated with HTML */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        {[1,2,3,4,5].map((_, i) => (
          <div key={i} ref={el => linesRef.current[i] = el} style={{ height: '1px', backgroundColor: 'var(--accent-color)', width: '0%', opacity: 0 }}></div>
        ))}
      </div>

      <h2 ref={titleRef} style={{ fontSize: '6vw', zIndex: 2, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WE DON'T DESIGN.</h2>
      <h2 ref={subtitleRef} style={{ fontSize: '6vw', zIndex: 2, textAlign: 'center', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WE RECONSTRUCT.</h2>
    </div>
  );
};

export default TransformationScene;
