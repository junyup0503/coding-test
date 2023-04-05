function solution(s) {
    const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }

  let uniqueChars = '';
  for (let char in count) {
    if (count[char] === 1) {
      uniqueChars += char;
    }
  }

  return uniqueChars.split('').sort().join('');
}