function solution(a, b) {
    while (a > b) {
    a = a - b;
  }
  let n = 2;

  while (a >= n) {
    if (a % n === 0 && b % n === 0) {
      a = a / n;
      b = b / n;
      n = 2;
    } else {
      n++;
    }
  }

  while (!(b % 2 > 0 && b % 5 > 0)) {
    if (b % 2 === 0) {
      b = b / 2;
    } else {
      b = b / 5;
    }
  }

  return b === 1 ? 1 : 2;
}