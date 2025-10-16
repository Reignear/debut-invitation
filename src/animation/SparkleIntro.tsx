"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

interface SparkleIntroProps {
  onComplete?: () => void;
}

export function SparkleIntro({ onComplete }: SparkleIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<
    "arc" | "descend" | "rise" | "splash" | "complete"
  >("arc");
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mainSparkleRef = useRef({ x: 0, y: 0 });
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      "#E9D5FF", // lavender
      "#DDD6FE", // light violet
      "#C4B5FD", // violet
      "#A78BFA", // purple
      "#F3E8FF", // very light lavender
      "#FAF5FF", // pale lavender
    ];

    let startTime = Date.now();

    const createTrailParticle = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          maxLife: 60 + Math.random() * 40,
          size: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const createSplashParticles = (x: number, y: number) => {
      for (let i = 0; i < 100; i++) {
        const angle = (Math.PI * 2 * i) / 100;
        const speed = 3 + Math.random() * 5;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 80 + Math.random() * 60,
          size: 3 + Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      const elapsed = Date.now() - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, "#F3E8FF");
      gradient.addColorStop(0.5, "#E9D5FF");
      gradient.addColorStop(1, "#DDD6FE");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Phase 1: Arc animation (0-2000ms)
      if (phase === "arc" && elapsed < 2000) {
        progressRef.current = elapsed / 2000;
        const startX = canvas.width * 0.1;
        const startY = canvas.height * 0.5;
        const endX = canvas.width * 0.9;
        const controlY = canvas.height * 0.2;

        const t = progressRef.current;
        mainSparkleRef.current.x = startX + (endX - startX) * t;
        mainSparkleRef.current.y =
          startY + (controlY - startY) * Math.sin(t * Math.PI);

        createTrailParticle(mainSparkleRef.current.x, mainSparkleRef.current.y);

        if (elapsed >= 1900) {
          setPhase("descend");
          startTime = Date.now();
        }
      }
      // Phase 2: Descend to bottom center (2000-3000ms)
      else if (phase === "descend" && elapsed < 1000) {
        progressRef.current = elapsed / 1000;
        const startX = canvas.width * 0.9;
        const startY = canvas.height * 0.5;
        const endX = canvas.width * 0.5;
        const endY = canvas.height * 0.85;

        mainSparkleRef.current.x =
          startX + (endX - startX) * progressRef.current;
        mainSparkleRef.current.y =
          startY + (endY - startY) * progressRef.current;

        createTrailParticle(mainSparkleRef.current.x, mainSparkleRef.current.y);

        if (elapsed >= 900) {
          setPhase("rise");
          startTime = Date.now();
        }
      }
      // Phase 3: Rise to center (3000-4000ms)
      else if (phase === "rise" && elapsed < 1000) {
        progressRef.current = elapsed / 1000;
        const startY = canvas.height * 0.85;
        const endY = canvas.height * 0.5;

        mainSparkleRef.current.y =
          startY + (endY - startY) * progressRef.current;

        createTrailParticle(mainSparkleRef.current.x, mainSparkleRef.current.y);

        if (elapsed >= 900) {
          setPhase("splash");
          createSplashParticles(
            mainSparkleRef.current.x,
            mainSparkleRef.current.y
          );
          startTime = Date.now();
        }
      }
      // Phase 4: Splash (4000-5500ms)
      else if (phase === "splash" && elapsed < 1500) {
        // Just let particles animate
        if (elapsed >= 1400) {
          setPhase("complete");
          setTimeout(() => onComplete?.(), 300);
        }
      }

      // Draw main sparkle
      if (phase !== "complete") {
        const sparkleSize =
          phase === "splash" ? 20 - (elapsed / 1500) * 20 : 15;
        ctx.save();
        ctx.shadowBlur = 30;
        ctx.shadowColor = "#C4B5FD";

        // Draw star shape
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          const x = mainSparkleRef.current.x + Math.cos(angle) * sparkleSize;
          const y = mainSparkleRef.current.y + Math.sin(angle) * sparkleSize;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);

          const innerAngle = angle + Math.PI / 5;
          const innerX =
            mainSparkleRef.current.x +
            Math.cos(innerAngle) * (sparkleSize * 0.4);
          const innerY =
            mainSparkleRef.current.y +
            Math.sin(innerAngle) * (sparkleSize * 0.4);
          ctx.lineTo(innerX, innerY);
        }
        ctx.closePath();
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.restore();
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1; // gravity
        p.life++;

        const alpha = 1 - p.life / p.maxLife;
        if (alpha <= 0) return false;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      if (phase !== "complete") {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [phase, onComplete]);

  return (
    <div className="fixed inset-0 z-50">
      <canvas ref={canvasRef} className="w-full h-full " />
    </div>
  );
}
