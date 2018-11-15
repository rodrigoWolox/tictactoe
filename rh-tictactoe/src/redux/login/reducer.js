import PropTypes from 'prop-types';

import { actions } from './actions';

const initialState = {
  email: '',
  loginFail: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHECK_USER_SUCCESS:
      return { ...state, token: action.data.token, email: action.data.email, loginFail: false };
    case actions.CHECK_USER_FAILURE:
      return { ...state, loginFail: true };
    default:
      return state;
  }
}

export const squarePropType = PropTypes.arrayOf(PropTypes.oneOf(['X', 'O']));
