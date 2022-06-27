import React, { useEffect } from 'react';
import { IceCream, Chocolate, Backpack } from 'react-kawaii';

export const KawaiiWrapper = ({
  character = 'Chocolate',
  mood = 'Blissful',
  color = '#fc105c',
  size = 750,
}) => {
  useEffect(() => {
    localStorage.setItem('character-value', character);
  }, [character]);
  let Kawaii;

  switch (character) {
    case 'Backpack':
      Kawaii = Backpack;
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
