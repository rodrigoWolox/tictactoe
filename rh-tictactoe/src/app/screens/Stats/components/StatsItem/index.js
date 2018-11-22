import React from 'react';
import PropTypes from 'prop-types';

const StatsItem = ({ matchId, date, winner }) => (
  <tr key={matchId}>
    <td>
      Match {matchId + 1}: {date}
    </td>
    <td>{winner}</td>
  </tr>
);

StatsItem.propTypes = {
  matchId: PropTypes.number,
  date: PropTypes.date,
  winner: PropTypes.string
};

export default StatsItem;
