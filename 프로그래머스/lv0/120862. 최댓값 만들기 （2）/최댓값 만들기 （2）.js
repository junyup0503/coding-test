function solution(numbers) {
    let answer = Number.MIN_SAFE_INTEGER;
    let ch = Array.from({length: numbers.length + 1}, () => 0);
    
    function DFS(L, sum) {
        if(L === 2) return answer = Math.max(answer, sum);
        else {
            for(let i = 0; i < numbers.length; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1;
                    DFS(L+1, sum * numbers[i]);
                    ch[i] = 0;    
                }
            }
        }
    }
    
    DFS(0, 1);
    
    return answer;
}