function solution(dots) {
    const xList = dots.map(dot => dot[0]);
  const yList = dots.map(dot => dot[1]);
  const x = Math.max(...xList) - Math.min(...xList);
  const y = Math.max(...yList) - Math.min(...yList);
  return x * y;
}