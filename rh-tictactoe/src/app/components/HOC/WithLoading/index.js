import React from 'react';

import Spinner from '../../Spinner';

const withLoading = Component => props => (props.isLoading ? <Component {...props} /> : null);

const SpinnerWithLoading = withLoading(Spinner);

export default SpinnerWithLoading;
