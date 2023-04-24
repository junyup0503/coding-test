function solution(before, after) {
    let answer = 1;
  before = before.split("").sort();
  after = after.split("").sort();

  console.log(before, after);
  for (let i = 0; i < before.length; i++) {
    if (before[i] !== after[i]) answer = 0;
  }

  return answer;
}