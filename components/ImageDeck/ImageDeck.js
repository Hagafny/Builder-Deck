import React from 'react'
import { Image } from 'mdx-deck'
import ron from '../../images/ron.png'
import bottle from '../../images/bottle.png'

const IMAGES = {
    'ron.png': ron,
    'bottle.png' : bottle
}

export const ImageDeck = ({ imgSrc, width, height }) => {
    return <Image src={IMAGES[imgSrc]} width={width} height={height} style={{ backgroundSize: 'contain'}} />
}
