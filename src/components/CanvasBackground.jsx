import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import gsap from 'gsap';

function ParticleSystem(props) {
  const ref = useRef();
  
  // Generate random points in a sphere
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 10 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ba9696ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRef.current = { x, y };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Subtle parallax distortion based on mouse
    camera.position.x += (targetRef.current.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (targetRef.current.y * 2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

const CanvasBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <CameraRig />
      <color attach="background" args={['#030303']} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Fog for atmospheric depth */}
      <fog attach="fog" args={['#030303', 5, 15]} />
      
      <ParticleSystem />
    </Canvas>
  );
};

export default CanvasBackground;
