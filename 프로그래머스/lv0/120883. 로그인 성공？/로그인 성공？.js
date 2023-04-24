function solution(id_pw, db) {
    let answer = "fail";

  for (let [id, pw] of db) {
    if (id_pw[0] === id) {
      if (id_pw[1] === pw) {
        answer = "login";
        break;
      } else {
        answer = "wrong pw";
      }
    }
  }

  return answer;
}