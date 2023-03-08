function solution(n) {
    let answer = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            let j = n / i;
            if (i != j) {
                answer += 2;
            } else {
                answer += 1;
            }
        }
    }
    return answer;
}