function solution(n) {
    let answer = 1;

  function count(k) {
    while (k % 3 === 0 || k.toString().includes("3")) {
      k++;
    }
    return k;
  }

  for (let i = 1; i < n; i++) {
    answer++;
    answer = count(answer);
  }
  return answer;
}