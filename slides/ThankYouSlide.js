import React, { useEffect, useState } from 'react';
import { ImageDeck, DECK_IMAGES } from '../images/ImageDeck.js';
import { BuilderSlideSection } from '../components/BuilderSlideSection/BuilderSlideSection.js';
import { SpeechBubble } from '../components/SpeechBubble/SpeechBubble.js';


const mixtilesImage = <ImageDeck  style={{ width: '150px', height: '150px' }} deckImage={DECK_IMAGES.MIXTILES}/>
const twitterImage = <ImageDeck  style={{ width: '150px', height: '150px' }} deckImage={DECK_IMAGES.MIXTILES}/>
const potImage = <ImageDeck  style={{ width: '150px', height: '150px' }} deckImage={DECK_IMAGES.MIXTILES}/>

export const ThankYouSlide = () => {
  const [position, setPosition] = useState([]);

  const character = localStorage
    .getItem('character-value')
    .split(' ')
    .join('-')
    .toLocaleLowerCase();

  const [top, left] = position;

  useEffect(() => {
    console.log('my character', character)
    setPosition(getPositionByCharacter(character));
  }, [character, setPosition]);

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
        <Logo imageComp={mixtilesImage}>Check us out yo!</Logo>
        <Logo imageComp={twitterImage}>@hagafny</Logo>
        <Logo imageComp={potImage}>www.proofoftalk.com</Logo>
      </div>
      <BuilderSlideSection />
      <SpeechBubble {...{ top, left }} content={'Thank you for listening!'} />
    </div>
  );
};

const Logo = ({
  imageComp,
  children
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
      {imageComp}
      {children}
    </div>
  );
};

const getPositionByCharacter = (character) =>
  ({
    chocolate: [45, 72],
    'ice-cream': [14, 72],
    backpack: [23, 73],
  }[character || 'chocolate']);
