import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import { required, validEmail, minLenght } from './validations';
import Styles from './styles.scss';
import { customInput } from './components/CustomInput';

const LoginForm = ({ handleSubmit, loginFail }) => (
  <React.Fragment>
    {localStorage.getItem('token') === null ? (
      <form className={Styles.loginForm} onSubmit={handleSubmit}>
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
        {loginFail ? <h3>User or password incorrect</h3> : null}
      </form>
    ) : (
      <Redirect to="/app/game" />
    )}
  </React.Fragment>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginFail: PropTypes.bool
};

export default LoginForm;
