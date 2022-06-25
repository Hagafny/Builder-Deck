import React from 'react'
import { DEPARTMENTS_COLORS } from '../../consts/departments'
import { DECK_IMAGES, ImageDeck } from '../../images/ImageDeck'

export const BOTTLENECK_MODE = {
    OPEN: 'open',
    CLOSED: 'closed'
}


export const BaseBottleneck = ({ mode, children }) => {
    const bottleComponent = mode === BOTTLENECK_MODE.CLOSED ?  <ImageDeck deckImage={DECK_IMAGES.BOTTLE} /> : <OpenBottleContainer />

    return (
        <div style={{position: 'relative', height: '22%', width: '40%'}}>
            {bottleComponent}
            <DepartmentTitles />
            {children}
        </div>
    )
}

const DepartmentTitles = () => (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '12%', left: '2px'}}>
        {Object.entries(DEPARTMENTS_COLORS).map(([name, color]) => 
                  <div style={{color: color, fontSize: '24px', marginBottom: '10px'}}>{name}</div>  
        )}
    </div>
)


const OpenBottleContainer = () => (
    <div style={{
        height: '180px',
        borderTop: '2px solid black',
        borderBottom: '2px solid black',

    }}>
    </div>
)