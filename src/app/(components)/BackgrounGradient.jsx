
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSpring, animated, config } from "@react-spring/web";

export default function LiveBackground() {
  const floatControls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await floatControls.start({ 
          opacity: [0.08, 0.12, 0.08], 
          transition: { duration: 12, ease: "easeInOut" } 
        });
      }
    };
    loop();
  }, [floatControls]);

  const ripples = [0, 1].map((i) =>
    useSpring({
      from: { scale: 0.5, opacity: 0 },
      to: async (next) => {
        while (true) {
          await next({ scale: 1.8, opacity: 0.04 });
          await next({ scale: 0.5, opacity: 0 });
        }
      },
      config: config.molasses,
      delay: i * 2000,
    })
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle ripples */}
      {ripples.map((style, idx) => (
        <animated.div
          key={idx}
          style={{
            ...style,
            position: "absolute",
            top: "50%",
            left: idx === 0 ? "25%" : "75%",
            width: 800,
            height: 800,
            borderRadius: "50%",
            border: `1px solid ${idx === 0 ? 'rgba(96, 165, 250, 0.08)' : 'rgba(52, 211, 153, 0.08)'}`,
            background: `radial-gradient(circle, ${idx === 0 ? 'rgba(96, 165, 250, 0.02)' : 'rgba(52, 211, 153, 0.02)'} 0%, transparent 70%)`,
            transform: style.scale.to((s) => `translate(-50%, -50%) scale(${s})`),
          }}
        />
      ))}

      {/* Minimal floating elements */}
      <motion.div 
        animate={floatControls}
        className="absolute top-1/4 left-1/5 w-2 h-2 bg-glass-blue/20 rounded-sm" 
      />
      <motion.div 
        animate={floatControls}
        className="absolute top-2/3 right-1/4 w-3 h-3 border border-glass-green/15 rounded-sm rotate-45" 
      />
      <motion.div 
        animate={floatControls}
        className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-glass-teal/15" 
      />
    </div>
  );
}
