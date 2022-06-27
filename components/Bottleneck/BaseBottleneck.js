import React from 'react';
import { DECK_IMAGES, ImageDeck } from '../../images/ImageDeck';
import { DEPARTMENTS, DEPARTMENTS_COLORS } from '../../consts/departments';

export const BOTTLENECK_MODE = {
  OPEN: 'open',
  CLOSED: 'closed',
};

export const DEPARTMENT_PROPS = {
  [DEPARTMENTS.MARKETING]: {
    department: DEPARTMENTS.MARKETING,
    color: DEPARTMENTS_COLORS[DEPARTMENTS.MARKETING],
    topStart: '20%',
    leftStart: '19%',
  },
  [DEPARTMENTS.DESIGN]: {
    department: DEPARTMENTS.DESIGN,
    color: DEPARTMENTS_COLORS[DEPARTMENTS.DESIGN],
    topStart: '37%',
    leftStart: '15%',
  },
  [DEPARTMENTS.PRODUCT]: {
    department: DEPARTMENTS.PRODUCT,
    color: DEPARTMENTS_COLORS[DEPARTMENTS.PRODUCT],
    topStart: '54%',
    leftStart: '16%',
  },
  [DEPARTMENTS.OPERATIONS]: {
    department: DEPARTMENTS.OPERATIONS,
    color: DEPARTMENTS_COLORS[DEPARTMENTS.OPERATIONS],
    topStart: '71%',
    leftStart: '21%',
  },
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