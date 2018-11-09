import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { Login } from '../../../../../constants/formNames';

import { customInput } from './components/customInput';

class LoginForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field name="email" component={customInput} type="text" label="Name" />
        <Field name="password" component={customInput} type="password" label="Password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: Login })(LoginForm);
