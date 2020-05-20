import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {
  HomePage,
  DeputadosPage,
  DeputadoInfoPage,
  PartidosPage,
  PartidoInfoPage,
  NotFound,
} from 'components';

import GlobalStyle from './style';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/deputados" component={DeputadosPage} />
          <Route path="/deputado" component={DeputadoInfoPage} />
          <Route exact path="/partidos" component={PartidosPage} />
          <Route path="/partido" component={PartidoInfoPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
