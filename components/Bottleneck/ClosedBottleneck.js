import React from 'react';
import { AnimatedCircle } from './AnimatedCircle';
import { useSprings, easings } from 'react-spring';
import { BaseBottleneck, BOTTLENECK_MODE, DEPARTMENT_PROPS } from './BaseBottleneck';
import { DEPARTMENTS } from '../../consts/departments';

const circleAnimations = () => {
  return [
    { ...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING], topEnd: '45%', leftEnd: '94%'},
    { ...DEPARTMENT_PROPS[DEPARTMENTS.DESIGN], topEnd: '37%', leftEnd: '91%' },
    { ...DEPARTMENT_PROPS[DEPARTMENTS.PRODUCT], topEnd: '50%', leftEnd: '91%' },
    { ...DEPARTMENT_PROPS[DEPARTMENTS.OPERATIONS], topEnd: '45%', leftEnd: '88%'},

    { ...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING],topEnd: '36%', leftEnd: '87%'},
    { ...DEPARTMENT_PROPS[DEPARTMENTS.DESIGN], topEnd: '57%', leftEnd: '88%' },
    { ...DEPARTMENT_PROPS[DEPARTMENTS.PRODUCT], topEnd: '50%', leftEnd: '85%' },
    { ...DEPARTMENT_PROPS[DEPARTMENTS.OPERATIONS], topEnd: '40%', leftEnd: '83%'},

    { ...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING],topEnd: '50', leftEnd: '82%'},
    { ...DEPARTMENT_PROPS[DEPARTMENTS.DESIGN], topEnd: '59%', leftEnd: '84%' },
    { ...DEPARTMENT_PROPS[DEPARTMENTS.PRODUCT], topEnd: '59%', leftEnd: '80%' },
    // { ...DEPARTMENT_PROPS[DEPARTMENTS.OPERATIONS], topEnd: '40%', leftEnd: '83%'},
    
  ];
};

export const ClosedBottleneck = ({ initialDelay = 200, interval = 300 }) => {
  const animations = React.useMemo(() => circleAnimations(), []);
  const springs = useSprings(
    animations.length,
    animations.map(({ topStart, topEnd, leftStart, leftEnd, delay }, i) => ({
      from: { top: topStart, left: leftStart },
      to: { top: topEnd, left: leftEnd },
      config: { duration: 1500, easing: easings.easeOutQuint },
      delay: initialDelay + (i + 1) * interval,
    }))
  );

  return (
    <BaseBottleneck mode={BOTTLENECK_MODE.CLOSED}>
      {springs.map((springStyle, i) => (
        <AnimatedCircle
          key={i}
          size={18}
          color={animations[i].color}
          springProps={springStyle}
        />
      ))}
    </BaseBottleneck>
  );
};
