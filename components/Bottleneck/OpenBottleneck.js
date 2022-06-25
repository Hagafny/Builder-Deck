import React from 'react'
import { AnimatedCircle } from './AnimatedCircle'
import { useSprings, easings } from 'react-spring'
import { BaseBottleneck, BOTTLENECK_MODE } from './BaseBottleneck'
import { DEPARTMENTS, DEPARTMENTS_COLORS } from '../../consts/departments'

const initialDelay = 200
const interval = 300

const DEPARTMENT_PROPS = {
    [DEPARTMENTS.MARKETING]: {color: DEPARTMENTS_COLORS[DEPARTMENTS.MARKETING],topStart: '14%', leftStart: '14%', },
    [DEPARTMENTS.DESIGN]: { color:  DEPARTMENTS_COLORS[DEPARTMENTS.DESIGN], topStart: '32%', leftStart: '10%',  },
    [DEPARTMENTS.PRODUCT]: { color:  DEPARTMENTS_COLORS[DEPARTMENTS.PRODUCT], topStart: '52%', leftStart: '11%' },
    [DEPARTMENTS.OPERATIONS]: { color:  DEPARTMENTS_COLORS[DEPARTMENTS.OPERATIONS], topStart: '69%', leftStart: '16%'}
}

const circleAnimations = () => {
    return [
        {...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING], topEnd: '43%', leftEnd: '94%' },
        {...DEPARTMENT_PROPS[DEPARTMENTS.DESIGN], topEnd: '37%', leftEnd: '91%' },
         {...DEPARTMENT_PROPS[DEPARTMENTS.PRODUCT], topEnd: '41%', leftEnd: '92%'  },
        {...DEPARTMENT_PROPS[DEPARTMENTS.OPERATIONS], topEnd: '41%', leftEnd: '92%'  },
        {...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING], topEnd: '35%', leftEnd: '84%'  },

        // {...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING], topEnd: '41%', leftEnd: '92%', delay: 700 },
]
}

export const OpenBottleneck = () => {
    const animations = React.useMemo(() => circleAnimations(), [])
    const springs = useSprings(animations.length, 
        animations.map(({ topStart, topEnd, leftStart, leftEnd, delay }, i) => ({
            from : { top: topStart, left: leftStart },
            to: { top: topEnd, left: leftEnd },
            config: { duration: 1500, easing: easings.easeOutQuint},
            delay: initialDelay + (i + 1) * interval
        }))
        )

    return (
        <BaseBottleneck mode={BOTTLENECK_MODE.OPEN}>
           {springs.map((springStyle, i) => <AnimatedCircle size={24} color={animations[i].color} springProps={springStyle} />)}
        </BaseBottleneck>
    )
}