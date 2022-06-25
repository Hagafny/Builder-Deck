import React from 'react'
import { Image } from 'mdx-deck'
import bottlePath from '../../images/bottle.png'
import { DEPARTMENTS_COLORS } from '../../consts/departments'

export const BOTTLENECK_MODE = {
    OPEN: 'open',
    CLOSED: 'closed'
}


export const BaseBottleneck = ({ mode, children }) => {

    const bottleComponent = mode === BOTTLENECK_MODE.CLOSED ?  <Image src={bottlePath} style={{ backgroundSize: 'contain'}} /> : <OpenBottleContainer />

    return (
        <div style={{position: 'relative', height: '200px', width: '800px'}}>
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