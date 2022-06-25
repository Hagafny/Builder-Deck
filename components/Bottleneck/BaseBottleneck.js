import React from 'react'
import { Image } from 'mdx-deck'
import bottlePath from '../../images/bottle.png'
import { DEPARTMENTS_COLORS } from '../../cconsts/departments'

export const BOTTLENECK_MODE = {
    OPEN: 'open',
    CLOSED:' closed'
}

export const BaseBottleneck = ({mode, children}) => {
    const imgPath = bottlePath
    return (
        <div style={{position: 'relative', height: '200px', width: '800px'}}>
            <Image src={imgPath} style={{ backgroundSize: 'contain'}} />
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
