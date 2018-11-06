import * as utils from '../../utils/utils';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  xIsNext: true,
  status: 'Next player: X',
  stepNumber: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      return state.merge({
        status: state.xIsNext ? 'Nest Player: X' : 'Next Player: O',
        xIsNext: !state.xIsNext
      });
    case 'SOMEONE_WON':
      return state.merge({ status, endGame: true });
    case 'HANDLE_CLICK':
      return utils.makeMove(state, action.squarePosition);
    case 'JUMP_TO':
      return utils.jumpTo(state, action.step);
    default:
      return state;
  }
}
