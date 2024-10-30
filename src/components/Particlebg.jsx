// src/components/ParticleBackground.js
import React, { useRef, useEffect } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const options = {
      particleColor: "rgba(255,255,255)",
      lineColor: "rgba(0,181,255)",
      particleAmount: 20,
      defaultRadius: 1,
      variantRadius: 1,
      defaultSpeed: 3,
      variantSpeed: 3,
      linkRadius: 300,
    };
    const rgb = options.lineColor.match(/\d+/g);

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.color = options.particleColor;
        this.radius =
          options.defaultRadius + Math.random() * options.variantRadius;
        this.speed =
          options.defaultSpeed + Math.random() * options.variantSpeed;
        this.directionAngle = Math.floor(Math.random() * 360);
        this.vector = {
          x: Math.cos(this.directionAngle) * this.speed,
          y: Math.sin(this.directionAngle) * this.speed,
        };
      }

      update() {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
      }

      border() {
        if (this.x >= w || this.x <= 0) this.vector.x *= -1;
        if (this.y >= h || this.y <= 0) this.vector.y *= -1;
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function initializeParticles() {
      particles = [];
      for (let i = 0; i < options.particleAmount; i++) {
        particles.push(new Particle());
      }
    }

    function linkPoints(point, hubs) {
      for (let i = 0; i < hubs.length; i++) {
        const distance = Math.sqrt(
          Math.pow(hubs[i].x - point.x, 2) + Math.pow(hubs[i].y - point.y, 2)
        );
        const opacity = 1 - distance / options.linkRadius;
        if (opacity > 0) {
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(hubs[i].x, hubs[i].y);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        linkPoints(particles[i], particles);
      }
      requestAnimationFrame(animate);
    }

    initializeParticles();
    animate();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initializeParticles();
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="hidden md:block"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;
