import React from 'react';

export const SpeechBubble = ({ content, top, left }) => (
  <div
    className='bubble bubble-bottom-left'
    style={{ top: `${top}%`, left: `${left}%` }}
  >
    {content}
  </div>
);
