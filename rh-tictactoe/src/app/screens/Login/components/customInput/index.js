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

export const customInput = ({ placeholder, input, type, meta }) => (
  <div className={cx(Styles.inputContainer, { dirty: meta.dirty }, getValidityClassName(meta))}>
    <input placeholder={placeholder} className={Styles.input} {...input} type={type} />
    {meta.error && meta.touched && !meta.active && <div style={{ color: 'red' }}>{meta.error}</div>}
  </div>
);
