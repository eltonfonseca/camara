import React from 'react';
import { Button } from 'components';
import {
  Container,
  Header,
  Body,
  Name,
  Partido,
  Label,
  Sigla,
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
      <Button>Detalhes</Button>
    </Container>
  );
}
