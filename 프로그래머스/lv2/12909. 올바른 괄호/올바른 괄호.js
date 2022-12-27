function solution(s){
    var answer = true;
    
    let count = 0;
    for(let temp of s) {
        temp === '(' ? count++ : count--;
        if(count < 0){
            return false;
        }
    }
    
    if(count !== 0){
        return false;
    }
    return answer;
}