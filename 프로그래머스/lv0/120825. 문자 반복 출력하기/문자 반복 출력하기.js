function solution(my_string, n) {
    const arr = [...my_string];
    
    let answer = arr.reduce((cur, nex)=>{
    for(let o = 0; o < n; o++){
        cur = cur + nex;
    }
    return cur;
    },'');
    
    return answer;
}