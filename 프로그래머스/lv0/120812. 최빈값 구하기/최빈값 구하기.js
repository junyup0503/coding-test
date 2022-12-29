function solution(array) {
    var answer = 0;
    
    let map = {};
    for(let value of array) {
        if(!map[value]) {
            map[value] = 0;
        }
        map[value] += 1;
    }
    
    let max = 0;
    
    for(let key of Object.keys(map)) {
        let count = 0;
        if(max < map[key]) {
            max = map[key]
            answer = parseInt(key);
            count = 1;
        }
        if(max === map[key] && count === 0) {
            answer = -1;
        }
        
        
        
    }
    
    
    
    return answer;
}