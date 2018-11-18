import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => (
  <Route render={() => (localStorage.getItem('token') === null ? <Redirect to="/login" /> : <Component />)} />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};
