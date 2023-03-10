function solution(rsp) {
    let answer = "";
    for (let i of rsp) {
        answer += i === '2' ? '0' : i === '5' ? '2' : '5';
    }
    return answer;
}