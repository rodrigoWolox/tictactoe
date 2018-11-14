import PropTypes from 'prop-types';

import { actions } from './actions';

const initialState = {
  email: '',
  token: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHECK_USER:
      return { ...state, ...action.data };
    case actions.CHECK_USER_SUCCESS:
      return { ...state, token: action.data.token, email: action.data.email };
    default:
      return state;
  }
}

export const squarePropType = PropTypes.arrayOf(PropTypes.oneOf(['X', 'O']));