function solution(n) {
    let answer = 0;
    let fac = 1;
    for(let i = 1; i > 0; i++) {
        if(fac * i <= n) {
            fac = fac * i;
            answer = i;
        } else {
            break;
        }
    }

  return answer;
}