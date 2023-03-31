function solution(my_string) {
    let answer = '';
    for(let i of my_string) {
        if(!answer.includes(i)) {
            answer += i;
        }
    }
    return answer;
}