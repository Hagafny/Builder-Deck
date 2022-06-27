import React from 'react';

export const SpeechBubble = ({ content }) => (
  <div class='bubble bubble-bottom-left' contenteditable>
    {content}
  </div>
);
