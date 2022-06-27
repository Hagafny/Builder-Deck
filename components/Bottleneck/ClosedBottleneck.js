import React from 'react';
import { AnimatedCircle } from './AnimatedCircle';
import { useSprings, easings } from 'react-spring';
import { BaseBottleneck, BOTTLENECK_MODE } from './BaseBottleneck';
import { DEPARTMENTS, DEPARTMENTS_COLORS } from '../../consts/departments';

const DEPARTMENT_PROPS = {
  [DEPARTMENTS.MARKETING]: {
    department: DEPARTMENTS.MARKETING,
    color: DEPARTMENTS_COLORS[DEPARTMENTS.MARKETING],
    topStart: '20%',
    leftStart: '19%',
  },
  [DEPARTMENTS.DESIGN]: {
    department: DEPARTMENTS.DESIGN,
    color: DEPARTMENTS_COLORS[DEPARTMENTS.DESIGN],
    topStart: '37%',
    leftStart: '15%',
  },
  [DEPARTMENTS.PRODUCT]: {
    department: DEPARTMENTS.PRODUCT,
    color: DEPARTMENTS_COLORS[DEPARTMENTS.PRODUCT],
    topStart: '54%',
    leftStart: '16%',
  },
  [DEPARTMENTS.OPERATIONS]: {
    department: DEPARTMENTS.OPERATIONS,
    color: DEPARTMENTS_COLORS[DEPARTMENTS.OPERATIONS],
    topStart: '71%',
    leftStart: '21%',
  },
};

const circleAnimations = () => {
  return [
    {
      ...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING],
      topEnd: '43%',
      leftEnd: '94%',
    },
    { ...DEPARTMENT_PROPS[DEPARTMENTS.DESIGN], topEnd: '37%', leftEnd: '91%' },
    { ...DEPARTMENT_PROPS[DEPARTMENTS.PRODUCT], topEnd: '50%', leftEnd: '91%' },
    {
      ...DEPARTMENT_PROPS[DEPARTMENTS.OPERATIONS],
      topEnd: '45%',
      leftEnd: '88%',
    },

    {
      ...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING],
      topEnd: '43%',
      leftEnd: '87%',
    },
    { ...DEPARTMENT_PROPS[DEPARTMENTS.DESIGN], topEnd: '37%', leftEnd: '86%' },
    { ...DEPARTMENT_PROPS[DEPARTMENTS.PRODUCT], topEnd: '50%', leftEnd: '85%' },
    {
      ...DEPARTMENT_PROPS[DEPARTMENTS.OPERATIONS],
      topEnd: '45%',
      leftEnd: '83%',
    },

    // {...DEPARTMENT_PROPS[DEPARTMENTS.MARKETING], topEnd: '41%', leftEnd: '92%', delay: 700 },
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
