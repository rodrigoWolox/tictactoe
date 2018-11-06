import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreator } from '../../../../src/redux/game/actions.js';

import Styles from './styles.scss';
import Board from './components/Board';
import Moves from './components/Moves';

class Game extends React.Component {
  render() {
    return (
      <div className={Styles.game}>
        <div className={Styles.gameBoard}>
          <Board
            squares={this.props.history[this.props.stepNumber].squares}
            onClick={this.props.handleClick}
            status={this.props.status}
            history={this.props.history}
          />
        </div>
        <div className={Styles.gameInfo}>
          <div>{this.props.status}</div>
          <Moves onClick={this.props.jumpTo} moves={this.props.history} />
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  handleClick: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.object),
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
)(Game);
