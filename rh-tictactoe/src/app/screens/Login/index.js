import React, { Component } from 'react';

import UserService from '../../../services/userService';

import LoginForm from './components/LoginForm';

class Login extends Component {
  onSubmit = async values => {
    const user = await UserService.getUser(values);
    if (user) {
      alert(JSON.stringify(user.data, null, 2));
    }
  };

  render() {
    return <LoginForm onSubmit={this.onSubmit} />;
  }
}

export default Login;
