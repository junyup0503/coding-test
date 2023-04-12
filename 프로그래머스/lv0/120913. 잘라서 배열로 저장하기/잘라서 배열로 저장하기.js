function solution(my_str, n) {
    const strArr = [];
  for (let i = 0; i < my_str.length; i += n) {
    strArr.push(my_str.substr(i, n));
  }
  return strArr;
}