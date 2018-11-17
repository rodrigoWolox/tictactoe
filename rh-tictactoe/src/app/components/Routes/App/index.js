import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Game from '../../../screens/Game';
import Stats from '../../../screens/Stats';
import Topbar from '../../Topbar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/" />} />
          <Route exact path="/app/game" component={Game} />
          <Route exact path="/app/stats" component={Stats} />
        </Switch>
      </Router>
    );
  }
}

export default App;
