function solution(message) {
    let width = 0;
  for (let i of message) {
    width += 2;
  }
  return width;
}