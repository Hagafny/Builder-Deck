import React from 'react'

export const FirstSlide = ({ title, subtitle }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{margin: 5, fontSize: '2em'}}>{title}</h1>
      <h2 style={{margin: 5}}>{subtitle}</h2>
      <strong style={{fontSize: '2em', marginBottom: 10}}>Ron Hagafny</strong>
    </div>
  )
}
