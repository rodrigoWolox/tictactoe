import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreator } from '../../../../src/redux/game/actions.js';
import { squarePropType } from '../../../../src/redux/game/reducer.js';

import Game from './layout.js';

class GameContainer extends React.Component {
  handleClick = i => {
    const { stepNumber, history, xIsNext } = this.props;
    const values = { stepNumber, xIsNext, history };
    this.props.dispatch(actionCreator.playTurn(values, i));
  };

  jumpTo = step => {
    const { history, xIsNext } = this.props;
    const value = { history, xIsNext };
    this.props.dispatch(actionCreator.jumpTo(value, step));
  };

  render() {
    return (
      <Game
        history={this.props.history}
        jumpTo={this.jumpTo}
        onClick={this.handleClick}
        status={this.props.status}
        stepNumber={this.props.stepNumber}
        logOut={this.props.logOut}
      />
    );
  }
}

GameContainer.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({ squares: squarePropType })).isRequired,
  logOut: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  history: state.game.history,
  status: state.game.status,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actionCreator.logOut)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
