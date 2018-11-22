import React from 'react';

import Spinner from '../../Spinner';

const withLoading = Component => props => (props.isLoading ? <Spinner /> : <Component {...props} />);

export default withLoading;
