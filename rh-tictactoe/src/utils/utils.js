export function calculateWinner(squares) {
  let winner = false;
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) winner = squares[a];
  }
  return winner;
}

function addMatch(winner) {
  const date = new Date();
  const matches = JSON.parse(localStorage.getItem('matches'));
  const newMatch = { date: date.toLocaleDateString(), winner };
  matches.push(newMatch);
  localStorage.setItem('matches', JSON.stringify(matches));
}

export function makeMove(state, i) {
  let status;
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (!calculateWinner(squares) && squares[i] === null) {
    squares[i] = state.xIsNext ? 'X' : 'O';
    if (calculateWinner(squares)) {
      addMatch(calculateWinner(squares));
      status = `Winner: ${calculateWinner(squares)}`;
    } else {
      status = `Next player: ${!state.xIsNext ? 'X' : 'O'}`;
    }
    return {
      history: history.concat([{ squares }]),
      xIsNext: !state.xIsNext,
      status,
      stepNumber: history.length
    };
  }
  return state;
}

export function jumpTo(state, step) {
  let status;
  if (calculateWinner(state.history[step])) {
    status = `Winner ${calculateWinner(state.history[step])}`;
  } else {
    status = `Next player: ${step % 2 === 0 ? 'X' : 'O'}`;
  }
  return {
    ...state,
    stepNumber: step,
    xIsNext: step % 2 === 0,
    status
  };
}
