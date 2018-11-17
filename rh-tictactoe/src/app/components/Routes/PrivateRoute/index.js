import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => (
  <Route render={() => (localStorage.getItem('token') === null ? <Redirect to="/" /> : <Component />)} />
);

export default PrivateRoute;
