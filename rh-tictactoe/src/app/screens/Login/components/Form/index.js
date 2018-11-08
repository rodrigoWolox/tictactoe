import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label>Preferred Formatting</label>
          <Field name="preference" component="select">
            <option />
            <option value="tabs">Tabs</option>
            <option value="spaces">Spaces</option>
          </Field>
        </div>
        <div>
          <label>Sing up to newsletter?</label>
          <Field name="newsletter" component="input" type="checkbox" />
        </div>
        <button>
      </Form>
    );
  }
}

RegisterForm = reduxForm({ form: 'register' })(RegisterForm);
