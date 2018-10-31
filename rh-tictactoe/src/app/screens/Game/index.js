import React from 'react';

import * as utils from '../utils';

import Styles from './styles.scss';
import Board from './components/Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      status: 'Next player: X'
    };
  }

  handleClick = i => {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });
    let status;
    if (utils.calculateWinner(squares) === null && squares[i] === null) {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      if (utils.calculateWinner(squares)) {
        status = 'Winner: ' + utils.calculateWinner(squares);
      } else {
        status = 'Next player: ' + (!this.state.xIsNext ? 'X' : 'O');
      }
      this.setState({
        history: history.concat([{ squares }]),
        xIsNext: !this.state.xIsNext,
        status,
        moves
      });
    }
  };

  render() {
    return (
      <div className={Styles.game}>
        <div className={Styles.gameBoard}>
          <Board
            squares={this.state.history[this.state.history.length - 1].squares}
            onClick={this.handleClick}
            status={this.state.status}
          />
        </div>
        <div className={Styles.gameInfo}>
          <div>{this.state.status}</div>
          <ol>{this.state.moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
