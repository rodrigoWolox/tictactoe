import { makeMove, jumpTo, actions } from '../../utils/utils';

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
