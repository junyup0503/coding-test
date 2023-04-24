function solution(score) {
    let answer = score.map((num) => (num[0] + num[1]) / 2);
  const tempArr = [...answer].sort((a, b) => b - a);
  answer = answer.map((n) => tempArr.indexOf(n) + 1);

  return answer;
}