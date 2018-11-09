import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { Login } from '../../../../../constants/formNames';
import { validate } from '../../validations';

import Styles from './styles.scss';
import { customInput } from './components/customInput';

class LoginForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className={Styles.loginForm}>
        <Field placeholder="Email" name="email" component={customInput} type="text" label="Name" />
        <Field placeholder="Password" name="password" component={customInput} type="password" label="Password" />
        <button className={Styles.submitButton} type="submit">Log in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: Login,
  validate
})(LoginForm);
