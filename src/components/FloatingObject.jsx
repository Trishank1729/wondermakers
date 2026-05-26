"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger in the browser environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

// 3D Scene Component inside Canvas
function Scene({ isDark }) {
  const groupRef = useRef(null);
  const meshRef = useRef(null);

  // Frame loop for dynamic, responsive organic wobble and rotation tied directly to scroll velocity
  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;

    // Get real-time scroll velocity from GSAP ScrollTrigger (perfectly smooth, capturing Lenis inertia)
    let velocity = 0;
    try {
      velocity = ScrollTrigger.getVelocity();
    } catch (e) {
      velocity = 0;
    }

    const absVelocity = Math.abs(velocity);
    const time = state.clock.getElapsedTime();

    // 1. Dynamic distortion (surface organic warp):
    // Directly proportional to scroll velocity. Caps at 0.22 at high speeds, and lands smoothly at 0.0 when still.
    const targetDistort = Math.min(absVelocity * 0.00012, 0.22);
    if (meshRef.current.material) {
      meshRef.current.material.distort = lerp(
        meshRef.current.material.distort || 0,
        targetDistort,
        0.06 // Low easing for a quiet, buttery smooth transition
      );
    }

    // 2. Dynamic rotation & "Random Movements" (wobble displacement in X, Y, Z):
    if (absVelocity > 10) {
      // Incremental rotation speed scales smoothly with velocity (slightly faster rotation while scrolling)
      const rotateX = Math.min(absVelocity * 0.00028, 0.035);
      const rotateY = Math.min(absVelocity * 0.00050, 0.055);
      const rotateZ = Math.min(absVelocity * 0.00018, 0.022);
      
      meshRef.current.rotation.x += rotateX;
      meshRef.current.rotation.y += rotateY;
      meshRef.current.rotation.z += rotateZ;

      // Soft, organic random displacement wiggles in 3D coordinate space (X, Y, Z)
      const movementScale = Math.min(absVelocity * 0.00015, 0.22); // Max 0.22 unit displacement
      const targetX = Math.sin(time * 7.5) * Math.cos(time * 3.2) * movementScale;
      const targetY = Math.cos(time * 6.0) * Math.sin(time * 4.5) * movementScale;
      const targetZ = Math.sin(time * 4.8) * Math.cos(time * 6.8) * (movementScale * 0.6);

      groupRef.current.position.x = lerp(groupRef.current.position.x, targetX, 0.1);
      groupRef.current.position.y = lerp(groupRef.current.position.y, targetY, 0.1);
      groupRef.current.position.z = lerp(groupRef.current.position.z, targetZ, 0.1);
    } else {
      // Smoothly level-align mesh rotation back to zero
      meshRef.current.rotation.x = lerp(meshRef.current.rotation.x, 0, 0.06);
      meshRef.current.rotation.y = lerp(meshRef.current.rotation.y, 0, 0.06);
      meshRef.current.rotation.z = lerp(meshRef.current.rotation.z, 0, 0.06);

      // Smoothly float position back to exact dead center (X: 0, Y: 0, Z: 0)
      groupRef.current.position.x = lerp(groupRef.current.position.x, 0, 0.06);
      groupRef.current.position.y = lerp(groupRef.current.position.y, 0, 0.06);
      groupRef.current.position.z = lerp(groupRef.current.position.z, 0, 0.06);
    }
  });

  // Bind GSAP scroll rotation tilt to the outer group
  useEffect(() => {
    if (!groupRef.current) return;

    // Define standard starting position
    groupRef.current.position.set(0, 0, 0);
    groupRef.current.rotation.set(0, 0, 0);

    // Dynamic scroll timeline tied to the page scroll
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.6, // Slightly faster responsiveness (reduced from 2.2)
      },
    });

    scrollTl.to(groupRef.current.rotation, {
      x: Math.PI * 0.8, // Increased scroll rotation tilt for a slightly faster look
      y: Math.PI * 1.0,
      ease: "none",
    }, 0);

    return () => {
      if (scrollTl.scrollTrigger) scrollTl.scrollTrigger.kill();
      scrollTl.kill();
    };
  }, []);

  return (
    <>
      {/* High-key, soft ambient lighting (offline and high performance) */}
      <ambientLight intensity={isDark ? 0.45 : 1.1} />
      
      {/* Soft key light from the front-top */}
      <directionalLight position={[10, 15, 10]} intensity={2.5} color="#ffffff" />
      
      {/* Ultra-soft pastel glow spots */}
      <pointLight position={[-12, 10, -5]} intensity={2.5} color="#b5f500" />
      <pointLight position={[12, 8, -5]} intensity={2.0} color="#fefeaa" />
      <pointLight position={[-8, -8, -8]} intensity={1.5} color="#a0e0ff" />
      <pointLight position={[8, -6, -8]} intensity={2.0} color="#fefeaa" />
      
      <group ref={groupRef}>
        <mesh ref={meshRef}>
          {/* Elegant minimalist Torus Ring geometry */}
          <torusGeometry args={[0.85, 0.25, 32, 100]} />
          
          {/* Pearlescent, frosted alabaster glass/porcelain material */}
          <MeshDistortMaterial
            color={isDark ? "#222222" : "#fcfbfa"} // Alabaster/Porcelain vs Soft Charcoal
            roughness={0.26} // Soft frosted finish
            metalness={0.03}   // Non-metallic mineral/pearl
            distort={0.0}     // Starts perfectly solid
            speed={0.8}       // Meditative, slow distortion speed
            clearcoat={1.0}   // Glazed porcelain coat
            clearcoatRoughness={0.08} // Soft glaze reflection
          />
        </mesh>
      </group>
    </>
  );
}

// Fallback CSS/Framer Motion Object
function CSSFallback({ isDark }) {
  const fallbackRef = useRef(null);

  useEffect(() => {
    if (!fallbackRef.current) return;

    // Mouse movement interactive float (Parallax)
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX - window.innerWidth / 2) * 0.08;
      const yPos = (clientY - window.innerHeight / 2) * 0.08;

      gsap.to(fallbackRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Scroll-tied motion
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    scrollTl.to(fallbackRef.current, {
      yPercent: 220, // Travel downwards
      xPercent: -40,  // Move slightly left
      scale: 0.75,
      rotation: 360,
      ease: "none",
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (scrollTl.scrollTrigger) scrollTl.scrollTrigger.kill();
      scrollTl.kill();
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      {/* Glowing Soft Yellow/Lime backdrops */}
      <div 
        ref={fallbackRef}
        className="w-72 h-72 md:w-96 md:h-96 rounded-full relative transition-all duration-700"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(197, 248, 42, 0.8) 0%, rgba(20,20,20,0.8) 70%)"
            : "radial-gradient(circle, rgba(181, 245, 0, 0.7) 0%, rgba(250,249,246,0.6) 80%)",
          boxShadow: "0 0 80px var(--accent-glow)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {/* Soft Inner Light Reflection */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-white/10 to-white/40 opacity-70 blur-[1px]" />
      </div>
    </div>
  );
}

// Robust React Error Boundary to catch client WebGL / R3F context crashes and fallback safely
class WebGLErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL/Canvas initialization failed. Gracefully falling back to high-end CSS visuals:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Main Dynamic FloatingObject Export
export default function FloatingObject() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [webGlAvailable, setWebGlAvailable] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Check Dark/Light theme on document element
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    // Listen for theme modifications (Navbar changes html class)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Detect WebGL capability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setWebGlAvailable(false);
    } catch (e) {
      setWebGlAvailable(false);
    }

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div className="canvas-container select-none">
      {/* Background Soft Floating Gradients beneath the Object */}
      <div 
        className="glow-spot w-[600px] h-[600px] -top-1/4 -right-1/4 animate-glow-pulse"
        style={{
          backgroundColor: isDark ? "rgba(197, 248, 42, 0.08)" : "rgba(181, 245, 0, 0.12)",
        }}
      />
      <div 
        className="glow-spot w-[500px] h-[500px] top-[70%] -left-1/4 animate-glow-pulse"
        style={{
          backgroundColor: isDark ? "rgba(228, 228, 40, 0.05)" : "rgba(254, 254, 153, 0.1)",
          animationDelay: "-3s",
        }}
      />

      {/* R3F Canvas Render if WebGL is supported; else fallback to CSS Render */}
      {webGlAvailable ? (
        <WebGLErrorBoundary fallback={<CSSFallback isDark={isDark} />}>
          <Canvas
            camera={{ position: [0, 0, 4.5], fov: 45 }}
            dpr={[1, 1.5]} // Performance optimized device pixel ratio
            className="w-full h-full"
            gl={{ antialias: true, alpha: true }}
          >
            <React.Suspense fallback={null}>
              <Scene isDark={isDark} />
            </React.Suspense>
          </Canvas>
        </WebGLErrorBoundary>
      ) : (
        <CSSFallback isDark={isDark} />
      )}
    </div>
  );
}
