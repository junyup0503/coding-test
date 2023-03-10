function solution(balls, share) {
   let numerator = balls;
  let denominator = share;

  for (let i = 1; i < share; i++) {
    numerator *= balls - i;
    denominator *= share - i;
  }
  return numerator / denominator;
}