import { createStore, combineReducers } from 'redux';

import game from './game/reducer';

const reducers = combineReducers({
  game
});

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
