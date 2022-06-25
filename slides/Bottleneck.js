import React from 'react'
import { RandomlyPlaced } from '../layouts/RandomlyPlaced'
import { ClosedBottleneck } from '../components/Bottleneck/ClosedBottleneck.js'
import { OpenBottleneck } from '../components/Bottleneck/OpenBottleneck.js'

export const Bottleneck = () => (
    <>
        <ClosedBottleneck />
        <OpenBottleneck />
    </>
)




