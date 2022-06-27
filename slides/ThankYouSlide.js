import React, { useEffect, useState } from 'react';
import { ImageDeck, DECK_IMAGES } from '../images/ImageDeck.js';
import { BuilderSlideSection } from '../components/BuilderSlideSection/BuilderSlideSection.js';
import { SpeechBubble } from '../components/SpeechBubble/SpeechBubble.js';

const mixtilesImage = (
  <ImageDeck
    style={{ width: '128px', height: '128px' }}
    deckImage={DECK_IMAGES.MIXTILES}
  />
);
const twitterImage = (
  <ImageDeck
    style={{ width: '128px', height: '128px' }}
    deckImage={DECK_IMAGES.TWITTER}
  />
);
const potImage = (
  <ImageDeck
    style={{ width: '128px', height: '128px' }}
    deckImage={DECK_IMAGES.POT}
  />
);

const getCharacterBySvg = () => {
  if (document.getElementById('kawaii-iceCream')) {
    return 'ice-craam';
  }

  if (document.getElementById('kawaii-chocolate')) {
    return 'chocolate';
  }

  if (document.getElementById('kawaii-backpack')) {
    return 'backpack';
  }
};

const getCharacterFromLocalStorage = () =>
  localStorage
    .getItem('character-value')
    .split(' ')
    .join('-')
    .toLocaleLowerCase();

export const ThankYouSlide = () => {
  const [topPosition, setTopPosition] = useState(45);

  const character = getCharacterBySvg();

  console.log('char', character);

  useEffect(() => {
    if (character) {
      setTopPosition(getTopPositionByCharacter(character));
    }
  }, [character, setTopPosition]);

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
        <Logo imageComp={mixtilesImage}>
          <a href='www.mixtiles.com/dev' target='_blank' rel='noreferrer'>
            www.mixtiles.com/dev
          </a>
        </Logo>
        <Logo imageComp={twitterImage}>
          <a
            href='https://twitter.com/TheGafny'
            target='_blank'
            rel='noreferrer'
          >
            @TheGafny
          </a>
        </Logo>
        <Logo imageComp={potImage}>
          <a href='https://proofoftalk.com' target='_blank' rel='noreferrer'>
            Proof of Talk Podcast
          </a>
        </Logo>
      </div>
      <BuilderSlideSection
        onLoad={() =>
          setTopPosition(getTopPositionByCharacter(getCharacterBySvg()))
        }
      />
      <SpeechBubble top={topPosition} content={'Thank you for listening!'} />
    </div>
  );
};

const Logo = ({ imageComp, children }) => {
  return (
    <div
      style={{
        margin: '40px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      {imageComp}
      {children}
    </div>
  );
};

const getTopPositionByCharacter = (character) =>
  ({
    chocolate: 45,
    'ice-cream': 14,
    backpack: 23,
  }[character || 'chocolate']);
