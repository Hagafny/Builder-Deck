import React from 'react';
import { useSpring, animated } from 'react-spring';

export const FadeIn = ({ children }) => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return <animated.div style={props}>{children}</animated.div>;
};
