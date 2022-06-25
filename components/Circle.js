import styled from 'styled-components'

export const Circle = styled.div`
      position: absolute;
      width: ${({ $size }) => $size}px;
      height: ${({ $size }) => $size}px;
      border-radius: 50%;
      background: ${({ $color }) => $color};


`