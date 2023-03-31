function solution(s) {
    let numbers = s.split(' ');
  let sum = 0;
  let prev = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 'Z') {
      sum -= prev;
      prev = 0;
    } else {
      let num = parseInt(numbers[i]);
      sum += num;
      prev = num;
    }
  }

  return sum;
}