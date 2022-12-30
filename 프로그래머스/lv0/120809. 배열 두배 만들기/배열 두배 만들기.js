function solution(numbers) {
    numbers.reduce((acc,cur,i,arr)=>{
        return arr[i]=cur*2;
    }, 0);
    return numbers; 
}