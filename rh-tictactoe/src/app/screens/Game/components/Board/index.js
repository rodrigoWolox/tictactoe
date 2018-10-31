import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';
import Square from './components/Square';

class Board extends React.Component {
  renderSquare = i => <Square position={i} value={this.props.squares[i]} onClick={this.props.onClick} />;

  render() {
    return (
      <React.Fragment>
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

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O'])).isRequired,
  onClick: PropTypes.func.isRequired
};
