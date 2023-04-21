function solution(spell, dic) {
    let answer;

  for (let i = 0; i < dic.length; i++) {
    answer = 1;
    let ch = Array.from({ length: spell.length }, () => 0);
    let used = true;
    for (let o of dic[i]) {
      if (spell.indexOf(o) >= 0) {
        ch[spell.indexOf(o)] = ch[spell.indexOf(o)] + 1;
      }
    }
    for (let i of ch) {
      if (i !== 1) answer = 2;
    }
    if (answer === 1) break;
  }

  return answer;
}