import React, { Component } from 'react';

import LoginForm from './components/LoginForm';

class Login extends Component {
  render() {
    return <LoginForm onSubmit={this.onSubmit} />;
  }
}

export default Login;
