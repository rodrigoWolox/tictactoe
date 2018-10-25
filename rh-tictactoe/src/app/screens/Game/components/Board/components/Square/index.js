import React from 'react';

import Styles from './styles.scss';

<<<<<<< HEAD
const Square= props => {
  const a = () => props.onClick(props.position);
  return (
    <button position={props.position} className={Styles.square} onClick={a}>
      {props.value}
    </button>
  );
=======
class Square extends React.Component {
  setValue = () => this.props.onClick(this.props.position);

  render() {
    return (
      <button position={this.props.position} className={Styles.square} onClick={this.setValue}>
        {this.props.value}
      </button>
    );
  }
>>>>>>> master
}

export default Square;
