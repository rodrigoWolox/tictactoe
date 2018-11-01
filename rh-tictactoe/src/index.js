import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Game from './app/screens/Game';
import './scss/index.scss';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  xIsNext: true,
  status: 'Next player: X',
  stepNumber: 0,
  moves: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case '':
      return {
        
      }
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: 'INCREMENT' });

const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
