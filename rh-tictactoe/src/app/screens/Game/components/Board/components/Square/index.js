import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  setValue = () => this.setState({ value: 'X' });

  render() {
    return (
      <button 
        className="square" 
        onClick={ this.setValue }
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
