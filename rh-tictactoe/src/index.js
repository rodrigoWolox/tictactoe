import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Game from './app/screens/Game';
import './scss/index.scss';

function reducer() {
  return {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    status: 'Next player: X',
    stepNumber: 0,
    moves: ''
  };
}

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
