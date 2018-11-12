import React from 'react';
import cx from 'classnames';

import Styles from './styles.scss';

const getValidityClassName = meta => {
  if (meta.touched && meta.invalid) {
    return Styles.invalid;
  }
  if (meta.touched && meta.valid) {
    return Styles.valid;
  }
};

export const customInput = props => {
  return (
    <div className={cx(Styles.inputContainer, { dirty: props.meta.dirty }, getValidityClassName(props.meta))}>
      <input placeholder={props.placeholder} className={Styles.input} {...props.input} type={props.type} />
      {props.meta.error &&
        props.meta.touched &&
        !props.meta.active && <div style={{ color: 'red' }}>{props.meta.error}</div>}
    </div>
  );
};
