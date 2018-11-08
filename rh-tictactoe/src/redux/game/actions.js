import { makeMove, jumpTo } from '../../utils/utils';

export const actions = {
  PLAY_TURN: 'PLAY_TURN',
  JUMP_TO: 'JUMP_TO'
};

export const actionCreator = {
  playTurn: (values, squarePosition) => ({
    type: actions.PLAY_TURN,
    data: makeMove(values, squarePosition)
  }),
  jumpTo: (values, step) => ({
    type: actions.JUMP_TO,
    data: jumpTo(values, step)
  })
};
