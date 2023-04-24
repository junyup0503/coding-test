function solution(numlist, n) {
numlist.sort((a, b) => {
    return Math.abs(a - n) === Math.abs(b - n)
      ? b - a
      : Math.abs(a - n) - Math.abs(b - n);
  });
  return numlist;
}