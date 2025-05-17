'use client';
import React from 'react';
import { cubicCoordinates } from 'easing-coordinates';
import { useSpring, animated, to as interpolate, createInterpolator } from '@react-spring/web';

const easeMap = {
  'ease-in-out': { x1: 0.42, y1: 0, x2: 0.58, y2: 1 },
  'ease-out': { x1: 0, y1: 0, x2: 0.58, y2: 1 },
  'ease-in': { x1: 0.42, y1: 0, x2: 1, y2: 1 },
  ease: { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 },
  linear: { x1: 0.25, y1: 0.25, x2: 0.75, y2: 0.75 },
};

export default function BackgroundGradient({
  from = '#012613',
  mid = '#050d00',
  to = '#012613',
  angle = 32,
  stops = 53,
  easing = 'ease-out',
}) {
  const { colorFrom, colorMid, colorTo } = useSpring({
    colorFrom: from,
    colorMid: mid,
    colorTo: to,
    config: { duration: 500 },
  });

  const coordinates = React.useMemo(() => {
    const { x1, y1, x2, y2 } = easeMap[easing] || easeMap['ease-in-out'];
    return cubicCoordinates(x1, y1, x2, y2, stops);
  }, [easing, stops]);

  const allStops = interpolate([colorFrom, colorMid, colorTo], (from, mid, to) => {
    const blend = createInterpolator({ range: [0, 0.5, 1], output: [from, mid, to] });
    const stops = coordinates.map(({ x, y }) => `${blend(y)} ${x * 100}%`);
    console.log(`linear-gradient(${angle}deg, ${stops.join(', ')})`); // Debug
    return stops;
  });

  return (
    <animated.div
      className="fixed top-0 left-0 w-screen h-screen -z-10"
      style={{
        backgroundImage: allStops.to((...args) => `linear-gradient(${angle}deg, ${args.join(', ')})`),
      }}
    />
  );
}