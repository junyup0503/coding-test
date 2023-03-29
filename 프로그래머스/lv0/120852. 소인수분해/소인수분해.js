function solution(n) {
    const primeFactors = [];

  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
        if(!primeFactors.includes(i)){
         primeFactors.push(i);
        }
      n /= i;
    }
  }

  if (n > 1) {
    primeFactors.push(n);
  }

  return primeFactors;
}