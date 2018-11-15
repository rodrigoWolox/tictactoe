import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PrivateRoute, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { store } from './redux/store';
import Game from './app/screens/Game';
import Login from './app/screens/Login';
import Stats from './app/screens/Stats';
import Topbar from './app/screens/Topbar';
import './scss/index.scss';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Topbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/stats" component={Stats} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
