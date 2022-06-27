import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

const Circle = styled.div`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

export const AnimatedCircle = ({ size, color, springProps }) => (
  <Circle as={animated.div} $size={size} $color={color} style={springProps} />
);
