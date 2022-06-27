import React from 'react'
import { SideBySide } from '../layouts/SideBySide'
import { BuilderSlideSection } from '../components/BuilderSlideSection/BuilderSlideSection'

export const BuilderSlide = () => (
  <SideBySide>
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', textAlign: 'center', fontWeight: 'bold', marginLeft: '30px'}}>What if I told you it is integrated right here -></div>
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}> <BuilderSlideSection /></div>
  </SideBySide>
)