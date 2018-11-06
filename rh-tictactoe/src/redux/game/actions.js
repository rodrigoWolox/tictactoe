/* import { calculateWinner } from '../../utils/utils';

 export const nextPlayer = history => dispatch => {
  if (calculateWinner()) {
    dispatch({ type: actions.SOMEONE_WON });
  } else {
    dispatch({ type: actions.CHANGE_PLAYER });
  }
  dispatch(privateActionCreators.makeMove())
} */

export const actions = {
  HANDLE_CLICK: 'HANDLE_CLICK',
  JUMP_TO: 'JUMP_TO',
  CHANGE_PLAYER: 'CHANGE_PLAYER',
  SOMEONE_WON: 'SOMEONE_WON'
};

export const actionCreator = {
  playTurn: squarePosition => ({
    type: actions.HANDLE_CLICK,
    squarePosition
  }),
  jumpTo: step => ({
    type: actions.JUMP_TO,
    step
  })
};
