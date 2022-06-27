import React from 'react';
import { ZoomSteps } from '../components/ZoomSteps/ZoomSteps.js';
import { ImageDeck, DECK_IMAGES } from '../images/ImageDeck';

export const SummarySlide = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px',
      }}
    >
      <ZoomSteps>
        <GridWrapper image={DECK_IMAGES.SEO} />
        <GridWrapper image={DECK_IMAGES.SEO} />
        <GridWrapper image={DECK_IMAGES.SEO} />
        <GridWrapper image={DECK_IMAGES.SEO} />
        <GridWrapper image={DECK_IMAGES.SEO} />
        <GridWrapper image={DECK_IMAGES.SEO} />
      </ZoomSteps>
    </div>
  );
};

const GridWrapper = ({ image, style }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ImageDeck
      deckImage={image}
      style={{ width: '128px', height: '128px', ...style }}
    />
  </div>
);
