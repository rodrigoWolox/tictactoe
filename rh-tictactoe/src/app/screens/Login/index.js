import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { actionCreator } from '../../../../src/redux/login/actions.js';

import LoginForm from './components/LoginForm';

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        {localStorage.getItem('token') === null ? (
          <LoginForm onSubmit={this.props.onSubmit} />
        ) : (
          <Redirect to="/game" />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  email: state.login.email
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(actionCreator.checkUser(values))
});

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
