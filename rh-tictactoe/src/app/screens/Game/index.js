import React from 'react';

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
    if (calculateWinner(squares) === null && squares[i] === null) {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      if (calculateWinner(squares)) {
        status = 'Winner: ' + calculateWinner(squares);
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
            onClick={i => this.handleClick(i)}
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

function calculateWinner(squares) {
  let winner = null;
  const lines = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) winner = squares[a];
  }
  return winner;
}
