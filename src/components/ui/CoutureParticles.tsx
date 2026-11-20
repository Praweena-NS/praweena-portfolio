"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number; // Depth factor (0.4 to 1.8)
  radius: number;
  colorType: "gold" | "lavender";
  alpha: number;
  vx: number;
  vy: number;
  sineSpeed: number;
  sineOffset: number;
  isFiber: boolean; // Diagonal silk thread fleck vs round silk orb
  fiberLength: number;
  fiberAngle: number;
}

export default function CoutureParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = (canvas.width = Math.floor(window.innerWidth * dpr));
    let height = (canvas.height = Math.floor(window.innerHeight * dpr));

    // Mouse coordinates for gentle organic drift
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    // 26 floating couture particles on desktop, 16 on mobile (<768px)
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 16 : 26;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const z = 0.4 + Math.random() * 1.4;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: (2.2 + Math.random() * 2.3) * z * (dpr / 1.2),
        colorType: Math.random() > 0.45 ? "gold" : "lavender",
        alpha: 0.25 + Math.random() * 0.45,
        vx: (Math.random() * 0.5 - 0.25) * z, // vx: -0.25 to +0.25
        vy: (-0.35 - Math.random() * 0.4) * z, // vy: -0.35 to -0.75 buoyant upward float
        sineSpeed: 0.008 + Math.random() * 0.014,
        sineOffset: Math.random() * Math.PI * 2,
        isFiber: Math.random() > 0.6, // ~40% silk thread flecks
        fiberLength: (7 + Math.random() * 10) * z * dpr,
        fiberAngle: Math.random() * Math.PI,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = Math.floor(window.innerWidth * dpr);
      height = canvas.height = Math.floor(window.innerHeight * dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX * dpr;
      targetMouseY = e.clientY * dpr;
    };

    let isTabVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
        render();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let lastTime = performance.now();

    const render = () => {
      if (!isTabVisible) return;

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth mouse interpolation for subtle parallax tilt
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      const tiltX = (mouseX / width - 0.5) * 16;
      const tiltY = (mouseY / height - 0.5) * 16;

      // Theme-Aware Palette: Detect dark class dynamically in draw loop
      const isDark = document.documentElement.classList.contains("dark");
      
      // Day Mode: Rich Antique Gold (rgba(182, 161, 122, 0.65)) & Royal Lavender (rgba(146, 129, 206, 0.55))
      // Night Mode: Luminous Burnished Gold (rgba(212, 188, 142, 0.72)) & Moonlit Lavender (rgba(169, 152, 230, 0.65))
      const goldColor = isDark ? "rgba(212, 188, 142," : "rgba(182, 161, 122,";
      const lavenderColor = isDark ? "rgba(169, 152, 230," : "rgba(146, 129, 206,";
      const goldAlpha = isDark ? 0.72 : 0.65;
      const lavenderAlpha = isDark ? 0.65 : 0.55;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Horizontal sinusoidal drift
        p.sineOffset += p.sineSpeed;
        const driftX = Math.sin(p.sineOffset) * 0.4 * p.z;

        p.x += (p.vx + driftX) * 60 * delta;
        p.y += p.vy * 60 * delta;

        // Wrap around canvas boundaries
        if (p.x < -40) p.x = width + 40;
        if (p.x > width + 40) p.x = -40;
        if (p.y < -40) p.y = height + 40;
        if (p.y > height + 40) p.y = -40;

        // Apply mouse parallax offset based on depth (z)
        const renderX = p.x + tiltX * p.z;
        const renderY = p.y + tiltY * p.z;

        const baseColor = p.colorType === "gold" ? goldColor : lavenderColor;
        const maxAlpha = p.colorType === "gold" ? goldAlpha : lavenderAlpha;
        const currentAlpha = Math.min(p.alpha * maxAlpha * 1.5, maxAlpha);

        ctx.save();
        ctx.fillStyle = `${baseColor} ${currentAlpha})`;
        ctx.strokeStyle = `${baseColor} ${currentAlpha * 0.95})`;

        if (p.isFiber) {
          // Diagonal silk thread fleck
          ctx.beginPath();
          ctx.lineWidth = Math.max(1.0 * p.z, 0.8);
          ctx.lineCap = "round";
          const dx = Math.cos(p.fiberAngle + p.sineOffset * 0.4) * (p.fiberLength / 2);
          const dy = Math.sin(p.fiberAngle + p.sineOffset * 0.4) * (p.fiberLength / 2);
          ctx.moveTo(renderX - dx, renderY - dy);
          ctx.lineTo(renderX + dx, renderY + dy);
          ctx.stroke();
        } else {
          // Floating silk mote orb
          ctx.beginPath();
          ctx.arc(renderX, renderY, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
    />
  );
}
