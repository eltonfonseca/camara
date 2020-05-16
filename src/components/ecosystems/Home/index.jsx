import React from 'react';
import { Link } from 'components';
import { Screen } from './style';

export default function Home() {
  return (
    <>
      <Screen position="left" backgroundUrl="https://www.amrigs.org.br/assets/images/upload/noticias/1561812470.jpg" backgroundColor="black" opacity="90%">
        <Link to="/deputados">Deputados</Link>
      </Screen>
      <Screen position="right" backgroundUrl="https://upload.wikimedia.org/wikipedia/commons/f/f2/Palacio_Alvorada_commons.jpg" backgroundColor="green" opacity="60%">
        <Link to="/partidos">Partidos</Link>
      </Screen>
    </>
  );
}
