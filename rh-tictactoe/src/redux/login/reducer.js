import { actions } from './actions';

const initialState = {
  email: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHECK_USER_SUCCESS:
      return { ...state, email: action.data.email, loginFail: false };
    case actions.CHECK_USER_FAILURE:
      return { ...state, loginFail: true };
    default:
      return state;
  }
}
