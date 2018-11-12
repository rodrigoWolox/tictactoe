import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import game from './game/reducer';

const reducers = combineReducers({
  form: formReducer,
  game
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
