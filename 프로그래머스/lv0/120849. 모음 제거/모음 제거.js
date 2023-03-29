function solution(my_string) {
    const vowels = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!vowels.includes(my_string[i])) {
      result += my_string[i];
    }
  }

  return result;
}