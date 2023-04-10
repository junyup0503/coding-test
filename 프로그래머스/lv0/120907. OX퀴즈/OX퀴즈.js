function solution(quiz) {
    const answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const [x, op, y, equal, z] = quiz[i].split(" ");
    const result = op === "+" ? Number(x) + Number(y) : Number(x) - Number(y);
    answer.push(result === Number(z) ? "O" : "X");
  }
  return answer;
}