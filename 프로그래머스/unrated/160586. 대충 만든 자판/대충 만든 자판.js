function solution(keymap, targets) {
    let answer = Array.from({ length: targets.length }, () => 0);
  const map = new Map();

  for (let i = 0; i < targets.length; i++) {
    for (let o of targets[i]) {
      // console.log(o);
      if (map.get(o)) {
        answer[i] += map.get(o);
      } else {
        let flag = 0;
        for (let u of keymap) {
          if (u.indexOf(o) > -1) {
            flag = 1;
            if (map.get(o) && map.get(o) > u.indexOf(o) + 1) {
              // console.log(u.indexOf(o) + 1);
              answer[i] -= map.get(o);
              map.set(o, u.indexOf(o) + 1);
              answer[i] += u.indexOf(o) + 1;
            } else if (!map.get(o)) {
              // console.log(u.indexOf(o) + 1);
              map.set(o, u.indexOf(o) + 1);
              answer[i] += u.indexOf(o) + 1;
            }
          }
        }

        if (flag === 0) {
          answer[i] = -1;
          break;
        }
      }
    }
  }
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === 0) {
      answer[i] = -1;
    }
  }
  return answer;
}