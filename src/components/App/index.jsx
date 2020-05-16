import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {
  HomePage,
  DeputadosPage,
  PartidosPage,
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
          <Route exact path="/partidos" component={PartidosPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
