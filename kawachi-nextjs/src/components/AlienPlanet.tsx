"use client";

import { useRef, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// Enhanced Planet component with better shader and performance
function Planet({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  // Enhanced shader material for the planet with more realistic effects
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        mousePos: { value: new THREE.Vector2(0.5, 0.5) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vUv = uv;
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mousePos;
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        // Enhanced noise functions
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);

          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));

          vec2 u = f * f * (3.0 - 2.0 * f);

          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        float fbm(vec2 st) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 0.0;

          for (int i = 0; i < 6; i++) {
            value += amplitude * noise(st);
            st *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          vec2 uv = vUv;
          float timeScale = time * 0.0005;

          // Create terrain-like noise patterns
          float continents = fbm(uv * 4.0 + timeScale);
          float mountains = fbm(uv * 8.0 + timeScale * 1.5) * 0.5;
          float details = fbm(uv * 16.0 + timeScale * 2.0) * 0.25;

          float terrain = continents + mountains + details;

          // Alien planet color palette
          vec3 deepOcean = vec3(0.0, 0.1, 0.3);
          vec3 shallowWater = vec3(0.0, 0.5, 0.8);
          vec3 coast = vec3(0.2, 0.8, 1.0);
          vec3 lowland = vec3(0.1, 0.6, 0.3);
          vec3 highland = vec3(0.4, 0.3, 0.1);
          vec3 mountains_color = vec3(0.6, 0.6, 0.6);
          vec3 peaks = vec3(0.9, 0.9, 1.0);

          // Color based on terrain height
          vec3 terrainColor;
          if (terrain < 0.3) {
            terrainColor = mix(deepOcean, shallowWater, terrain / 0.3);
          } else if (terrain < 0.4) {
            terrainColor = mix(shallowWater, coast, (terrain - 0.3) / 0.1);
          } else if (terrain < 0.5) {
            terrainColor = mix(coast, lowland, (terrain - 0.4) / 0.1);
          } else if (terrain < 0.7) {
            terrainColor = mix(lowland, highland, (terrain - 0.5) / 0.2);
          } else if (terrain < 0.9) {
            terrainColor = mix(highland, mountains_color, (terrain - 0.7) / 0.2);
          } else {
            terrainColor = mix(mountains_color, peaks, (terrain - 0.9) / 0.1);
          }

          // Add atmospheric scattering effect
          float fresnel = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
          fresnel = pow(fresnel, 1.5);

          // Atmospheric colors
          vec3 atmosphereColor = vec3(0.0, 1.0, 1.0);

          // Mouse interaction effect
          vec2 mouseInfluence = (mousePos - 0.5) * 2.0;
          float mouseDistance = length(vUv - (mousePos * 2.0 - 1.0) * 0.5 - 0.5);
          float mouseEffect = smoothstep(0.3, 0.0, mouseDistance) * 0.3;

          // Pulsing energy effect
          float pulse = sin(timeScale * 1000.0) * 0.1 + 0.9;

          // Combine all effects
          vec3 finalColor = terrainColor;
          finalColor += atmosphereColor * fresnel * 0.4;
          finalColor += mouseEffect * vec3(1.0, 0.5, 1.0);
          finalColor *= pulse;

          // Add some subtle city lights on the dark side
          float nightSide = 1.0 - max(0.0, dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))));
          if (nightSide > 0.5 && terrain > 0.4 && terrain < 0.6) {
            float cities = noise(uv * 50.0) > 0.7 ? 1.0 : 0.0;
            finalColor += cities * vec3(1.0, 0.8, 0.2) * nightSide * 0.5;
          }

          gl_FragColor = vec4(finalColor, 0.9 + fresnel * 0.1);
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
    });
  }, []);

  // Atmosphere shader material
  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.8 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 atmosphere = vec3(0.0, 1.0, 1.0) * intensity;
          float pulse = sin(time * 0.002) * 0.3 + 0.7;
          gl_FragColor = vec4(atmosphere, intensity * 0.6 * pulse);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (meshRef.current) {
      // Smooth planet rotation
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.001;

      // Update shader uniforms
      shaderMaterial.uniforms.time.value = time * 1000;
      shaderMaterial.uniforms.mousePos.value.set(
        mousePosition.x,
        mousePosition.y,
      );

      // Subtle movement based on mouse position with smooth interpolation
      const targetX = (mousePosition.x - 0.5) * 0.2;
      const targetY = (mousePosition.y - 0.5) * 0.2;

      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        targetX,
        0.01,
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetY,
        0.01,
      );
    }

    if (atmosphereRef.current) {
      atmosphereMaterial.uniforms.time.value = time * 1000;
      atmosphereRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group position={[-8, -4, -20]}>
      {/* Main Planet */}
      <Sphere ref={meshRef} args={[5, 128, 64]} material={shaderMaterial} />

      {/* Atmosphere */}
      <Sphere
        ref={atmosphereRef}
        args={[5.3, 64, 32]}
        material={atmosphereMaterial}
      />

      {/* Additional glow effect */}
      <Sphere args={[5.8, 32, 16]}>
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

// Enhanced floating particles with orbital motion
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Create orbital patterns around the planet
      const radius = 15 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      // Random colors in the cyan-magenta spectrum
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1; // Cyan
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0;
        colors[i * 3 + 2] = 1; // Magenta
      } else {
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0.5;
        colors[i * 3 + 2] = 1; // Blue
      }
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      particlesRef.current.rotation.y = time * 0.0008;
      particlesRef.current.rotation.x = Math.sin(time * 0.0005) * 0.1;
      particlesRef.current.rotation.z = Math.cos(time * 0.0003) * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        transparent
        opacity={0.8}
        vertexColors
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Enhanced camera controls with smooth interpolation
function CameraController({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) {
  const { camera } = useThree();

  useFrame(() => {
    // Very subtle camera movement for immersion
    const targetX = (mousePosition.x - 0.5) * 0.3;
    const targetY = -(mousePosition.y - 0.5) * 0.3;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.01);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.01);

    // Smooth look-at with slight offset
    camera.lookAt(targetX * 0.1, targetY * 0.1, 0);
  });

  return null;
}

interface AlienPlanetProps {
  isMobile: boolean;
}

export default function AlienPlanet({ isMobile }: AlienPlanetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (isMobile) return;

    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse updates for better performance
      if (animationFrame) return;

      animationFrame = requestAnimationFrame(() => {
        mousePosition.current = {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        };
        animationFrame = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isMobile]);

  if (isMobile) {
    // Enhanced mobile fallback with animated gradients
    return (
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse at 25% 50%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 30%, rgba(255, 0, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(0, 128, 255, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #0f0f1f 75%, #000000 100%)
          `,
        }}
        animate={{
          backgroundPosition: [
            "0% 0%, 100% 0%, 0% 100%",
            "100% 50%, 0% 100%, 100% 0%",
            "50% 100%, 50% 0%, 50% 50%",
            "0% 0%, 100% 0%, 0% 100%",
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Mobile particle effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-kawachi-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10">
      <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
          }}
          dpr={[1, Math.min(window.devicePixelRatio, 2)]}
          style={{ background: "transparent" }}
          performance={{ min: 0.8 }}
        >
          {/* Optimized lighting setup */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ffff" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.4}
            color="#ff00ff"
          />
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.6}
            color="#ffffff"
          />

          {/* Enhanced stars background */}
          <Stars
            radius={150}
            depth={60}
            count={1500}
            factor={6}
            saturation={0.2}
            fade
            speed={0.3}
          />

          {/* Main planet with enhanced visuals */}
          <Planet mousePosition={mousePosition.current} />

          {/* Enhanced floating particles */}
          <FloatingParticles />

          {/* Smooth camera controller */}
          <CameraController mousePosition={mousePosition.current} />
        </Canvas>
      </Suspense>

      {/* Enhanced overlay gradients for depth and atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.2) 80%),
            linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.1) 100%),
            radial-gradient(ellipse at 20% 60%, rgba(0, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 40%, rgba(255, 0, 255, 0.03) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
