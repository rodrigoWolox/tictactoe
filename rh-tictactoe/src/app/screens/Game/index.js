import React from 'react';
import { connect } from 'react-redux';

import * as utils from '../utils';

import Styles from './styles.scss';
import Board from './components/Board';

class Game extends React.Component {
  handleClick = i => {
    let status;
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    let moves = this.renderMoves(history.concat([{ squares }]));
    if (utils.calculateWinner(squares) === null && squares[i] === null) {
      squares[i] = this.props.xIsNext ? 'X' : 'O';
      if (utils.calculateWinner(squares)) {
        status = 'Winner: ' + utils.calculateWinner(squares);
      } else {
        status = 'Next player: ' + (!this.props.xIsNext ? 'X' : 'O');
      }
      /*this.setState({
        history: history.concat([{ squares }]),
        xIsNext: !this.state.xIsNext,
        status,
        moves,
        stepNumber: history.length
      });*/
    }
  };

  jumpTo(step) {
    let status;
    if (utils.calculateWinner(this.props.history[step])) {
      status = 'Winner' + utils.calculateWinner(this.props.history[step]);
    } else {
      status = 'Next player: ' + (step % 2 == 0 ? 'X' : 'O');
    }
    /*this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      status
    });*/
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
            squares={this.props.history[this.props.stepNumber].squares}
            onClick={this.handleClick}
            status={this.props.status}
          />
        </div>
        <div className={Styles.gameInfo}>
          <div>{this.props.status}</div>
          <ol>{this.props.moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  xIsNext: state.xIsNext,
  status: state.status,
  stepNumber: state.stepNumber,
  moves: state.moves
});

export default connect(mapStateToProps)(Game);
