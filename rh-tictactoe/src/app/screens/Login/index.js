import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { actionCreator } from '../../../redux/login/actions';
import { getToken } from '../../../services/userService';

import { required, validEmail, minLenght } from './validations';
import Styles from './styles.scss';
import { customInput } from './components/customInput';

const Login = props => (
  <React.Fragment>
    {getToken ? (
      <form className={Styles.loginForm} onSubmit={props.handleSubmit}>
        <h1>TIC-TAC-TOE</h1>
        <Field
          placeholder="Email"
          name="email"
          component={customInput}
          type="text"
          label="Name"
          validate={[required, validEmail]}
        />
        <Field
          placeholder="Password"
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required, minLenght]}
        />
        <button className={Styles.submitButton} type="submit">
          Log in
        </button>
        {props.loginFail ? <h3>User or password incorrect</h3> : null}
      </form>
    ) : (
      <Redirect to="/game" />
    )}
  </React.Fragment>
);

const mapStateToProps = state => ({
  loginFail: state.login.loginFail
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(actionCreator.checkUser(values))
});

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginFail: PropTypes.bool
};

const loginForm = reduxForm({ form: 'Login' })(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);
