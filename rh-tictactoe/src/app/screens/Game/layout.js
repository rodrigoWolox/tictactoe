import React from 'react';
import PropTypes from 'prop-types';

import Board from './components/Board';
import Moves from './components/Moves';
import Styles from './styles.scss';

function Game({ history, jumpTo, onClick, status, stepNumber }) {
  return (
    <div className={Styles.game}>
      <div className={Styles.gameBoard}>
        <Board history={history} onClick={onClick} squares={history[stepNumber].squares} status={status} />
      </div>
      <div className={Styles.gameInfo}>
        <div>{status}</div>
        <Moves onClick={jumpTo} moves={history} />
      </div>
    </div>
  );
}

export default Game;

Game.propTypes = {
  onClick: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.shape({ squares: PropTypes.array })),
  jumpTo: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired
};
