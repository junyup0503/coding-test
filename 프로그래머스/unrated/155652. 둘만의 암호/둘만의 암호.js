function solution(s, skip, index) {
  let answer = '';
  let ahl = 'abcdefghijklmnopqrstuvwxyz';

  for (let i of skip) {
    ahl = ahl.replace(i, '');
  }

  for (let i of s) {
    let tempI = ahl.indexOf(i) + index;
    if (tempI >= ahl.length) tempI = tempI % ahl.length;
    answer += ahl[tempI];
  }
  return answer;
}