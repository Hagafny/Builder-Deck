import React from 'react';
import { ZoomSteps } from '../components/ZoomSteps';
import { ImageDeck, DECK_IMAGES } from '../images/ImageDeck';

export const SummarySlide = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
      }}
    >
      <ZoomSteps>
        <ImageDeck
          deckImage={DECK_IMAGES.ROCKET}
          style={{ width: '128px', height: '128px' }}
        />
        <ImageDeck
          deckImage={DECK_IMAGES.SEO}
          style={{ width: '128px', height: '128px' }}
        />
        <ImageDeck
          deckImage={DECK_IMAGES.ROCKET}
          style={{ width: '128px', height: '128px' }}
        />
        <ImageDeck
          deckImage={DECK_IMAGES.SEO}
          style={{ width: '128px', height: '128px' }}
        />
        <ImageDeck
          deckImage={DECK_IMAGES.ROCKET}
          style={{ width: '128px', height: '128px' }}
        />
        <ImageDeck
          deckImage={DECK_IMAGES.SEO}
          style={{ width: '128px', height: '128px' }}
        />
      </ZoomSteps>
    </div>
  );
};
