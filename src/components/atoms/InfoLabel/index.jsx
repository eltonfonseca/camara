import React from 'react';
import { Container } from './style';

export default function InfoLabel({ children, color, fontColor }) {
  return (
    <Container color={color} fontColor={fontColor}>
      { children }
    </Container>
  );
}
