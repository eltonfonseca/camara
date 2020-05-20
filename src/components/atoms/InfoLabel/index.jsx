import React from 'react';
import { Container } from './style';

export default function InfoLabel({ children, color }) {
  return (
    <Container color={color}>
      { children }
    </Container>
  );
}
