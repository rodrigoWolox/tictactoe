import React from 'react';

import Styles from './styles.scss';
import Board from './components/Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true
    };
  }

  render() {
    return (
      <div className={Styles.game}>
        <div className={Styles.gameBoard}>
          <Board />
        </div>
        <div className={Styles.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
