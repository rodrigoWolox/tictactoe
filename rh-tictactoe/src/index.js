import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { store } from './redux/store';
import Login from './app/screens/Login';
import App from './app/components/Routes/App';
import PrivateRoute from './app/components/Routes/PrivateRoute';
import './scss/index.scss';

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute component={App} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));
