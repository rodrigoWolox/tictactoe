import React from 'react';

import Styles from './styles.scss';
import Square from './components/Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      status: 'Next player: X'
    };
  }

  handleClick = i => {
    const squares = this.state.squares.slice();
    let status;
    if (calculateWinner(squares) === null && squares[i] === null) {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      if (calculateWinner(squares)) {
        status = 'Winner: ' + calculateWinner(squares);
      } else {
        status = 'Next player: ' + (!this.state.xIsNext ? 'X' : 'O');
      }
      this.setState({
        squares,
        xIsNext: !this.state.xIsNext,
        status
      });
    }
  };

  renderSquare = i => <Square position={i} value={this.state.squares[i]} onClick={this.handleClick} />;

  render() {
    return (
      <React.Fragment>
        <div className={Styles.status}>{this.state.status}</div>
        <div className={Styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={Styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={Styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;

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
