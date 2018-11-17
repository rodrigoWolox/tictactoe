import React from 'react';
import { NavLink } from 'react-router-dom';

import Styles from './styles.scss';

class Links extends React.Component {
  logOut = () => localStorage.removeItem('token');

  render() {
    return (
      <nav className={Styles.topbar}>
        <NavLink className={Styles.link} onClick={this.logOut} to="/">
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

export default Links;
