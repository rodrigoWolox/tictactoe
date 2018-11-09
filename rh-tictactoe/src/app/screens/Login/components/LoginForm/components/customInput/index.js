import React from 'react';

import Styles from './styles.scss';

export const customInput = props => {
  return (
    <div>
      <input placeholder={props.placeholder} className={Styles.input} {...props.input} type={props.type} />
    </div>
  );
};
