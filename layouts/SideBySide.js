import React from 'react';

export const SideBySide = ({ children, style }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '1fr 1fr',
      ...style,
    }}
  >
    {children}
  </div>
);
