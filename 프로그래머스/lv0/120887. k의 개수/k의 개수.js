function solution(i, j, k) {
    let answer = 0;
  const tempK = k.toString();
  for (i; i <= j; i++) {
    for (let o of i.toString()) {
      if (o === tempK) answer++;
    }
  }
  return answer;
}