import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Game from '../../../screens/Game';
import Login from '../../../screens/Login';
import Stats from '../../../screens/Stats';
import Topbar from '../../Topbar';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/app/game" component={Game} />
          <Route exact path="/app/stats" component={Stats} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
