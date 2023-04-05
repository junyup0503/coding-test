function solution(numbers) {
    const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  for (let i = 0; i < numArr.length; i++) {
    const regExp = new RegExp(numArr[i], 'g');
    numbers = numbers.replace(regExp, i);
  }

  return parseInt(numbers);
}