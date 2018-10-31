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
      status: 'Next player: X',
      stepNumber: 0,
      moves: ''
    };
  }

  handleClick = i => {
    let status;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    let moves = this.renderMoves(history.concat([{ squares }]));
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
        moves,
        stepNumber: history.length
      });
    }
  };

  jumpTo(step) {
    let status;
    if (utils.calculateWinner(this.state.history[step])) {
      status = 'Winner' + utils.calculateWinner(this.state.history[step]);
    } else {
      status = 'Next player: ' + (step % 2 == 0 ? 'X' : 'O');
    }
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      status
    });
  }

  renderMoves = history => {
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    return moves;
  }

  render() {
    return (
      <div className={Styles.game}>
        <div className={Styles.gameBoard}>
          <Board
            squares={this.state.history[this.state.stepNumber].squares}
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
