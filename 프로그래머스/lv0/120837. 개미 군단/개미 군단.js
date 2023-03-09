function solution(hp) {
    let answer = 0;
    let tempHp = hp % 5;
    answer += Math.floor(hp / 5);
    answer += Math.floor(tempHp / 3);    
    
    tempHp = tempHp % 3;
    
    answer += tempHp
    return answer;
}