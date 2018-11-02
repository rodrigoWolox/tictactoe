import * as utils from '../../utils/utils';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  xIsNext: true,
  status: 'Next player: X',
  stepNumber: 0,
  moves: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_CLICK':
      return utils.makeMove(state, action.squarePosition);
    case 'JUMP_TO':
      return utils.jumpTo(state, action.stepNumber);
    default:
      return state;
  }
}
