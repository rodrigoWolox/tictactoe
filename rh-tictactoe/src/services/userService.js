import api from '../config/api';

const UserService = {
  getUser: (email, password) => api.get('/users/', { email, password })
};

const setInfo = (email, token) => {
  localStorage.setItem('email', email);
  localStorage.setItem('token', token);
  api.setHeader('Authenticated', token);
};

export default { UserService, setInfo };
