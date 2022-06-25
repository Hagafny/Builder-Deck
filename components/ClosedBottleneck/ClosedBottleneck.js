import React from 'react'
import { Image } from 'mdx-deck'
import bottlePath from '../../images/bottle.png'
import { Circle } from '../Circle'
import { animated, useSprings, easings } from 'react-spring'
import theme from '../../theme/mui'

const initialDelay = 1000
const interval = 300

const DEPARTMENTS = {
    MARKETING: 'Marketing',
    DESIGN: 'Design',
    PRODUCT: 'Product',
    OPERATIONS: 'Operations'
}

const DEPARTMENT_PROPS = {
    [DEPARTMENTS.MARKETING]: {color: theme.colors.green4,topStart: '14%', leftStart: '14%', },
    [DEPARTMENTS.DESIGN]: { color: theme.colors.green3, topStart: '32%', leftStart: '10%',  },
    [DEPARTMENTS.PRODUCT]: { color: theme.colors.green2, topStart: '52%', leftStart: '11%' },
    [DEPARTMENTS.OPERATIONS]: { color: theme.colors.green, topStart: '69%', leftStart: '16%'}
}


const circleAnimations = () => {
    return [
        {...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING], topEnd: '43%', leftEnd: '94%', delay: 200 },
        {...DEPARTMENT_PROPS[DEPARTMENTS.DESIGN], topEnd: '37%', leftEnd: '91%', delay: 400 },
         {...DEPARTMENT_PROPS[DEPARTMENTS.PRODUCT], topEnd: '41%', leftEnd: '92%', delay: 2000 },
        {...DEPARTMENT_PROPS[DEPARTMENTS.OPERATIONS], topEnd: '41%', leftEnd: '92%', delay: 4000 },
        {...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING], topEnd: '35%', leftEnd: '84%', delay: 4000 },

        // {...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING], topEnd: '41%', leftEnd: '92%', delay: 700 },
]
}



const AnimatedCircle = ({ size, color, springProps }) =>  <Circle as={animated.div} $size={size} $color={color} style={springProps} />


export const ClosedBottleneck = () => {
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
        <div style={{position: 'relative', height: '200px', width: '800px'}}>
            <Image src={bottlePath} style={{ backgroundSize: 'contain'}} />
            <DepartmentTitles />
            {springs.map((springStyle, i) => <AnimatedCircle size={24} color={animations[i].color} springProps={springStyle} />)}
        </div>
    )
}


const DepartmentTitles = () => (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '12%', left: '2px'}}>
        {Object.entries(DEPARTMENT_PROPS).map(([name, depProps]) => 
                  <div style={{color: depProps.color, fontSize: '24px', marginBottom: '10px'}}>{name}</div>  
        )}
    </div>
)
