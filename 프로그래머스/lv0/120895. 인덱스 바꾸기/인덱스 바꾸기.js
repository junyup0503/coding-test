function solution(my_string, num1, num2) {
    let chars = my_string.split('');
  [chars[num1], chars[num2]] = [chars[num2], chars[num1]];
  return chars.join('');
}