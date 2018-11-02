export function handleClick(i) {
  return {
    type: 'HANDLE_CLICK',
    squarePosition: i
  };
}

export function jumpTo(step) {
  return {
    type: 'JUMP_TO',
    stepNumber: step
  };
}
