import React from 'react';
import {
  Imagem,
  Title,
  Content,
  InfoBox,
  Info,
  LabelBox,
} from 'components';
import { Container } from './style';

export default function PartidoInfo() {
  return (
    <Container>
      <Content align="column">
        <Imagem
          url="https://www.camara.leg.br/internet/Deputado/img/partidos/AVANTE.gif"
          width="200px"
          heigth="200px"
        />
        <Title weight="100" transform="uppercase">
          AVANTE
        </Title>
        <LabelBox
          label="Sigla:"
          info="AVANTE"
          bgLabel="#4ba661"
          bgInfo="#4e5052"
        />
        <InfoBox title="Informações">
          <Info title="Situação:" info="Ativo" />
          <Info title="Total de Posse:" info="29" />
          <Info title="Total de Membros:" info="28" />
        </InfoBox>
      </Content>
    </Container>
  );
}
