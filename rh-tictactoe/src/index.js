import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { store } from './redux/store';
import Game from './app/screens/Game';
import Login from './app/screens/Login';
import './scss/index.scss';

const Links = () => (
  <nav>
    <Link to="/">Log Out</Link>
    <Link to="/custom">Custom</Link>
  </nav>
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Links />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
