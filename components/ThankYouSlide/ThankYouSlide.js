import React, { useEffect, useState } from 'react';
import { BuilderSlideSection } from '../BuilderSlideSection/BuilderSlideSection.js';
import { SpeechBubble } from '../SpeechBubble/SpeechBubble.js';

export const ThankYouSlide = () => {
  const [position, setPosition] = useState([]);
  const character = localStorage
    .getItem('character-value')
    .split(' ')
    .join('-')
    .toLocaleLowerCase();

  const [top, left] = position;

  useEffect(() => {
    setPosition(getPositionByCharacter(character));
  }, [character]);

  console.log(position);

  return (
    <div>
      <BuilderSlideSection />
      <SpeechBubble {...{ top, left }} content={'Thank you for listening!'} />
    </div>
  );
};

const getPositionByCharacter = (character) => {
  console.log('@@', character);
  return {
    chocolate: [55, 60],
    'ice-cream': [35, 61],
    planet: [37, 68],
  }[character || 'chocolate'];
};
