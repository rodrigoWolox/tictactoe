import React from 'react';
import PropTypes from 'prop-types';

function Stats({ xCounter, oCounter, matches }) {
  return (
    <React.Fragment>
      <h1>Stats & Info</h1>
      <span>
        X HAS WON: {xCounter} {xCounter === 1 ? 'GAME' : 'GAMES'}
      </span>
      <span>
        O HAS WON: {oCounter} {oCounter === 1 ? 'GAME' : 'GAMES'}
      </span>
      <ol>{matches}</ol>
    </React.Fragment>
  );
}

export default Stats;

Stats.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.shape({ date: PropTypes.date, winner: PropTypes.string })),
  oCounter: PropTypes.number,
  xCounter: PropTypes.number
};
