import React from 'react';
import { IceCream, Chocolate, Planet } from 'react-kawaii';

export const KawaiiWrapper = ({
  character = 'Chocolate',
  mood = 'Blissful',
  color = '#fc105c',
  size = 800,
}) => {
  let Kawaii;

  switch (character) {
    case 'Planet':
      Kawaii = Planet;
      break;
    case 'Chocolate':
      Kawaii = Chocolate;
      break;
    default:
    case 'Ice Cream':
      Kawaii = IceCream;
      break;
  }

  return (
    <Kawaii
      mood={mood.split(' ').join('').toLocaleLowerCase()}
      color={color}
      size={size}
    />
  );
};
