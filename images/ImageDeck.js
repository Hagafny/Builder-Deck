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
import muiButton from '../images/muiButton.png'
import componentsOnlyMode from '../images/com.png'
import builder from '../images/builder.png'
import nextJS from '../images/nextjs.png'

import marketingCorner from '../images/marketingCorner.png'
import designCorner from '../images/designCorner.png'
import productCorner from '../images/productCorner.png'
import operationsCorner from '../images/operationsCorner.png'


export const DECK_IMAGES = {
    RON: 'ron.png',
    BOTTLE: 'bottle.png',
    DEV_DEPENDNECIES: 'devDependencies.jpeg',
    EASYPLANT: 'easyplant.png',
    MIXTILES: 'mixtiles.png',
    HOMEPAGE: 'homepage.png',
    COLLECTIONS: 'collections.png',
    FAQ: 'faq.png',
    DESIGN_SYSTEM: 'designSystem.png',
    MUI_BUTTON: 'muiButton.png',
    COMPONENTS_ONLY_MODE: 'com.png',
    BUILDER: 'builder.png',
    NEXT_JS: 'nextJS.png',
    MARKETING_CORNER: 'marketingCorner.png',
    DESIGN_CORNER: 'designCorner.png',
    PRODUCT_CORNER: 'productCorner.png',
    OPERATIONS_CORNER: 'operationsCorner.png',

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
    [DECK_IMAGES.DESIGN_SYSTEM]: designSystem,
    [DECK_IMAGES.MUI_BUTTON]: muiButton,
    [DECK_IMAGES.COMPONENTS_ONLY_MODE]: componentsOnlyMode,
    [DECK_IMAGES.BUILDER]: builder,
    [DECK_IMAGES.NEXT_JS]: nextJS,
    [DECK_IMAGES.MARKETING_CORNER]: marketingCorner,
    [DECK_IMAGES.DESIGN_CORNER]: designCorner,
    [DECK_IMAGES.PRODUCT_CORNER]: productCorner,
    [DECK_IMAGES.OPERATIONS_CORNER]: operationsCorner,
}

export const ImageDeck = ({ deckImage, width, height, style = {} }) => {
    return <Image src={IMAGES[deckImage]} width={width} height={height} style={{ backgroundSize: 'contain', ...style}}  />
}
