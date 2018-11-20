import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { actionCreator } from '../../../../src/redux/topbar/actions.js';

import Styles from './styles.scss';

class Links extends React.Component {
  render() {
    return (
      <nav className={Styles.topbar}>
        <NavLink className={Styles.link} onClick={this.props.logOut} to="/login">
          Log Out
        </NavLink>
        <NavLink className={Styles.link} to="/app/game">
          TicTacToe
        </NavLink>
        <NavLink className={Styles.link} to="/app/stats">
          Stats
        </NavLink>
      </nav>
    );
  }
}

Links.propTypes = {
  logOut: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actionCreator.logOut)
});

export default connect(
  null,
  mapDispatchToProps
)(Links);
