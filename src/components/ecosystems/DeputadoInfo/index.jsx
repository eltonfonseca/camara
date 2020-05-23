import React from 'react';
import { useDeputados } from 'components/contexts/DeputadosProvider';
import {
  Content,
  LabelBox,
  InfoBox,
  Info,
  Title,
  Imagem,
  Loading,
} from 'components';
import {
  Container,
  LabelContainer,
} from './style';

export default function DeputadoInfo() {
  const { deputadoHook: { deputado } } = useDeputados();

  return (
    <Container>
      {
        deputado
          ? (
            <Content align="column">
              <Imagem
                url={deputado.ultimoStatus ? deputado.ultimoStatus.urlFoto : 'https://www.tribunadeituverava.com.br/wp-content/uploads/2018/02/sem-foto.jpg'}
                width="300px"
                heigth="300px"
              />
              <Title weight="100" transform="uppercase">
                {deputado.ultimoStatus ? deputado.ultimoStatus.nome : 'Sem Informação'}
              </Title>
              <LabelContainer>
                <LabelBox
                  label="Condição Eleitoral:"
                  info={deputado.ultimoStatus ? deputado.ultimoStatus.condicaoEleitoral : 'Sem Informação'}
                  bgLabel="#4ba661"
                  bgInfo="#4e5052"
                  color="white"
                />
                <LabelBox
                  label="Situação"
                  info={deputado.ultimoStatus ? deputado.ultimoStatus.situacao : 'Sem Informação'}
                  bgLabel="#4ba661"
                  bgInfo="#4e5052"
                  color="white"
                />
              </LabelContainer>
              <InfoBox title="Informações">
                <Info title="Nome:" info={deputado.nomeCivil} />
                <Info title="CPF:" info={deputado.cpf} />
                <Info title="Partido:" info={deputado.ultimoStatus ? deputado.ultimoStatus.siglaPartido : 'Sem Informação'} />
                <Info title="UF:" info={deputado.ufNascimento} />
                <Info title="ID Legislatura:" info={deputado.ultimoStatus ? deputado.ultimoStatus.idLegislatura : 'Sem Informação'} />
                <Info title="Data de Nascimento:" info={deputado.dataNascimento} />
                <Info title="Naturalidade:" info={deputado.municipioNascimento} />
                <Info title="Escolaridade:" info={deputado.escolaridade} />
              </InfoBox>
              <InfoBox title="Gabinete">
                <Info title="Nome:" info={deputado.ultimoStatus ? deputado.ultimoStatus.gabinete.nome : 'Sem Informação'} />
                <Info title="Prédio:" info={deputado.ultimoStatus ? deputado.ultimoStatus.gabinete.predio : 'Sem Informação'} />
                <Info title="Sala:" info={deputado.ultimoStatus ? deputado.ultimoStatus.gabinete.sala : 'Sem Informação'} />
                <Info title="Andar:" info={deputado.ultimoStatus ? deputado.ultimoStatus.gabinete.andar : 'Sem Informação'} />
                <Info title="Telefone:" info={deputado.ultimoStatus ? deputado.ultimoStatus.gabinete.telefone : 'Sem Informação'} />
                <Info title="E-mail:" info={deputado.ultimoStatus ? deputado.ultimoStatus.gabinete.email : 'Sem Informação'} />
              </InfoBox>
            </Content>
          )
          : <Loading />
      }
    </Container>
  );
}
