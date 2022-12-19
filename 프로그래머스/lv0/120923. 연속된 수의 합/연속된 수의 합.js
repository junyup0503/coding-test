function solution(num, total) {
    var answer = [];
    
    let firstNum = num % 2 === 1 ? (total/num) - (num-1)/2 : Math.floor((total/num)) - ((num/2) - 1);
    
    for(let i = 0; i<num; i++){
            answer.push(firstNum++);
    }
    
    return answer;
}