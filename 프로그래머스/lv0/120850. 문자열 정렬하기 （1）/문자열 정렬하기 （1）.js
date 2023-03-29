function solution(my_string) {
    const numbers = [];

  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i]) && my_string[i] !== ' ') {
      numbers.push(Number(my_string[i]));
    }
  }

  return numbers.sort((a, b) => a - b);
}