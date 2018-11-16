import api from '../config/api';

const UserService = {
  getUser: (email, password) => api.get('/users/', { email, password })
};

const setInfo = (email, token) => {
  if (!localStorage.getItem('email')) localStorage.setItem('email', email);
  if (!localStorage.getItem('token')) localStorage.setItem('token', token);
  api.setHeader('Authenticated', token);
};

const getToken = () => localStorage.getItem('token');

export { getToken, setInfo, UserService };
