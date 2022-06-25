import React from 'react'
import { Image } from 'mdx-deck'
import ron from '../images/ron.png'
import bottle from '../images/bottle.png'
import devDep from '../images/depDependencies.jpeg' 

export const DECK_IMAGES = {
    RON: 'ron.png',
    BOTTLE: 'bottle.png',
    DEV_DEPENDNECIES: 'devDependencies.jpeg'
}

const IMAGES = {
    [DECK_IMAGES.RON]: ron,
    [DECK_IMAGES.BOTTLE] : bottle,
    [DECK_IMAGES.DEV_DEPENDNECIES] : devDep,

}

export const ImageDeck = ({ deckImage, width, height }) => {
    return <Image src={IMAGES[deckImage]} width={width} height={height} style={{ backgroundSize: 'contain'}} />
}
