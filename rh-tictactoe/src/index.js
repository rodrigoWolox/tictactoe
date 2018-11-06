import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import Game from './app/screens/Game';
import './scss/index.scss';

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
