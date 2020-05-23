import React from 'react';
import { usePartidos } from 'components/contexts/PartidosProvider';
import {
  Header,
  Content,
  Card,
  Title,
  LabelBox,
  Loading,
} from 'components';
import { Container } from './style';

export default function Partidos() {
  const { partidosHook: { partidos } } = usePartidos();

  return (
    <Container>
      <Header resource="partidos" />
      <Content align="wrap">
        {
          partidos
            ? partidos.map((partido) => (
              <Card key={partido.id} url={`/partido/${partido.id}`}>
                <Title size="14pt" weight="100">{partido.nome}</Title>
                <LabelBox
                  label="Sigla:"
                  info={partido.sigla}
                  bgLabel="#3895FF"
                  bgInfo="#F7C045"
                />
              </Card>
            ))
            : <Loading />
        }
      </Content>
    </Container>
  );
}
