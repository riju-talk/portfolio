import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSpring, animated, config } from "@react-spring/web";

export default function LiveBackground() {
  const gradientControls = useAnimation();

  // Animate gradient opacity cycle with framer-motion
  useEffect(() => {
    const loop = async () => {
      while (true) {
        await gradientControls.start({ opacity: [0.95, 1.0, 0.95], transition: { duration: 5, ease: "easeInOut" } });
      }
    };
    loop();
  }, [gradientControls]);

  // Create three ripple springs
  const ripples = [0, 1, 2].map((i) =>
    useSpring({
      from: { scale: 0.5, opacity: 0 },
      to: async (next) => {
        while (true) {
          await next({ scale: 1.5, opacity: 0.2 });
          await next({ scale: 0.5, opacity: 0 });
        }
      },
      config: config.slow,
      delay: i * 400,
    })
  );

  // Wave animation spring
  const waveSpring = useSpring({
    from: { y: 20 },
    to: async (next) => {
      while (true) {
        await next({ y: 0 });
        await next({ y: 20 });
      }
    },
    config: { duration: 2000 },
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={gradientControls}
        style={{
          background: `linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)`,
        }}
      />

      {/* Ripples */}
      {ripples.map((style, idx) => (
        <animated.div
          key={idx}
          style={{
            ...style,
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(45,212,191,0.1)",
            transform: style.scale.to((s) => `translate(-50%, -50%) scale(${s})`),
          }}
        />
      ))}

      {/* Wave at bottom */}
      <animated.svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-1/4"
        style={waveSpring}
      >
        <path
          d="M0,100 C300,200 900,0 1200,100 L1200,200 L0,200 Z"
          fill="rgba(45,212,191,0.1)"
        />
      </animated.svg>
    </div>
  );
}
