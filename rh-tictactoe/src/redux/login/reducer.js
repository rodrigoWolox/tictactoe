import { actions } from './actions';

const initialState = {
  email: '',
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHECK_USER:
      return { ...state, isLoading: true };
    case actions.CHECK_USER_SUCCESS:
      return { ...state, email: action.data.email, loginFail: false, isLoading: false };
    case actions.CHECK_USER_FAILURE:
      return { ...state, loginFail: true, isLoading: false };
    default:
      return state;
  }
}
