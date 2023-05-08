function solution(n, m, section) {
    let answer = 0;

  for (let i = 1; i <= n; i) {
    if (section.indexOf(i) > -1) {
      answer++;
      i = i + m;
    } else {
      i++;
    }
  }
     
    return answer;
}