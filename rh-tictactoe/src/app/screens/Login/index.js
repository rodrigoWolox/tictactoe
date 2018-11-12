import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreator } from '../../../../src/redux/game/actions.js';

import LoginForm from './components/LoginForm';

class Login extends Component {
  render() {
    return <LoginForm onSubmit={this.props.onSubmit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(actionCreator.checkUser(values))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
