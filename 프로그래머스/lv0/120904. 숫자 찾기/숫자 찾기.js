function solution(num, k) {
      let answer = -1;
  const str = num.toString();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === k.toString()) {
      answer = 1 + i;
      break;
    }
  }
  return answer;
}