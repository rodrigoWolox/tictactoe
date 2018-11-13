import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { Login } from '../../../../../constants/formNames';
import { required, validEmail, minLenght } from '../../validations';

import Styles from './styles.scss';
import { customInput } from './components/customInput';

class LoginForm extends Component {
  render() {
    return (
      <form className={Styles.loginForm} onSubmit={this.props.handleSubmit}>
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
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: Login })(LoginForm);
