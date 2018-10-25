import React from 'react';

import Styles from './styles.scss';

const Square= props => {
  const a = () => props.onClick(props.position);
  return (
    <button position={props.position} className={Styles.square} onClick={a}>
      {props.value}
    </button>
  );
}

export default Square;
