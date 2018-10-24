import React from 'react';

import Square from './components/Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }
  square = i => <Square value={i} />;

  render() {
    const status = 'Next player: X';

    return (
      <React.Fragment>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.square(0)}
          {this.square(1)}
          {this.square(2)}
        </div>
        <div className="board-row">
          {this.square(3)}
          {this.square(4)}
          {this.square(5)}
        </div>
        <div className="board-row">
          {this.square(6)}
          {this.square(7)}
          {this.square(8)}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
