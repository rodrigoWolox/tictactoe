import React from 'react';

import Stats from './layout.js';

class StatsContainer extends React.Component {
  matches = JSON.parse(localStorage.getItem('matches'));
  xCounter = 0;
  oCounter = 0;
  renderMatches = (match, matchId) => {
    if (match.winner === 'X') this.xCounter += 1;
    if (match.winner === 'O') this.oCounter += 1;
    return (
      <tr key={matchId}>
        <td>
          Match {matchId + 1}: {match.date}
        </td>
        <td>{match.winner}</td>
      </tr>
    );
  };

  render() {
    return (
      <Stats
        matches={this.matches.map(this.renderMatches)}
        xCounter={this.xCounter}
        oCounter={this.oCounter}
      />
    );
  }
}

export default StatsContainer;
