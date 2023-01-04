function solution(slice, n) {
    var answer = 0;
    while(true) {
        if(slice * answer / n >= 1) {
            break;
        }
        answer++;
    }
    return answer;
}