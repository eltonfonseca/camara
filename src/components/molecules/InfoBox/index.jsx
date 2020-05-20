import React from 'react';
import { Title } from 'components';
import { Container } from './style';

export default function InfoBox({ children, title }) {
  return (
    <Container>
      <Title size="16pt" weight="100">{title}</Title>
      { children }
    </Container>
  );
}
