import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

/* -------- Animated Avatar Mesh -------- */
function AvatarMesh() {
  const groupRef = useRef();
  const headRef = useRef();
  const auraRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.3;
    }
    if (headRef.current) {
      headRef.current.position.y = 0.5 + Math.sin(t * 1.2) * 0.06;
    }
    if (auraRef.current) {
      auraRef.current.rotation.z = t * 0.3;
      auraRef.current.rotation.x = t * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Aura ring */}
      <mesh ref={auraRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.6, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#00f5c8"
          emissive="#00f5c8"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[1.6, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#7b61ff"
          emissive="#7b61ff"
          emissiveIntensity={1.5}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Body */}
      <mesh position={[0, -0.8, 0]}>
        <capsuleGeometry args={[0.45, 0.9, 8, 16]} />
        <meshStandardMaterial
          color="#0d1030"
          metalness={0.3}
          roughness={0.5}
          emissive="#7b61ff"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Shirt gradient overlay */}
      <mesh position={[0, -0.7, 0.01]}>
        <planeGeometry args={[0.9, 0.9]} />
        <meshStandardMaterial
          color="#7b61ff"
          transparent
          opacity={0.15}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.12, 0.14, 0.28, 12]} />
        <meshStandardMaterial color="#e8b89a" roughness={0.7} />
      </mesh>

      {/* Head */}
      <group ref={headRef} position={[0, 0.5, 0]}>
        <Sphere args={[0.4, 32, 32]}>
          <meshStandardMaterial color="#e8b89a" roughness={0.6} />
        </Sphere>

        {/* Hair */}
        <mesh position={[0, 0.22, 0]}>
          <sphereGeometry args={[0.38, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
          <meshStandardMaterial color="#2d1810" roughness={0.9} />
        </mesh>
        {/* Hair side left */}
        <mesh position={[-0.32, 0.1, 0]} rotation={[0, 0, 0.3]}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#2d1810" roughness={0.9} />
        </mesh>
        {/* Hair side right */}
        <mesh position={[0.32, 0.1, 0]} rotation={[0, 0, -0.3]}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#2d1810" roughness={0.9} />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.13, 0.06, 0.37]}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial color="#1a0a00" />
        </mesh>
        <mesh position={[0.13, 0.06, 0.37]}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial color="#1a0a00" />
        </mesh>
        {/* Eye shine */}
        <mesh position={[-0.115, 0.075, 0.41]}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={1} />
        </mesh>
        <mesh position={[0.145, 0.075, 0.41]}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={1} />
        </mesh>

        {/* Smile */}
        <mesh position={[0, -0.1, 0.39]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.08, 0.018, 8, 20, Math.PI]} />
          <meshStandardMaterial color="#c07860" />
        </mesh>

        {/* Holo glow ring around head */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[0.55, 0.01, 8, 60]} />
          <meshStandardMaterial
            color="#00f5c8"
            emissive="#00f5c8"
            emissiveIntensity={2}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>

      {/* Arms */}
      <mesh position={[-0.6, -0.5, 0]} rotation={[0, 0, 0.4]}>
        <capsuleGeometry args={[0.1, 0.55, 6, 12]} />
        <meshStandardMaterial color="#e8b89a" roughness={0.6} />
      </mesh>
      <mesh position={[0.6, -0.5, 0]} rotation={[0, 0, -0.4]}>
        <capsuleGeometry args={[0.1, 0.55, 6, 12]} />
        <meshStandardMaterial color="#e8b89a" roughness={0.6} />
      </mesh>

      {/* Floating data orbs */}
      {[
        { pos: [1.2, 0.5, 0.5], color: '#00f5c8', delay: 0 },
        { pos: [-1.2, 0.2, 0.3], color: '#7b61ff', delay: 1 },
        { pos: [0.8, 1.2, 0.2], color: '#ff6bff', delay: 0.5 },
      ].map((orb, i) => (
        <Float key={i} speed={2 + i * 0.5} rotationIntensity={1} floatIntensity={0.5}>
          <mesh position={orb.pos}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={orb.color}
              emissive={orb.color}
              emissiveIntensity={2}
              transparent
              opacity={0.9}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

const Avatar3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#00f5c8" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#7b61ff" />
      <spotLight
        position={[0, 5, 0]}
        intensity={0.5}
        color="#ff6bff"
        angle={0.5}
        penumbra={1}
      />
      <AvatarMesh />
    </Canvas>
  );
};

export default Avatar3D;
