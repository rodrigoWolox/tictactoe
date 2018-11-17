import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from '../../../screens/Game';
import Stats from '../../../screens/Stats';
import Topbar from '../../Topbar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Topbar />
          <Route path="/game" component={Game} />
          <Route path="/stats" component={Stats} />
        </Switch>
      </Router>
    );
  }
}

export default App;
