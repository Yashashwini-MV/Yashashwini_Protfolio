import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* -------- Floating Particles -------- */
function Particles({ count = 200 }) {
  const meshRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#00f5c8'),
      new THREE.Color('#7b61ff'),
      new THREE.Color('#ff6bff'),
      new THREE.Color('#00c3ff'),
    ];
    for (let i = 0; i < count; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.04;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

/* -------- Floating Geometric Shapes -------- */
function FloatingShape({ position, color, shape = 'octahedron', speed = 1 }) {
  const ref = useRef();
  const offset = Math.random() * Math.PI * 2;

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + offset;
      ref.current.rotation.x = t * 0.5;
      ref.current.rotation.y = t * 0.3;
      ref.current.position.y = position[1] + Math.sin(t * 0.7) * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {shape === 'octahedron' && <octahedronGeometry args={[0.25]} />}
      {shape === 'tetrahedron' && <tetrahedronGeometry args={[0.3]} />}
      {shape === 'icosahedron' && <icosahedronGeometry args={[0.22]} />}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.5}
        wireframe
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

/* -------- Grid Plane -------- */
function GridPlane() {
  return (
    <gridHelper
      args={[40, 40, '#00f5c830', '#7b61ff20']}
      position={[0, -6, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

/* -------- Main Scene -------- */
const Scene3D = () => {
  const shapes = [
    { position: [-4, 2, -3], color: '#00f5c8', shape: 'octahedron', speed: 0.8 },
    { position: [4, 1, -2], color: '#7b61ff', shape: 'tetrahedron', speed: 1.1 },
    { position: [-2, -2, -4], color: '#ff6bff', shape: 'icosahedron', speed: 0.6 },
    { position: [5, -1, -3], color: '#00c3ff', shape: 'octahedron', speed: 0.9 },
    { position: [-5, 0, -2], color: '#7b61ff', shape: 'icosahedron', speed: 1.3 },
    { position: [2, 3, -4], color: '#00f5c8', shape: 'tetrahedron', speed: 0.7 },
    { position: [0, -3, -5], color: '#ff6bff', shape: 'octahedron', speed: 1.0 },
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 70 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00f5c8" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#7b61ff" />

      <Particles count={250} />
      <GridPlane />
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
    </Canvas>
  );
};

export default Scene3D;
