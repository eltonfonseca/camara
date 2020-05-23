import React from 'react';
import { useDeputados } from 'components/contexts/DeputadosProvider';
import {
  Header,
  Content,
  Card,
  LabelBox,
  Title,
  Loading,
} from 'components';
import { Container } from './style';

export default function Deputados() {
  const { deputadosHook: { deputados } } = useDeputados();

  return (
    <Container>
      <Header resource="deputados" />
      <Content align="wrap">
        {
          deputados.length > 0
            ? deputados.map((deputado) => (
              <Card
                key={deputado.id}
                fotoUrl={deputado.urlFoto}
                fotoWidth="200px"
                fotoHeight="200px"
                url={`/deputado/${deputado.id}`}
              >
                <Title size="14pt" weight="100">
                  {deputado.nome}
                </Title>
                <LabelBox
                  color="white"
                  label="Partido:"
                  info={deputado.siglaPartido}
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
