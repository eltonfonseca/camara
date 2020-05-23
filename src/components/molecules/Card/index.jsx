import React from 'react';
import {
  Button,
  Imagem,
} from 'components';
import {
  Container,
  Body,
} from './style';

export default function Card({
  children,
  fotoUrl,
  fotoWidth,
  fotoHeight,
  url,
}) {
  return (
    <Container>
      <Imagem
        url={fotoUrl}
        width={fotoWidth}
        heigth={fotoHeight}
      />
      <Body>
        { children }
      </Body>
      <Button url={url}>Detalhes</Button>
    </Container>
  );
}
