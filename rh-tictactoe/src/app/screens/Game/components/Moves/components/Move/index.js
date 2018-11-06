import React from 'react';
import PropTypes from 'prop-types';

class Move extends React.Component {
  jumpTo = () => this.props.onClick(this.props.step);

  render() {
    return (
      <li key={this.props.step}>
        <button onClick={this.jumpTo}>{this.props.desc}</button>
      </li>
    );
  }
}

export default Move;

Move.propTypes = {
  desc: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  step: PropTypes.number
};
