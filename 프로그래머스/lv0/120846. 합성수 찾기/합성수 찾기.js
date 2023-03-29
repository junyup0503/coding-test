function solution(n) {
    let answer = 0;
    
    for(let i = 4; i <= n; i++) {
        let tempCount = 0;
        for(let o = 1; o <= i; o++){
            if(i % o === 0){
                tempCount++;
            }
        }
        if(tempCount > 2) answer++;
    }
    return answer;
}