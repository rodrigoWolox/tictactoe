import { actions } from './actions';

const initialState = {
  loged: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOG_OUT:
      return { ...state, loged: !state.loged };
    default:
      return state;
  }
}
