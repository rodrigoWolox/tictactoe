import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';

class Square extends React.Component {
  setValue = () => this.props.onClick(this.props.position);

  render() {
    return (
      <button position={this.props.position} className={Styles.square} onClick={this.setValue} >
        {this.props.value}
      </button>
    );
  }
}

export default Square;

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.oneOf(['X', 'O']),
  position: PropTypes.number
};

Square.defaultProps = {
  value: null
};
