import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorManager = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const onMouseMove = (e) => {
      // Smooth follow for the outer ring
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Instant follow for the dot
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
    };

    const onMouseEnter = () => {
      cursor.classList.add('hover');
    };

    const onMouseLeave = () => {
      cursor.classList.remove('hover');
    };

    window.addEventListener('mousemove', onMouseMove);

    // Add magnetic effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
      
      // Magnetic physics
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorDotRef} className="custom-cursor-dot"></div>
    </>
  );
};

export default CursorManager;
