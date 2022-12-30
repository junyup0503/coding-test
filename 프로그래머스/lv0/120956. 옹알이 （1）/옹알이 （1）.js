function solution(babbling) {
    
    let word = ["aya","ye","woo","ma"];
    
    for(let i = 0; i < babbling.length; i++) {
        word.reduce((acc,cur)=>{
           babbling[i] = babbling[i].replace(cur, '1');
        },0)
    }
    
    
    return babbling.reduce((a, c) => { return !c.match(/[a-z]/) ? a + 1 : a }, 0);
}