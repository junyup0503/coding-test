function solution(keyinput, board) {
    const height = board[1];
  const width = board[0];
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case 'up':
        if (y + 1 <= Math.floor(height/2)) y++;
        break;
      case 'down':
        if (y - 1 > Math.floor(-height/2)) y--;
        break;
      case 'left':
        if (x - 1 > Math.floor(-width/2)) x--;
        break;
      case 'right':
        if (x + 1 <= Math.floor(width/2)) x++;
        break;
      default:
        break;
    }
  }
  
  return [x, y];
}