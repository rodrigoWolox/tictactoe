import { makeMove, jumpTo } from '../../utils/utils';
import UserService from '../../services/userService';

export const actions = {
  PLAY_TURN: 'PLAY_TURN',
  JUMP_TO: 'JUMP_TO',
  CHECK_USER: 'CHECK_USER',
  CHECK_USER_SUCCESS: 'CHECK_USER_SUCCESS',
  CHECK_USER_FAILURE: 'CHECK_USER_FAILURE'
};

export const actionCreator = {
  checkUser: values => async dispatch => {
    // dispatch({ type: actions.CHECK_USER });
    const response = await UserService.getUser(values);
    if (response.ok) {
      console.log(JSON.stringify(response.data, null, 2));
      dispatch({
        type: actions.CHECK_USER_SUCCESS,
        data: response.data
      });
    } else {
      dispatch({
        type: actions.CHECK_USER_FAILURE,
        data: response.problem
      });
    }
  },
  playTurn: (values, squarePosition) => ({
    type: actions.PLAY_TURN,
    data: makeMove(values, squarePosition)
  }),
  jumpTo: (values, step) => ({
    type: actions.JUMP_TO,
    data: jumpTo(values, step)
  })
};
