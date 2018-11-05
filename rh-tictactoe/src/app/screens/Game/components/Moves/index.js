import React from 'react';
import PropTypes from 'prop-types';

import Move from './components/Move';

class Moves extends React.Component {
  renderMove = (move, moveNumber) => {
    const desc = moveNumber ? `Go to move # ${moveNumber}` : 'Go to game start';
    return <Move step={moveNumber} key={moveNumber} onClick={this.props.onClick} desc={desc} />;
  };

  render() {
    return <ol>{this.props.moves.map(this.renderMove)}</ol>;
  }
}

export default Moves;

Moves.propTypes = {
  onClick: PropTypes.func.isRequired
};
