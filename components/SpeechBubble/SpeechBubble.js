import React from 'react';

export const SpeechBubble = ({ content, top, left = 72 }) => (
  <div
    className='bubble bubble-bottom-left'
    style={{ top: `${top}%`, left: `${left}%` }}
  >
    {content}
  </div>
);
