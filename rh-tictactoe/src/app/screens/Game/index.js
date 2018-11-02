import React from 'react';
import { connect } from 'react-redux';

import { handleClick, jumpTo } from '../../../../src/redux/game/actions.js';

import Styles from './styles.scss';
import Board from './components/Board';

class Game extends React.Component {
  render() {
    return (
      <div className={Styles.game}>
        <div className={Styles.gameBoard}>
          <Board
            squares={this.props.history[this.props.stepNumber].squares}
            onClick={this.props.handleClick}
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

const mapStateToProps = state => {
  return {
    history: state.game.history,
    xIsNext: state.game.xIsNext,
    status: state.game.status,
    stepNumber: state.game.stepNumber,
    moves: state.game.moves
  };
};

const mapDispatchToProps = dispatch => ({
  handleClick: i => dispatch(handleClick(i)),
  jumpTo: step => dispatch(jumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
