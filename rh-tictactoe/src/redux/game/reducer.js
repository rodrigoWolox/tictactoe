import PropTypes from 'prop-types';

import { actions } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  xIsNext: true,
  status: 'Next player: X',
  stepNumber: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.PLAY_TURN:
      return { ...state, ...action.data };
    case actions.JUMP_TO:
      return { ...state, ...action.data };
    default:
      return state;
  }
}

export const squarePropType = PropTypes.arrayOf(PropTypes.string);
