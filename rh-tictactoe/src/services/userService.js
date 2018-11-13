import api from '../config/api';

export default {
  getUser: (email, password) => api.get('/users', { email, password })
};
