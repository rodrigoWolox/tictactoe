import api from '../config/api';

export default {
  getUser: email => api.get('/users', { email })
};
