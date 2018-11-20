import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';

function Stats({ xCounter, oCounter, matches }) {
  return (
    <div className={Styles.stats}>
      <h1>Stats & Info</h1>
      <div className={Styles.scores}>
        X HAS WON: {xCounter} {xCounter === 1 ? 'GAME' : 'GAMES'}
      </div>
      <div className={Styles.scores}>
        O HAS WON: {oCounter} {oCounter === 1 ? 'GAME' : 'GAMES'}
      </div>
      <table>
        <thead>
          <tr>
            <th>Match Date:</th>
            <th>Match Winner:</th>
          </tr>
        </thead>
        <tbody>{matches}</tbody>
      </table>
    </div>
  );
}

export default Stats;

Stats.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.shape({ date: PropTypes.date, winner: PropTypes.string })),
  oCounter: PropTypes.number,
  xCounter: PropTypes.number
};
