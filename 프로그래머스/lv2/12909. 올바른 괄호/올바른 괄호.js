function solution(s){
    var answer = false;
    
    let arr = Array.from(s);
    
    if(s[0]==='(' && s[s.length-1]===')'){
        let count = 0;
        for(let index = 0; index < arr.length; index++){
            if(arr[index]==='\('){
                count++;
            }else if(arr[index]==='\)'){
                count--;
            }
            if(count<0){
                break;
            }
        }
        
        if(count===0){
            answer=true;
        }
    }
        
    return answer;
}