import api from '../config/api';

export default {
  getUser: values => api.get('/users', values)
};
