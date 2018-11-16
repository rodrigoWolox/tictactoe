import api from '../config/api';

const UserService = {
  getUser: (email, password) => api.get('/users/', { email, password })
};

const setInfo = (email, token) => {
  localStorage.setItem('email', email);
  localStorage.setItem('token', token);
  api.setHeader('Authenticated', token);
};

const getToken = () => localStorage.getItem('token');

export { getToken, setInfo, UserService };
