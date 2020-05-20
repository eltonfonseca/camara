import React from 'react';
import {
  Header,
  Content,
  Card,
  LabelBox,
  Title,
} from 'components';
import { Container } from './style';

export default function Deputados() {
  return (
    <Container>
      <Header />
      <Content align="wrap">
        <Card
          fotoUrl="https://www.camara.leg.br/internet/deputado/bandep/204554.jpg"
          fotoWidth="200px"
          fotoHeight="200px"
        >
          <Title size="14pt" weight="100">Abílio Santana</Title>
          <LabelBox
            label="Partido:"
            info="PL"
            bgLabel="#3895FF"
            bgInfo="#F7C045"
          />
        </Card>
      </Content>
    </Container>
  );
}
