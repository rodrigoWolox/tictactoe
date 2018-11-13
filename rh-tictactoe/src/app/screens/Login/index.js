import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreator } from '../../../../src/redux/login/actions.js';

import LoginForm from './components/LoginForm';

class Login extends Component {
  render() {
    return <LoginForm onSubmit={this.props.onSubmit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(actionCreator.checkUser(values))
});

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
