import React from 'react';
import ReactJson from 'react-json-view';

import Styles from './styles.scss';

export const customInput = props => {
  return (
    <div className={Styles.inputContainer}>
      <input placeholder={props.placeholder} className={Styles.input} {...props.input} type={props.type} />
      {props.meta.error && props.meta.touched && <div style={{ color: 'red' }}>{props.meta.error}</div>}
    </div>
  );
};

// <ReactJson src={props} />
