import { makeMove, jumpTo } from '../../utils/utils';
import { cleanInfo } from '../../services/userService';

export const actions = {
  PLAY_TURN: 'PLAY_TURN',
  JUMP_TO: 'JUMP_TO',
  LOG_OUT: 'LOG_OUT'
};

export const actionCreator = {
  playTurn: (values, squarePosition) => ({
    type: actions.PLAY_TURN,
    data: makeMove(values, squarePosition)
  }),
  jumpTo: (values, step) => ({
    type: actions.JUMP_TO,
    data: jumpTo(values, step)
  }),
  logOut: dispatch => {
    cleanInfo();
    dispatch({
      type: actions.LOG_OUT
    });
  }
};
