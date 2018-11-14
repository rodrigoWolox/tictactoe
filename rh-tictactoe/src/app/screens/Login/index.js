import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { actionCreator } from '../../../../src/redux/login/actions.js';

import LoginForm from './components/LoginForm';

class Login extends Component {
  render() {
    return this.props.token ? <Redirect to="/game" /> : <LoginForm onSubmit={this.props.onSubmit} />;
  }
}

const mapStateToProps = state => ({
  token: state.login.token
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(actionCreator.checkUser(values))
});

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  token: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
