import React from 'react';
import { Container } from './style';

export default function Label({ children, color }) {
  return (
    <Container color={color}>
      {children}
    </Container>
  );
}
