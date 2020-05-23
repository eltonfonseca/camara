import React from 'react';
import DeputadosProvider from 'components/contexts/DeputadosProvider';
import PartidosProvider from 'components/contexts/PartidosProvider';
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
    <DeputadosProvider>
      <PartidosProvider>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/deputados" component={DeputadosPage} />
            <Route path="/deputado/:id" component={DeputadoInfoPage} />
            <Route path="/partidos" component={PartidosPage} />
            <Route path="/partido/:id" component={PartidoInfoPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </PartidosProvider>
    </DeputadosProvider>
  );
}
