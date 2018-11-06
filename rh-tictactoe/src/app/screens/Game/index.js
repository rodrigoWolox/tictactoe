import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreator } from '../../../../src/redux/game/actions.js';

import Game from './layout.js';

function GameContainer(props) {
  return (
    <Game
      history={props.history}
      jumpTo={props.jumpTo}
      onClick={props.handleClick}
      status={props.status}
      stepNumber={props.stepNumber}
    />
  );
}

GameContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.shape({ squares: PropTypes.oneOf(['X', 'O']) })),
  jumpTo: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  history: state.game.history,
  status: state.game.status,
  stepNumber: state.game.stepNumber
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  handleClick: i => dispatch(actionCreator.playTurn(i)),
  jumpTo: step => dispatch(actionCreator.jumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
