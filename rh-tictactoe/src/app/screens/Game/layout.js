import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { squarePropType } from '../../../../src/redux/game/reducer.js';

import Board from './components/Board';
import Moves from './components/Moves';
import Styles from './styles.scss';

function Game({ history, jumpTo, onClick, status, stepNumber, logOut }) {
  return (
    <div className={Styles.game}>
      <div className={Styles.gameBoard}>
        <Board history={history} onClick={onClick} squares={history[stepNumber].squares} status={status} />
      </div>
      <div className={Styles.gameInfo}>
        <div>{status}</div>
        <Moves onClick={jumpTo} moves={history} />
      </div>
      <Link onClick={logOut} to="/">
        Log Out
      </Link>
    </div>
  );
}

export default Game;

Game.propTypes = {
  onClick: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.shape({ squares: squarePropType })),
  jumpTo: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired
};
