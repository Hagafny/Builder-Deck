import React from 'react';

export const IntroGrid = ({ children }) => (
  <div
    style={{
      display: 'grid',
      alignItems: 'center',
      justifyItems: 'center',
      width: '80%',
      height: '100%',
    }}
  >
    {children}
  </div>
);
