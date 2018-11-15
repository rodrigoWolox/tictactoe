import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { actionCreator } from '../../../redux/login/actions';

import { required, validEmail, minLenght } from './validations';
import Styles from './styles.scss';
import { customInput } from './components/customInput';

const Login = props => (
  <form className={Styles.loginForm} onSubmit={props.handleSubmit}>
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
  </form>
);

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(actionCreator.checkUser(values))
});

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const loginForm = reduxForm({ form: 'Login' })(Login);

export default connect(
  null,
  mapDispatchToProps
)(loginForm);
