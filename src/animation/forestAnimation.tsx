"use client";

import { useEffect, useRef } from "react";

interface Leaf {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  type: number;
}

export function ForestAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const leaves: Leaf[] = [];
    const leafCount = 40;

    for (let i = 0; i < leafCount; i++) {
      leaves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 20 + 10,
        speedX: Math.random() * 1 - 0.1,
        speedY: Math.random() * 1 + 0.1,
        opacity: Math.random() * 0.4 + 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.03 - 0.015,
        type: Math.floor(Math.random() * 3),
      });
    }

    const drawLeaf = (
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number,
      type: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;

      if (type === 0) {
        ctx.beginPath();
        const heartSize = size / 2;

        // Start at the bottom point of the heart
        ctx.moveTo(0, heartSize * 0.8);

        // Left side of heart - more pronounced curves
        ctx.bezierCurveTo(
          -heartSize * 0.5,
          heartSize * 0.3,
          -heartSize * 1.2,
          -heartSize * 0.2,
          -heartSize * 0.6,
          -heartSize * 0.8
        );

        // Left top lobe
        ctx.bezierCurveTo(
          -heartSize * 0.6,
          -heartSize * 1.1,
          -heartSize * 0.2,
          -heartSize * 1.1,
          0,
          -heartSize * 0.4
        );

        // Right top lobe
        ctx.bezierCurveTo(
          heartSize * 0.2,
          -heartSize * 1.1,
          heartSize * 0.6,
          -heartSize * 1.1,
          heartSize * 0.6,
          -heartSize * 0.8
        );
 
        ctx.bezierCurveTo(
          heartSize * 1.2,
          -heartSize * 0.2,
          heartSize * 0.5,
          heartSize * 0.3,
          0,
          heartSize * 0.8
        );

        ctx.closePath();
      } else if (type === 1) {
        ctx.beginPath();
        const heartSize = size / 2;

        // Start at the bottom point of the heart
        ctx.moveTo(0, heartSize * 0.8);

        // Left side of heart - more pronounced curves
        ctx.bezierCurveTo(
          -heartSize * 0.5,
          heartSize * 0.3,
          -heartSize * 1.2,
          -heartSize * 0.2,
          -heartSize * 0.6,
          -heartSize * 0.8
        );

        // Left top lobe
        ctx.bezierCurveTo(
          -heartSize * 0.6,
          -heartSize * 1.1,
          -heartSize * 0.2,
          -heartSize * 1.1,
          0,
          -heartSize * 0.4
        );

        // Right top lobe
        ctx.bezierCurveTo(
          heartSize * 0.2,
          -heartSize * 1.1,
          heartSize * 0.6,
          -heartSize * 1.1,
          heartSize * 0.6,
          -heartSize * 0.8
        );

        // Right side of heart
        ctx.bezierCurveTo(
          heartSize * 1.2,
          -heartSize * 0.2,
          heartSize * 0.5,
          heartSize * 0.3,
          0,
          heartSize * 0.8
        );

        ctx.closePath();
      } else {
        ctx.beginPath();
        const heartSize = size / 2;

        // Start at the bottom point of the heart
        ctx.moveTo(0, heartSize * 0.8);

        // Left side of heart - more pronounced curves
        ctx.bezierCurveTo(
          -heartSize * 0.5,
          heartSize * 0.3,
          -heartSize * 1.2,
          -heartSize * 0.2,
          -heartSize * 0.6,
          -heartSize * 0.8
        );

        // Left top lobe
        ctx.bezierCurveTo(
          -heartSize * 0.6,
          -heartSize * 1.1,
          -heartSize * 0.2,
          -heartSize * 1.1,
          0,
          -heartSize * 0.4
        );

        // Right top lobe
        ctx.bezierCurveTo(
          heartSize * 0.2,
          -heartSize * 1.1,
          heartSize * 0.6,
          -heartSize * 1.1,
          heartSize * 0.6,
          -heartSize * 0.8
        );

        // Right side of heart
        ctx.bezierCurveTo(
          heartSize * 1.2,
          -heartSize * 0.2,
          heartSize * 0.5,
          heartSize * 0.3,
          0,
          heartSize * 0.8
        );

        ctx.closePath();
      }

      const gradient = ctx.createRadialGradient(
        0,
        -size / 4,
        0,
        0,
        0,
        size / 2
      );
      gradient.addColorStop(0, "rgba(196, 181, 253, 0.7)");
      gradient.addColorStop(0.3, "rgba(221, 214, 254, 0.6)");
      gradient.addColorStop(0.7, "rgba(233, 213, 255, 0.5)");
      gradient.addColorStop(1, "rgba(243, 232, 255, 0.4)");
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.strokeStyle = "rgba(167, 139, 250, 0.4)";
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      leaves.forEach((leaf) => {
        drawLeaf(
          leaf.x,
          leaf.y,
          leaf.size,
          leaf.rotation,
          leaf.opacity,
          leaf.type
        );

        leaf.x += leaf.speedX + Math.sin(leaf.y * 0.01) * 0.3;
        leaf.y += leaf.speedY;
        leaf.rotation += leaf.rotationSpeed;

        if (leaf.y > canvas.height + leaf.size) {
          leaf.y = -leaf.size;
          leaf.x = Math.random() * canvas.width;
        }
        if (leaf.x > canvas.width + leaf.size) {
          leaf.x = -leaf.size;
        }
        if (leaf.x < -leaf.size) {
          leaf.x = canvas.width + leaf.size;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none h-full"
    />
  );
}
