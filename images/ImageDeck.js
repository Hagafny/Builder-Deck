import React from 'react'
import { Image } from 'mdx-deck'
import ron from '../images/ron.png'
import bottle from '../images/bottle.png'
import devDep from '../images/depDependencies.jpeg' 
import easyplant from '../images/easyplant.png' 
import mixtiles from '../images/mixtiles.png' 
import homepage from '../images/homepage.png'
import collections from '../images/collections.png'
import faq from '../images/faq.png'
import designSystem from '../images/designSystem.png'

export const DECK_IMAGES = {
    RON: 'ron.png',
    BOTTLE: 'bottle.png',
    DEV_DEPENDNECIES: 'devDependencies.jpeg',
    EASYPLANT: 'easyplant.png',
    MIXTILES: 'mixtiles.png',
    HOMEPAGE: 'homepage.png',
    COLLECTIONS: 'collections.png',
    FAQ: 'faq.png',
    DESIGN_SYSTEM: 'designSystem.png'
}

const IMAGES = {
    [DECK_IMAGES.RON]: ron,
    [DECK_IMAGES.BOTTLE]: bottle,
    [DECK_IMAGES.DEV_DEPENDNECIES]: devDep,
    [DECK_IMAGES.EASYPLANT]: easyplant,
    [DECK_IMAGES.MIXTILES]: mixtiles,
    [DECK_IMAGES.HOMEPAGE]: homepage,
    [DECK_IMAGES.COLLECTIONS]: collections,
    [DECK_IMAGES.FAQ]: faq,
    [DECK_IMAGES.DESIGN_SYSTEM]: designSystem
}

export const ImageDeck = ({ deckImage, width, height, style = {} }) => {
    return <Image src={IMAGES[deckImage]} width={width} height={height} style={{ backgroundSize: 'contain', ...style}}  />
}
