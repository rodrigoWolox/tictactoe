import React from 'react';
import { NavLink } from 'react-router-dom';

import Styles from './styles.scss';

const Links = () => (
  <nav className={Styles.topbar}>
    <NavLink className={Styles.link} to="/">
      Log Out
    </NavLink>
    <NavLink className={Styles.link} to="/custom">
      Stats
    </NavLink>
  </nav>
);

export default Links;
