import React from 'react';

import Styles from './styles.scss';

const Square = ({ onClick, value, position }) => {
  const handleClick = () => onClick(position);
  return (
    <button position={position} className={Styles.square} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
