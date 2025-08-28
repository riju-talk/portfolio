
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSpring, animated, config } from "@react-spring/web";

export default function LiveBackground() {
  const gradientControls = useAnimation();

  // Animate gradient opacity cycle with framer-motion
  useEffect(() => {
    const loop = async () => {
      while (true) {
        await gradientControls.start({ 
          opacity: [0.95, 1.0, 0.95], 
          transition: { duration: 8, ease: "easeInOut" } 
        });
      }
    };
    loop();
  }, [gradientControls]);

  // Create Tron-style circuit ripples
  const ripples = [0, 1, 2].map((i) =>
    useSpring({
      from: { scale: 0.3, opacity: 0 },
      to: async (next) => {
        while (true) {
          await next({ scale: 2.0, opacity: 0.15 });
          await next({ scale: 0.3, opacity: 0 });
        }
      },
      config: config.slow,
      delay: i * 800,
    })
  );

  // Grid animation spring
  const gridSpring = useSpring({
    from: { opacity: 0.1 },
    to: async (next) => {
      while (true) {
        await next({ opacity: 0.3 });
        await next({ opacity: 0.1 });
      }
    },
    config: { duration: 3000 },
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={gradientControls}
        style={{
          background: `linear-gradient(135deg, #0a0f0a 0%, #0f1a0f 15%, #0a1a1a 25%, #1a2e1a 35%, #0d1f1f 50%, #0a140a 65%, #0f0a1a 80%, #0a0f0a 100%)`,
        }}
      />

      {/* Tron grid overlay */}
      <animated.div
        className="absolute inset-0"
        style={{
          ...gridSpring,
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.08) 1px, rgba(6, 182, 212, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.08) 1px, rgba(59, 130, 246, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Circuit-style ripples */}
      {ripples.map((style, idx) => (
        <animated.div
          key={idx}
          style={{
            ...style,
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            border: `2px solid ${idx === 0 ? 'rgba(34, 197, 94, 0.2)' : idx === 1 ? 'rgba(6, 182, 212, 0.2)' : 'rgba(20, 184, 166, 0.2)'}`,
            background: `${idx === 0 ? 'rgba(34, 197, 94, 0.05)' : idx === 1 ? 'rgba(6, 182, 212, 0.05)' : 'rgba(20, 184, 166, 0.05)'}`,
            transform: style.scale.to((s) => `translate(-50%, -50%) scale(${s})`),
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500/20 rotate-45 animate-pulse-green" />
      <div className="absolute top-3/4 right-1/4 w-6 h-6 border border-cyan-500/30 animate-pulse-green" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-teal-500/40 animate-pulse-green" />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-500/25 rotate-12 animate-pulse-green" />
      <div className="absolute bottom-1/4 right-1/5 w-5 h-5 border border-turquoise-500/30 rotate-45 animate-pulse-green" />
    </div>
  );
}
