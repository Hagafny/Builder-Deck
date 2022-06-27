import React, { useEffect } from 'react';
import { IceCream, Chocolate, Planet } from 'react-kawaii';

export const KawaiiWrapper = ({
  character = 'Chocolate',
  mood = 'Blissful',
  color = '#fc105c',
  size = 800,
}) => {
  useEffect(() => {
    localStorage.setItem('character-value', character);
  }, [character]);
  let Kawaii;

  switch (character) {
    case 'Planet':
      Kawaii = Planet;
      break;
    case 'Ice Cream':
      Kawaii = IceCream;
      break;
    default:
    case 'Chocolate':
      Kawaii = Chocolate;
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
