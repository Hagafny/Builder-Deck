import React, { useEffect, useState } from 'react';
import { AnimatedCircle } from './AnimatedCircle';
import { useSprings, easings } from 'react-spring';
import { BaseBottleneck, BOTTLENECK_MODE, DEPARTMENT_PROPS } from './BaseBottleneck';
import { DEPARTMENTS } from '../../consts/departments';

const initialDelay = 200;

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBall(department) {
  const departmentProps = DEPARTMENT_PROPS[department];
  return {
    ...departmentProps,
    leftEnd: '100%',
    delay: randBetween(initialDelay, initialDelay + 500),
  };
}

export const OpenBottleneck = () => {
  const [balls, setBalls] = useState([]);
  const springs = useSprings(
    balls.length,
    balls.map(({ topStart, leftStart, leftEnd, delay }) => {
      return {
        from: { top: topStart, left: leftStart, opacity: 10 },
        to: { left: leftEnd, opacity: 0 },
        config: {
          duration: 1500,
          easing: easings.linear,
        },
        delay,
        loop: true,
      };
    })
  );

  useEffect(() => {
    for (const department of Object.values(DEPARTMENTS)) {
      const ballsOfDepartment = balls.filter(
        (ball) => ball.department === department
      );
      if (ballsOfDepartment.length < 3) {
        setBalls((balls) => [...balls, createBall(department)]);
      }
    }
  }, [balls, setBalls]);

  return (
    <BaseBottleneck mode={BOTTLENECK_MODE.OPEN}>
      {springs.map((values, i) => {
        return (
          <AnimatedCircle
            key={i}
            size={18}
            color={balls[i].color}
            springProps={values}
          />
        );
      })}
    </BaseBottleneck>
  );
};
