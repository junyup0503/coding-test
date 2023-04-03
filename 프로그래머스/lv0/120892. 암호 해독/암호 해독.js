function solution(cipher, code) {
    let message = '';

  for (let i = code - 1; i < cipher.length; i += code) {
    message += cipher[i];
  }

  return message;
}