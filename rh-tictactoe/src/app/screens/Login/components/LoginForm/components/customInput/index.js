import React from 'react';
import ReactJson from 'react-json-view';

import Styles from './styles.scss';

export const customInput = props => {
  return (
    <div>
      <input placeholder={props.placeholder} className={Styles.input} {...props.input} type={props.type} />
      {props.meta.error && <div style={{ color: 'red' }}>{props.meta.error}</div>}
    </div>
  );
};

// <ReactJson src={props} />
