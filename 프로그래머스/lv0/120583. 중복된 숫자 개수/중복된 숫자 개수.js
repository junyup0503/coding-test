function solution(array, n) {
    let answer = 0;
    array.reduce((a, c) => {
        if(c === n) {
            answer++;
        }
    }, 0);
    return answer;
}