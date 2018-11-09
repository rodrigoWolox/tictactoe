import React, { Component } from 'react';

import LoginForm from './components/LoginForm';

class Login extends Component {
  onSubmit = values => {
    window.alert(JSON.stringify(values, null, 2));
  };

  render() {
    return <LoginForm onSubmit={this.onSubmit} />;
  }
}

export default Login;
