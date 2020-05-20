import React from 'react';
import {
  Content,
  LabelBox,
  InfoBox,
  Info,
  Title,
  Imagem,
} from 'components';
import {
  Container,
  LabelContainer,
} from './style';

export default function DeputadoInfo() {
  return (
    <Container>
      <Content align="column">
        <Imagem
          url="https://www.camara.leg.br/internet/deputado/bandep/204554.jpg"
          width="300px"
          heigth="300px"
        />
        <Title weight="100" transform="uppercase">
          José Abílio Silva de Santana
        </Title>
        <LabelContainer>
          <LabelBox
            label="Condição Eleitoral:"
            info="Titular"
            bgLabel="#4ba661"
            bgInfo="#4e5052"
          />
          <LabelBox
            label="Situação"
            info="Exercício"
            bgLabel="#4ba661"
            bgInfo="#4e5052"
          />
        </LabelContainer>
        <InfoBox title="Informações">
          <Info title="Nome:" info="José Abílio Silva de Santana" />
          <Info title="CPF:" info="3660760504" />
          <Info title="Partido:" info="PL" />
          <Info title="UF:" info="BA" />
          <Info title="ID Legislatura:" info="56" />
          <Info title="Data de Nascimento:" info="13/02/1965" />
          <Info title="Naturalidade:" info="Salvador" />
          <Info title="Escolaridade:" info="Superior Incompleto" />
        </InfoBox>
        <InfoBox title="Gabinete">
          <Info title="Nome:" info="531" />
          <Info title="Prédio:" info="4" />
          <Info title="Sala:" info="531" />
          <Info title="Andar:" info="5" />
          <Info title="Telefone:" info="3215-5531" />
          <Info title="E-mail:" info="dep.abiliosantana@camara.leg.br" />
        </InfoBox>
        <InfoBox title="Despesas">
          asdas
        </InfoBox>
      </Content>
    </Container>
  );
}
