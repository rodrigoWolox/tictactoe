import { cleanInfo } from '../../services/userService';

export const actions = {
  LOG_OUT: 'LOG_OUT'
};

export const actionCreator = {
  logOut: dispatch => {
    cleanInfo();
    dispatch({
      type: actions.LOG_OUT
    });
  }
};
