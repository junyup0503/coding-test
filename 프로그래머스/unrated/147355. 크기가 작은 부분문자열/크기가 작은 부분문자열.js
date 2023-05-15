function solution(t, p) {
  let answer = 0;
  let length = p.length;
  let temp = [];

  for (let i = 0; i < length; i++) {
    temp.push(t[i]);
  }
  if (parseInt(temp.join("")) <= parseInt(p)) {
    answer++;
  }
  for (let i = length; i < t.length; i++) {
    temp.shift();
    temp.push(t[i]);
    if (parseInt(temp.join("")) <= parseInt(p)) {
      answer++;
    }
  }

  return answer;
}