import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import game from './game/reducer';
import login from './login/reducer';

const reducers = combineReducers({
  form: formReducer,
  game,
  login
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devTools
  )
);
