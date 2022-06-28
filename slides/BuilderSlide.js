import React from 'react'
import { SideBySide } from '../layouts/SideBySide'
import { BuilderSlideSection } from '../components/BuilderSlideSection/BuilderSlideSection'
import { ImageDeck, DECK_IMAGES } from '../images/ImageDeck'

export const BuilderSlide = () => (
  <SideBySide>
    <ImageDeck deckImage={DECK_IMAGES.WHAT_IF} style={{ backgroundSize: 'initial' }} />
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}> <BuilderSlideSection /></div>
  </SideBySide>
)