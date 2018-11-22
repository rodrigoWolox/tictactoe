import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { actionCreator } from '../../../redux/login/actions';
import HeaderWithLoginFail from '../../components/HOC/WithLoginFail';
import SpinnerWithLoading from '../../components/HOC/WithLoading';

import { required, validEmail, minLenght } from './validations';
import Styles from './styles.scss';
import { customInput } from './components/CustomInput';

/* const withTokenNull = Component => props => localStorage.getItem('token') === null ? <Component {...props} /> : <Redirect to='/app/game' />;

const withLoading = Component => props => isLoading ? spinner : loginfail or redirect; */

const Login = ({ handleSubmit, loginFail, isLoading }) => (
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
        <SpinnerWithLoading isLoading={isLoading} />
        <HeaderWithLoginFail loginFail={loginFail} />
      </form>
    ) : (
      <Redirect to="/app/game" />
    )}
  </React.Fragment>
);

const mapStateToProps = state => ({
  loginFail: state.login.loginFail,
  isLoading: state.login.isLoading
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(actionCreator.checkUser(values))
});

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginFail: PropTypes.bool,
  isLoading: PropTypes.bool
};

const loginForm = reduxForm({ form: 'Login' })(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);
