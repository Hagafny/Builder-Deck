import React from 'react'
import styled from 'styled-components'
import { ImageDeck, DECK_IMAGES } from  '../images/ImageDeck'
import { AspectRatio } from 'react-aspect-ratio';

const SlideContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const GridItemContainer = styled.div`
position: absolute; 
top: ${props => `${props.$top}%`};
left: ${props => `${props.$left}%`};
width: 50%;
height: 50%;
`


export const DevDependenciesSlide = () => {
    return (
    <AspectRatio ratio="16/9" style={{width: '100%', height: '100%'}}> 
        <GridItemContainer $top={7} $left={0}><ImageDeck width={'100%'} height={'100%'} deckImage={DECK_IMAGES.MARKETING_CORNER} /></GridItemContainer>
        <GridItemContainer $top={-5} $left={45}> <ImageDeck width={'100%'} height={'100%'}deckImage={DECK_IMAGES.PRODUCT_CORNER} /></GridItemContainer>
        <GridItemContainer $top={38} $left={10}><ImageDeck width={'100%'} height={'100%'} deckImage={DECK_IMAGES.DESIGN_CORNER} /></GridItemContainer>
        <GridItemContainer $top={28} $left={54}><ImageDeck width={'100%'} height={'100%'} deckImage={DECK_IMAGES.OPERATIONS_CORNER} /></GridItemContainer>
</AspectRatio>
    )
}
