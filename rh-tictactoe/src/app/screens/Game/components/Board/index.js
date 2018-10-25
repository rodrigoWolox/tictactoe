import React from 'react';

import Styles from './styles.scss';
import Square from './components/Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  handleClick = i => {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares });
  };

  Square = i => <Square position={i} value={this.state.squares[i]} onClick={this.handleClick} />;

  render() {
    const status = 'Next player: X';

    return (
      <React.Fragment>
        <div className={Styles.status}>{status}</div>
        <div className={Styles.boardRow}>
          {this.Square(0)}
          {this.Square(1)}
          {this.Square(2)}
        </div>
        <div className={Styles.boardRow}>
          {this.Square(3)}
          {this.Square(4)}
          {this.Square(5)}
        </div>
        <div className={Styles.boardRow}>
          {this.Square(6)}
          {this.Square(7)}
          {this.Square(8)}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
