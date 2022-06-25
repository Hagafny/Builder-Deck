import React from 'react'
import { Fireworks as FX } from 'fireworks/lib/react'

export const Fireworks = ({ text, count, colors, interval = 500 }) => {
  const fxProps = {
    count,
    interval,
    colors: colors.map(colorObj => colorObj.color),
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / count) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }

  return (
    <div style={{textAlign: 'center'}}>
      <FX {...fxProps} />
      <h1>{text}</h1>
    </div>
  )
}

{/* <Fireworks colors={[{color :'#cc3333'}, {color: '#4CAF50'}, {color: '#81C784'}]} count={5} interval={500} text={"Yo!"} />  */}