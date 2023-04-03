function solution(array, n) {
  let closest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (Math.abs(array[i] - n) <= Math.abs(closest - n)) {
        if(Math.abs(array[i] - n) === Math.abs(closest - n)){
            closest = array[i] < closest ? array[i] : closest;
        } else {
            closest = array[i];      
        }
      
    }
  }

  return closest;
}