function insert(v,target) {
    let start = 0;
    let end = v.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (v[mid] <= target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
 
    return end;
}

function solution(n, k, enemy) {
    if(k>=enemy.length) return enemy.length;
    var answer = 0;
    let pass = enemy.slice(0,k);
    let total = 0;
    
    pass.sort((a,b)=>a-b);
    
    for(let i = k; i < enemy.length; i++){
        if(pass[0] < enemy[i]){
            total += pass.shift();
            pass.splice(insert(pass,enemy[i])+1, 0, enemy[i]);
        }else{
            total += enemy[i];
        }
        
        if(total > n){
            answer = i;
            break;
        } else if (total === n) {
            answer = i+1;
            break;
        }
        
        if(i === enemy.length - 1) {
            if(total <= n) {
                answer = i + 1;
                break;
            } else {
                answer = i;
                break;
            }
            
        }
    }
    return answer;
}