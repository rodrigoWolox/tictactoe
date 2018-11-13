import UserService from '../../services/userService';
import api from '../../config/api';

export const actions = {
  CHECK_USER: 'CHECK_USER',
  CHECK_USER_SUCCESS: 'CHECK_USER_SUCCESS',
  CHECK_USER_FAILURE: 'CHECK_USER_FAILURE'
};

export const actionCreator = {
  checkUser: values => async dispatch => {
    const response = await UserService.getUser(values.email, values.password);
    if (response.ok) {
      localStorage.setItem('email', response.data[0].email);
      localStorage.setItem('token', response.data[0].token);
      console.log(localStorage.getItem('email'));
      console.log(localStorage.getItem('token'));
      /* 
        TODO: preguntar a guido como implementar el getHeader 
        para no andar seteando todo el tiempo
        api.getHeader('Authenticated'); 
        if (!api.getHeader('Authenticated')) api.setHeader('Authenticated', response.data[0].token);
      */
      api.setHeader('Authenticated', response.data[0].token);
      dispatch({
        type: actions.CHECK_USER_SUCCESS,
        data: response.data[0]
      });
    } else if (!response.ok) {
      alert('Usuario o contraseña incorrectos');
    }
  }
};
