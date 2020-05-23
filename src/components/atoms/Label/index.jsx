import React from 'react';
import { Container } from './style';

export default function Label({ children, color, fontColor }) {
  return (
    <Container fontColor={fontColor} color={color}>
      {children}
    </Container>
  );
}
