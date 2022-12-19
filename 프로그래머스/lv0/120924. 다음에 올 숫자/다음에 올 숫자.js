function solution(common) {
    let answer = 0;
    const ruleHint1 = common[1] - common[0];
    const ruleHint2 = common[2] - common[1];
    
    if(ruleHint1 === ruleHint2) {
        answer = common[common.length-1] + ruleHint1;
    } else {
        answer = common[common.length-1] * (ruleHint2/ruleHint1);
    }
    
    return answer;
}