import React, { useEffect, useState } from 'react';
import { ImageDeck, DECK_IMAGES } from '../../images/ImageDeck.js';
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

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        className='logos'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Logo />
        <Logo />
        <Logo />
      </div>
      <BuilderSlideSection />
      <SpeechBubble {...{ top, left }} content={'Thank you for listening!'} />
    </div>
  );
};

const Logo = ({
  image = DECK_IMAGES.MIXTILES,
  content = 'ABC ABC ABC ABC ABC',
}) => {
  return (
    <div
      style={{
        margin: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImageDeck
        style={{ width: '150px', height: '150px' }}
        deckImage={image}
      />
      <span>{content}</span>
    </div>
  );
};

const getPositionByCharacter = (character) =>
  ({
    chocolate: [55, 60],
    'ice-cream': [35, 61],
    planet: [37, 68],
  }[character || 'chocolate']);
