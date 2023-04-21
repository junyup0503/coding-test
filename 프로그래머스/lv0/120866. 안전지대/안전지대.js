function solution(board) {
    let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function warning(x, y) {
    for (let i = 0; i < dx.length; i++) {
      if (
        x + dx[i] < board.length &&
        x + dx[i] >= 0 &&
        y + dy[i] >= 0 &&
        y + dy[i] < board.length &&
        board[x + dx[i]][y + dy[i]] !== 1
      ) {
        board[x + dx[i]][y + dy[i]] = 2;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let o = 0; o < board.length; o++) {
      if (board[i][o] === 1) {
        warning(i, o);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let o = 0; o < board.length; o++) {
      if (board[i][o] === 0) answer++;
    }
  }
  return answer;
}