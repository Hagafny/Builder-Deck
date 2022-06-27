import React from 'react';
import { DEPARTMENTS_COLORS } from '../../consts/departments';
import { DECK_IMAGES, ImageDeck } from '../../images/ImageDeck';

export const BOTTLENECK_MODE = {
  OPEN: 'open',
  CLOSED: 'closed',
};

export const BaseBottleneck = ({ mode, children }) => {
  const bottleComponent = <ImageDeck deckImage={mode === BOTTLENECK_MODE.CLOSED ? DECK_IMAGES.BOTTLE : DECK_IMAGES.OPEN_BOTTLE} />;

  return (
    <div
      style={{
        transform: 'scale(2)',
        position: 'relative',
        height: '22%',
        width: '40%',
      }}
    >
      {bottleComponent}
      <DepartmentTitles />
      {children}
    </div>
  );
};

const DepartmentTitles = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '16%',
      left: '5%',
    }}
  >
    {Object.entries(DEPARTMENTS_COLORS).map(([name, color]) => (
      <div
        key={name}
        style={{ color: color, fontSize: '20px', marginBottom: '10px' }}
      >
        {name}
      </div>
    ))}
  </div>
);