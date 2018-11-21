import React from 'react';

import StatsItem from './components/StatsItem';
import Stats from './components/Stats';

class StatsContainer extends React.Component {
  matches = JSON.parse(localStorage.getItem('matches'));
  xCounter = 0;
  oCounter = 0;
  renderMatches = (match, matchId) => {
    if (match.winner === 'X') this.xCounter += 1;
    if (match.winner === 'O') this.oCounter += 1;
    return <StatsItem matchId={matchId} winner={match.winner} date={match.date} />;
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
