function solution(array) {
    let max = -Infinity;
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      index = i;
    }
  }
  return [max, index];
}