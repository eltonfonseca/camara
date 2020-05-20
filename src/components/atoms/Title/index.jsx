import React from 'react';
import { Container } from './style';

export default function Title({
  children,
  size,
  weight,
  transform,
}) {
  return (
    <Container
      size={size}
      weight={weight}
      transform={transform}
    >
      { children }
    </Container>
  );
}
