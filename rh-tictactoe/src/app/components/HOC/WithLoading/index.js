import React from 'react';

import Spinner from '../../Spinner';
import LoginForm from '../../../screens/Login/components/LoginForm';

const withLoading = Component => props => (props.isLoading ? <Spinner /> : <Component {...props} />);

const LoginWithLoading = withLoading(LoginForm);

export default LoginWithLoading;
