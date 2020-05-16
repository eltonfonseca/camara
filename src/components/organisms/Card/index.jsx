import React from 'react';
import {
  Container,
  Header,
  Body,
  Name,
  Partido,
  Label,
  Sigla,
  Button,
} from './style';

export default function Card({ fotoUrl, name, partido }) {
  return (
    <Container>
      <Header url={fotoUrl} />
      <Body>
        <Name>{ name }</Name>
        <Partido>
          <Label>Partido:</Label>
          <Sigla>{ partido }</Sigla>
        </Partido>
      </Body>
      <Button onClick={() => alert('teste')}>Detalhes</Button>
    </Container>
  );
}
