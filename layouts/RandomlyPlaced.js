import React from 'react'

function RandomlyPlaced({children, style}) {
  return (
    <div style={{position: 'absolute', zIndex: 2, height: 'inherit', width: 'inherit', ...style}}>
          {children}
    </div>
  )
}

export {RandomlyPlaced }
