function solution(sides) {
    const [a, b] = sides.sort((a,b) => a-b);
    let count = 0;
    
    for (let i = 1; i < Math.max(a + b); i++) {
        if (a + b > i && a + i > b && b + i > a) {
          count++;
        }
    }
    
    return count;
}