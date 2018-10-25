import React from 'react';

import Styles from './styles.scss';

function Square(props) {
  return (
    <button position={props.position} className={Styles.square} onClick={() => props.onClick(props.position)} >
      {props.value}
    </button>
  );
}

export default Square;
