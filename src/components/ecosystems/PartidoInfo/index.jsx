import React from 'react';
import { usePartidos } from 'components/contexts/PartidosProvider';
import {
  Imagem,
  Title,
  Content,
  InfoBox,
  Info,
  LabelBox,
  Loading,
} from 'components';
import { Container } from './style';

export default function PartidoInfo() {
  const { partidoHook: { partido } } = usePartidos();

  return (
    <Container>
      {
        partido ? (
          <Content align="column">
            <Imagem
              url={partido.urlLogo}
              width="100px"
              heigth="100px"
            />
            <Title weight="100" transform="uppercase">
              {partido.nome}
            </Title>
            <LabelBox
              label="Sigla:"
              info={partido.sigla}
              bgLabel="#4ba661"
              bgInfo="#4e5052"
              color="white"
            />
            <InfoBox title="Informações">
              <Info title="Situação:" info={partido.status ? partido.status.situacao : ''} />
              <Info title="Total de Posse:" info={partido.status ? partido.status.totalPosse : ''} />
              <Info title="Total de Membros:" info={partido.status ? partido.status.totalMembros : ''} />
            </InfoBox>
          </Content>
        ) : <Loading />
      }
    </Container>
  );
}
