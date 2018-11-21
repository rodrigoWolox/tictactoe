import { UserService, setInfo } from '../../services/userService';

export const actions = {
  CHECK_USER: 'CHECK_USER',
  CHECK_USER_SUCCESS: 'CHECK_USER_SUCCESS',
  CHECK_USER_FAILURE: 'CHECK_USER_FAILURE'
};

export const actionCreator = {
  checkUser: values => async dispatch => {
    dispatch({ type: actions.CHECK_USER });
    const response = await UserService.getUser(values.email, values.password);
    if (response.ok && response.data.length > 0) {
      setInfo(response.data[0].email, response.data[0].token);
      dispatch({
        type: actions.CHECK_USER_SUCCESS,
        data: response.data[0].email
      });
    } else {
      dispatch({ type: actions.CHECK_USER_FAILURE });
    }
  }
};
